import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "About Us - Deepthink SEO | Utah's Leading SEO Agency",
  description: "Learn about Deepthink SEO, Utah's premier SEO agency. Our team of experts delivers proven results through innovative digital marketing strategies and cutting-edge SEO techniques.",
  keywords: "about us, SEO agency Utah, digital marketing team, SEO experts, company history",
  openGraph: {
    title: "About Us - Deepthink SEO | Utah's Leading SEO Agency",
    description: "Learn about Deepthink SEO, Utah's premier SEO agency. Our team of experts delivers proven results through innovative digital marketing strategies and cutting-edge SEO techniques.",
    url: 'https://deepthinkseo.online/about-us',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'About Deepthink SEO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us - Deepthink SEO | Utah's Leading SEO Agency",
    description: "Learn about Deepthink SEO, Utah's premier SEO agency. Our team of experts delivers proven results through innovative digital marketing strategies and cutting-edge SEO techniques.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/about-us',
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

export default function AboutUsPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
            About Deepthink SEO
          </h1>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              Deepthink SEO is Utah's premier digital marketing agency, specializing in search engine optimization 
              and comprehensive digital marketing solutions. Founded with a mission to help businesses thrive in 
              the digital landscape, we combine cutting-edge technology with proven strategies to deliver exceptional results.
            </p>
            
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Our Mission</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              To empower businesses with data-driven SEO strategies that drive growth, increase visibility, 
              and deliver measurable results in today's competitive digital marketplace.
            </p>
            
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Why Choose Us</h2>
            <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              <li>Proven track record of success with 100+ satisfied clients</li>
              <li>Cutting-edge AI-powered SEO strategies</li>
              <li>Transparent reporting and regular communication</li>
              <li>Customized solutions tailored to your business needs</li>
              <li>Local expertise with national reach</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
