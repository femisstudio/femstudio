import Link from 'next/link'

export default function PhotographyBookingCTA() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-forest border-t border-cream/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-cream tracking-tighter leading-none mb-6 uppercase">
          Ready to Book?
        </h2>
        <p className="font-serif italic text-lg md:text-xl text-cream/70 mb-12 max-w-2xl mx-auto">
          Sessions are available by appointment. Reach out and let&apos;s create something.
        </p>
        <Link
          href="/contact?service=photography"
          className="focus-ring inline-block font-sans text-xs tracking-widest uppercase border-2 border-gold text-gold rounded-full px-8 md:px-10 py-3 md:py-4 hover:bg-gold hover:text-forest transition-all duration-300"
        >
          Inquire About a Session
        </Link>
      </div>
    </section>
  )
}
