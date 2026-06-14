import type { APIRoute } from "astro"
import { site } from "@/data/site"

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap-index.xml

`.trim()

export const GET: APIRoute = () =>
  new Response(robotsTxt, {
    headers: { "Content-Type": "text/plain" },
  })
