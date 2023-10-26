function getHtmlHead({ title, description }) {
  const defaultTitle = 'peng37.com - Creator of Encrypt37, Watcher37, Link37';

  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        ${title || defaultTitle}
      </title>
      <meta
        name="description"
        content="${description || defaultTitle}"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="${title || defaultTitle}"
      />
      <meta
        property="og:description"
        content="${title || defaultTitle}"
      />
      <meta
        property="og:image"
        content="https://encrypt37.com/assets/android-icon-192x192.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@peng37com" />
      <meta
        name="twitter:title"
        content="${title || defaultTitle}"
      />
      <meta
        name="twitter:description"
        content="${title || defaultTitle}"
      />
      <meta
        name="twitter:image"
        content="https://encrypt37.com/assets/android-icon-192x192.png"
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
    </head>`;
}

function getHeader({ title, backLabel, backUrl, date }) {
  return `${
    title
      ? `<header>${
          backLabel && backUrl ? `<a href="${backUrl}">${backLabel}</a> ` : ''
        }${title}</header>`
      : ''
  }
  ${date ? `<p>${date}</p>` : ''}`;
}

const footer = `
<br />
<br />
<hr />

<footer>
<a href="/">Home</a>
<a href="/blog/">Blog</a>
<a href="/contact/">Contact</a>
<a target="_blank" rel="noopener noreferrer" href="https://github.com/penghuili/peng37.com">Source code</a>
<a target="_blank" rel="noopener noreferrer" href="https://buy.stripe.com/14k3fYcz633kb2oeV1">🍺</a>
</footer>`;

function wrapHtml(html, { title, description, backLabel, backUrl, date }) {
  return `<!DOCTYPE html>
  <html>
  ${getHtmlHead({ title, description })}

  <body>
  ${getHeader({ title, backLabel, backUrl, date })}

  ${html}

  ${footer}
  </body>
  </html>
  `;
}

module.exports = { wrapHtml };
