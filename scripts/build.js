const fs = require("fs");
const { marked } = require("marked");
const matter = require("gray-matter");
const minifyHtml = require("html-minifier").minify;
const heEncode = require("he").encode;
const path = require("path");
const { format } = require("date-fns");

const buildPath = "build";
if (fs.existsSync(buildPath)) {
  fs.rmSync(buildPath, { recursive: true });
}
fs.mkdirSync(buildPath);

function parseMarkdownContent(markdownContent) {
  // Extract front matter using gray-matter
  const parsedContent = matter(markdownContent);

  // Convert markdown to HTML
  const htmlContent = marked(parsedContent.content);

  const frontMatter = {};
  Object.keys(parsedContent.data).forEach((key) => {
    frontMatter[key] =
      key === "date"
        ? format(new Date(parsedContent.data[key]), "yyyy-MM-dd")
        : heEncode(parsedContent.data[key]);
  });

  return {
    frontMatter,
    htmlContent: htmlContent,
  };
}
function parseMarkdownWithFrontMatter(filePath) {
  // Read the markdown file
  const rawContent = fs.readFileSync(filePath, "utf-8");

  return parseMarkdownContent(rawContent);
}

const srcPath = "src";
const markdownUrls = [];
const assetUrls = [];

function getAllMarkdownPaths(fullPath) {
  const stats = fs.statSync(fullPath);

  if (!stats.isDirectory()) {
    if (fullPath.endsWith(".md")) {
      markdownUrls.push(fullPath);
    } else {
      assetUrls.push(fullPath);
    }

    return;
  }

  if (stats.isDirectory()) {
    if (fullPath !== "src" && !fullPath.includes("/images")) {
      const buildPath = `${fullPath.replace("src", "build")}`;
      fs.mkdirSync(buildPath);
    }

    fs.readdirSync(fullPath).forEach((file) => {
      const newPath = `${fullPath}/${file}`;
      getAllMarkdownPaths(newPath);
    });
  }
}

getAllMarkdownPaths(srcPath);

function wrapHtmlContent(htmlContent, meta) {
  const title =
    "peng37.com - Creator of File37, Note37, Watcher37, Link37, Friend37, Encrypt37";

  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        ${meta.title || title}
      </title>
      <meta
        name="description"
        content="${meta.description || title}"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="${meta.title || title}"
      />
      <meta
        property="og:description"
        content="${meta.title || title}"
      />
      <meta
        property="og:image"
        content="https://peng37.com/assets/android-icon-192x192.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@peng37com" />
      <meta
        name="twitter:title"
        content="${meta.title || title}"
      />
      <meta
        name="twitter:description"
        content="${meta.title || title}"
      />
      <meta
        name="twitter:image"
        content="https://peng37.com/assets/android-icon-192x192.png"
      />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/assets/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/assets/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/assets/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/assets/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/assets/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/assets/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/assets/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/assets/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/assets/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/assets/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon-16x16.png"
      />

      <link rel="stylesheet" href="/assets/newcss.1.1.2.css">
    </head>
    <body>
    ${
      meta.title
        ? `<header>${
            meta.backLabel && meta.backUrl
              ? `<a href="${meta.backUrl}">${meta.backLabel}</a> `
              : ""
          }${meta.title}</header>`
        : ""
    }
    ${meta.date ? `<p>${meta.date}</p>` : ""}
    ${htmlContent}

<br />
<br />
<hr />

<footer>
<a href="/">Home</a>
<a href="/blog/">Blog</a>
<a href="/contact/">Contact</a>
<a href="https://buy.stripe.com/14k3fYcz633kb2oeV1">Buy me a coffee</a>
</footer>

    </body>
    </html>
    `;
}

const parsed = markdownUrls.map((url) => {
  const { frontMatter, htmlContent } = parseMarkdownWithFrontMatter(url);

  const meta = {
    title: frontMatter.title,
    date: frontMatter.date,
    description: frontMatter.description,
    backLabel: frontMatter.backLabel,
    backUrl: frontMatter.backUrl,
  };
  const html = wrapHtmlContent(htmlContent, meta);
  return {
    title: meta.title,
    date: meta.date,
    url,
    html: minifyHtml(html, {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
    }),
  };
});

parsed.forEach((markdown) => {
  const parts = markdown.url.split("/");
  const fileName = parts.pop();
  const folders = parts.slice(1).join("/");
  const indexPath = `build/${folders ? `${folders}/` : ""}${
    fileName === "404.md" ? "404.html" : "index.html"
  }`;
  fs.writeFileSync(indexPath, markdown.html);
});

const assetsPath = `${buildPath}/assets`;
if (!fs.existsSync(assetsPath)) {
  fs.mkdirSync(assetsPath);
}
assetUrls.forEach((assetUrl) => {
  const imagePath = `${assetsPath}/${path.basename(assetUrl)}`;
  fs.copyFileSync(assetUrl, imagePath);
});

const blogIndexMD = `---
title: Blog
backLabel: <
backUrl: /
---

Posts:

${parsed
  .filter((post) => post.url.includes("/blog/"))
  .sort((a, b) => (b.date > a.date ? 1 : -1))
  .map((post) => {
    const parts = post.url.split("/");
    parts.pop();
    const name = parts.pop();
    return `- [${post.title}](/blog/${name}) - ${post.date}`;
  })
  .join("\n")}
`;

const parsedIndex = parseMarkdownContent(blogIndexMD);
const blogIndexHtml = wrapHtmlContent(
  parsedIndex.htmlContent,
  parsedIndex.frontMatter
);
fs.writeFileSync(
  `build/blog/index.html`,
  minifyHtml(blogIndexHtml, {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    removeComments: true,
  })
);
