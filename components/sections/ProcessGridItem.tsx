'use client'

import { useEffect, useRef, useState } from 'react'

interface Pill {
  text: string
}

interface ConditionalPill {
  text: string
  label: string
}

interface ProcessGridItemProps {
  number: string
  phase: string
  title: string
  description: string
  pills: Pill[]
  conditionalPill?: ConditionalPill
  index: number
}

export function ProcessGridItem({
  number,
  phase,
  title,
  description,
  pills,
  conditionalPill,
  index,
}: ProcessGridItemProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLDivElement>(null)
  const phaseRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const pillsRef = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const container = containerRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (container) {
            observer.unobserve(container)
          }
        }
      },
      { threshold: 0.15 }
    )

    if (container) {
      observer.observe(container)
    }

    const fallbackTimer = setTimeout(() => setIsVisible(true), 350)

    return () => {
      clearTimeout(fallbackTimer)
      if (container) {
        observer.unobserve(container)
      }
    }
  }, [])

  const getStyle = (delay: number, type: 'line' | 'number' | 'text' | 'pills') => {
    if (prefersReducedMotion) {
      return { opacity: 1, transform: 'none' }
    }

    const baseDelay = delay
    const isAnimating = isVisible

    switch (type) {
      case 'line':
        return {
          transformOrigin: 'top',
          transform: isAnimating ? 'scaleY(1)' : 'scaleY(0)',
          opacity: isAnimating ? 1 : 0,
          transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease`,
          transitionDelay: `${baseDelay}ms`,
        }
      case 'number':
        return {
          transform: isAnimating ? 'translateY(0)' : 'translateY(115px)',
          opacity: isAnimating ? 1 : 0,
          transition: `transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease`,
          transitionDelay: `${baseDelay}ms`,
        }
      case 'text':
        return {
          transform: isAnimating ? 'translateY(0)' : 'translateY(44px)',
          opacity: isAnimating ? 1 : 0,
          transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease`,
          transitionDelay: `${baseDelay + 100}ms`,
        }
      case 'pills':
        return {
          transform: isAnimating ? 'translateY(0)' : 'translateY(10px)',
          opacity: isAnimating ? 1 : 0,
          transition: `transform 0.6s ease, opacity 0.6s ease`,
          transitionDelay: `${baseDelay + 420}ms`,
        }
    }
  }

  return (
    <div ref={containerRef} className="grid grid-cols-[56px_1fr] md:grid-cols-[56px_140px_1fr] gap-6 md:gap-8 border-t border-cream/7 py-12 group hover:bg-[rgba(201,162,39,0.03)] transition-colors">
      {/* Column 1: Animated Vertical Line */}
      <div className="flex justify-center pt-2">
        <div
          ref={lineRef}
          className="w-px h-12 bg-gradient-to-b from-[rgba(201,162,39,0.5)] to-[rgba(201,162,39,0.05)]"
          style={getStyle(index * 150, 'line') as React.CSSProperties}
        />
      </div>

      {/* Column 2: Number + Phase Label */}
      <div className="flex flex-col items-center md:items-start">
        <div className="overflow-hidden h-[108px]">
          <div
            ref={numberRef}
            className="font-cormorant-garamond text-[108px] font-[300] leading-none"
            style={{
              color: 'transparent',
              WebkitTextStroke: '0.5px rgba(201,162,39,0.3)',
              ...getStyle(index * 150, 'number'),
            } as React.CSSProperties}
          >
            {number}
          </div>
        </div>
        <div
          ref={phaseRef}
          className="font-syncopate text-[8px] tracking-[0.22em] uppercase mt-2"
          style={{
            color: 'rgba(201,162,39,0.5)',
            opacity: isVisible ? 1 : 0,
            transition: prefersReducedMotion ? 'none' : `opacity 0.6s ease`,
            transitionDelay: `${index * 150 + 550}ms`,
          } as React.CSSProperties}
        >
          {phase}
        </div>
      </div>

      {/* Column 3: Title + Description + Pills */}
      <div>
        <div className="overflow-hidden mb-4">
          <h3
            ref={titleRef}
            className="font-cormorant-garamond text-3xl md:text-[36px] font-[300] italic text-cream leading-tight"
            style={getStyle(index * 150, 'text') as React.CSSProperties}
          >
            {title}
          </h3>
        </div>

        <p
          ref={descriptionRef}
          className="font-cormorant-garamond text-base md:text-[17px] font-[300] text-cream/[0.42] leading-[1.75] mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
            transition: prefersReducedMotion ? 'none' : `opacity 0.7s ease, transform 0.7s ease`,
            transitionDelay: `${index * 150 + 280}ms`,
          } as React.CSSProperties}
        >
          {description}
        </p>

        {/* Pills Container */}
        <div
          ref={pillsRef}
          className="flex flex-wrap gap-3"
          style={getStyle(index * 150, 'pills') as React.CSSProperties}
        >
          {/* Core Pills */}
          {pills.map((pill, pillIndex) => (
            <span
              key={pillIndex}
              className="inline-block font-syncopate text-[7px] tracking-[0.18em] uppercase px-[11px] py-[5px] border border-[rgba(201,162,39,0.2)] text-[rgba(201,162,39,0.65)] transition-all group-hover:border-[rgba(201,162,39,0.42)] group-hover:text-[#c9a227]"
            >
              {pill.text}
            </span>
          ))}

          {/* Conditional CMS Pill */}
          {conditionalPill && (
            <div className="w-full mt-2 pt-3 border-t border-[rgba(201,162,39,0.1)]">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[rgba(201,162,39,0.4)] font-syncopate text-[7px]">+</span>
                <span className="inline-block font-cormorant-garamond text-[12px] italic tracking-[0.04em] text-[rgba(252,251,247,0.3)] px-[11px] py-[5px] border border-[rgba(252,251,247,0.12)]">
                  {conditionalPill.text}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[20px] h-px bg-[rgba(252,251,247,0.15)]" />
                <span className="font-syncopate text-[7.5px] text-[rgba(252,251,247,0.2)] leading-relaxed">
                  {conditionalPill.label}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
