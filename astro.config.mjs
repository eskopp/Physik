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
        { label: 'Allgemeine Elektrotechnik 1', items: [{ autogenerate: { directory: 'allgemeine-elektrotechnik-1' } }] },
        { label: 'Experimentalphysik 1: Mechanik und Thermodynamik', items: [{ autogenerate: { directory: 'experimentalphysik-1' } }] },
        { label: 'Grundlagen der Chemie', items: [{ autogenerate: { directory: 'grundlagen-der-chemie' } }] },
        { label: 'Mathematik für Physiker 1', items: [{ autogenerate: { directory: 'mathematik-fuer-physiker-1' } }] },
        { label: 'Grundpraktikum der Physik 1', items: [{ autogenerate: { directory: 'grundpraktikum-der-physik-1' } }] },
      ],
    }),
  ],
});
