import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    coauthors: z.array(z.object({
      name: z.string(),
      image: z.string().optional(),
      url: z.string().optional(),
    })).default([]),
  }),
});

export const collections = { blog };
