import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in San Antonio - Professional Digital Marketing San Antonio | (385) 216-2993",
  description: "Professional SEO services in San Antonio. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO San Antonio, San Antonio SEO services, digital marketing San Antonio, local SEO San Antonio, search engine optimization San Antonio, SEO company San Antonio",
  openGraph: {
    title: "SEO Services in San Antonio - Professional Digital Marketing San Antonio | (385) 216-2993",
    description: "Professional SEO services in San Antonio. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/san-antonio',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in San Antonio - Professional Digital Marketing San Antonio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in San Antonio - Professional Digital Marketing San Antonio | (385) 216-2993",
    description: "Professional SEO services in San Antonio. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/san-antonio',
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
    'geo.region': 'US-TX',
    'geo.placename': 'San Antonio, Texas',
    'geo.position': '29.4241;-98.4936',
    'ICBM': '29.4241, -98.4936',
  },
}

export default function SanAntonioPage() {
  const cityData = getCityData('san-antonio')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
