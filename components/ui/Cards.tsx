'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Heading, BodyText, Caption, BlockQuote } from './Typography'
import Button from './Button'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  className?: string
}

export function ServiceCard({ icon, title, description, href, className = '' }: ServiceCardProps) {
  return (
    <Link href={href}>
      <article
        className={`bg-cream border-b-2 border-transparent p-8 rounded-lg hover:border-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${className}`}
        aria-label={title}
      >
        <div className="mb-4 text-3xl">{icon}</div>
        <Heading className="mb-3">{title}</Heading>
        <BodyText className="mb-6">{description}</BodyText>
        <Button variant="tertiary" className="text-gold">
          Learn More
        </Button>
      </article>
    </Link>
  )
}

interface PortfolioCardProps {
  src: string
  alt: string
  category: string
  href?: string
  priority?: boolean
  sizes?: string
  className?: string
}

export function PortfolioCard({
  src,
  alt,
  category,
  href,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className = '',
}: PortfolioCardProps) {
  const inner = (
    <div className={`relative overflow-hidden rounded-lg group cursor-pointer ${className}`}>
      <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          quality={85}
          priority={priority}
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-forest-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-syncopate text-xs tracking-widest text-cream">{category}</p>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus:ring-2 focus:ring-gold rounded-lg" aria-label={`${alt} - ${category}`}>
        {inner}
      </Link>
    )
  }

  return <div className="focus:outline-none focus:ring-2 focus:ring-gold rounded-lg">{inner}</div>
}

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  company: string
  className?: string
}

export function TestimonialCard({ quote, name, title, company, className = '' }: TestimonialCardProps) {
  return (
    <figure className={`bg-cream p-8 rounded-lg shadow-md ${className}`}>
      <span className="text-6xl text-gold opacity-30 absolute -top-4 -left-4" aria-hidden="true">
        &ldquo;
      </span>
      <BlockQuote className="mb-6">{quote}</BlockQuote>
      <figcaption className="pt-4 border-t border-forest-green border-opacity-20">
        <Heading as="h3" className="mb-1">
          {name}
        </Heading>
        <Caption>
          {title}, {company}
        </Caption>
      </figcaption>
    </figure>
  )
}
