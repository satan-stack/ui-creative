"use client"

import { type ReactNode, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { damping: 20, stiffness: 150 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { damping: 20, stiffness: 150 })
  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }
  const handleLeave = () => { x.set(0.5); y.set(0.5) }
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave} style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: "preserve-3d" }} className={className}>
      {children}
    </motion.div>
  )
}
