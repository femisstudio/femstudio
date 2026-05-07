'use client'

import Image from 'next/image'

const processes = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We clarify audience, goals, content, and the first actions your visitors need to take.',
    image: '/images/webdesign/web-design-houston-tarro-law.jpg',
    alt: 'Strategy and discovery process',
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'We shape the look, flow, and structure so the site feels refined and easy to use.',
    image: '/images/webdesign/web-design-houston-example.jpg',
    alt: 'Design and prototyping mockups',
  },
  {
    number: '03',
    title: 'Development & Launch',
    description:
      'We build responsive pages, tune performance, and prepare your site for launch.',
    image: '/images/webdesign/web-design-houston-tarro-law.jpg',
    alt: 'Development and code',
  },
]

export default function DigitalAlchemy() {
  return (
    <section className="w-full py-32 px-8 md:px-24 bg-darkGreen relative border-t border-cream/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left: Sticky Title */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-cream tracking-tighter leading-none mb-2">
            DIGITAL
          </h2>
          <h2 className="text-4xl md:text-5xl font-sans text-gold tracking-tighter leading-none mb-8">
            ALCHEMY
          </h2>
          <p className="font-serif text-lg text-cream/60 italic mb-12">
            We don&apos;t just build websites; we craft digital empires. Our process merges strategic logic with refined aesthetics.
          </p>
          <div className="flex gap-4 font-sans text-[10px] tracking-widest border-t border-b border-cream/10 py-4">
            <span className="text-gold">01 DISCOVERY</span>
            <span className="text-cream/30">02 DESIGN</span>
            <span className="text-cream/30">03 BUILD</span>
          </div>
        </div>

        {/* Right: Process Steps */}
        <div className="w-full md:w-2/3 space-y-24">
          {processes.map((step, index) => (
            <div key={step.number} className="relative pl-12 border-l border-cream/10">
              <div className={`absolute -left-[5px] top-2 w-2 h-2 rounded-full ${index === 0 ? 'bg-gold' : 'bg-cream/30'}`} />
              <span className={`font-sans text-xs tracking-widest ${index === 0 ? 'text-gold' : 'text-cream/50'} mb-2 block`}>
                {step.number} {step.title}
              </span>
              <p className="font-serif text-cream/70 text-lg mb-8 italic">{step.description}</p>
              <div className="h-64 w-full rounded-lg overflow-hidden border border-cream/10 relative">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover grayscale opacity-70 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
