'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

interface Service {
  title: string
  description: string
  icon: string
  href: string
  category: string
}

interface Testimonial {
  name: string
  company: string
  date: string
  content: string
  rating: number
}

const services: Service[] = [
  // SEO Services
  {
    title: 'Search Engine Optimization',
    description: 'Increase your rankings, traffic, and conversions with comprehensive SEO services.',
    icon: '🔍',
    href: '/services',
    category: 'SEO'
  },
  {
    title: 'Local SEO',
    description: 'Dominate local search results and attract customers in your service area.',
    icon: '📍',
    href: '/local-seo',
    category: 'SEO'
  },
  {
    title: 'E-commerce SEO',
    description: 'Boost product visibility, traffic, and revenue with SEO built for online stores.',
    icon: '🛒',
    href: '/e-commerce-seo',
    category: 'SEO'
  },
  {
    title: 'Technical SEO',
    description: 'Fix crawl errors, improve speed, and optimize site architecture for better indexing.',
    icon: '⚙️',
    href: '/technical-seo',
    category: 'SEO'
  },
  {
    title: 'Link Building',
    description: 'Earn high-quality backlinks that boost authority and improve rankings.',
    icon: '🔗',
    href: '/link-building',
    category: 'SEO'
  },
  {
    title: 'Content Marketing',
    description: 'Craft high-value content that ranks, converts, and builds long-term brand authority.',
    icon: '✍️',
    href: '/content-marketing',
    category: 'Content'
  },
  {
    title: 'SEO Consulting',
    description: 'Get expert insight and strategy tailored to your business goals.',
    icon: '🎯',
    href: '/contact',
    category: 'Consulting'
  }
]

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Solutions',
    date: 'October 15, 2024',
    content: 'Deepthink SEO transformed our online presence completely. Our organic traffic increased by 300% in just 6 months, and we\'re now ranking #1 for our target keywords. Their team is professional, responsive, and delivers real results.',
    rating: 5
  },
  {
    name: 'Mike Chen',
    company: 'Local Business Co.',
    date: 'September 28, 2024',
    content: 'Working with Deepthink SEO has been a game-changer for our local business. We went from being invisible online to dominating local search results. The ROI has been incredible - we\'re getting 5x more qualified leads than before.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'E-commerce Plus',
    date: 'September 10, 2024',
    content: 'Their e-commerce SEO expertise is unmatched. Our online store\'s visibility improved dramatically, and we\'ve seen a 250% increase in online sales. The technical optimizations they implemented made a huge difference.',
    rating: 5
  },
  {
    name: 'David Thompson',
    company: 'Professional Services',
    date: 'August 22, 2024',
    content: 'Deepthink SEO\'s content marketing strategy has been phenomenal. Our blog traffic increased by 400%, and we\'re now seen as industry thought leaders. Their content is engaging, SEO-optimized, and drives conversions.',
    rating: 5
  },
  {
    name: 'Lisa Wang',
    company: 'Growth Marketing',
    date: 'August 5, 2024',
    content: 'The link building campaign they ran for us was incredibly effective. Our domain authority increased significantly, and we\'re now ranking for competitive keywords we never thought possible. Highly recommend their services.',
    rating: 5
  },
  {
    name: 'Robert Martinez',
    company: 'Digital Agency',
    date: 'July 18, 2024',
    content: 'Their technical SEO audit revealed issues we didn\'t even know existed. After implementing their recommendations, our site speed improved by 60% and our search rankings jumped significantly. Excellent work!',
    rating: 5
  }
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [showAllTestimonials, setShowAllTestimonials] = useState(false)

  const categories = ['All', 'SEO', 'Content', 'Consulting']
  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  const displayedTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="services-hero-title">
              Utah Internet Marketing and Website Design Services
            </h1>
            <p className="services-hero-subtitle">
              Our services are designed to solve real business challenges and deliver measurable results.
            </p>
            <div className="services-hero-actions">
              <Link href="/contact" className="cta-button services-hero-cta-primary">
                Get My SEO Score
              </Link>
              <Link href="tel:13852162993" className="cta-button services-hero-cta-secondary">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          {/* Category Filter */}
          <div className="services-category-filter">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-filter-button ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.map((service, index) => (
              <Link key={index} href={service.href} className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <div className="service-card-link">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">What Our Client's Say</h2>
            <p className="testimonials-subtitle">
              Deepthink SEO testimonials showcase the real impact of our customized, data‑driven strategies on their business success. 
              Hear directly from our SEO marketing agency clients about how we've helped them ramp up lead generation, 
              fix marketing inefficiencies, and drive measurable growth.
            </p>
          </div>

          <div className="testimonials-grid">
            {displayedTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-company">{testimonial.company}</span>
                  </div>
                  <span className="testimonial-date">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>

          {!showAllTestimonials && (
            <div className="testimonials-actions">
              <button 
                onClick={() => setShowAllTestimonials(true)}
                className="cta-button testimonials-load-more"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-content">
            <h2 className="services-cta-title">Ready to Grow Your Business Online?</h2>
            <p className="services-cta-subtitle">
              Whether you need more traffic, better leads, or a faster website, our team is ready to help you reach your goals
            </p>
            <div className="services-cta-actions">
              <Link href="/contact" className="cta-button services-cta-primary">
                Get Your Business Audit Report
              </Link>
              <Link href="tel:13852162993" className="cta-button services-cta-secondary">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
