import { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  color?: string
}

export function DisplayText({
  children,
  className = '',
  as: Component = 'h1',
  color = 'text-forest-green',
}: TypographyProps) {
  return (
    <Component className={`font-cormorant italic font-bold text-3xl md:text-4xl lg:text-5xl ${color} leading-tight ${className}`}>
      {children}
    </Component>
  )
}

export function Heading({
  children,
  className = '',
  as: Component = 'h2',
  color = 'text-forest-green',
}: TypographyProps) {
  return (
    <Component className={`font-cormorant font-bold text-2xl md:text-3xl ${color} leading-snug ${className}`}>
      {children}
    </Component>
  )
}

export function Eyebrow({
  children,
  className = '',
  color = 'text-gold',
}: TypographyProps) {
  return (
    <p className={`font-syncopate text-xs tracking-widest font-medium ${color} uppercase ${className}`}>
      {children}
    </p>
  )
}

export function BodyText({
  children,
  className = '',
  as: Component = 'p',
  color = 'text-forest-green',
}: TypographyProps) {
  return (
    <Component className={`${color} opacity-80 text-base leading-relaxed max-w-prose ${className}`}>
      {children}
    </Component>
  )
}

export function Caption({
  children,
  className = '',
  as: Component = 'p',
}: TypographyProps) {
  return (
    <Component className={`font-syncopate text-xs tracking-wide text-forest-green opacity-60 ${className}`}>
      {children}
    </Component>
  )
}

export function NavLink({
  children,
  className = '',
  href = '#',
  isActive = false,
}: TypographyProps & { href?: string; isActive?: boolean }) {
  return (
    <a
      href={href}
      className={`font-syncopate text-xs tracking-widest text-forest-green transition-colors duration-200 ${
        isActive ? 'text-gold opacity-100 border-b-2 border-gold' : 'opacity-80 hover:text-gold hover:opacity-100'
      } ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  )
}

export function BlockQuote({
  children,
  className = '',
}: TypographyProps) {
  return (
    <blockquote className={`font-cormorant italic text-2xl text-gold border-l-4 border-gold pl-6 ${className}`}>
      {children}
    </blockquote>
  )
}
