import { ReactNode } from 'react'

type BackgroundColor = 'cream' | 'dark-green' | 'white' | 'transparent'
type PaddingSize = 'standard' | 'large' | 'none'

interface SectionWrapperProps {
  background?: BackgroundColor
  padding?: PaddingSize
  children: ReactNode
  className?: string
  id?: string
  ariaLabel: string
}

export function SectionWrapper({
  background = 'white',
  padding = 'standard',
  children,
  className = '',
  id,
  ariaLabel,
}: SectionWrapperProps) {
  const bgMap = {
    cream: 'bg-cream',
    'dark-green': 'bg-dark-green',
    white: 'bg-white',
    transparent: 'bg-transparent',
  }

  const paddingMap = {
    standard: 'py-20 px-6 md:px-12 lg:px-20',
    large: 'py-32 px-6 md:px-12 lg:px-20',
    none: '',
  }

  return (
    <section
      id={id}
      className={`${bgMap[background]} ${paddingMap[padding]} w-full ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  )
}

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
}

export function Container({ children, className = '', as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={`max-w-7xl mx-auto w-full px-6 ${className}`}>
      {children}
    </Component>
  )
}

interface SplitSectionProps {
  left: ReactNode
  right: ReactNode
  reversed?: boolean
  ratio?: string
  className?: string
  align?: 'top' | 'center' | 'bottom'
}

export function SplitSection({
  left,
  right,
  reversed = false,
  ratio = 'lg:grid-cols-2',
  className = '',
  align = 'center',
}: SplitSectionProps) {
  const alignMap = {
    top: 'items-start',
    center: 'items-center',
    bottom: 'items-end',
  }

  return (
    <div className={`grid grid-cols-1 ${ratio} gap-8 lg:gap-12 ${alignMap[align]} ${reversed ? 'lg:grid-cols-[2fr_1fr]' : ''} ${className}`}>
      <div>{reversed ? right : left}</div>
      <div>{reversed ? left : right}</div>
    </div>
  )
}

interface CenteredSectionProps {
  eyebrow?: string
  heading?: ReactNode
  subheading?: string
  children?: ReactNode
  className?: string
}

export function CenteredSection({
  eyebrow,
  heading,
  subheading,
  children,
  className = '',
}: CenteredSectionProps) {
  return (
    <div className={`text-center max-w-2xl mx-auto ${className}`}>
      {eyebrow && <p className="text-gold font-syncopate text-xs tracking-widest mb-4 uppercase">{eyebrow}</p>}
      {heading && <div className="mb-4">{heading}</div>}
      {subheading && <p className="text-forest-green opacity-70 font-serif text-lg mb-8">{subheading}</p>}
      {children}
    </div>
  )
}

type GridColumns = 2 | 3 | 4
type GapSize = 'tight' | 'standard' | 'loose'

interface GridSectionProps {
  columns?: GridColumns
  gap?: GapSize
  children: ReactNode
  className?: string
}

export function GridSection({
  columns = 3,
  gap = 'standard',
  children,
  className = '',
}: GridSectionProps) {
  const colMap = {
    2: 'md:grid-cols-2 lg:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  const gapMap = {
    tight: 'gap-2',
    standard: 'gap-6',
    loose: 'gap-12',
  }

  return (
    <div className={`grid grid-cols-1 ${colMap[columns]} ${gapMap[gap]} ${className}`}>
      {children}
    </div>
  )
}
