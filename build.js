#!/usr/bin/env node
// Static site builder: renders the Pug views in views/ with the content in
// data/ and the photo folders in public/images/gallery/ into dist/.
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const { marked } = require('marked');

const ROOT = __dirname;
const VIEWS = path.join(ROOT, 'views');
const PUBLIC = path.join(ROOT, 'public');
const DATA = path.join(ROOT, 'data');
const DIST = path.join(ROOT, 'dist');

function readJSON(name) {
  return JSON.parse(fs.readFileSync(path.join(DATA, name), 'utf8'));
}

function readContent(file) {
  return fs.readFileSync(path.join(DATA, file), 'utf8').replace(/\s+$/, '');
}

function render(view, outFile, locals) {
  const html = pug.renderFile(path.join(VIEWS, view), locals);
  const dest = path.join(DIST, outFile);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
  console.log('built', path.relative(ROOT, dest));
}

fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(PUBLIC, DIST, { recursive: true });

const home = readJSON('home.json');
render('homePage.pug', 'index.html', {
  title: 'Groton Fire & Rescue',
  pages: home.sections.map((s) => ({ ...s, content: readContent(s.contentFile) })),
});

readJSON('about.json').pages.forEach((page) => {
  render('about/about.pug', path.join('about', page.pageLinkName, 'index.html'), {
    title: page.pageTitle,
    page: { ...page, contentHtml: marked.parse(readContent(page.contentFile)) },
  });
});

render('training/training.pug', path.join('training', 'index.html'), {
  title: 'Meetings & Training',
  trainingDays: readJSON('training.json').items.map((item) => ({
    ...item,
    info: Array.isArray(item.info) ? item.info.join('\n') : (item.info || ''),
  })),
});

render('error.pug', '404.html', {
  title: 'Page Not Found',
  status: 404,
  message: "Sorry, that page doesn't exist.",
});
