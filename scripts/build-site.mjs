import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "..", "dist");

mkdirSync(distDir, { recursive: true });

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
  </head>
  <body>
    <h1>Calculator</h1>
    <p>This static site is generated from TypeScript and deployed via GitHub Pages.</p>
    <div id="app"></div>
    <script type="module" src="./index.js"></script>
  </body>
</html>
`;

writeFileSync(resolve(distDir, "index.html"), html);
console.log("Static site built at dist/");
