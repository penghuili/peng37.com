const fs = require('fs');
const path = require('path');
const { parseMarkdownContent, parseMarkdownFile } = require('./utils/markdown');
const { scanAllSrcFiles } = require('./utils/files');

const buildPath = 'build';
if (fs.existsSync(buildPath)) {
  fs.rmSync(buildPath, { recursive: true });
}
fs.mkdirSync(buildPath);

const { markdownUrls, assetUrls } = scanAllSrcFiles();

const parsedMarkdowns = markdownUrls.map(url => {
  const { meta, html } = parseMarkdownFile(url);

  return {
    title: meta.title,
    date: meta.date,
    url,
    html,
  };
});

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

// generate blog index.html
const blogIndexMD = `---
title: Blog
backLabel: <
backUrl: /
---

Posts:

${parsedMarkdowns
  .filter(post => post.url.includes('/blog/'))
  .sort((a, b) => (b.date > a.date ? 1 : -1))
  .map(post => {
    const parts = post.url.split('/');
    parts.pop();
    const name = parts.pop();
    return `- [${post.title}](/blog/${name}) - ${post.date}`;
  })
  .join('\n')}
`;
const parsedBlogIndex = parseMarkdownContent(blogIndexMD);
fs.writeFileSync(`build/blog/index.html`, parsedBlogIndex.html);
