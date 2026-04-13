"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Reveal, StaggerChildren, StaggerItem } from "@/components/magic/reveal"

const POSTS = [
  { src: "/images/1000419691.jpg", alt: "Crochet potted flower" },
  { src: "/images/1000419692.jpg", alt: "Crochet flower keychain" },
  { src: "/images/1000419693.jpg", alt: "Crochet butterflies" },
  { src: "/images/1000419694.jpg", alt: "Crochet flower bouquet" },
  { src: "/images/IMG-20260401-WA0000.jpg", alt: "Crochet collection" },
  { src: "/images/1000419691.jpg", alt: "Crochet art" },
]

export function InstagramSection() {
  return (
    <section className="bg-secondary/50 py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">@threadmeditation</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">Join Our Journey</h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">Follow along as we create tiny works of art, one stitch at a time.</p>
          </div>
        </Reveal>
        <StaggerChildren className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {POSTS.map((post, i) => (
            <StaggerItem key={i}>
              <a href="https://instagram.com/threadmeditation" target="_blank" rel="noopener noreferrer" className="group relative block aspect-square overflow-hidden rounded-xl">
                <Image src={post.src} alt={post.alt} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full px-8">
              <a href="https://instagram.com/threadmeditation" target="_blank" rel="noopener noreferrer"><Instagram className="mr-2 h-4 w-4" />Follow @threadmeditation</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
