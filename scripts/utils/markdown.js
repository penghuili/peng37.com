const fs = require('fs');
const { marked } = require('marked');
const matter = require('gray-matter');
const heEncode = require('he').encode;
const { format } = require('date-fns');
const minifyHtml = require('html-minifier').minify;

const { wrapHtml } = require('./components');

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
