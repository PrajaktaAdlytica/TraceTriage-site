import { createServer } from "vite";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { render, pageMeta, routePaths } = await server.ssrLoadModule(
    "/src/entry-server.jsx",
  );
  const template = await readFile("dist/index.html", "utf8");
  const escape = (s) =>
    s
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;");
  const siteURL = process.env.SITE_URL?.replace(/\/$/, "");
  for (const route of routePaths) {
    const [title, description] = pageMeta[route];
    const social = `<meta property="og:type" content="website"/><meta property="og:site_name" content="TraceTriage"/><meta property="og:title" content="${escape(title)}"/><meta property="og:description" content="${escape(description)}"/><meta property="og:image" content="${siteURL || ""}/og.png"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/><meta name="twitter:card" content="summary_large_image"/>${siteURL ? `<link rel="canonical" href="${siteURL + route}"/><meta property="og:url" content="${siteURL + route}"/>` : ""}`;
    const html = template
      .replace(
        '<div id="root"></div>',
        `<div id="root" data-route="${route}">${render(route)}</div>`,
      )
      .replace(
        /<title>.*?<\/title>/,
        `<title>${escape(title)} | TraceTriage</title>`,
      )
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/,
        `<meta name="description" content="${escape(description)}"/>`,
      )
      .replace("</head>", social + "</head>");
    const directory = path.join("dist", route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html);
    if (route !== "/")
      await writeFile(path.join("dist", route.slice(1) + ".html"), html);
  }
  await writeFile("dist/robots.txt", "User-agent: *\nAllow: /\n");
  if (siteURL)
    await writeFile(
      "dist/sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routePaths
        .filter(
          (r) => !r.startsWith("/demo") && !["/404", "/sign-in"].includes(r),
        )
        .map((r) => `<url><loc>${escape(siteURL + r)}</loc></url>`)
        .join("")}</urlset>`,
    );
  console.log(
    `Prerendered ${routePaths.length} routes. Each includes readable HTML and route metadata.`,
  );
} finally {
  await server.close();
}
