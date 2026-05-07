interface StatBlockProps {
  value: string
  label: string
  className?: string
}

export default function StatBlock({ value, label, className = '' }: StatBlockProps) {
  return (
    <figure className={className}>
      <p className="font-cormorant font-bold text-4xl text-forest-green">{value}</p>
      <figcaption className="font-syncopate text-xs tracking-widest text-forest-green opacity-60 mt-1 uppercase">
        {label}
      </figcaption>
    </figure>
  )
}
