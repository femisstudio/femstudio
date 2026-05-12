'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number | number[]
  rootMargin?: string
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>({
  threshold = 0.2,
  rootMargin = '0px',
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Disconnect after animation completes to avoid memory leaks
          if (observerRef.current && ref.current) {
            observerRef.current.unobserve(ref.current)
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
      observerRef.current = observer
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, rootMargin, prefersReducedMotion])

  return { ref, isVisible }
}
