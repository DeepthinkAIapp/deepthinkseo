import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Chicago - Professional Digital Marketing Chicago | (385) 216-2993",
  description: "Professional SEO services in Chicago. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Chicago, Chicago SEO services, digital marketing Chicago, local SEO Chicago, search engine optimization Chicago, SEO company Chicago",
  openGraph: {
    title: "SEO Services in Chicago - Professional Digital Marketing Chicago | (385) 216-2993",
    description: "Professional SEO services in Chicago. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/chicago',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Chicago - Professional Digital Marketing Chicago',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Chicago - Professional Digital Marketing Chicago | (385) 216-2993",
    description: "Professional SEO services in Chicago. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/chicago',
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
    'geo.region': 'US-IL',
    'geo.placename': 'Chicago, Illinois',
    'geo.position': '41.8781;-87.6298',
    'ICBM': '41.8781, -87.6298',
  },
}

export default function ChicagoPage() {
  const cityData = getCityData('chicago')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
