import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Deepthink SEO",
  description: "Get answers to common questions about SEO services, pricing, timelines, and results. Learn how our SEO strategies can help your business grow.",
  keywords: "SEO FAQ, frequently asked questions, SEO questions, digital marketing FAQ",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Deepthink SEO",
    description: "Get answers to common questions about SEO services, pricing, timelines, and results. Learn how our SEO strategies can help your business grow.",
    url: 'https://deepthinkseo.online/frequently-asked-questions',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'FAQ - Deepthink SEO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FAQ - Frequently Asked Questions | Deepthink SEO",
    description: "Get answers to common questions about SEO services, pricing, timelines, and results. Learn how our SEO strategies can help your business grow.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/frequently-asked-questions',
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

export default function FAQPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#666', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Get answers to the most common questions about our SEO services, processes, and results.
          </p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>How long does it take to see SEO results?</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                SEO results typically begin to show within 3-6 months, with significant improvements visible after 6-12 months. 
                Local SEO results can appear faster, often within 1-3 months for Google Business Profile optimization.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>What's included in your SEO services?</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                Our comprehensive SEO services include technical optimization, content creation, local SEO, link building, 
                keyword research, competitor analysis, and monthly reporting with detailed insights and recommendations.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Do you work with businesses outside of Utah?</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                Yes, we provide SEO services to businesses nationwide. While we're based in Utah, our digital marketing 
                strategies work effectively for businesses in any location across the United States.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>How do you measure SEO success?</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                We track key metrics including organic traffic growth, keyword rankings, conversion rates, lead generation, 
                and revenue attribution. We provide detailed monthly reports showing your progress and ROI.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>What makes your SEO approach different?</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                We combine traditional SEO best practices with cutting-edge AI-powered strategies, focus on local expertise 
                with national reach, and provide transparent reporting with regular communication throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
