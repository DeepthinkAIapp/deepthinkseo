import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Denver - Professional Digital Marketing Denver | (385) 216-2993",
  description: "Professional SEO services in Denver. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Denver, Denver SEO services, digital marketing Denver, local SEO Denver, search engine optimization Denver, SEO company Denver",
  openGraph: {
    title: "SEO Services in Denver - Professional Digital Marketing Denver | (385) 216-2993",
    description: "Professional SEO services in Denver. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/denver',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Denver - Professional Digital Marketing Denver',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Denver - Professional Digital Marketing Denver | (385) 216-2993",
    description: "Professional SEO services in Denver. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/denver',
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
    'geo.region': 'US-CO',
    'geo.placename': 'Denver, Colorado',
    'geo.position': '39.7392;-104.9903',
    'ICBM': '39.7392, -104.9903',
  },
}

export default function DenverPage() {
  const cityData = getCityData('denver')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
