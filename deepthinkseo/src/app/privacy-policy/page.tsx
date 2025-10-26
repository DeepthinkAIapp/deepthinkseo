import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Privacy Policy - Deepthink SEO",
  description: "Learn how Deepthink SEO protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data collection and usage practices.",
  keywords: "privacy policy, data protection, privacy, personal information",
  openGraph: {
    title: "Privacy Policy - Deepthink SEO",
    description: "Learn how Deepthink SEO protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data collection and usage practices.",
    url: 'https://deepthinkseo.online/privacy-policy',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Deepthink SEO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy - Deepthink SEO",
    description: "Learn how Deepthink SEO protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data collection and usage practices.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/privacy-policy',
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

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
            Privacy Policy
          </h1>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              <strong>Last updated:</strong> January 16, 2025
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Information We Collect</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include your name, email address, phone number, 
                and business information.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>How We Use Your Information</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and comply with legal obligations.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Information Sharing</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Data Security</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Contact Us</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                If you have any questions about this privacy policy, please contact us at 
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
