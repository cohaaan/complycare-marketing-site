import fs from 'fs';
import { promises as fsp } from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '../dist');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const previewPort = 4173;

const excludedRoutes = new Set(['/signin', '/payments/liberty']);
const allowedPrefixes = ['/', '/platform', '/solutions', '/security', '/about', '/resources', '/blog', '/contact', '/pricing'];

const mimeByExtension = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseSitemapRoutes() {
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`Missing sitemap at ${sitemapPath}`);
  }

  const xml = fs.readFileSync(sitemapPath, 'utf-8');
  const locationRegex = /<loc>(.*?)<\/loc>/g;
  const routes = new Set();
  let match = locationRegex.exec(xml);

  while (match) {
    try {
      const pathname = new URL(match[1]).pathname.replace(/\/+$/, '') || '/';
      const isAllowed = allowedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
      if (isAllowed && !excludedRoutes.has(pathname)) {
        routes.add(pathname);
      }
    } catch {
      // Ignore invalid URLs from sitemap.
    }

    match = locationRegex.exec(xml);
  }

  return Array.from(routes);
}

function resolveFilePath(urlPathname) {
  const normalizedPath = urlPathname.replace(/^\/+/, '');
  const candidate = path.join(distDir, normalizedPath);

  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }

  const indexCandidate = path.join(candidate, 'index.html');
  if (fs.existsSync(indexCandidate)) {
    return indexCandidate;
  }

  return path.join(distDir, 'index.html');
}

function createStaticServer() {
  return http.createServer(async (req, res) => {
    const incoming = new URL(req.url ?? '/', `http://127.0.0.1:${previewPort}`);
    const filePath = resolveFilePath(incoming.pathname);
    const extension = path.extname(filePath);
    const contentType = mimeByExtension[extension] ?? 'application/octet-stream';

    try {
      const data = await fsp.readFile(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Failed to serve prerender preview file.');
    }
  });
}

function outputFileForRoute(route) {
  if (route === '/') {
    return path.join(distDir, 'index.html');
  }

  return path.join(distDir, route.replace(/^\/+/, ''), 'index.html');
}

async function prerender() {
  if (!fs.existsSync(distDir)) {
    throw new Error(`Missing build output at ${distDir}. Run vite build first.`);
  }

  const routes = parseSitemapRoutes();
  if (routes.length === 0) {
    console.log('No routes found to prerender.');
    return;
  }

  const server = createStaticServer();
  await new Promise((resolve) => server.listen(previewPort, '127.0.0.1', resolve));

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(`http://127.0.0.1:${previewPort}/`, { waitUntil: 'domcontentloaded' });
    await sleep(500);

    for (const route of routes) {
      if (route !== '/') {
        await page.evaluate((nextRoute) => {
          window.history.pushState({}, '', nextRoute);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }, route);
        await sleep(500);
      }

      const rawHtml = await page.content();
      const htmlWithoutDoctype = rawHtml.replace(/^\s*<!doctype html>/i, '').trimStart();
      const html = `<!DOCTYPE html>\n${htmlWithoutDoctype}`;
      const outputPath = outputFileForRoute(route);
      await fsp.mkdir(path.dirname(outputPath), { recursive: true });
      await fsp.writeFile(outputPath, html, 'utf-8');
      console.log(`Prerendered ${route}`);
    }
  } finally {
    await page.close();
    await browser.close();
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  }

  console.log(`Prerender complete for ${routes.length} routes.`);
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
