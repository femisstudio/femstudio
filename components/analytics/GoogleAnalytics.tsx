import Script from 'next/script'

// GA4 loads only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set (Vercel → Project → Settings → Environment Variables).
// With no ID set, nothing renders, so this is safe to ship before the GA4 property exists.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  if (!GA_ID || !/^G-[A-Z0-9]+$/.test(GA_ID)) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  )
}
