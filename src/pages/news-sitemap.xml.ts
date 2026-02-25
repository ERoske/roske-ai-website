import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(context: APIContext) {
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const posts = (await getCollection('blog'))
    .filter(post => !post.data.draft)
    .filter(post => post.data.date >= twoDaysAgo)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${posts.map(post => `  <url>
    <loc>${new URL(`/blog/${post.id}/`, context.site)}</loc>
    <news:news>
      <news:publication>
        <news:name>Roske.AI</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.data.date.toISOString()}</news:publication_date>
      <news:title>${escapeXml(post.data.title)}</news:title>
    </news:news>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
