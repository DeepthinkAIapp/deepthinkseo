import type { Metadata } from 'next'
import ServicesPage from '@/components/ServicesPage'

export const metadata: Metadata = {
  title: "SEO Services - Professional Digital Marketing Solutions | Deepthink SEO",
  description: "Comprehensive SEO services including local SEO, technical SEO, content marketing, and more. Boost your online visibility and drive qualified traffic to your business.",
  keywords: "SEO services, digital marketing, local SEO, technical SEO, content marketing, search engine optimization",
  openGraph: {
    title: "SEO Services - Professional Digital Marketing Solutions | Deepthink SEO",
    description: "Comprehensive SEO services including local SEO, technical SEO, content marketing, and more. Boost your online visibility and drive qualified traffic to your business.",
    url: 'https://deepthinkstudio.com/services',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services - Deepthink SEO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Services - Professional Digital Marketing Solutions | Deepthink SEO",
    description: "Comprehensive SEO services including local SEO, technical SEO, content marketing, and more. Boost your online visibility and drive qualified traffic to your business.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkstudio.com/services',
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
}

export default function ServicesPageRoute() {
  return <ServicesPage />
}