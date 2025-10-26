import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in New York City - Professional Digital Marketing NYC | (385) 216-2993",
  description: "Professional SEO services in New York City. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO New York City, NYC SEO services, digital marketing NYC, local SEO New York, search engine optimization NYC, SEO company New York",
  openGraph: {
    title: "SEO Services in New York City - Professional Digital Marketing NYC | (385) 216-2993",
    description: "Professional SEO services in New York City. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/new-york-city',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in New York City - Professional Digital Marketing NYC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in New York City - Professional Digital Marketing NYC | (385) 216-2993",
    description: "Professional SEO services in New York City. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/new-york-city',
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
    'geo.region': 'US-NY',
    'geo.placename': 'New York City, New York',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060',
  },
}

export default function NewYorkCityPage() {
  const cityData = getCityData('new-york-city')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
