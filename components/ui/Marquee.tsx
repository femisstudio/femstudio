'use client'

type BackgroundColor = 'cream' | 'dark-green'

interface MarqueeProps {
  items: string[]
  speed?: 'slow' | 'normal' | 'fast'
  background?: BackgroundColor
  className?: string
}

export default function Marquee({
  items,
  speed = 'normal',
  background = 'dark-green',
  className = '',
}: MarqueeProps) {
  const bgMap = {
    cream: 'bg-cream text-forest-green',
    'dark-green': 'bg-forest-green text-cream',
  }

  const speedMap = {
    slow: 'marquee-slow',
    normal: 'animate-marquee',
    fast: 'marquee-fast',
  }

  const duplicatedItems = [...items, ...items]

  return (
    <div
      className={`${bgMap[background]} overflow-hidden py-6 ${className}`}
      aria-hidden="true"
    >
      <div className={`flex ${speedMap[speed]} gap-8 mx-0`} style={{ minWidth: '200%' }}>
        {duplicatedItems.map((item, idx) => (
          <span key={idx} className="font-syncopate text-xs tracking-widest whitespace-nowrap flex items-center gap-2">
            {item}
            <span className="text-gold">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
