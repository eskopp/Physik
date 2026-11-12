import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://physik.erikskopp.de',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: 'Technische Physik',
      logo: { src: './src/assets/logo.svg' },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/eskopp/Physik' },
      ],
      lastUpdated: true,
      defaultLocale: 'root',
      locales: { root: { label: 'Deutsch', lang: 'de' } },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
          },
        },
      ],
      sidebar: [
        { label: 'Start', items: [{ label: 'Übersicht', slug: 'start' }] },
      ],
    }),
  ],
});
