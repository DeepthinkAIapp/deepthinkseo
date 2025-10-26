import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Philadelphia - Professional Digital Marketing Philadelphia | (385) 216-2993",
  description: "Professional SEO services in Philadelphia. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Philadelphia, Philadelphia SEO services, digital marketing Philadelphia, local SEO Philadelphia, search engine optimization Philadelphia, SEO company Philadelphia",
  openGraph: {
    title: "SEO Services in Philadelphia - Professional Digital Marketing Philadelphia | (385) 216-2993",
    description: "Professional SEO services in Philadelphia. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/philadelphia',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Philadelphia - Professional Digital Marketing Philadelphia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Philadelphia - Professional Digital Marketing Philadelphia | (385) 216-2993",
    description: "Professional SEO services in Philadelphia. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/philadelphia',
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
    'geo.region': 'US-PA',
    'geo.placename': 'Philadelphia, Pennsylvania',
    'geo.position': '39.9526;-75.1652',
    'ICBM': '39.9526, -75.1652',
  },
}

export default function PhiladelphiaPage() {
  const cityData = getCityData('philadelphia')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
