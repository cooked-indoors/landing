'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface AnimateInViewProps {
  children: ReactNode
  className?: string
}

export default function AnimateInView({ children, className }: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [50, 0, 0, -50]
  )

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}