import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://physik.erikskopp.de',
  redirects: {
    '/start/': '/',
    '/mathematik/1/logik-und-notation/': '/mathematik/1/logik-und-mengen/logik-und-notation/',
    '/mathematik/1/mengen-und-operationen/': '/mathematik/1/logik-und-mengen/mengen-und-operationen/',
    '/mathematik/1/potenzmengen/': '/mathematik/1/logik-und-mengen/potenzmengen/',
    '/mathematik/1/beweise-mit-mengen/': '/mathematik/1/logik-und-mengen/beweise-mit-mengen/',
    '/mathematik/1/relationen-grundlagen/': '/mathematik/1/relationen-und-funktionen/relationen-grundlagen/',
    '/mathematik/1/relationen-eigenschaften/': '/mathematik/1/relationen-und-funktionen/relationen-eigenschaften/',
    '/mathematik/1/aequivalenz-und-ordnungsrelationen/': '/mathematik/1/relationen-und-funktionen/aequivalenz-und-ordnungsrelationen/',
    '/mathematik/1/injektiv-und-surjektiv/': '/mathematik/1/relationen-und-funktionen/injektiv-und-surjektiv/',
    '/mathematik/1/komplexe-zahlen-grundlagen/': '/mathematik/1/komplexe-zahlen/komplexe-zahlen-grundlagen/',
    '/mathematik/1/komplexe-zahlen-polarform/': '/mathematik/1/komplexe-zahlen/komplexe-zahlen-polarform/',
    '/mathematik/1/beweismethoden/': '/mathematik/1/beweise/beweismethoden/',
    '/mathematik/1/vollstaendige-induktion/': '/mathematik/1/beweise/vollstaendige-induktion/',
  },
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
          navLinks: [{ label: 'Dokumentation', link: '/' }],
        }),
      ],
      customCss: ['katex/dist/katex.min.css'],
      sidebar: [
        { label: 'Start', items: [{ label: 'Übersicht', slug: 'index' }] },
        {
          label: 'Experimentalphysik',
          items: [
            { label: 'Mechanik und Thermodynamik', collapsed: true, items: [{ autogenerate: { directory: 'experimentalphysik/1-mechanik-und-thermodynamik' } }] },
            { label: 'Schwingungen, Wellen, Felder', collapsed: true, items: [{ autogenerate: { directory: 'experimentalphysik/2-schwingungen-wellen-felder' } }] },
            { label: 'Elektrizität und Optik', collapsed: true, items: [{ autogenerate: { directory: 'experimentalphysik/3-elektrizitaetslehre-und-optik' } }] },
            { label: 'Atome, Kerne, Teilchen', collapsed: true, items: [{ autogenerate: { directory: 'experimentalphysik/4-atome-kerne-teilchen' } }] },
          ],
        },
        {
          label: 'Mathematik für Physiker',
          items: [
            {
              label: 'Mathematik 1',
              collapsed: true,
              items: [
                { label: 'Logik und Mengen', collapsed: true, items: [{ autogenerate: { directory: 'mathematik/1/logik-und-mengen' } }] },
                { label: 'Relationen und Funktionen', collapsed: true, items: [{ autogenerate: { directory: 'mathematik/1/relationen-und-funktionen' } }] },
                { label: 'Komplexe Zahlen', collapsed: true, items: [{ autogenerate: { directory: 'mathematik/1/komplexe-zahlen' } }] },
                { label: 'Beweise', collapsed: true, items: [{ autogenerate: { directory: 'mathematik/1/beweise' } }] },
              ],
            },
            { label: 'Mathematik 2', collapsed: true, items: [{ autogenerate: { directory: 'mathematik/2' } }] },
            { label: 'Mathematik 3', collapsed: true, items: [{ autogenerate: { directory: 'mathematik/3' } }] },
          ],
        },
        {
          label: 'Theoretische Physik',
          items: [
            { label: 'Mechanik', collapsed: true, items: [{ autogenerate: { directory: 'theoretische-physik/1-mechanik' } }] },
            { label: 'Quantenmechanik', collapsed: true, items: [{ autogenerate: { directory: 'theoretische-physik/2-quantenmechanik' } }] },
            { label: 'Elektrodynamik', collapsed: true, items: [{ autogenerate: { directory: 'theoretische-physik/3-elektrodynamik' } }] },
            { label: 'Statistische Physik', collapsed: true, items: [{ autogenerate: { directory: 'theoretische-physik/4-statistische-physik' } }] },
          ],
        },
        {
          label: 'Elektrotechnik und Elektronik',
          items: [
            { label: 'Allgemeine Elektrotechnik', collapsed: true, items: [{ autogenerate: { directory: 'elektrotechnik/allgemeine-elektrotechnik-1' } }] },
            { label: 'Grundlagen der Elektronik', collapsed: true, items: [{ autogenerate: { directory: 'elektrotechnik/grundlagen-der-elektronik' } }] },
          ],
        },
        {
          label: 'Chemie',
          items: [
            { label: 'Grundlagen der Chemie', collapsed: true, items: [{ autogenerate: { directory: 'chemie/grundlagen-der-chemie' } }] },
            { label: 'Organische und physikalische Chemie', collapsed: true, items: [{ autogenerate: { directory: 'chemie/organische-und-physikalische-chemie' } }] },
          ],
        },
        {
          label: 'Technische Fächer',
          items: [
            { label: 'Technische Mechanik', collapsed: true, items: [{ autogenerate: { directory: 'technik/technische-mechanik-1' } }] },
            { label: 'Technische Physik 1', collapsed: true, items: [{ autogenerate: { directory: 'technik/technische-physik-1' } }] },
            { label: 'Technische Physik 2', collapsed: true, items: [{ autogenerate: { directory: 'technik/technische-physik-2' } }] },
          ],
        },
        {
          label: 'Praktika',
          items: [
            { label: 'Grundpraktikum 1', collapsed: true, items: [{ autogenerate: { directory: 'praktika/grundpraktikum-1' } }] },
            { label: 'Grundpraktikum 2', collapsed: true, items: [{ autogenerate: { directory: 'praktika/grundpraktikum-2' } }] },
            { label: 'Fortgeschrittenenpraktikum 1', collapsed: true, items: [{ autogenerate: { directory: 'praktika/fortgeschrittenenpraktikum-1' } }] },
          ],
        },
      ],
    }),
  ],
});
