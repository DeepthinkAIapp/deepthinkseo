import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Dallas - Professional Digital Marketing Dallas | (385) 216-2993",
  description: "Professional SEO services in Dallas. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Dallas, Dallas SEO services, digital marketing Dallas, local SEO Dallas, search engine optimization Dallas, SEO company Dallas",
  openGraph: {
    title: "SEO Services in Dallas - Professional Digital Marketing Dallas | (385) 216-2993",
    description: "Professional SEO services in Dallas. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/dallas',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Dallas - Professional Digital Marketing Dallas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Dallas - Professional Digital Marketing Dallas | (385) 216-2993",
    description: "Professional SEO services in Dallas. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/dallas',
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
    'geo.placename': 'Dallas, Texas',
    'geo.position': '32.7767;-96.7970',
    'ICBM': '32.7767, -96.7970',
  },
}

export default function DallasPage() {
  const cityData = getCityData('dallas')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
