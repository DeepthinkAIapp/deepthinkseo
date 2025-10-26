import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in San Diego - Professional Digital Marketing San Diego | (385) 216-2993",
  description: "Professional SEO services in San Diego. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO San Diego, San Diego SEO services, digital marketing San Diego, local SEO San Diego, search engine optimization San Diego, SEO company San Diego",
  openGraph: {
    title: "SEO Services in San Diego - Professional Digital Marketing San Diego | (385) 216-2993",
    description: "Professional SEO services in San Diego. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/san-diego',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in San Diego - Professional Digital Marketing San Diego',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in San Diego - Professional Digital Marketing San Diego | (385) 216-2993",
    description: "Professional SEO services in San Diego. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/san-diego',
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
    'geo.placename': 'San Diego, California',
    'geo.position': '32.7157;-117.1611',
    'ICBM': '32.7157, -117.1611',
  },
}

export default function SanDiegoPage() {
  const cityData = getCityData('san-diego')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
