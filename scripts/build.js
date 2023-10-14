const fs = require('fs');
const path = require('path');
const { parseMarkdownFile } = require('./utils/markdown');
const { scanAllSrcFiles } = require('./utils/files');
const builtBlogs = require('./built-blogs.json');

const buildPath = 'build';
if (fs.existsSync(buildPath)) {
  fs.rmSync(buildPath, { recursive: true });
}
fs.mkdirSync(buildPath);

const { markdownUrls, assetUrls } = scanAllSrcFiles();

const parsedMarkdowns = markdownUrls
  .filter(url => !builtBlogs[url])
  .map(url => {
    if (url.includes('/blog/') && url !== 'src/blog/index.md') {
      builtBlogs[url] = true;
    }
    const { meta, html } = parseMarkdownFile(url);

    return {
      title: meta.title,
      date: meta.date,
      url,
      html,
    };
  });

fs.writeFileSync('./scripts/built-blogs.json', JSON.stringify(builtBlogs, null, 2));

// create html files
parsedMarkdowns.forEach(markdown => {
  const parts = markdown.url.split('/');
  const fileName = parts.pop();
  const folders = parts.slice(1).join('/');
  const indexPath = `build/${folders ? `${folders}/` : ''}${
    fileName === '404.md' ? '404.html' : 'index.html'
  }`;
  fs.writeFileSync(indexPath, markdown.html);
});

// copy assets
const assetsPath = `${buildPath}/assets`;
assetUrls.forEach(url => {
  const imagePath = `${assetsPath}/${path.basename(url)}`;
  fs.copyFileSync(url, imagePath);
});
