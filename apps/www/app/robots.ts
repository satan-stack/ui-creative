import type { MetadataRoute } from "next"
export default function robots(): MetadataRoute.Robots {
  const b = process.env.NEXT_PUBLIC_APP_URL || "https://threadmeditation.com"
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }], sitemap: `${b}/sitemap.xml` }
}
