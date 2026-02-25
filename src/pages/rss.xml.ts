import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog'))
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Roske.AI Blog',
    description: 'Thoughts on AI, finance, MCP servers, and whatever else is worth writing about. By Edward Roske.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      author: 'Edward@Roske.AI (Edward Roske)',
      categories: post.data.tags,
    })),
    customData: [
      '<language>en-us</language>',
      '<managingEditor>Edward@Roske.AI (Edward Roske)</managingEditor>',
      '<webMaster>Edward@Roske.AI (Edward Roske)</webMaster>',
    ].join(''),
  });
}
