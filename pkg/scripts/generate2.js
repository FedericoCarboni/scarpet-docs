"use strict";

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const contents = fs.readFileSync("file2.txt", "utf-8");

fs.mkdirSync("_minecraft", {
  recursive: true,
});

// console.log(contents)

function doMatch(input) {
  const match = input.match(/[^]*?\#\#\#(\s*\`?)(\w+?)\((.*?)\)\s*`([^]*)/);
  const name = match[2];
  const params = match[3].split(",").map((n) => n.trim());
  const docs = match[4].split("###")[0].trim();
  console.log(name, params, docs);
  fs.writeFileSync(
    path.join("_minecraft", name + ".md"),
    `---
${yaml
  .dump({
    signatures: [
      { params: params.map((name) => ({ name: name.replace(/[^\w]/g, "") })) },
    ],
  })
  .trimEnd()}
---

${docs}
`
  );

  if (match[4].includes("###")) doMatch(match[4]);
}

doMatch(contents);
