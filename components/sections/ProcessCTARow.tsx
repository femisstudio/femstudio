'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'

export function ProcessCTARow() {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const row = rowRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (row) {
            observer.unobserve(row)
          }
        }
      },
      { threshold: 0.15 }
    )

    if (row) {
      observer.observe(row)
    }

    const fallbackTimer = setTimeout(() => setIsVisible(true), 350)

    return () => {
      clearTimeout(fallbackTimer)
      if (row) {
        observer.unobserve(row)
      }
    }
  }, [])

  return (
    <div
      ref={rowRef}
      className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-cream/7 py-12 gap-6 md:gap-0"
      style={{
        opacity: isVisible && !prefersReducedMotion ? 1 : 0,
        transform: isVisible && !prefersReducedMotion ? 'translateY(0)' : 'translateY(10px)',
        transition: prefersReducedMotion ? 'none' : `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: '350ms',
      }}
    >
      <span className="font-syncopate text-[9px] tracking-[0.3em] uppercase text-cream/25">
        Ready to begin?
      </span>

      <Button
        href="/contact?service=web-design"
        variant="primary"
        ariaLabel="Start a web design project"
      >
        Start a Project
      </Button>
    </div>
  )
}
