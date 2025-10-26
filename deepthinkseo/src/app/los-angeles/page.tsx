import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Los Angeles - Professional Digital Marketing LA | (385) 216-2993",
  description: "Professional SEO services in Los Angeles. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Los Angeles, LA SEO services, digital marketing Los Angeles, local SEO LA, search engine optimization Los Angeles, SEO company LA",
  openGraph: {
    title: "SEO Services in Los Angeles - Professional Digital Marketing LA | (385) 216-2993",
    description: "Professional SEO services in Los Angeles. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/los-angeles',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Los Angeles - Professional Digital Marketing LA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Los Angeles - Professional Digital Marketing LA | (385) 216-2993",
    description: "Professional SEO services in Los Angeles. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/los-angeles',
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
    'geo.placename': 'Los Angeles, California',
    'geo.position': '34.0522;-118.2437',
    'ICBM': '34.0522, -118.2437',
  },
}

export default function LosAngelesPage() {
  const cityData = getCityData('los-angeles')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
