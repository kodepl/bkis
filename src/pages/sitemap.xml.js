import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const allTags = new Set();
  posts.forEach(post => {
    post.data.tags?.forEach(tag => {
      allTags.add(tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
    });
    allTags.add(post.data.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
  });
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${context.site}</loc><lastmod>${today}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>${context.site}blog/</loc><lastmod>${today}</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>
  ${Array.from(allTags).map(tag => `  <url><loc>${context.site}tag/${tag}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`).join('\n')}
  ${posts.map(post => `  <url><loc>${context.site}blog/${post.slug}/</loc><lastmod>${post.data.updatedDate?.toISOString().split('T')[0] || post.data.pubDate.toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`).join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
