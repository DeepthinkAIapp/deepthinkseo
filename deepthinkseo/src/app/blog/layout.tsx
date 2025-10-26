import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Blog | Deepthink SEO',
  description: 'Read our latest SEO blog posts, digital marketing tips, and industry insights. Stay updated with the latest SEO trends and strategies to grow your business.',
  keywords: 'SEO blog, digital marketing blog, SEO tips, marketing insights, SEO news',
  openGraph: {
    title: 'SEO Blog | Deepthink SEO',
    description: 'Read our latest SEO blog posts, digital marketing tips, and industry insights. Stay updated with the latest SEO trends and strategies to grow your business.',
    url: 'https://deepthinkseo.online/blog',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: 'https://deepthinkseo.online/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Deepthink SEO Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Blog | Deepthink SEO',
    description: 'Read our latest SEO blog posts, digital marketing tips, and industry insights.',
    images: ['https://deepthinkseo.online/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
