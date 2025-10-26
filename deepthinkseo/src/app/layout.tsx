import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deepthink Technologies | Utah SEO Experts',
  description: 'Deepthink Technologies is Utah\'s leading SEO agency, specializing in organic search, local SEO, content marketing, and technical optimization. Boost your rankings and revenue with proven strategies.',
  keywords: 'SEO, Utah SEO, local SEO, content marketing, technical SEO, search engine optimization, organic search, rankings',
  authors: [{ name: 'Deepthink Technologies' }],
  creator: 'Deepthink Technologies',
  publisher: 'Deepthink Technologies',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Deepthink Technologies | Utah SEO Experts',
    description: 'Utah\'s top SEO agency for organic growth, local SEO, and technical optimization. Get your free SEO proposal today!',
    url: 'https://deepthinkseo.online/',
    siteName: 'Deepthink Technologies',
    images: [
      {
        url: 'https://deepthinkseo.online/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Deepthink Technologies Logo',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepthink Technologies | Utah SEO Experts',
    description: 'Utah\'s top SEO agency for organic growth, local SEO, and technical optimization. Get your free SEO proposal today!',
    images: ['https://deepthinkseo.online/images/logo/logo.png'],
  },
  icons: {
    icon: [
      { url: '/images/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/images/logo/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://deepthinkseo.online/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-01JZXEQ2PT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-01JZXEQ2PT');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Deepthink Technologies",
              "url": "https://deepthinkseo.online/",
              "logo": "https://deepthinkseo.online/images/logo/logo.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+1-385-216-2993",
                "contactType": "customer service",
                "email": "deepthinkseo@gmail.com"
              }],
              "sameAs": [
                "https://deepthinkstudio.com"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
