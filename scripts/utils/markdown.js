const fs = require('fs');
const { marked } = require('marked');
const matter = require('gray-matter');
const heEncode = require('he').encode;
const { format } = require('date-fns');
const minifyHtml = require('html-minifier').minify;

const { wrapHtml } = require('./components');

// Open link in new tab
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return href.startsWith('http') ? link.replace("<a", `<a target="_blank" rel="noopener noreferrer" `) : link;
};
marked.setOptions({ renderer });

function parseMarkdownContent(markdownContent) {
  const parsedContent = matter(markdownContent);
  const htmlContent = marked(parsedContent.content);

  const meta = {};
  Object.keys(parsedContent.data).forEach(key => {
    meta[key] =
      key === 'date'
        ? format(new Date(parsedContent.data[key]), 'yyyy-MM-dd')
        : heEncode(parsedContent.data[key]);
  });

  const html = wrapHtml(htmlContent, meta);
  const minifiedHtml = minifyHtml(html, {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    removeComments: true,
  });

  return { meta, html: minifiedHtml };
}

function parseMarkdownFile(filePath) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');

  return parseMarkdownContent(rawContent);
}

module.exports = {
  parseMarkdownContent,
  parseMarkdownFile,
};
