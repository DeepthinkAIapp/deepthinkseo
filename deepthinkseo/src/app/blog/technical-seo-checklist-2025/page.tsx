import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technical SEO Checklist 2025 | Deepthink Technologies',
  description: 'A comprehensive checklist of technical SEO factors that can make or break your website\'s search performance.',
  keywords: 'technical SEO, SEO checklist, website optimization, crawl optimization',
  openGraph: {
    title: 'Technical SEO Checklist 2025',
    description: 'A comprehensive checklist of technical SEO factors that can make or break your website\'s search performance.',
    images: ['/images/pexels-karolina-grabowska-5717760.jpg'],
  },
}

export default function TechnicalSEOChecklist2025() {
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
              Technical SEO
            </div>
            <h1 style={{ 
              fontSize: '3rem', 
              lineHeight: '1.2', 
              marginBottom: '1rem', 
              color: '#333' 
            }}>
              Technical SEO Checklist 2025
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              marginBottom: '2rem' 
            }}>
              Published on January 5, 2025
            </p>
            <div style={{ 
              height: '400px', 
              overflow: 'hidden', 
              borderRadius: '10px',
              marginBottom: '2rem'
            }}>
              <Image
                src="/images/pexels-karolina-grabowska-5717760.jpg"
                alt="Technical SEO checklist"
                width={800}
                height={400}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </header>

          <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}>
            <p style={{ marginBottom: '2rem', fontSize: '1.3rem', fontWeight: '500' }}>
              Technical SEO is the foundation of any successful SEO strategy. Without proper technical optimization, 
              even the best content won't rank well. This comprehensive checklist covers all the essential technical 
              SEO factors you need to monitor and optimize.
            </p>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Site Performance & Speed
            </h2>
            
            <div style={{ 
              background: '#f8fafc', 
              padding: '2rem', 
              borderRadius: '10px', 
              marginBottom: '2rem',
              borderLeft: '4px solid #7c3aed'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#7c3aed' }}>Performance Checklist:</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Page load speed under 3 seconds</li>
                <li>Core Web Vitals optimization</li>
                <li>Image optimization and compression</li>
                <li>Minification of CSS, JS, and HTML</li>
                <li>CDN implementation</li>
                <li>Browser caching configuration</li>
              </ul>
            </div>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Mobile Optimization
            </h2>

            <p style={{ marginBottom: '2rem' }}>
              With mobile-first indexing, your site must be fully optimized for mobile devices. This includes responsive 
              design, touch-friendly navigation, and fast mobile loading times.
            </p>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Crawlability & Indexing
            </h2>

            <p style={{ marginBottom: '2rem' }}>
              Search engines need to be able to crawl and index your site effectively. This section covers the essential 
              elements for proper crawling and indexing.
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
                Need a Technical SEO Audit?
              </h3>
              <p style={{ marginBottom: '2rem', opacity: '0.9' }}>
                Our technical SEO experts can identify and fix issues that are holding back your search rankings.
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
                Get Free Technical Audit
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
