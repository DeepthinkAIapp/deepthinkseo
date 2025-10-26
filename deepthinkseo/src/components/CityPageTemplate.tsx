'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CityData } from '@/config/cityData'

interface CityPageTemplateProps extends CityData {}

export default function CityPageTemplate({
  cityName,
  citySlug,
  state,
  phoneNumber,
  latitude,
  longitude,
  heroImage,
  landmarks,
  businessDistricts,
  permitInfo,
  contentSections,
}: CityPageTemplateProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero city-hero" style={{ 
        position: 'relative',
        color: 'white',
        padding: '4rem 0',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }} />
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
          zIndex: 2
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              SEO Services in {cityName}, {state}
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              marginBottom: '2rem',
              opacity: '0.95',
              lineHeight: '1.6',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Dominate search results in {cityName} with our proven SEO strategies. 
              Increase your online visibility, drive qualified traffic, and grow your business.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="#contact" 
                style={{
                  background: '#fbbf24',
                  color: '#333',
                  padding: '1rem 2rem',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}
              >
                Get Free SEO Audit
              </a>
              <a 
                href={`tel:${phoneNumber}`}
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  border: '2px solid white',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'translateY(0)'}
              >
                Call {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>
              Professional SEO Services in {cityName}
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#666',
              marginBottom: '2rem'
            }}>
              {contentSections.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: '#333' 
          }}>
            Our SEO Services in {cityName}
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {contentSections.seoServices.map((service, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem', 
                  color: '#7c3aed' 
                }}>
                  {service.service}
                </h3>
                <p style={{ 
                  color: '#666', 
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  color: '#555'
                }}>
                  {service.useCases.map((useCase, idx) => (
                    <li key={idx} style={{ 
                      marginBottom: '0.5rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        color: '#7c3aed',
                        fontWeight: 'bold'
                      }}>✓</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              textAlign: 'center', 
              marginBottom: '2rem', 
              color: '#333' 
            }}>
              Why Choose Deepthink SEO in {cityName}?
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#666',
              textAlign: 'center'
            }}>
              {contentSections.whyChooseUs}
            </p>
          </div>
        </div>
      </section>

      {/* Local Information Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            <div>
              <h2 style={{ 
                fontSize: '2.2rem', 
                marginBottom: '2rem', 
                color: '#333' 
              }}>
                About {cityName}
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#666',
                marginBottom: '2rem'
              }}>
                {contentSections.localInfo}
              </p>
              
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1.5rem', 
                color: '#7c3aed' 
              }}>
                Popular Landmarks
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {landmarks.map((landmark, index) => (
                  <li key={index} style={{ 
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'white',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                      {landmark.name}
                    </h4>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>
                      {landmark.address}
                    </p>
                    <a 
                      href={landmark.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#7c3aed', textDecoration: 'none' }}
                    >
                      Learn More →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1.5rem', 
                color: '#7c3aed' 
              }}>
                Business Districts
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {businessDistricts.map((district, index) => (
                  <div key={index} style={{
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                      {district.name}
                    </h4>
                    <p style={{ margin: '0 0 1rem 0', color: '#666' }}>
                      {district.description}
                    </p>
                    <Link 
                      href={district.link}
                      style={{ 
                        color: '#7c3aed', 
                        textDecoration: 'none',
                        fontWeight: '600'
                      }}
                    >
                      Our Services →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '2rem', 
              color: '#333' 
            }}>
              Service Areas
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#666',
              marginBottom: '2rem'
            }}>
              {contentSections.serviceAreas}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: '#333' 
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem', 
                  color: '#333' 
                }}>
                  How long does it take to see SEO results in {cityName}?
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  SEO results typically begin to show within 3-6 months, with significant improvements visible after 6-12 months. Local SEO results can appear faster, often within 1-3 months for Google Business Profile optimization.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem', 
                  color: '#333' 
                }}>
                  What makes SEO different in {cityName} compared to other cities?
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {cityName} has unique local search patterns, competitive landscapes, and business regulations. Our local expertise helps us navigate these specific challenges and opportunities to deliver better results for your business.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem', 
                  color: '#333' 
                }}>
                  Do you work with businesses outside of {cityName}?
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Yes, we provide SEO services to businesses throughout the greater {cityName} metropolitan area and surrounding regions. Contact us to discuss your specific location and service needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '4rem 0', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1.5rem' 
          }}>
            Ready to Dominate Search Results in {cityName}?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            opacity: '0.9'
          }}>
            Get your free SEO audit and discover how we can help your business grow online.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#contact" 
              style={{
                background: '#fbbf24',
                color: '#333',
                padding: '1rem 2rem',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}
            >
              Get Free SEO Audit
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid white'
              }}
            >
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
