import Link from 'next/link'

export default function PhotographyCTA() {
  return (
    <section className="w-full bg-darkGreen px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 font-serif text-4xl italic leading-tight text-cream md:text-5xl">
          Ready to look the part?
        </h2>
        <p className="mb-12 font-serif text-xl text-cream opacity-70">
          Individual headshot sessions start at <span className="text-gold font-serif">$175</span>. Team packages available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-sans text-xs tracking-widest font-bold text-darkGreen transition-all duration-200 hover:opacity-90"
          >
            BOOK YOUR HEADSHOT SESSION
          </Link>
          <Link
            href="/contact?pricing=true"
            className="focus-ring inline-flex items-center justify-center rounded-full border-2 border-gold px-8 py-4 font-sans text-xs tracking-widest font-bold text-gold transition-all duration-200 hover:bg-gold/10"
          >
            VIEW PRICING
          </Link>
        </div>
      </div>
    </section>
  )
}
