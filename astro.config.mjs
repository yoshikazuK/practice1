// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://practice-20241215.netlify.app/",
  integrations: [preact()]
});
