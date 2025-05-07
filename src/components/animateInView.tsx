'use client'

import { motion, useScroll, useTransform, MotionStyle, useSpring } from 'framer-motion'
import { ReactNode, useRef, useMemo } from 'react'

export type AnimationVariant =
  'fadeUp' |
  'fadeIn' |
  'scaleIn' |
  'slideInLeft' |
  'slideInRight' |
  'rotate' |
  'bounce' |
  'flip' |
  'parallax' |
  'reveal'

interface AnimateInViewProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  duration?: number
  delay?: number
  once?: boolean
  intensity?: 'light' | 'medium' | 'strong'
  customStyle?: MotionStyle
}

export default function AnimateInView({
  children,
  className,
  variant = 'fadeUp',
  duration = 0.7,
  delay = 0,
  once = false,
  intensity = 'medium',
  customStyle = {}
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null)

  // More responsive scroll tracking with smoother transitions
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Add spring physics for smoother animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Determine animation intensity multipliers
  const multiplier = useMemo(() => {
    switch (intensity) {
      case 'light': return 0.7;
      case 'strong': return 1.5;
      case 'medium':
      default: return 1;
    }
  }, [intensity]);

  // Define all the transform values at the component level
  // FadeIn
  const fadeInOpacity = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, once ? 1 : 0.2]
  );

  // ScaleIn
  const scaleInOpacity = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, once ? 1 : 0.5]
  );
  const scaleInScale = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [0.6 * multiplier, 1, 1, once ? 1 : 0.9]
  );

  // SlideInLeft
  const slideInLeftOpacity = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, once ? 1 : 0.7]
  );
  const slideInLeftX = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [-100 * multiplier, 0, 0, once ? 0 : -30]
  );

  // SlideInRight
  const slideInRightOpacity = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, once ? 1 : 0.7]
  );
  const slideInRightX = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [100 * multiplier, 0, 0, once ? 0 : 30]
  );

  // Rotate
  const rotateOpacity = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, once ? 1 : 0.7]
  );
  const rotateRotate = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [45 * multiplier, 0, 0, once ? 0 : 5]
  );
  const rotateScale = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, once ? 1 : 0.95]
  );

  // Bounce
  const bounceOpacity = useTransform(smoothProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, once ? 1 : 0.8]
  );
  const bounceY = useTransform(smoothProgress,
    [0, 0.1, 0.2, 0.3, 0.9, 1],
    [50 * multiplier, -20 * multiplier, 10 * multiplier, 0, 0, once ? 0 : 20]
  );

  // Flip
  const flipOpacity = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, once ? 1 : 0.7]
  );
  const flipRotateX = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [90 * multiplier, 0, 0, once ? 0 : 10]
  );

  // Parallax
  const parallaxY = useTransform(smoothProgress,
    [0, 1],
    [100 * multiplier, -100 * multiplier]
  );
  const parallaxOpacity = useTransform(smoothProgress,
    [0, 0.1, 0.9, 1],
    [0.3, 1, 1, 0.3]
  );

  // Reveal
  const revealClipPath = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [
      `inset(${50 * multiplier}% ${50 * multiplier}% ${50 * multiplier}% ${50 * multiplier}%)`,
      'inset(0% 0% 0% 0%)',
      once ? 'inset(0% 0% 0% 0%)' : `inset(0% ${20 * multiplier}% ${20 * multiplier}% 0%)`
    ]
  );
  const revealScale = useTransform(smoothProgress,
    [0, 0.5, 1],
    [0.8, 1, once ? 1 : 0.95]
  );

  // FadeUp (default)
  const fadeUpOpacity = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, once ? 1 : 0.5]
  );
  const fadeUpY = useTransform(smoothProgress,
    [0, 0.2, 0.8, 1],
    [100 * multiplier, 0, 0, once ? 0 : -20]
  );

  // Get animation props based on variant
  const animationProps = useMemo(() => {
    switch (variant) {
      case 'fadeIn':
        return {
          opacity: fadeInOpacity
        };
      case 'scaleIn':
        return {
          opacity: scaleInOpacity,
          scale: scaleInScale
        };
      case 'slideInLeft':
        return {
          opacity: slideInLeftOpacity,
          x: slideInLeftX
        };
      case 'slideInRight':
        return {
          opacity: slideInRightOpacity,
          x: slideInRightX
        };
      case 'rotate':
        return {
          opacity: rotateOpacity,
          rotate: rotateRotate,
          scale: rotateScale
        };
      case 'bounce':
        return {
          opacity: bounceOpacity,
          y: bounceY
        };
      case 'flip':
        return {
          opacity: flipOpacity,
          rotateX: flipRotateX,
          perspective: 1000
        };
      case 'parallax':
        return {
          y: parallaxY,
          opacity: parallaxOpacity
        };
      case 'reveal':
        return {
          clipPath: revealClipPath,
          scale: revealScale
        };
      case 'fadeUp':
      default:
        return {
          opacity: fadeUpOpacity,
          y: fadeUpY
        };
    }
  }, [
    variant, fadeInOpacity, scaleInOpacity, scaleInScale, slideInLeftOpacity,
    slideInLeftX, slideInRightOpacity, slideInRightX, rotateOpacity, rotateRotate,
    rotateScale, bounceOpacity, bounceY, flipOpacity, flipRotateX, parallaxY,
    parallaxOpacity, revealClipPath, revealScale, fadeUpOpacity, fadeUpY
  ]);

  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <motion.div
        ref={ref}
        style={{
          ...animationProps,
          ...customStyle
        }}
        transition={{
          duration,
          delay,
          type: "spring",
          stiffness: 120,
          damping: 20
        }}
        whileHover={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          transition: { duration: 0.3 }
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}