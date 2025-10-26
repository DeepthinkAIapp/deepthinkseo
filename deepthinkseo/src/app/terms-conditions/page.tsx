import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Terms and Conditions - Deepthink SEO",
  description: "Read our terms and conditions for using Deepthink SEO services. Understand your rights and obligations when working with our digital marketing agency.",
  keywords: "terms and conditions, terms of service, legal terms, service agreement",
  openGraph: {
    title: "Terms and Conditions - Deepthink SEO",
    description: "Read our terms and conditions for using Deepthink SEO services. Understand your rights and obligations when working with our digital marketing agency.",
    url: 'https://deepthinkseo.online/terms-conditions',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Terms and Conditions - Deepthink SEO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms and Conditions - Deepthink SEO",
    description: "Read our terms and conditions for using Deepthink SEO services. Understand your rights and obligations when working with our digital marketing agency.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/terms-conditions',
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

export default function TermsConditionsPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
            Terms and Conditions
          </h1>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              <strong>Last updated:</strong> January 16, 2025
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Service Agreement</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                By engaging our services, you agree to these terms and conditions. Our SEO services are 
                provided on a monthly basis and require a minimum commitment period as outlined in your service agreement.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Payment Terms</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                Payment is due monthly in advance. Late payments may result in service suspension. 
                All fees are non-refundable unless otherwise specified in writing.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Service Guarantees</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                While we work diligently to improve your search rankings, we cannot guarantee specific 
                ranking positions or timelines. SEO results depend on various factors beyond our control.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Client Responsibilities</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                Clients are responsible for providing accurate information, timely feedback, and access 
                to necessary accounts and data for service delivery.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Termination</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                Either party may terminate services with 30 days written notice. Upon termination, 
                all work completed remains the property of the client.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Contact Information</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                For questions about these terms, contact us at 
                <a href="mailto:deepthinkseo@gmail.com" style={{ color: '#7c3aed' }}>deepthinkseo@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
