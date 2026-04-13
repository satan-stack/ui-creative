"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Reveal, StaggerChildren, StaggerItem } from "@/components/magic/reveal"
import { TiltCard } from "@/components/magic/tilt-card"

const PRODUCTS = [
  { title: "Crochet Flower Bouquet", description: "Handmade roses, lilies & baby's breath tied with a dusty pink ribbon.", badge: "Best Seller", src: "/images/1000419694.jpg" },
  { title: "Butterfly Collection", description: "Vibrant butterflies in purple, magenta, red & orange. Brooches or decor.", badge: "Limited Edition", src: "/images/1000419693.jpg" },
  { title: "Flower Keychain", description: "Pink daisy keychain with golden hardware. A tiny bloom for your keys.", badge: "Popular", src: "/images/1000419692.jpg" },
  { title: "Mini Potted Flower", description: "Magenta flower in a tiny crocheted pot. Perfect for any desk.", badge: "New", src: "/images/1000419691.jpg" },
  { title: "Full Collection", description: "Sunflowers, hearts, bows, lavender & more. Every piece handmade.", badge: "Handmade", src: "/images/IMG-20260401-WA0000.jpg" },
  { title: "Heart & Bow Set", description: "Red heart keychain paired with a matching pink bow. The gift duo.", badge: "Gift Ready", src: "/images/1000419692.jpg" },
]

export function ProductShowcase() {
  return (
    <section id="collection" className="py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">The Collection</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">Tiny Art, Big Love</h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">Each piece is handmade with care. When it&apos;s gone, it&apos;s gone.</p>
          </div>
        </Reveal>
        <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <StaggerItem key={i}>
              <TiltCard className="group relative cursor-pointer overflow-hidden rounded-xl bg-card shadow-sm transition-shadow duration-500 hover:shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={product.src} alt={product.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground shadow-sm backdrop-blur-sm hover:bg-white/90">{product.badge}</Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold">{product.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{product.description}</p>
                  <Button variant="link" className="text-primary mt-2 h-auto p-0 text-sm" asChild>
                    <a href="https://instagram.com/threadmeditation" target="_blank" rel="noopener noreferrer">Inquire on Instagram &rarr;</a>
                  </Button>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
