const fs = require("node:fs");
const path = require("node:path");

const source = path.resolve(__dirname, "../../dofugames-presskit.html/build");
const sourceAttributes = path.resolve(__dirname, "../../dofugames-presskit.html/.gitattributes");
const destination = path.resolve(__dirname, "../presskit");

if (!fs.existsSync(source)) {
  throw new Error(`Presskit build not found: ${source}`);
}

if (!fs.existsSync(sourceAttributes)) {
  throw new Error(`Presskit gitattributes not found: ${sourceAttributes}`);
}

fs.rmSync(destination, { recursive: true, force: true });
fs.cpSync(source, destination, { recursive: true });
fs.copyFileSync(sourceAttributes, path.join(destination, ".gitattributes"));

console.log(`Copied ${source} to ${destination}`);
console.log(`Copied ${sourceAttributes} to ${path.join(destination, ".gitattributes")}`);
