import type { NextConfig } from 'next'

const isDevelopment = process.env.NODE_ENV !== 'production'

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDevelopment ? ' ws: http: https:' : ''}`,
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  isDevelopment ? '' : 'upgrade-insecure-requests',
]
  .filter(Boolean)
  .join('; ')

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 85, 90],
  },
  webpack(config, { isServer }) {
    // Next 16.2.4 local production previews were missing split server chunks.
    if (isServer && config.optimization) {
      config.optimization.splitChunks = false
      config.optimization.runtimeChunk = false
    }

    return config
  },
  async headers() {
    const headers = [
      {
        key: 'Content-Security-Policy',
        value: contentSecurityPolicy,
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()',
      },
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
    ]

    if (!isDevelopment) {
      headers.push({
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains',
      })
    }

    return [
      {
        source: '/:path*',
        headers,
      },
    ]
  },
}

export default nextConfig
