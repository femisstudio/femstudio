'use client'

import Image from 'next/image'

export default function PhotographyMosaicHero() {
  // Using available 4 images, cycling to fill 19 slots
  const availableImages = [
    '/images/headshots/professional-headshot-houston-01.jpg',
    '/images/headshots/professional-headshot-houston-02.jpg',
    '/images/headshots/professional-headshot-houston-03.jpg',
    '/images/headshots/professional-headshot-houston-04.jpg',
  ]

  const headshots = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    src: availableImages[i % availableImages.length],
  }))

  return (
    <section className="w-screen relative left-1/2 right-1/2 -mx-1/2 bg-darkGreen overflow-hidden" style={{ height: '80vh', minHeight: '80vh' }}>
      <div className="w-full h-full grid gap-0" style={{
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridAutoRows: 'minmax(200px, auto)',
      }}>
        {/* Top section: 4 columns (1fr 1fr 1fr 2fr) - positions 0-3 */}
        {headshots.slice(0, 3).map((shot, idx) => (
          <div key={`top-${idx}`} className="relative overflow-hidden bg-darkGreen" style={{ aspectRatio: '1/1.2' }}>
            <Image
              src={shot.src}
              alt="Professional corporate headshot by FemStudio Houston"
              fill
              className="object-cover object-top"
              quality={85}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}

        {/* Top right wide tile */}
        <div key="top-right" className="relative overflow-hidden bg-darkGreen col-span-2" style={{ aspectRatio: '2/1.2' }}>
          <Image
            src={headshots[3].src}
            alt="Professional corporate headshot by FemStudio Houston"
            fill
            className="object-cover object-top"
            quality={85}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Middle rows: 5 columns equal */}
        {headshots.slice(4, 9).map((shot, idx) => (
          <div key={`middle-${idx}`} className="relative overflow-hidden bg-darkGreen" style={{ aspectRatio: '1/1' }}>
            <Image
              src={shot.src}
              alt="Professional corporate headshot by FemStudio Houston"
              fill
              className="object-cover object-top"
              quality={85}
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
        ))}

        {/* Logo section - center position with col-span-2 */}
        <div className="relative overflow-hidden bg-white col-span-2 flex items-center justify-center" style={{ aspectRatio: '2/1' }}>
          <Image
            src="/images/brand/femstudio-logo-stacked.png"
            alt="FemStudio logo"
            fill
            className="object-contain p-6"
            quality={90}
          />
        </div>

        {/* Right side of logo row */}
        {headshots.slice(9, 12).map((shot, idx) => (
          <div key={`logo-right-${idx}`} className="relative overflow-hidden bg-darkGreen" style={{ aspectRatio: '1/1' }}>
            <Image
              src={shot.src}
              alt="Professional corporate headshot by FemStudio Houston"
              fill
              className="object-cover object-top"
              quality={85}
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
        ))}

        {/* Bottom rows: 5 columns equal */}
        {headshots.slice(12, 19).map((shot, idx) => (
          <div key={`bottom-${idx}`} className="relative overflow-hidden bg-darkGreen" style={{ aspectRatio: '1/1' }}>
            <Image
              src={shot.src}
              alt="Professional corporate headshot by FemStudio Houston"
              fill
              className="object-cover object-top"
              quality={85}
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
