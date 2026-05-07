'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  ariaLabel?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  ariaLabel,
  disabled = false,
  type = 'button',
  loading = false,
}: ButtonProps) {
  const baseStyles = 'rounded-full px-6 py-3 font-syncopate text-xs tracking-widest transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none min-h-11 min-w-11'

  const variants = {
    primary: `${baseStyles} bg-forest-green text-cream hover:bg-dark-green active:bg-dark-green active:scale-95 transition-transform duration-100`,
    secondary: `${baseStyles} bg-transparent border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-cream active:bg-dark-green active:text-cream active:scale-95`,
    tertiary: `${baseStyles} bg-transparent text-gold underline-offset-4 hover:underline hover:brightness-110 active:brightness-75 active:scale-95`,
  }

  const buttonContent = loading ? (
    <>
      <span className="inline-block animate-spin mr-2">⟳</span>
      PLEASE WAIT...
    </>
  ) : (
    children
  )

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={`${variants[variant]} ${className} inline-flex items-center justify-center`}
        aria-label={ariaLabel}
        role="button"
      >
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} ${className} inline-flex items-center justify-center`}
      aria-label={ariaLabel}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
    >
      {buttonContent}
    </button>
  )
}
