import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Houston - Professional Digital Marketing Houston | (385) 216-2993",
  description: "Professional SEO services in Houston. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Houston, Houston SEO services, digital marketing Houston, local SEO Houston, search engine optimization Houston, SEO company Houston",
  openGraph: {
    title: "SEO Services in Houston - Professional Digital Marketing Houston | (385) 216-2993",
    description: "Professional SEO services in Houston. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/houston',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Houston - Professional Digital Marketing Houston',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Houston - Professional Digital Marketing Houston | (385) 216-2993",
    description: "Professional SEO services in Houston. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/houston',
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
    'geo.placename': 'Houston, Texas',
    'geo.position': '29.7604;-95.3698',
    'ICBM': '29.7604, -95.3698',
  },
}

export default function HoustonPage() {
  const cityData = getCityData('houston')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
