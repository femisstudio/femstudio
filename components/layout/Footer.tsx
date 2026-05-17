'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-darkGreen text-cream" aria-label="FemStudio site footer">
      {/* Top section with 4 columns */}
      <div className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Column 1 - Brand */}
          <div>
            <div className="h-20">
              <Image
                src="/images/brand/femstudio-logo-stacked.png"
                alt="FemStudio logo"
                width={120}
                height={160}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="font-cormorant-garamond text-base opacity-60 mt-4 max-w-xs">
              Premium brand photography and custom web design in Houston TX.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/femstudio__"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream hover:text-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-2 py-1"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                <span className="text-xs">FemStudio on Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/femstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream hover:text-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-2 py-1"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                <span className="text-xs">FemStudio on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Column 2 - Navigate */}
          <div>
            <h3 className="font-syncopate text-sm tracking-widest uppercase mb-6" style={{ color: '#c9a227' }}>
              Navigate
            </h3>
            <nav className="space-y-3">
              <Link
                href="/photography"
                aria-label="Go to Photography page"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                Photography
              </Link>
              <Link
                href="/web-design"
                aria-label="Go to Web Design page"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                Web Design
              </Link>
              <Link
                href="/about"
                aria-label="Go to About page"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                About
              </Link>
              <Link
                href="/contact"
                aria-label="Go to Contact page"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-syncopate text-sm tracking-widest uppercase mb-6" style={{ color: '#c9a227' }}>
              Services
            </h3>
            <nav className="space-y-3">
              <Link
                href="/photography?filter=headshots"
                aria-label="Corporate Headshots service"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                Corporate Headshots
              </Link>
              <Link
                href="/photography?filter=editorial"
                aria-label="Brand Photography service"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                Brand Photography
              </Link>
              <Link
                href="/web-design"
                aria-label="Custom Web Design service"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                Custom Web Design
              </Link>
              <Link
                href="/photography?filter=headshots"
                aria-label="Team Sessions service"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                Team Sessions
              </Link>
              <Link
                href="/photography?filter=editorial"
                aria-label="Branding Portraits service"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                Branding Portraits
              </Link>
            </nav>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-syncopate text-sm tracking-widest uppercase mb-6" style={{ color: '#c9a227' }}>
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:info@femsstudio.com"
                aria-label="Email FemStudio"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                info@femsstudio.com
              </a>
              <a
                href="tel:+12818183726"
                aria-label="Call FemStudio"
                className="font-cormorant-garamond text-base opacity-70 hover:opacity-100 hover:text-gold transition-colors duration-200 block focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
              >
                +1 (281) 818-3726
              </a>
              <p className="font-cormorant-garamond text-base opacity-70 block">Houston, TX</p>
              <Link
                href="/contact"
                className="inline-block font-syncopate text-xs tracking-widest rounded-full px-6 py-3 mt-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
                style={{ backgroundColor: '#c9a227', color: '#0f2d24' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b8a862')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#c9a227')}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 py-6 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-center md:text-left">
          <p className="font-syncopate text-xs opacity-60">
            © 2026 FemStudio. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end gap-4 items-center flex-wrap">
            <Link
              href="/privacy"
              aria-label="View Privacy Policy"
              className="font-syncopate text-xs opacity-60 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
            >
              Privacy Policy
            </Link>
            <div className="opacity-20">
              |
            </div>
            <Link
              href="/terms"
              aria-label="View Terms of Service"
              className="font-syncopate text-xs opacity-60 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-gold rounded-sm px-1"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
