const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const timestamp = new Date()
  .toISOString()
  .replace(/[^0-9]/g, '')
  .slice(0, 14);

updateOrAddEnvVariable('.env', 'TIMESTAMP', timestamp);

console.log('Building the app...');
execSync(`npm run build`);
console.log('Build app completed.');

deployTo('s3://peng37.com');

function deployTo(bucket) {
  console.log(`Uploading assets to ${bucket}...`);
  execSync(
    `aws s3 sync out/_next ${bucket}/${timestamp}/_next --cache-control max-age=31536000,public`
  );
  console.log('Upload assets to S3 completed.');

  console.log('Uploading the pages...');
  const directoryPath = path.join(__dirname, '../out');
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name !== '_next' && entry.name !== 'assets') {
      if (entry.isDirectory()) {
        execSync(
          `aws s3 sync out/${entry.name} ${bucket}/${entry.name} --cache-control max-age=0,no-store`
        );
      } else {
        execSync(
          `aws s3 cp out/${entry.name} ${bucket}/${entry.name} --cache-control max-age=0,no-store`
        );
      }
    }
  }
  console.log('Upload pages completed.');

  console.log('Deleting old versions ...');
  const command = `aws s3 ls ${bucket} --recursive | awk '{print $4}' | grep '/' | cut -d/ -f1 | uniq`;
  const result = execSync(command).toString();
  const versions = result
    .split('\n')
    .filter(v => v && /^\d{14}$/.test(v))
    .sort();
  // If there are more than 10 versions, remove the oldest ones
  if (versions.length > 10) {
    const toDelete = versions.slice(0, versions.length - 10); // Keep the last 10

    toDelete.forEach(version => {
      console.log(`Deleting version: ${version}`);
      execSync(`aws s3 rm ${bucket}/${version} --recursive`);
    });
    console.log('Deleting old versions completed.');
  } else {
    console.log('No old versions to delete.');
  }
}

function updateOrAddEnvVariable(envFile, key, value) {
  const envPath = path.join(__dirname, '..', envFile); // Adjust the path to your .env file
  let envContents = fs.readFileSync(envPath, 'utf-8');
  let lines = envContents.split('\n');

  let found = false;
  lines = lines.map(line => {
    const [currentKey] = line.split('=');
    if (currentKey === key) {
      found = true;
      return `${key}=${value}`;
    }
    return line;
  });

  if (!found) {
    lines.push(`${key}=${value}`);
  }

  // Filter out any empty lines
  lines = lines.filter(line => line.trim() !== '');

  fs.writeFileSync(envPath, lines.join('\n'));
}
