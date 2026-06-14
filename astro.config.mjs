import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"

import { site } from "./src/data/site"

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
