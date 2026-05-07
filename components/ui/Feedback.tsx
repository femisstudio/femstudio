'use client'

import { useEffect } from 'react'

interface ToastProps {
  type: 'success' | 'error' | 'warning'
  message: string
  isVisible: boolean
  onDismiss: () => void
}

export function Toast({ type, message, isVisible, onDismiss }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onDismiss, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onDismiss])

  if (!isVisible) return null

  const bgMap = {
    success: 'bg-green-800',
    error: 'bg-red-800',
    warning: 'bg-gold',
  }

  const iconMap = {
    success: '✓',
    error: '✕',
    warning: '⚠',
  }

  return (
    <div
      className={`fixed top-6 right-6 z-50 ${bgMap[type]} text-cream px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 animate-slide-up`}
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
    >
      <span className="text-xl">{iconMap[type]}</span>
      <span>{message}</span>
      <button
        onClick={onDismiss}
        aria-label="Dismiss notification"
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-green focus:ring-gold ml-4"
      >
        ✕
      </button>
    </div>
  )
}

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'gold' | 'cream' | 'dark-green'
  label?: string
}

export function LoadingSpinner({ size = 'md', color = 'gold', label = 'Loading' }: LoadingSpinnerProps) {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  const colorMap = {
    gold: 'border-gold',
    cream: 'border-cream',
    'dark-green': 'border-dark-green',
  }

  return (
    <span
      role="status"
      aria-label={label}
      className={`inline-block ${sizeMap[size]} border-2 border-transparent ${colorMap[color]} rounded-full animate-spin`}
    >
      <span className="sr-only">{label}</span>
    </span>
  )
}

interface BadgeProps {
  label: string
  variant?: 'gold' | 'dark' | 'cream'
  className?: string
}

export function Badge({ label, variant = 'gold', className = '' }: BadgeProps) {
  const variantMap = {
    gold: 'bg-gold text-forest-green',
    dark: 'bg-forest-green text-cream',
    cream: 'bg-cream text-forest-green border border-forest-green',
  }

  return (
    <span className={`rounded-full px-3 py-1 font-syncopate text-xs tracking-widest ${variantMap[variant]} ${className}`}>
      {label}
    </span>
  )
}
