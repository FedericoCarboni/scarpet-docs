"use strict";
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const docs = {
  constants: {},
  functions: {},
  events: {},
};

function parseDocs(dir, docs) {
  for (const entryName of fs.readdirSync(dir)) {
    const entryPath = path.join(dir, entryName);
    if (fs.lstatSync(entryPath).isDirectory()) continue;
    if (!entryName.endsWith(".md")) continue;
    const entry = entryName.slice(0, -3);
    const obj = matter(fs.readFileSync(entryPath, "utf-8"));
    docs[entry] = { docs: ("" + obj.content).trim() || undefined };
    delete obj.data.title;
    if (Object.keys(obj.data).length) {
      docs[entry].data = obj.data;
    }
  }
}

parseDocs(path.join(__dirname, "../../_constants"), docs.constants);
parseDocs(path.join(__dirname, "../../_control-flow"), docs.functions);
parseDocs(path.join(__dirname, "../../_functions"), docs.functions);
parseDocs(path.join(__dirname, "../../_arithmetic"), docs.functions);

fs.writeFileSync(
  path.join(__dirname, "../constants.json"),
  JSON.stringify(docs.constants, void 0, void 0)
);
fs.writeFileSync(
  path.join(__dirname, "../functions.json"),
  JSON.stringify(docs.functions, void 0, void 0)
);
