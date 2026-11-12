import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';
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
      logo: { src: './src/assets/logo.svg', alt: 'Technische Physik', replacesTitle: false },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: { root: { label: 'Deutsch', lang: 'de' } },
      lastUpdated: true,
      editLink: { baseUrl: 'https://github.com/eskopp/Physik/edit/main/' },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/eskopp/Physik' }],
      plugins: [
        lucode({
          navLinks: [{ label: 'Dokumentation', link: '/start/' }],
        }),
      ],
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
        { label: 'Mechanik', items: [{ autogenerate: { directory: 'mechanik' } }] },
        { label: 'Thermodynamik', items: [{ autogenerate: { directory: 'thermodynamik' } }] },
        { label: 'Elektrodynamik', items: [{ autogenerate: { directory: 'elektrodynamik' } }] },
        { label: 'Messtechnik', items: [{ autogenerate: { directory: 'messtechnik' } }] },
      ],
    }),
  ],
});
