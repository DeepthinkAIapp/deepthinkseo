import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Columbus - Professional Digital Marketing Columbus | (385) 216-2993",
  description: "Professional SEO services in Columbus. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Columbus, Columbus SEO services, digital marketing Columbus, local SEO Columbus, search engine optimization Columbus, SEO company Columbus",
  openGraph: {
    title: "SEO Services in Columbus - Professional Digital Marketing Columbus | (385) 216-2993",
    description: "Professional SEO services in Columbus. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/columbus',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Columbus - Professional Digital Marketing Columbus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Columbus - Professional Digital Marketing Columbus | (385) 216-2993",
    description: "Professional SEO services in Columbus. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/columbus',
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
    'geo.region': 'US-OH',
    'geo.placename': 'Columbus, Ohio',
    'geo.position': '39.9612;-82.9988',
    'ICBM': '39.9612, -82.9988',
  },
}

export default function ColumbusPage() {
  const cityData = getCityData('columbus')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
