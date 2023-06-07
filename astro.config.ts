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
          label: 'Felicity',
          items: [{ label: 'Home Page', link: '/' }],
        },
        {
          label: 'About',
          autogenerate: { directory: 'about' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
