import type { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
  const b = process.env.NEXT_PUBLIC_APP_URL || "https://threadmeditation.com"
  return [{url:b,lastModified:new Date(),changeFrequency:"weekly",priority:1},{url:`${b}/about`,lastModified:new Date(),changeFrequency:"monthly",priority:0.8},{url:`${b}/faq`,lastModified:new Date(),changeFrequency:"monthly",priority:0.8},{url:`${b}/contact`,lastModified:new Date(),changeFrequency:"monthly",priority:0.7},{url:`${b}/privacy`,lastModified:new Date(),changeFrequency:"yearly",priority:0.3},{url:`${b}/terms`,lastModified:new Date(),changeFrequency:"yearly",priority:0.3}]
}
