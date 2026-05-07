interface FilterTabProps {
  label: string
  isActive: boolean
  onClick: () => void
  count?: number
  className?: string
}

export default function FilterTab({
  label,
  isActive,
  onClick,
  count,
  className = '',
}: FilterTabProps) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={onClick}
      className={`font-syncopate text-xs tracking-widest pb-2 border-b-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold ${
        isActive
          ? 'text-gold opacity-100 border-b-2 border-gold'
          : 'text-cream opacity-60 border-transparent hover:opacity-100 cursor-pointer'
      } ${className}`}
    >
      {label}
      {count !== undefined && <span className="ml-2">({count})</span>}
    </button>
  )
}
