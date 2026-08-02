// Applies the Product Awareness head to an HTML shell. Shared by the
// production prerender (scripts/prerender-seo.js) and the development
// middleware (src/setupProxy.js) so both environments serve identical
// head tags for /product-awareness.

// Every regex must carry exactly two capture groups around the value slot.
function replaceOnce(html, regex, value, label) {
  if (!regex.test(html)) {
    throw new Error(`page-head: pattern not found for ${label}`);
  }
  return html.replace(regex, (m, p1, p2) => `${p1}${value}${p2}`);
}

function applyPageHead(html, seo) {
  html = replaceOnce(html, /(<title>)[\s\S]*?(<\/title>)/, seo.title, 'title');
  html = replaceOnce(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, seo.description, 'meta description');
  html = replaceOnce(html, /(<meta\s+name="keywords"\s+content=")[^"]*(")/, seo.keywords, 'meta keywords');
  html = replaceOnce(html, /(<meta\s+name="author"\s+content=")[^"]*(")/, seo.author, 'meta author');
  html = replaceOnce(html, /(<meta\s+property="og:type"\s+content=")[^"]*(")/, seo.ogType, 'og:type');
  html = replaceOnce(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, seo.ogTitle, 'og:title');
  html = replaceOnce(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, seo.ogDescription, 'og:description');
  html = replaceOnce(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, seo.canonical, 'og:url');
  html = replaceOnce(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, seo.canonical, 'canonical');

  const headClose = html.indexOf('</head>');
  if (headClose === -1) {
    throw new Error('page-head: closing head tag not found');
  }
  const jsonLd = `<script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`;
  html = html.slice(0, headClose) + jsonLd + html.slice(headClose);

  if (!html.includes(seo.title)) {
    throw new Error('page-head: page title missing from output');
  }
  if (html.includes('| Personal Website')) {
    throw new Error('page-head: general site head still present in output');
  }

  return html;
}

module.exports = { applyPageHead };
