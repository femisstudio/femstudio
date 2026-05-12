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
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })
  const numberRef = useParallax<HTMLParagraphElement>(0.4)

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <article
      ref={ref}
      className="grid grid-cols-[auto_1fr] gap-8 md:gap-12"
    >
      <div className="flex flex-shrink-0 items-start pt-1 will-change-transform will-change-opacity">
        <p
          ref={numberRef}
          className="font-sans text-4xl font-bold text-gold/20 md:text-5xl"
          style={{
            transform: !prefersReducedMotion && !isVisible ? 'scale(1.8)' : 'scale(1)',
            opacity: !prefersReducedMotion && !isVisible ? 0 : 0.6,
            transition: prefersReducedMotion
              ? 'none'
              : `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out`,
            transitionDelay: `${index * 150}ms`,
          }}
        >
          0{index + 1}
        </p>
      </div>
      <div>
        <h3
          className="mb-4 font-serif text-2xl italic text-cream md:text-3xl will-change-transform will-change-opacity"
          style={{
            transform: !prefersReducedMotion && !isVisible ? 'translateY(20px)' : 'translateY(0)',
            opacity: !prefersReducedMotion && !isVisible ? 0 : 1,
            transition: prefersReducedMotion
              ? 'none'
              : `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out`,
            transitionDelay: `${100 + index * 150}ms`,
          }}
        >
          {value.title}
        </h3>
        <p
          className="font-serif italic text-base leading-relaxed text-cream/75 md:text-lg will-change-transform will-change-opacity"
          style={{
            transform: !prefersReducedMotion && !isVisible ? 'translateY(20px)' : 'translateY(0)',
            opacity: !prefersReducedMotion && !isVisible ? 0 : 0.6,
            transition: prefersReducedMotion
              ? 'none'
              : `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out`,
            transitionDelay: `${100 + index * 150}ms`,
          }}
        >
          {value.desc}
        </p>
      </div>
    </article>
  )
}
