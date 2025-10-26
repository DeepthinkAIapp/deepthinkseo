import type { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { getCityData } from '@/config/cityData'

export const metadata: Metadata = {
  title: "SEO Services in Austin - Professional Digital Marketing Austin | (385) 216-2993",
  description: "Professional SEO services in Austin. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies. Call (385) 216-2993 for free audit.",
  keywords: "SEO Austin, Austin SEO services, digital marketing Austin, local SEO Austin, search engine optimization Austin, SEO company Austin",
  openGraph: {
    title: "SEO Services in Austin - Professional Digital Marketing Austin | (385) 216-2993",
    description: "Professional SEO services in Austin. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    url: 'https://deepthinkseo.online/austin',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Austin - Professional Digital Marketing Austin',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services in Austin - Professional Digital Marketing Austin | (385) 216-2993",
    description: "Professional SEO services in Austin. Increase your online visibility, drive qualified traffic, and grow your business with our proven SEO strategies.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/austin',
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
    'geo.placename': 'Austin, Texas',
    'geo.position': '30.2672;-97.7431',
    'ICBM': '30.2672, -97.7431',
  },
}

export default function AustinPage() {
  const cityData = getCityData('austin')
  
  if (!cityData) {
    return <div>City not found</div>
  }

  return <CityPageTemplate {...cityData} />
}
