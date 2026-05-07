import { ReactNode } from 'react'

interface LabelProps {
  htmlFor: string
  children: ReactNode
  required?: boolean
  className?: string
}

export function Label({ htmlFor, children, required = false, className = '' }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`font-syncopate text-xs tracking-widest text-forest-green block mb-2 ${className}`}>
      {children}
      {required && <span className="text-gold ml-1">*</span>}
    </label>
  )
}

interface InputProps {
  id: string
  name: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  disabled?: boolean
  error?: string
  autoComplete?: string
  className?: string
}

export function Input({
  id,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  autoComplete,
  className = '',
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      autoComplete={autoComplete}
      className={`w-full bg-transparent border-b-2 border-forest-green text-forest-green py-3 text-base outline-none transition-all duration-200 placeholder-forest-green placeholder-opacity-40 focus:border-gold disabled:opacity-40 disabled:cursor-not-allowed ${
        error ? 'border-red-500' : ''
      } ${className}`}
      required={required}
      aria-required={required}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
  )
}

interface TextareaProps {
  id: string
  name: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
  disabled?: boolean
  error?: string
  className?: string
}

export function Textarea({
  id,
  name,
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  className = '',
}: TextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full bg-transparent border-b-2 border-forest-green text-forest-green py-3 text-base outline-none transition-all duration-200 placeholder-forest-green placeholder-opacity-40 focus:border-gold disabled:opacity-40 disabled:cursor-not-allowed min-h-32 resize-none ${
        error ? 'border-red-500' : ''
      } ${className}`}
      required={required}
      aria-required={required}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
  )
}

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  id: string
  name: string
  options: SelectOption[]
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  required?: boolean
  disabled?: boolean
  error?: string
  className?: string
}

export function Select({
  id,
  name,
  options,
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  className = '',
}: SelectProps) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full bg-transparent border-b-2 border-forest-green text-forest-green py-3 text-base outline-none transition-all duration-200 focus:border-gold disabled:opacity-40 disabled:cursor-not-allowed appearance-none pr-8 ${
        error ? 'border-red-500' : ''
      } ${className}`}
      required={required}
      aria-required={required}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    >
      <option value="">Select an option</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}

interface FormFieldProps {
  label: string
  error?: string
  required?: boolean
  children: ReactNode
  className?: string
}

export function FormField({ label, error, required = false, children, className = '' }: FormFieldProps) {
  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <Label htmlFor={label} required={required}>
          {label}
        </Label>
      )}
      {children}
      {error && (
        <p id={`${label}-error`} role="alert" aria-live="polite" className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

interface FormErrorProps {
  message: string
  onDismiss?: () => void
  className?: string
}

export function FormError({ message, onDismiss, className = '' }: FormErrorProps) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`bg-red-900 text-cream px-6 py-4 rounded-lg flex items-center justify-between mb-6 ${className}`}
    >
      <span>✕</span>
      <p>{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss error"
          className="focus:outline-none focus:ring-2 focus:ring-gold"
        >
          ✕
        </button>
      )}
    </div>
  )
}
