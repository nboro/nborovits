// Development only: react-scripts start loads this file and mounts the
// handler before the dev server's SPA fallback. It makes /product-awareness
// serve its own head in development exactly like the production build does,
// so view source shows the page SEO in both environments.
//
// The handler takes public/index.html, resolves %PUBLIC_URL%, applies the
// shared head transform, and injects the dev bundle script the dev server
// would normally add.

const fs = require('fs');
const path = require('path');
const { applyPageHead } = require('../scripts/page-head');
const pageSeo = require('./pages/product-awareness/seo.json');

module.exports = function setupProxy(app) {
  app.get(['/product-awareness', '/product-awareness/'], (req, res) => {
    const shellPath = path.join(__dirname, '..', 'public', 'index.html');
    let html = fs.readFileSync(shellPath, 'utf8').replace(/%PUBLIC_URL%/g, '');
    html = applyPageHead(html, pageSeo);
    html = html.replace('</head>', '<script defer src="/static/js/bundle.js"></script></head>');
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  });
};
