"use strict";
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const docs = {
  constants: {},
  functions: {},
  minecraftFunctions: {},
  minecraftEvents: {},
};

function parseDocs(dir, docs) {
  for (const entryName of fs.readdirSync(dir)) {
    const entryPath = path.join(dir, entryName);
    if (fs.lstatSync(entryPath).isDirectory()) continue;
    if (!entryName.endsWith(".md")) continue;
    const entry = entryName.slice(0, -3);
    const obj = matter(fs.readFileSync(entryPath, "utf-8"));
    delete obj.data.title;
    docs[entry] = { ...obj.data, docs: ("" + obj.content).trim() || undefined };
  }
}

parseDocs(path.join(__dirname, "../../_constants"), docs.constants);
parseDocs(path.join(__dirname, "../../_control-flow"), docs.functions);
parseDocs(path.join(__dirname, "../../_functions"), docs.functions);
parseDocs(path.join(__dirname, "../../_arithmetic"), docs.functions);
parseDocs(path.join(__dirname, "../../_minecraft"), docs.minecraftFunctions);
// parseDocs(path.join(__dirname, "../../_minecraft"), docs.minecraftEvents);

fs.writeFileSync(
  path.join(__dirname, "../constants.json"),
  JSON.stringify(docs.constants, void 0, void 0)
);
fs.writeFileSync(
  path.join(__dirname, "../functions.json"),
  JSON.stringify(docs.functions, void 0, void 0)
);
fs.writeFileSync(
  path.join(__dirname, "../minecraft.json"),
  JSON.stringify(docs.minecraftFunctions, void 0, void 0)
);
