// Emits two build artifacts so that GET /product-awareness serves this
// page's own head tags without JavaScript, while every other route keeps
// the general site head from index.html:
//
//   build/product-awareness.html  (the SPA shell with this page's head)
//   build/serve.json              (routing config for the serve deploy)
//
// How the routing works: serve.json enables cleanUrls, so serve resolves
// /product-awareness to product-awareness.html with a 200 and no redirect.
// The single-page fallback is written as explicit rewrites for the legacy
// routes (kept in sync with legacyRoutes in src/data/navigation.js)
// instead of the -s catch-all, because serve gives any catch-all rewrite
// priority over the .html resolution and that would swallow this page.
// The deploy command is therefore `serve build`, without -s; unknown
// paths now return a real 404 instead of a soft 404.
//
// Runs after react-scripts build (see the "build" script in package.json).
// src/pages/product-awareness/seo.json is the single source of truth, and
// scripts/page-head.js holds the transform shared with the development
// middleware in src/setupProxy.js.

const fs = require('fs');
const path = require('path');
const { applyPageHead } = require('./page-head');
const seo = require('../src/pages/product-awareness/seo.json');

const buildDir = path.join(__dirname, '..', 'build');
const srcFile = path.join(buildDir, 'index.html');
const outFile = path.join(buildDir, 'product-awareness.html');
const serveConfigFile = path.join(buildDir, 'serve.json');

const html = applyPageHead(fs.readFileSync(srcFile, 'utf8'), seo);

// Keep in sync with legacyRoutes in src/data/navigation.js.
const legacyRoutes = ['resume', 'contact', 'aboutme', 'projects'];

const serveConfig = {
  cleanUrls: true,
  rewrites: legacyRoutes.map((route) => ({
    source: route,
    destination: '/index.html',
  })),
};

fs.writeFileSync(outFile, html);
fs.writeFileSync(serveConfigFile, `${JSON.stringify(serveConfig, null, 2)}\n`);
console.log(`prerender-seo: wrote ${path.relative(process.cwd(), outFile)}`);
console.log(`prerender-seo: wrote ${path.relative(process.cwd(), serveConfigFile)}`);
console.log(`prerender-seo: title = ${seo.title}`);
