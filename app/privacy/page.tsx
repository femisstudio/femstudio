import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | FemStudio',
  description: 'Privacy Policy for FemStudio',
}

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream text-forest">
      <Header dark={true} />
      <div className="py-24 px-6 md:px-12 lg:px-20 max-w-3xl mx-auto">
        <h1 className="font-cormorant-garamond text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="font-cormorant-garamond text-lg text-forest/70">Coming soon.</p>
      </div>
      <Footer />
    </main>
  )
}
