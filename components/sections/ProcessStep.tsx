'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useParallax } from '@/hooks/useParallax'

interface Step {
  step: string
  title: string
  description: string
}

interface ProcessStepProps {
  step: Step
  index: number
}

export function ProcessStep({ step, index }: ProcessStepProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const numberRef = useParallax<HTMLParagraphElement>(0.4)

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div
      ref={ref}
      className="relative pl-12 md:pl-16 pb-10 md:pb-12 last:pb-0"
    >
      <div
        className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center will-change-transform will-change-opacity"
        style={{ borderColor: 'rgba(201, 162, 39, 0.4)', backgroundColor: '#0f2d24' }}
      >
        <p
          ref={numberRef}
          className="font-syncopate text-xs"
          style={{
            color: '#c9a227',
            transform: !prefersReducedMotion && !isVisible ? 'scale(1.8)' : 'scale(1)',
            opacity: !prefersReducedMotion && !isVisible ? 0 : 0.6,
            transition: prefersReducedMotion
              ? 'none'
              : `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out`,
            transitionDelay: `${index * 150}ms`,
          }}
        >
          {step.step}
        </p>
      </div>
      <h3
        className="font-cormorant-garamond italic text-2xl md:text-3xl text-cream mb-2 mt-1 will-change-transform will-change-opacity"
        style={{
          transform: !prefersReducedMotion && !isVisible ? 'translateY(20px)' : 'translateY(0)',
          opacity: !prefersReducedMotion && !isVisible ? 0 : 1,
          transition: prefersReducedMotion
            ? 'none'
            : `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out`,
          transitionDelay: `${100 + index * 150}ms`,
        }}
      >
        {step.title}
      </h3>
      <p
        className="font-cormorant-garamond italic text-base md:text-lg text-cream opacity-75 will-change-transform will-change-opacity"
        style={{
          transform: !prefersReducedMotion && !isVisible ? 'translateY(20px)' : 'translateY(0)',
          opacity: !prefersReducedMotion && !isVisible ? 0 : 0.6,
          transition: prefersReducedMotion
            ? 'none'
            : `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out`,
          transitionDelay: `${100 + index * 150}ms`,
        }}
      >
        {step.description}
      </p>
    </div>
  )
}
