"use client"

import Image from "next/image"
import * as React from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/magic/reveal"

const TESTIMONIALS = [
  { name: "Priya S.", text: "I bought the flower bouquet as a gift for my mother and she cried happy tears. The detail is unbelievable \u2014 you can see every single petal. It's art you can hold.", rating: 5 },
  { name: "Rachel M.", text: "The butterfly keychain is my daily reminder to slow down. Every time I reach for my keys, I smile. The craftsmanship is beyond anything I've seen online.", rating: 5 },
  { name: "Aisha K.", text: "Ordered the sunflower set for my desk. My coworkers couldn't believe they were crocheted! Already planning my next order. These are tiny treasures.", rating: 5 },
  { name: "Emma T.", text: "The mini potted flower sits on my bookshelf and I genuinely love it more than my real plants. Never wilts, always beautiful, and made with so much love.", rating: 5 },
]

export function TestimonialsSection() {
  const [current, setCurrent] = React.useState(0)
  const [dir, setDir] = React.useState(1)
  const next = () => { setDir(1); setCurrent((p) => (p + 1) % TESTIMONIALS.length) }
  const prev = () => { setDir(-1); setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) }
  React.useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t) }, [])

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image src="/images/1000419692.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
      </div>
      <div className="container relative z-10">
        <Reveal><div className="mb-16 text-center"><p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">Kind Words</p><h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">What Our Community Says</h2></div></Reveal>
        <Reveal delay={0.2}>
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm md:p-12">
              <div className="mb-6 flex items-center justify-center gap-1">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="text-yellow-400 fill-yellow-400 h-5 w-5" />))}</div>
              <div className="relative min-h-[120px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.blockquote key={current} initial={{ opacity: 0, x: dir * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -40 }} transition={{ duration: 0.5 }} className="text-foreground text-center text-lg leading-relaxed md:text-xl">&ldquo;{TESTIMONIALS[current].text}&rdquo;</motion.blockquote>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait"><motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-center"><p className="font-serif text-lg font-semibold">{TESTIMONIALS[current].name}</p><p className="text-muted-foreground mt-1 text-sm">Verified Buyer</p></motion.div></AnimatePresence>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={prev}><ChevronLeft className="h-4 w-4" /></Button>
                <div className="flex gap-2">{TESTIMONIALS.map((_, i) => (<motion.button key={i} onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }} className="h-2 rounded-full" animate={{ width: i === current ? 24 : 8, backgroundColor: i === current ? "#ec4899" : "#e5e7eb" }} transition={{ type: "spring", damping: 20 }} />))}</div>
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={next}><ChevronRight className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
