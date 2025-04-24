// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

import showTailwindcssBreakpoint from 'astro-show-tailwindcss-breakpoint';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  //update this to your own domain
  site: 'https://starter.consent.press',
  // update to 'server' if you want to use server-side rendering
  output: 'static',

  integrations: [sitemap(), showTailwindcssBreakpoint(), icon(), mdx()],
  adapter: vercel(),
});
