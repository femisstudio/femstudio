import Image from 'next/image'
import Link from 'next/link'

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon'
  className?: string
  href?: string
}

export default function BrandLogo({
  variant = 'horizontal',
  className = '',
  href = '/',
}: BrandLogoProps) {
  const logoPaths = {
    horizontal: '/images/brand/femstudio-logo-horizontal.png',
    stacked: '/images/brand/femstudio-logo-stacked.png',
    icon: '/images/brand/femstudio-icon.png',
  }

  const sizes = {
    horizontal: 120,
    stacked: 80,
    icon: 64,
  }

  const heights = {
    horizontal: 40,
    stacked: 80,
    icon: 64,
  }

  const logoContent = (
    <Image
      src={logoPaths[variant]}
      alt="FemStudio — Houston Brand Photography and Web Design"
      width={sizes[variant]}
      height={heights[variant]}
      className={`h-auto ${className}`}
      priority
    />
  )

  return (
    <Link href={href} aria-label="FemStudio home" className="inline-block focus:outline-none focus:ring-2 focus:ring-gold rounded-lg">
      {logoContent}
    </Link>
  )
}
