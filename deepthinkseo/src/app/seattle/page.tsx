import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Seattle - Professional Digital Marketing Seattle | (385) 216-2993",
  description: "Professional SEO services in Seattle. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Seattle, Seattle SEO services, digital marketing Seattle, local SEO Seattle, search engine optimization Seattle, SEO company Seattle",
  openGraph: {
    title: "SEO Services in Seattle - Professional Digital Marketing Seattle | (385) 216-2993",
    description: "Professional SEO services in Seattle. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/seattle',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Seattle - Professional Digital Marketing Seattle',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Seattle - Professional Digital Marketing Seattle | (385) 216-2993",
    description: "Professional SEO services in Seattle. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/seattle',
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
    'geo.region': 'US-WA',
    'geo.placename': 'Seattle, Washington',
    'geo.position': '47.6062;-122.3321',
    'ICBM': '47.6062, -122.3321',
  },
}

export default function SeattlePage() {
  const cityData = getCityData('seattle')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
