'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface BlogPostData {
  title: string
  description: string
  keywords: string
  url: string
  publishedDate: string
  readingTime: string
  hook: string
  introduction: string
  sections: {
    heading: string
    content: string
  }[]
  conclusion: string
  semanticKeywords: string[]
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

interface BlogPostTemplateProps {
  postData: BlogPostData
}

export default function BlogPostTemplate({ postData }: BlogPostTemplateProps) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "description": postData.description,
    "author": {
      "@type": "Organization",
      "name": "Deepthink SEO",
      "url": "https://deepthinkseo.online"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Deepthink SEO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://deepthinkseo.online/images/logo/logo.png"
      }
    },
    "datePublished": postData.publishedDate,
    "dateModified": postData.publishedDate,
    "url": `https://deepthinkseo.online/blog/${postData.url}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://deepthinkseo.online/blog/${postData.url}`
    },
    "image": postData.images[0]?.src ? `https://deepthinkseo.online${postData.images[0].src}` : "https://deepthinkseo.online/images/logo/logo.png",
    "keywords": postData.semanticKeywords.join(', '),
    "articleSection": "Digital Marketing",
    "wordCount": postData.introduction.length + postData.sections.reduce((acc, section) => acc + section.content.length, 0) + postData.conclusion.length
  }

  return (
    <main>
      <Header />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
        <div className="container">
          <article style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#333', lineHeight: '1.2' }}>
              {postData.title}
            </h1>
            
            <div style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', fontStyle: 'italic' }}>
              Published: {postData.publishedDate} | Reading Time: {postData.readingTime}
            </div>

            {/* Hero Image */}
            <div style={{ marginBottom: '3rem' }}>
              <Image
                src={postData.images[0]?.src || '/images/blog/placeholder-hero.jpg'}
                alt={postData.images[0]?.alt || postData.title}
                width={800}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              {postData.images[0]?.caption && (
                <p style={{ fontSize: '0.9rem', color: '#666', textAlign: 'center', marginTop: '0.5rem', fontStyle: 'italic' }}>
                  {postData.images[0].caption}
                </p>
              )}
            </div>

            {/* Hook */}
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333', marginBottom: '3rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #7c3aed' }}>
              <p>
                <strong>Hook:</strong> {postData.hook}
              </p>
            </div>

            {/* Introduction */}
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
              {postData.introduction.split('\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Main Content Sections */}
            {postData.sections.map((section, index) => (
              <div key={index}>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: '#333', marginTop: '3rem' }}>
                  {section.heading}
                </h2>
                
                {/* Section Image (every other section) */}
                {index < postData.images.length - 1 && (
                  <div style={{ marginBottom: '2rem' }}>
                    <Image
                      src={postData.images[index + 1]?.src || '/images/blog/placeholder-content.jpg'}
                      alt={postData.images[index + 1]?.alt || section.heading}
                      width={600}
                      height={300}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                    {postData.images[index + 1]?.caption && (
                      <p style={{ fontSize: '0.9rem', color: '#666', textAlign: 'center', marginTop: '0.5rem', fontStyle: 'italic' }}>
                        {postData.images[index + 1].caption}
                      </p>
                    )}
                  </div>
                )}

                {/* Enhanced Content Rendering for 1600+ Words */}
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '2rem' }}>
                  {section.content.split('\n\n').map((paragraph, pIndex) => {
                    // Check if paragraph contains subheadings (H3 style)
                    if (paragraph.includes('**') && paragraph.includes('**')) {
                      const parts = paragraph.split(/(\*\*.*?\*\*)/);
                      return (
                        <div key={pIndex} style={{ marginBottom: '1.5rem' }}>
                          {parts.map((part, partIndex) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              // This is a subheading
                              return (
                                <h3 key={partIndex} style={{ 
                                  fontSize: '1.5rem', 
                                  marginBottom: '1rem', 
                                  marginTop: '2rem', 
                                  color: '#7c3aed',
                                  fontWeight: '600'
                                }}>
                                  {part.replace(/\*\*/g, '')}
                                </h3>
                              );
                            } else if (part.trim()) {
                              // This is regular content
                              return (
                                <p key={partIndex} style={{ marginBottom: '1rem' }}>
                                  {part.trim()}
                                </p>
                              );
                            }
                            return null;
                          })}
                        </div>
                      );
                    } else {
                      // Regular paragraph
                      return (
                        <p key={pIndex} style={{ marginBottom: '1rem' }}>
                          {paragraph.trim()}
                        </p>
                      );
                    }
                  })}
                </div>

                {/* Additional Content Enhancement for Word Count */}
                {section.content.length < 400 && (
                  <div style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.8', 
                    color: '#333', 
                    marginBottom: '2rem',
                    padding: '1rem',
                    background: '#f8fafc',
                    borderRadius: '8px',
                    borderLeft: '3px solid #7c3aed'
                  }}>
                    <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
                      <strong>Pro Tip:</strong> This section could benefit from more detailed examples, case studies, or step-by-step instructions. Consider adding specific data, statistics, or real-world scenarios to provide more value to your readers.
                    </p>
                    <p style={{ marginBottom: '0' }}>
                      Remember: Google rewards comprehensive, helpful content. The more detailed and useful your content is, the better it will perform in search results and the more value it will provide to your audience.
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion Image */}
            <div style={{ marginBottom: '2rem' }}>
              <Image
                src={postData.images[postData.images.length - 1]?.src || '/images/blog/placeholder-conclusion.jpg'}
                alt={postData.images[postData.images.length - 1]?.alt || 'Conclusion'}
                width={600}
                height={300}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              {postData.images[postData.images.length - 1]?.caption && (
                <p style={{ fontSize: '0.9rem', color: '#666', textAlign: 'center', marginTop: '0.5rem', fontStyle: 'italic' }}>
                  {postData.images[postData.images.length - 1].caption}
                </p>
              )}
            </div>

            {/* Conclusion */}
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '3rem', padding: '1.5rem', background: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #0ea5e9' }}>
              <p>
                <strong>Conclusion:</strong> {postData.conclusion}
              </p>
            </div>

            {/* Hidden Semantic Keywords for SEO - Not displayed on frontend */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <h3>Semantic Keywords</h3>
              <div>
                {postData.semanticKeywords.map((keyword, index) => (
                  <span key={index}>{keyword} </span>
                ))}
              </div>
            </div>

            {/* Author Box Section */}
            <div className="author-box-section" style={{ marginTop: '3rem' }}>
              <div className="container">
                <div className="author-box">
                  <div className="author-avatar">
                    <Image 
                      src="/images/logo/logo.png" 
                      alt="Deepthink SEO Logo" 
                      width={50}
                      height={50}
                      className="author-logo"
                    />
                  </div>
                  <div className="author-content">
                    <h2 className="author-name">Deepthink SEO Team</h2>
                    <p className="author-title">SEO Experts & Digital Marketing Specialists</p>
                    <p className="author-description">
                      Our team specializes in technical SEO, content marketing, local SEO, and digital marketing strategies that drive real results. We've helped businesses increase their organic traffic by an average of 300% within 6 months through proven SEO techniques and data-driven approaches.
                    </p>
                    <div className="author-actions">
                      <a href="/contact" className="cta-button author-cta-primary">Get Free SEO Audit</a>
                      <a href="tel:13852162993" className="cta-button author-cta-secondary">Call (385) 216-2993</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}
