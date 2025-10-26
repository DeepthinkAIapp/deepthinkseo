import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Complete SEO Strategy Guide 2025 | Deepthink Technologies',
  description: 'Everything you need to know about creating and implementing a successful SEO strategy for your business.',
  keywords: 'SEO strategy, SEO guide, search engine optimization, SEO planning',
  openGraph: {
    title: 'Complete SEO Strategy Guide 2025',
    description: 'Everything you need to know about creating and implementing a successful SEO strategy for your business.',
    images: ['/images/pexels-pixabay-270637.jpg'],
  },
}

export default function CompleteSEOStrategyGuide2025() {
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
              SEO Strategy
            </div>
            <h1 style={{ 
              fontSize: '3rem', 
              lineHeight: '1.2', 
              marginBottom: '1rem', 
              color: '#333' 
            }}>
              Complete SEO Strategy Guide 2025
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              marginBottom: '2rem' 
            }}>
              Published on January 1, 2025
            </p>
            <div style={{ 
              height: '400px', 
              overflow: 'hidden', 
              borderRadius: '10px',
              marginBottom: '2rem'
            }}>
              <Image
                src="/images/pexels-pixabay-270637.jpg"
                alt="Complete SEO strategy guide"
                width={800}
                height={400}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </header>

          <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}>
            <p style={{ marginBottom: '2rem', fontSize: '1.3rem', fontWeight: '500' }}>
              A successful SEO strategy requires careful planning, execution, and ongoing optimization. This comprehensive 
              guide will walk you through every aspect of creating and implementing an effective SEO strategy that drives 
              real business results.
            </p>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Understanding SEO Fundamentals
            </h2>
            
            <p style={{ marginBottom: '2rem' }}>
              Before diving into strategy, it's essential to understand the core principles of SEO and how search engines 
              work. This foundation will guide all your optimization efforts.
            </p>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Building Your SEO Strategy
            </h2>

            <p style={{ marginBottom: '2rem' }}>
              A successful SEO strategy starts with clear goals, thorough research, and a detailed action plan. Here's 
              how to build yours from the ground up.
            </p>

            <div style={{ 
              background: '#f8fafc', 
              padding: '2rem', 
              borderRadius: '10px', 
              marginBottom: '2rem',
              borderLeft: '4px solid #7c3aed'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#7c3aed' }}>Strategy Components:</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Goal setting and KPI definition</li>
                <li>Competitor analysis and market research</li>
                <li>Keyword research and targeting</li>
                <li>Content strategy development</li>
                <li>Technical SEO planning</li>
                <li>Link building strategy</li>
                <li>Measurement and reporting framework</li>
              </ul>
            </div>

            <h2 style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem', color: '#333' }}>
              Implementation and Execution
            </h2>

            <p style={{ marginBottom: '2rem' }}>
              The best strategy is worthless without proper execution. Learn how to implement your SEO strategy effectively 
              and maintain momentum over time.
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
                Ready to Build Your SEO Strategy?
              </h3>
              <p style={{ marginBottom: '2rem', opacity: '0.9' }}>
                Our SEO experts can help you create a customized strategy that delivers real results for your business.
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
                Get Free Strategy Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
