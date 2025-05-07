'use client'

import { ReactNode } from 'react'

interface HoverTextEffectProps {
  children: ReactNode
  className?: string
}

/**
 * A component that adds a subtle text fade effect on hover
 * without affecting the container boundaries
 */
export default function HoverTextEffect({ children, className = '' }: HoverTextEffectProps) {
  return (
    <div className={`${className} text-black group-hover:text-orange-500 transition-colors duration-300`}>
      {children}
    </div>
  )
}
