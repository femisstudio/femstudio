'use client'

import { useEffect, useRef } from 'react'

export function useParallax<T extends HTMLElement = HTMLElement>(speed: number = 0.4) {
  const ref = useRef<T>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Disable parallax on mobile for performance
    const isMobile = window.innerWidth < 768

    if (prefersReducedMotion || isMobile) {
      return
    }

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        if (ref.current) {
          const scrollOffset = window.scrollY
          const translateY = scrollOffset * speed * -1
          ref.current.style.transform = `translateY(${translateY}px)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [speed])

  return ref
}
