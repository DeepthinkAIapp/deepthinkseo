import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Charlotte - Professional Digital Marketing Charlotte | (385) 216-2993",
  description: "Professional SEO services in Charlotte. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Charlotte, Charlotte SEO services, digital marketing Charlotte, local SEO Charlotte, search engine optimization Charlotte, SEO company Charlotte",
  openGraph: {
    title: "SEO Services in Charlotte - Professional Digital Marketing Charlotte | (385) 216-2993",
    description: "Professional SEO services in Charlotte. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/charlotte',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Charlotte - Professional Digital Marketing Charlotte',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Charlotte - Professional Digital Marketing Charlotte | (385) 216-2993",
    description: "Professional SEO services in Charlotte. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/charlotte',
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
    'geo.region': 'US-NC',
    'geo.placename': 'Charlotte, North Carolina',
    'geo.position': '35.2271;-80.8431',
    'ICBM': '35.2271, -80.8431',
  },
}

export default function CharlottePage() {
  const cityData = getCityData('charlotte')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
