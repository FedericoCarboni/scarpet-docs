"use strict";

const fs = require("fs");
const path = require("path");
const assert = require("assert");
const pkg = require("../package.json");

const docdata = fs.readFileSync(
  path.join(__dirname, "..", "public", "docdata.json"),
  "utf-8",
);

fs.writeFileSync(
  path.join(__dirname, "..", "index.js"),
  `\
// ${pkg.name} v${pkg.version}
const data = /* @__PURE__ */ JSON.parse('${
  // Use single quotes to avoid excessive escaping
  JSON.stringify(docdata).replace(/'/g, "\\'").replace(/\\"/g, '"').slice(1, -1)
}');
export default data;
`,
);

// Verify data is correct.
import("../index.js").then((data) => {
  assert.deepStrictEqual(data.default, JSON.parse(docdata));
});
