const { join } = require("path");
const fs = require("fs");
const { format } = require("date-fns");

const title = process.argv[2];

const fileName = title
  .toLowerCase()
  .replaceAll(" ", "-")
  .replace(/[^0-9a-z-]/g, "")
  .toLowerCase();

const content = `---
title: "${title}"
date: "${format(new Date(), "yyyy-MM-dd")}"
---

`;

const filePath = join(__dirname, "..", "posts", `${fileName}.md`);

fs.writeFileSync(filePath, content);

console.log(`${filePath} is created.`);
