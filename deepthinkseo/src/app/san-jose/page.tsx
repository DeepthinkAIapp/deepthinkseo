import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in San Jose - Professional Digital Marketing San Jose | (385) 216-2993",
  description: "Professional SEO services in San Jose. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO San Jose, San Jose SEO services, digital marketing San Jose, local SEO San Jose, search engine optimization San Jose, SEO company San Jose",
  openGraph: {
    title: "SEO Services in San Jose - Professional Digital Marketing San Jose | (385) 216-2993",
    description: "Professional SEO services in San Jose. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/san-jose',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in San Jose - Professional Digital Marketing San Jose',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in San Jose - Professional Digital Marketing San Jose | (385) 216-2993",
    description: "Professional SEO services in San Jose. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/san-jose',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'San Jose, California',
    'geo.position': '37.3382;-121.8863',
    'ICBM': '37.3382, -121.8863',
  },
}

export default function SanJosePage() {
  const cityData = getCityData('san-jose')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
