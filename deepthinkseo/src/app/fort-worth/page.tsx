import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Fort Worth - Professional Digital Marketing Fort Worth | (385) 216-2993",
  description: "Professional SEO services in Fort Worth. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Fort Worth, Fort Worth SEO services, digital marketing Fort Worth, local SEO Fort Worth, search engine optimization Fort Worth, SEO company Fort Worth",
  openGraph: {
    title: "SEO Services in Fort Worth - Professional Digital Marketing Fort Worth | (385) 216-2993",
    description: "Professional SEO services in Fort Worth. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/fort-worth',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Fort Worth - Professional Digital Marketing Fort Worth',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Fort Worth - Professional Digital Marketing Fort Worth | (385) 216-2993",
    description: "Professional SEO services in Fort Worth. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/fort-worth',
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
    'geo.placename': 'Fort Worth, Texas',
    'geo.position': '32.7555;-97.3308',
    'ICBM': '32.7555, -97.3308',
  },
}

export default function FortWorthPage() {
  const cityData = getCityData('fort-worth')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
