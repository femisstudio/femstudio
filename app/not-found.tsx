import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | FemStudio Houston' },
  description:
    'This page could not be found. Explore FemStudio professional headshots, brand photography, and custom web design in Houston, TX.',
  robots: { index: false, follow: true },
}

const links = [
  { href: '/', label: 'Home', note: 'Start from the FemStudio homepage' },
  { href: '/photography', label: 'Photography', note: 'Headshots and brand photography in Houston' },
  { href: '/web-design', label: 'Web Design', note: 'Custom websites for Houston businesses' },
  { href: '/contact', label: 'Contact', note: 'Book a session or start a project' },
]

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-darkGreen text-cream">
      <Header dark={false} />
      <div className="py-24 px-6 md:px-12 lg:px-20 max-w-3xl mx-auto">
        <p className="font-syncopate text-xs tracking-[0.3em] uppercase text-cream/60 mb-6">Error 404</p>
        <h1 className="font-cormorant-garamond text-4xl md:text-6xl font-bold mb-6">
          This frame didn&apos;t make the final edit.
        </h1>
        <p className="font-cormorant-garamond text-lg md:text-xl text-cream/70 mb-12">
          The page you&apos;re looking for may have moved or no longer exists. Here&apos;s where to go next.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block h-full border border-cream/20 px-6 py-5 transition-colors hover:border-cream/60 focus-visible:border-cream"
              >
                <span className="block font-syncopate text-sm tracking-[0.2em] uppercase mb-2">{link.label}</span>
                <span className="block font-cormorant-garamond text-base text-cream/70">{link.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  )
}
