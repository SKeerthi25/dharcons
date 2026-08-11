const fs = require('fs');
const path = require('path');

const pages = [
  'About',
  'Services',
  'Projects',
  'Process',
  'FAQs',
  'Contact',
  'QuoteRequest'
];

const dir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

pages.forEach(page => {
  const content = `export default function ${page}() {
  return (
    <div className="section container">
      <h1>${page}</h1>
      <p>Content for ${page} coming soon...</p>
    </div>
  );
}`;
  fs.writeFileSync(path.join(dir, `${page}.tsx`), content);
});

console.log('Pages generated.');
