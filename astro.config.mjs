// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeClaudeCommentary from './src/plugins/rehype-claude-commentary.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://roske.ai',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [rehypeClaudeCommentary]
  },
  integrations: [
    mdx(),
    sitemap({
      // Static HTML pages under public/ aren't Astro routes, so the sitemap
      // integration doesn't pick them up automatically. Include them here
      // so Google can index them.
      customPages: [
        'https://roske.ai/agentcube.html',
        'https://roske.ai/agentcube-partners.html',
        'https://roske.ai/agentcube-pilot.html',
        'https://roske.ai/agentcube-roi.html',
        'https://roske.ai/agentcube-security.html',
        'https://roske.ai/agentcube-technical.html',
      ],
    }),
  ]
});
