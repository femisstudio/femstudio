'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/photography', label: 'Photography' },
  { href: '/web-design', label: 'Web Design' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      role="banner"
      className={`fixed top-0 z-50 flex w-full items-center justify-between border-b px-6 py-5 transition-all duration-300 md:px-10 ${
        scrolled || menuOpen
          ? 'border-cream/10 bg-darkGreen/92 shadow-sm backdrop-blur-md'
          : 'border-cream/10 bg-darkGreen/45 backdrop-blur-[2px]'
      }`}
    >
      <Link
        href="/"
        aria-label="FemStudio - return to homepage"
        className="focus-ring block w-[170px] rounded-sm md:w-[190px]"
        onClick={() => setMenuOpen(false)}
      >
        <Image
          src="/images/brand/femstudio-logo-horizontal.png"
          alt="FemStudio"
          width={190}
          height={45}
          sizes="(max-width: 768px) 170px, 190px"
          className="h-auto w-full drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
        />
      </Link>

      <nav aria-label="Main navigation" className="hidden items-center gap-10 font-serif text-lg italic md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="focus-ring rounded-sm text-cream transition-colors duration-200 hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/contact"
        aria-label="Start a project with FemStudio"
        className="focus-ring hidden rounded-full border border-cream/75 px-8 py-3 font-sans text-xs tracking-[0.22em] text-cream transition-colors duration-200 hover:border-gold hover:text-gold md:inline-flex"
      >
        START PROJECT
      </Link>

      <button
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        className="focus-ring inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-cream/60 bg-darkGreen/30 md:hidden"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`h-px w-5 bg-cream transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`h-px w-5 bg-cream transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`h-px w-5 bg-cream transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 top-[84px] z-40 bg-darkGreen/98 px-6 py-10 md:hidden"
        >
          <nav aria-label="Mobile navigation links" className="flex flex-col gap-8 font-serif text-4xl italic">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-sm text-cream"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="focus-ring mt-4 rounded-full border border-gold px-6 py-4 text-center font-sans text-sm not-italic tracking-[0.22em] text-gold"
              onClick={() => setMenuOpen(false)}
            >
              START PROJECT
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
