import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Phoenix - Professional Digital Marketing Phoenix | (385) 216-2993",
  description: "Professional SEO services in Phoenix. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Phoenix, Phoenix SEO services, digital marketing Phoenix, local SEO Phoenix, search engine optimization Phoenix, SEO company Phoenix",
  openGraph: {
    title: "SEO Services in Phoenix - Professional Digital Marketing Phoenix | (385) 216-2993",
    description: "Professional SEO services in Phoenix. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/phoenix',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Phoenix - Professional Digital Marketing Phoenix',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Phoenix - Professional Digital Marketing Phoenix | (385) 216-2993",
    description: "Professional SEO services in Phoenix. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/phoenix',
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
    'geo.region': 'US-AZ',
    'geo.placename': 'Phoenix, Arizona',
    'geo.position': '33.4484;-112.0740',
    'ICBM': '33.4484, -112.0740',
  },
}

export default function PhoenixPage() {
  const cityData = getCityData('phoenix')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
