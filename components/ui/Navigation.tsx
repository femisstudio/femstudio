'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface NavLink {
  label: string
  href: string
  current?: boolean
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: NavLink[]
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <dialog
      open={isOpen}
      className="fixed inset-0 z-50 bg-forest-green/95 backdrop-blur-sm animate-slide-up"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-cream text-3xl focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close navigation menu"
        >
          ✕
        </button>
        <nav className="space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-cormorant italic text-4xl text-cream hover:text-gold transition-colors duration-200 ${
                link.current ? 'text-gold border-b-2 border-gold' : ''
              }`}
              aria-current={link.current ? 'page' : undefined}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </dialog>
  )
}

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 bg-gold text-forest-green px-4 py-2 z-50 rounded-full font-syncopate text-xs tracking-widest opacity-0 focus:opacity-100 transition-opacity duration-200"
    >
      Skip to main content
    </a>
  )
}
