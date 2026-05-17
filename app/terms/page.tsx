import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | FemStudio',
  description: 'Terms of Service for FemStudio',
}

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-darkGreen text-cream">
      <Header dark={false} />
      <div className="py-24 px-6 md:px-12 lg:px-20 max-w-3xl mx-auto">
        <h1 className="font-cormorant-garamond text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="font-cormorant-garamond text-lg text-cream/70">Our complete terms of service are coming soon. For questions, contact us at info@femsstudio.com.</p>
      </div>
      <Footer />
    </main>
  )
}
