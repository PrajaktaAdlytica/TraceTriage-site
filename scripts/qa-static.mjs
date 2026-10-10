import { readFile, writeFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("dist");
const files = [];
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else files.push(p);
  }
}
await walk(root);
const pages = [];
const issues = [];
const expected = [];
const links = new Set();
async function exists(p) {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
}
async function resolveURL(url, from) {
  const u = new URL(url, "https://qa.invalid/" + path.relative(root, from));
  if (u.origin !== "https://qa.invalid") return null;
  const p = path.join(root, decodeURIComponent(u.pathname));
  for (const f of [p, p + ".html", path.join(p, "index.html")])
    if (await exists(f)) return { file: f, hash: u.hash };
  return { file: null, hash: u.hash };
}
for (const p of files.filter((x) => x.endsWith(".html"))) {
  const html = await readFile(p, "utf8");
  if (!html.includes("data-route=")) continue;
  if (!p.endsWith("/index.html")) continue;
  const route = html.match(/data-route="([^"]+)"/)[1];
  pages.push(route);
  const description = html.match(
    /<meta\s+name="description"\s+content="([^"]*)"/,
  );
  const og = html.match(/property="og:description" content="([^"]*)"/);
  if (!description || !og || description[1] !== og[1])
    issues.push({ route, problem: "Route description mismatch" });
  if ((html.match(/<h1\b/g) || []).length !== 1)
    issues.push({ route, problem: "H1 count" });
  if (!/<meta\s+name="description"/.test(html) || !html.includes("<title>"))
    issues.push({ route, problem: "Missing metadata" });
  for (const m of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(mailto:|tel:|data:|blob:)/.test(url)) continue;
    const resolved = await resolveURL(url, p);
    if (!resolved) continue;
    if (!resolved.file) {
      issues.push({ route, problem: "Missing local target", url });
      continue;
    }
    links.add(url);
    if (
      resolved.hash &&
      resolved.hash !== "#" &&
      resolved.file.endsWith(".html")
    ) {
      const target = await readFile(resolved.file, "utf8");
      const id = decodeURIComponent(resolved.hash.slice(1));
      if (!target.includes(`id="${id}"`))
        issues.push({ route, problem: "Missing anchor", url });
    }
  }
}
for (const p of files.filter(
  (x) => x.endsWith(".css") || x.endsWith("/intro/index.html"),
)) {
  const text = await readFile(p, "utf8");
  for (const m of text.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
    const url = m[1];
    if (url.startsWith("data:")) continue;
    const result = await resolveURL(url, p);
    if (result && !result.file) {
      if (url.includes("assets/fonts/rv-")) expected.push(url);
      else
        issues.push({
          file: path.relative(root, p),
          problem: "Missing CSS asset",
          url,
        });
    }
  }
}
const report = {
  date: "2026-10-10",
  routes: pages.length,
  routePaths: pages,
  uniqueLocalTargets: links.size,
  issues,
  expectedUnavailableIntroFonts: [...new Set(expected)],
};
await writeFile("qa/static-audit.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
if (issues.length) process.exitCode = 1;
