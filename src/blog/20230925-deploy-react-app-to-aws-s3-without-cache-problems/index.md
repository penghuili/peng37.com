---
title: How to deploy React app to AWS S3 without cache problems?
date: 2023-09-25
backLabel: <
backUrl: /blog
---

Until now I am always deploying React app to AWS S3 in 3 steps:

1. Build the app:

```sh
react-scripts build
```

2. Upload the build folder to S3:

```sh
aws s3 sync build $S3_URL --delete --cache-control max-age=31536000,public
```

The `--delete` flag makes sure everything in AWS is deleted, so I don't keep all files from all previous builds in S3.

And the `--cache-control` flag makes sure all files are cached by CDN / browser for 1 year.

3. Change the cache control of index.html to 0:

```sh
aws s3 cp $S3_URL/index.html $S3_URL/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html
```

This changes the `--cache-control` of `index.html` to 0, so it's not cached by CDN / browser. Because all js / css files are versioned with hash, we don't need to cache them, but `index.html` is not versioned, it's always `index.html`.

But there is an edge case: Before step 3, if someone visits the website, he / she will get the `index.html` with the `--cache-control max-age=31536000,public` header, so the `index.html` will be cached by CDN / browser for 1 year for that user. Step 3 won't help, `index.html` is already cached.

Then next time when I release a new version, users will get the old `index.html` from CDN / browser, but the old js / css files are already deleted by step 2. These users see blank page.

I can invalidate all files in cloudfront, but there will still be a short time this will happen.

In the end I implemented (with the help of ChatGPT) a nodejs script to make sure there is no down time:

1. Create a versioned folder (with timestamp) that will hold everything except `index.html`:

```js
const folder = new Date()
  .toISOString()
  .replace(/[^0-9]/g, '')
  .slice(0, 14);
const buildDir = path.join(__dirname, '..', 'build');
const assetsDir = path.join(buildDir, folder);

// Create assets directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir);
}
```

2. Move all files except `index.html` to the versioned folder:

```js
fs.readdirSync(buildDir).forEach(item => {
  const itemPath = path.join(buildDir, item);

  if (item !== 'index.html' && item !== folder) {
    const destinationPath = path.join(assetsDir, item);

    fs.renameSync(itemPath, destinationPath);
  }
});
```

3. Update the `index.html` to point to the versioned folder:

```js
let content = fs.readFileSync(indexPath, 'utf-8');

// Update CSS and JS paths.
content = content.replace(/(href|src)="(?!http)([^"]+)"/g, `$1="/${folder}$2"`);

// Save updated content back to index.html
fs.writeFileSync(indexPath, content);
```

4. Upload the versioned folder to S3 (with cache header for 1 year):

```js
execSync(
  `aws s3 sync build/${folder} ${process.env.S3_URL}/${folder} --cache-control max-age=31536000,public`
);
```

5. Upload the `index.html` to S3 (with cache header for 0):

```js
execSync(
  `aws s3 cp build/index.html ${process.env.S3_URL}/index.html --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read`
);
```

6. Remove old versions (except the last 3) from S3:

```js
const command = `aws s3 ls ${process.env.S3_URL} --recursive | awk '{print $4}' | grep '/' | cut -d/ -f1 | uniq`;
const result = execSync(command).toString();

// Split the result into an array, filter out 'index.html' and other non-versioned entries, and then sort
const versions = result
  .split('\n')
  .filter(v => v && v !== 'index.html' && /^\d{14}$/.test(v))
  .sort();
// If there are more than 10 versions, remove the oldest ones
if (versions.length > 3) {
  const toDelete = versions.slice(0, versions.length - 3); // Keep the last 10

  toDelete.forEach(version => {
    console.log(`Deleting version: ${version}`);
    execSync(`aws s3 rm ${process.env.S3_URL}/${version} --recursive`);
  });
  console.log('Deleting old versions completed.');
} else {
  console.log('No old versions to delete.');
}
```

Now there is absolutely no down time, and I always keep 3 versions of the cache files :)

---

Hope this helps, and check the encryption [products](https://peng37.com/) I am building.
