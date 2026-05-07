'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ImageTileProps {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
  href?: string
  category?: string
  aspectRatio?: string
}

export default function ImageTile({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 768px) 33vw, 20vw',
  className = '',
  href,
  category,
  aspectRatio = 'aspect-square',
}: ImageTileProps) {
  const inner = (
    <div className={`relative overflow-hidden group cursor-pointer ${aspectRatio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        quality={85}
        priority={priority}
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-forest-green/50 opacity-0 group-hover:opacity-100 active:bg-forest-green/70 active:scale-95 transition-all duration-300" />
      {category && (
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-syncopate text-xs tracking-widest text-cream">{category}</p>
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus:ring-2 focus:ring-gold rounded-lg" aria-label={alt}>
        {inner}
      </Link>
    )
  }

  return <div className="focus:outline-none focus:ring-2 focus:ring-gold rounded-lg">{inner}</div>
}
