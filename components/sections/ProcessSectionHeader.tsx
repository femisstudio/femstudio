'use client'

import { useEffect, useRef, useState } from 'react'

interface ProcessSectionHeaderProps {
  eyebrow: string
  heading: string
  subtext: string
}

export function ProcessSectionHeader({ eyebrow, heading, subtext }: ProcessSectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const header = headerRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (header) {
            observer.unobserve(header)
          }
        }
      },
      { threshold: 0.3 }
    )

    if (header) {
      observer.observe(header)
    }

    const fallbackTimer = setTimeout(() => setIsVisible(true), 350)

    return () => {
      clearTimeout(fallbackTimer)
      if (header) {
        observer.unobserve(header)
      }
    }
  }, [])

  return (
    <div ref={headerRef} className="mb-16 pt-12">
      {/* Animated Gold Bar */}
      <div
        ref={barRef}
        className="h-px bg-gradient-to-r from-[#c9a227] to-transparent mb-8"
        style={{
          transform: isVisible && !prefersReducedMotion ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: prefersReducedMotion ? 'none' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        } as React.CSSProperties}
      />

      {/* Header Layout: Flex row, space-between, align flex-end */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-12">
        {/* Left Side: Eyebrow + Heading */}
        <div className="flex-1">
          {/* Eyebrow */}
          <p
            ref={eyebrowRef}
            className="font-syncopate text-[9px] tracking-[0.3em] uppercase text-gold mb-4"
            style={{
              opacity: isVisible && !prefersReducedMotion ? 1 : 0,
              transition: prefersReducedMotion ? 'none' : 'opacity 0.6s ease',
              transitionDelay: '100ms',
            }}
          >
            {eyebrow}
          </p>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="font-cormorant-garamond text-[68px] font-[300] italic text-cream leading-[0.9]"
            style={{
              opacity: isVisible && !prefersReducedMotion ? 1 : 0,
              transition: prefersReducedMotion ? 'none' : 'opacity 0.6s ease',
              transitionDelay: '150ms',
            }}
          >
            {heading}
          </h2>
        </div>

        {/* Right Side: Subtext - aligned to bottom */}
        <p className="max-w-[280px] font-cormorant-garamond text-base md:text-[17px] font-[300] text-cream/[0.38] leading-relaxed"
          style={{
            opacity: isVisible && !prefersReducedMotion ? 1 : 0,
            transition: prefersReducedMotion ? 'none' : 'opacity 0.6s ease',
            transitionDelay: '200ms',
          }}>
          {subtext}
        </p>
      </div>
    </div>
  )
}
