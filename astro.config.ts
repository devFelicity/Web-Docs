import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://felicity.pages.dev',
  integrations: [
    starlight({
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://stats.ovy.sh/js/script.js',
            'data-domain': 'tryfelicity.one',
            defer: true
          }
        }
      ],
      customCss: ['/src/assets/tailwind.css', '/src/assets/custom.css'],
      logo: {
        src: '/public/favicon.svg',
      },
      title: 'Felicity',
      social: {
        discord: 'https://discord.gg/JBBqF6Pw2z',
        github: 'https://github.com/devFelicity/Web-Docs',
        twitter: 'https://twitter.com/devFelicity',
      },
      editLink: {
        baseUrl: 'https://github.com/devFelicity/Web-Docs/edit/main',
      },
      sidebar: [
        {
          label: 'Felicity',
          items: [
            {
              label: 'Home Page',
              link: '/',
            },
          ],
        },
        {
          label: 'About',
          autogenerate: {
            directory: 'about',
          },
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference',
          },
        },
        {
          label: 'Terms & Conditions',
          items: [
            {
              label: 'Privacy Policy',
              link: '/privacy',
            },
            {
              label: 'Terms of Service',
              link: '/terms',
            },
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
