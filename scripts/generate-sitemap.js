import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://complycare.io';

const staticRoutes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/platform', changefreq: 'monthly', priority: 0.9 },
  { url: '/solutions/post-acute', changefreq: 'monthly', priority: 0.9 },
  { url: '/solutions/pointclickcare-esign-admissions', changefreq: 'monthly', priority: 0.85 },
  { url: '/solutions/nursing-home-compliance-software', changefreq: 'monthly', priority: 0.85 },
  { url: '/solutions/snf-admission-agreement-compliance', changefreq: 'monthly', priority: 0.85 },
  { url: '/solutions/discharge-turnover-software', changefreq: 'monthly', priority: 0.85 },
  { url: '/security', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/resources', changefreq: 'weekly', priority: 0.85 },
  { url: '/blog', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.85 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.85 },
  { url: '/payments/liberty', changefreq: 'yearly', priority: 0.5 },
  { url: '/signin', changefreq: 'monthly', priority: 0.4 }
];

const blogDataPath = path.join(__dirname, '../src/marketing/data/blogPosts.ts');
const publicPath = path.join(__dirname, '../public/sitemap.xml');

// Read the TS file directly and extract id and date using basic regex
const blogFileContent = fs.readFileSync(blogDataPath, 'utf-8');



const today = new Date().toISOString().split('T')[0];

const sitemaps = [];

// Add static routes
staticRoutes.forEach(route => {
  sitemaps.push(`  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);
});

// Parse blog instances by splitting by "id: "
const blocks = blogFileContent.split('id:').slice(1);
blocks.forEach(block => {
  const slugMatch = block.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) return;
  const slug = slugMatch[1];
  
  const dateMatch = block.match(/date:\s*["']([^"']+)["']/);
  const dateModifiedMatch = block.match(/dateModified:\s*["']([^"']+)["']/);
  
  const lastMod = dateModifiedMatch ? dateModifiedMatch[1] : (dateMatch ? dateMatch[1] : today);

  sitemaps.push(`  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>`);
});

const sitemapOutput = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.join('\n')}
</urlset>`;

fs.writeFileSync(publicPath, sitemapOutput);
console.log('Successfully generated sitemap.xml with ' + sitemaps.length + ' pages.');
