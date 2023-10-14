const fs = require('fs');
const builtBlogs = require('../built-blogs.json');

function scanFolder(fullPath, markdownUrls, assetUrls) {
  const stats = fs.statSync(fullPath);

  if (!stats.isDirectory()) {
    if (fullPath.endsWith('.md')) {
      markdownUrls.push(fullPath);
    } else {
      assetUrls.push(fullPath);
    }

    return;
  }

  if (stats.isDirectory()) {
    if (fullPath !== 'src') {
      if (!builtBlogs[`${fullPath}/index.md`]) {
        const buildPath = `${fullPath.replace('src', 'build')}`;
        fs.mkdirSync(buildPath);
      }
    }

    fs.readdirSync(fullPath).forEach(file => {
      const newPath = `${fullPath}/${file}`;
      scanFolder(newPath, markdownUrls, assetUrls);
    });
  }
}

function scanAllSrcFiles() {
  const srcPath = 'src';
  const markdownUrls = [];
  const assetUrls = [];

  scanFolder(srcPath, markdownUrls, assetUrls);

  return { markdownUrls, assetUrls };
}

module.exports = { scanAllSrcFiles };
