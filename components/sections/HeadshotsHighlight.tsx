'use client'

import Image from 'next/image'

const headshotImages = [
  {
    src: '/images/headshots/professional-headshot-houston-01.jpg',
    alt: 'Professional business headshot',
  },
  {
    src: '/images/headshots/professional-headshot-houston-02.jpg',
    alt: 'Professional headshot of executive',
  },
  {
    src: '/images/headshots/professional-headshot-houston-03.jpg',
    alt: 'Professional headshot',
  },
  {
    src: '/images/headshots/professional-headshot-houston-04.jpg',
    alt: 'Professional headshot',
  },
]

export default function HeadshotsHighlight() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-darkGreen border-t border-cream/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-cream tracking-tighter leading-none mb-6">
              PROFESSIONAL
              <br />
              HEADSHOTS
            </h2>
            <p className="font-serif italic text-lg md:text-xl text-gold max-w-lg">
              Corporate sessions available for individuals and teams in Houston.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {headshotImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 md:w-56 h-64 md:h-80 overflow-hidden border-2 border-gold/30 rounded-lg relative group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
