import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      logo: {
        src: '/public/favicon.svg',
      },
      title: 'Felicity',
      social: {
        discord: 'https://discord.gg/JBBqF6Pw2z',
        github: 'https://github.com/withastro/starlight',
        twitter: 'https://twitter.com/devFelicity',
      },
      editLink: {
        baseUrl: 'https://github.com/solelychloe/felicity-astro/edit/main',
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Getting Started', link: '/' },
          ],
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
