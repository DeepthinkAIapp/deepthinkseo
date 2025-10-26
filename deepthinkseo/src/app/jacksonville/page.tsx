import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Jacksonville - Professional Digital Marketing Jacksonville | (385) 216-2993",
  description: "Professional SEO services in Jacksonville. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Jacksonville, Jacksonville SEO services, digital marketing Jacksonville, local SEO Jacksonville, search engine optimization Jacksonville, SEO company Jacksonville",
  openGraph: {
    title: "SEO Services in Jacksonville - Professional Digital Marketing Jacksonville | (385) 216-2993",
    description: "Professional SEO services in Jacksonville. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/jacksonville',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Jacksonville - Professional Digital Marketing Jacksonville',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Jacksonville - Professional Digital Marketing Jacksonville | (385) 216-2993",
    description: "Professional SEO services in Jacksonville. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/jacksonville',
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
    'geo.region': 'US-FL',
    'geo.placename': 'Jacksonville, Florida',
    'geo.position': '30.3322;-81.6557',
    'ICBM': '30.3322, -81.6557',
  },
}

export default function JacksonvillePage() {
  const cityData = getCityData('jacksonville')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
