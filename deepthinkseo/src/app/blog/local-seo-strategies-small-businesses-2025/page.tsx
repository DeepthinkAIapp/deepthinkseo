import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Local SEO Strategies for Small Businesses 2025 | Deepthink Technologies',
  description: 'Proven local SEO tactics to help small businesses dominate local search results and attract more customers.',
  keywords: 'local SEO, small business SEO, Google My Business, local search optimization',
  openGraph: {
    title: 'Local SEO Strategies for Small Businesses 2025',
    description: 'Proven local SEO tactics to help small businesses dominate local search results and attract more customers.',
    images: ['/images/pexels-kindelmedia-7688336.jpg'],
  },
}

export default function LocalSEOStrategiesSmallBusinesses2025() {
  return (
    <main>
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem', maxWidth: '800px' }}>
        <nav style={{ marginBottom: '2rem' }}>
          <Link href="/blog" style={{ color: '#7c3aed', textDecoration: 'none' }}>
            ← Back to Blog
          </Link>
        </nav>
        
        <article>
          <header style={{ marginBottom: '3rem' }}>
            <div style={{ 
              background: '#7c3aed', 
              color: 'white', 
              padding: '0.5rem 1rem', 
              borderRadius: '20px', 
              display: 'inline-block',
              marginBottom: '1rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              Local SEO
            </div>
            <h1 style={{ 
              fontSize: '3rem', 
              lineHeight: '1.2', 
              marginBottom: '1rem', 
              color: '#333' 
            }}>
              Local SEO Strategies for Small Businesses
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              marginBottom: '2rem' 
            }}>
              Published on December 28, 2024
            </p>
            <div style={{ 
              height: '400px', 
              overflow: 'hidden', 
              borderRadius: '10px',
              marginBottom: '2rem'
            }}>
              <Image
                src="/images/pexels-kindelmedia-7688336.jpg"
                alt="Local SEO for small businesses"
                width={800}
                height={400}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </header>

          <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}>
            <p style={{ marginBottom: '2rem', fontSize: '1.3rem', fontWeight: '500' }}>
              For small businesses, local SEO is often the most effective way to compete with larger companies and 
              attract customers in your area. This guide will show you proven strategies to dominate local search results 
              and grow your business.
            </p>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Why Local SEO Matters for Small Businesses
            </h2>
            
            <p style={{ marginBottom: '2rem' }}>
              Local SEO helps your business appear in "near me" searches and local map results. With 46% of all Google 
              searches having local intent, optimizing for local search is crucial for small business success.
            </p>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Google My Business Optimization
            </h2>

            <p style={{ marginBottom: '2rem' }}>
              Your Google My Business profile is the foundation of your local SEO strategy. Here's how to optimize it 
              for maximum visibility and engagement.
            </p>

            <div style={{ 
              background: '#f8fafc', 
              padding: '2rem', 
              borderRadius: '10px', 
              marginBottom: '2rem',
              borderLeft: '4px solid #7c3aed'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#7c3aed' }}>GMB Optimization Checklist:</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Complete and accurate business information</li>
                <li>High-quality photos and videos</li>
                <li>Regular posts and updates</li>
                <li>Customer review management</li>
                <li>Q&A section optimization</li>
                <li>Business hours and contact details</li>
              </ul>
            </div>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Local Content Strategy
            </h2>

            <p style={{ marginBottom: '2rem' }}>
              Creating location-specific content helps establish your business as a local authority and improves your 
              chances of appearing in local search results.
            </p>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Local Link Building
            </h2>

            <p style={{ marginBottom: '2rem' }}>
              Building local citations and links from other local businesses and organizations can significantly boost 
              your local search rankings.
            </p>

            <div style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '10px', 
              marginTop: '3rem',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                Need Help with Local SEO?
              </h3>
              <p style={{ marginBottom: '2rem', opacity: '0.9' }}>
                Our local SEO experts can help you dominate local search results and attract more customers to your business.
              </p>
              <Link 
                href="/contact" 
                style={{ 
                  background: '#fbbf24', 
                  color: '#333', 
                  padding: '1rem 2rem', 
                  borderRadius: '5px', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  display: 'inline-block'
                }}
              >
                Get Free Local SEO Audit
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
