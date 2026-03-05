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
  integrations: [mdx(), sitemap()]
});
