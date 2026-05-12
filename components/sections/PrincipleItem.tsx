'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useParallax } from '@/hooks/useParallax'

interface Value {
  title: string
  desc: string
}

interface PrincipleItemProps {
  value: Value
  index: number
}

export function PrincipleItem({ value, index }: PrincipleItemProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 })
  const numberRef = useParallax<HTMLParagraphElement>(0.4)

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const numberOpacity = prefersReducedMotion ? 0.5 : isVisible ? 0.5 : 0.3
  const numberScale = prefersReducedMotion ? 1 : isVisible ? 1 : 1.1
  const textOpacity = prefersReducedMotion ? 1 : isVisible ? 1 : 0
  const textTransform = prefersReducedMotion ? 0 : isVisible ? 0 : 16

  return (
    <article
      ref={ref}
      className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start will-change-transform will-change-opacity"
    >
      <p
        ref={numberRef}
        className="font-cormorant-garamond font-bold text-7xl md:text-8xl leading-none"
        style={{
          color: '#c9a227',
          opacity: numberOpacity,
          transform: `scale(${numberScale})`,
          transition: prefersReducedMotion
            ? 'none'
            : `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
          transitionDelay: `${index * 150}ms`,
          willChange: 'opacity, transform',
        }}
      >
        0{index + 1}
      </p>
      <div>
        <h3
          className="font-cormorant-garamond italic text-2xl md:text-3xl text-cream mb-2 will-change-transform will-change-opacity"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTransform}px)`,
            transition: prefersReducedMotion
              ? 'none'
              : `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
            transitionDelay: `${index * 150}ms`,
            willChange: 'opacity, transform',
          }}
        >
          {value.title}
        </h3>
        <p
          className="font-cormorant-garamond italic text-base md:text-lg text-cream will-change-transform will-change-opacity"
          style={{
            opacity: textOpacity * 0.6,
            transform: `translateY(${textTransform}px)`,
            transition: prefersReducedMotion
              ? 'none'
              : `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
            transitionDelay: `${index * 150}ms`,
            willChange: 'opacity, transform',
          }}
        >
          {value.desc}
        </p>
      </div>
    </article>
  )
}
