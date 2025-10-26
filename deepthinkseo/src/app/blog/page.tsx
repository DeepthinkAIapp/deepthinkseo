'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const blogPosts = [
  {
    title: "What SEO Still Works in 2025: The Complete Guide",
    description: "Discover which SEO strategies still work in 2025 and which ones to avoid. Get expert insights on effective SEO techniques that drive real results in today's search landscape.",
    url: "/blog/what-seo-still-works-in-2025",
    image: "/blog/what-is-seo-e1722370603532.webp",
    publishedDate: "January 16, 2025",
    readingTime: "7 minutes",
    category: "SEO Strategy"
  },
  {
    title: "How AI is Fully Revolutionizing the Online Customer Experience in 2025",
    description: "Explore how artificial intelligence is transforming customer experiences online. Learn about AI-powered tools, personalization strategies, and the future of customer engagement.",
    url: "/blog/how-ai-is-fully-revolutionizing-the-online-customer-experience-in-2025",
    image: "/blog/seo-idea-lightbulbs.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "8 minutes",
    category: "AI & Technology"
  },
  {
    title: "Content Marketing Matters: Why Your Business Needs It",
    description: "Learn why content marketing is essential for business success. Discover how to create content that engages your audience, builds trust, and drives conversions.",
    url: "/blog/content-marketing-matters",
    image: "/blog/62ef302c0b52a665b5d72c2f_SEO-Pillar-Post-Art-1.png",
    publishedDate: "January 16, 2025",
    readingTime: "6 minutes",
    category: "Content Marketing"
  },
  {
    title: "The Importance of Building Citations for Local Businesses",
    description: "Discover why local business citations are crucial for SEO success. Learn how to build and manage citations that improve your local search rankings and visibility.",
    url: "/blog/the-importance-of-building-citations-for-local-businesses",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "7 minutes",
    category: "Local SEO"
  },
  {
    title: "The Importance of Your Business NAP (Name, Address, Phone Number)",
    description: "Learn why consistent NAP information is crucial for local SEO success. Discover how to audit and fix NAP inconsistencies across all online platforms.",
    url: "/blog/the-importance-of-your-business-nap-name-address-phone-number",
    image: "/blog/technical-seo-optimisation-hero-image.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "5 minutes",
    category: "Local SEO"
  },
  {
    title: "Blogging is Important for Business",
    description: "Discover why blogging is essential for business growth. Learn how to create a successful business blog that drives traffic, builds authority, and generates leads.",
    url: "/blog/blogging-is-important-for-business",
    image: "/blog/seo-web-design-article.png",
    publishedDate: "January 16, 2025",
    readingTime: "6 minutes",
    category: "Content Marketing"
  },
  {
    title: "5 Reasons You Need a Digital Marketing Strategy",
    description: "Discover why every business needs a comprehensive digital marketing strategy. Learn how strategic planning drives growth, increases ROI, and builds sustainable competitive advantage.",
    url: "/blog/5-reasons-you-need-digital-marketing-strategy",
    image: "/blog/SEO-Tools-Marketing-Agency-944x472.jpeg",
    publishedDate: "January 16, 2025",
    readingTime: "8 minutes",
    category: "Digital Marketing"
  },
  {
    title: "3 Ways to Exponentially Increase Your Email Marketing List",
    description: "Discover proven strategies to grow your email marketing list exponentially. Learn how to build a quality subscriber base that converts and drives business growth.",
    url: "/blog/3-ways-to-exponentially-increase-your-email-marketing-list",
    image: "/blog/SEO-Tools-Marketing-Agency-944x472.jpeg",
    publishedDate: "January 16, 2025",
    readingTime: "7 minutes",
    category: "Email Marketing"
  },
  {
    title: "The Ultimate Guide to Local SEO for Small Businesses",
    description: "Complete guide to local SEO for small businesses. Learn proven strategies to dominate local search results, attract more customers, and grow your business with local search optimization.",
    url: "/blog/the-ultimate-guide-to-local-seo-for-small-businesses",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "Local SEO"
  },
  {
    title: "How to Choose the Right SEO Agency for Your Business",
    description: "Learn how to choose the right SEO agency for your business. Discover the red flags to avoid, questions to ask, and what to look for in a quality SEO service provider.",
    url: "/blog/how-to-choose-the-right-seo-agency-for-your-business",
    image: "/blog/seo-graph.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "8 minutes",
    category: "SEO Services"
  },
  {
    title: "7 Tips to Improve Your Social Media Presence",
    description: "Discover 7 proven tips to improve your social media presence and engagement. Learn how to build a strong social media strategy that drives results for your business.",
    url: "/blog/7-tips-to-improve-your-social-media-presence",
    image: "/blog/seo-magnifying-glass.png",
    publishedDate: "January 16, 2025",
    readingTime: "7 minutes",
    category: "Social Media"
  },
  {
    title: "The Complete Guide to Technical SEO in 2025",
    description: "Master technical SEO with our comprehensive 2025 guide. Learn essential technical optimization strategies, tools, and best practices to improve your website's search performance.",
    url: "/blog/the-complete-guide-to-technical-seo-in-2025",
    image: "/blog/seo-magnifying-glass.png",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "Technical SEO"
  },
  {
    title: "10 Content Marketing Strategies That Actually Work",
    description: "Discover 10 proven content marketing strategies that drive real results. Learn how to create content that engages your audience, builds trust, and generates leads for your business.",
    url: "/blog/10-content-marketing-strategies-that-actually-work",
    image: "/blog/62ef302c0b52a665b5d72c2f_SEO-Pillar-Post-Art-1.png",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "Content Marketing"
  },
  {
    title: "The Future of SEO: What to Expect in 2025 and Beyond",
    description: "Explore the future of SEO and what changes to expect in 2025 and beyond. Learn about emerging trends, AI integration, and how to prepare your SEO strategy for the future.",
    url: "/blog/the-future-of-seo-what-to-expect-in-2025-and-beyond",
    image: "/blog/seo-magnifying-glass.png",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to Link Building in 2025",
    description: "Master link building with our comprehensive 2025 guide. Learn proven strategies, avoid penalties, and build high-quality backlinks that boost your SEO rankings.",
    url: "/blog/the-complete-guide-to-link-building-in-2025",
    image: "/blog/seo-graph.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "SEO Strategy"
  },
  {
    title: "E-commerce SEO: How to Dominate Online Sales",
    description: "Master e-commerce SEO with our comprehensive guide. Learn proven strategies to increase online sales, improve product visibility, and dominate search results for your online store.",
    url: "/blog/e-commerce-seo-how-to-dominate-online-sales",
    image: "/blog/seo-web-design-article.png",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "E-commerce SEO"
  },
  {
    title: "The Psychology of SEO: Understanding User Intent",
    description: "Master the psychology behind search behavior and user intent. Learn how to create content that matches what users are really looking for and dramatically improve your SEO results.",
    url: "/blog/the-psychology-of-seo-understanding-user-intent",
    image: "/blog/seo-magnifying-glass.png",
    publishedDate: "January 16, 2025",
    readingTime: "8 minutes",
    category: "SEO Strategy"
  },
  {
    title: "Mobile SEO: The Complete 2025 Guide",
    description: "Master mobile SEO with our comprehensive 2025 guide. Learn proven strategies to optimize your website for mobile search and dominate mobile search results.",
    url: "/blog/mobile-seo-the-complete-2025-guide",
    image: "/blog/seob_mobile.webp",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "Mobile SEO"
  },
  {
    title: "SEO for Small Businesses: A Complete Strategy",
    description: "Master SEO for small businesses with our comprehensive strategy guide. Learn proven tactics to compete with larger companies and dominate local search results on a budget.",
    url: "/blog/seo-for-small-businesses-a-complete-strategy",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "Small Business SEO"
  },
  {
    title: "Voice Search SEO: The Future is Here",
    description: "Master voice search SEO with our comprehensive guide. Learn how to optimize for voice search, smart speakers, and conversational queries to dominate the future of search.",
    url: "/blog/voice-search-seo-the-future-is-here",
    image: "/blog/seo-magnifying-glass.png",
    publishedDate: "January 16, 2025",
    readingTime: "8 minutes",
    category: "Voice Search SEO"
  },
  {
    title: "Google Analytics 4: The Complete SEO Guide",
    description: "Master Google Analytics 4 for SEO with our comprehensive guide. Learn how to track, measure, and optimize your SEO performance using GA4's advanced features and insights.",
    url: "/blog/google-analytics-4-the-complete-seo-guide",
    image: "/blog/seo-graph.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "SEO Analytics"
  },
  {
    title: "The Complete Guide to Schema Markup for SEO",
    description: "Master schema markup for SEO with our comprehensive guide. Learn how to implement structured data that helps search engines understand your content and improves your search rankings.",
    url: "/blog/the-complete-guide-to-schema-markup-for-seo",
    image: "/blog/seo-graph.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "8 minutes",
    category: "Technical SEO"
  },
  {
    title: "The Complete Guide to SEO Audits in 2025",
    description: "Master SEO audits with our comprehensive 2025 guide. Learn how to conduct thorough technical, content, and competitive SEO audits that identify opportunities and drive real results.",
    url: "/blog/the-complete-guide-to-seo-audits-in-2025",
    image: "/blog/seo-graph.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "How to Build High-Quality Backlinks in 2025",
    description: "Master the art of building high-quality backlinks in 2025. Learn proven strategies, avoid penalties, and build a powerful link profile that boosts your search rankings.",
    url: "/blog/how-to-build-high-quality-backlinks-in-2025",
    image: "/blog/SEO-Tools-Marketing-Agency-944x472.jpeg",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Psychology of SEO: Understanding User Intent",
    description: "Master the psychology behind search behavior and user intent. Learn how to create content that matches what users are really looking for and dramatically improve your SEO results.",
    url: "/blog/the-psychology-of-seo-understanding-user-intent",
    image: "/blog/seo-magnifying-glass.png",
    publishedDate: "January 16, 2025",
    readingTime: "8 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to Local SEO for E-commerce",
    description: "Master local SEO for e-commerce with our comprehensive guide. Learn how to optimize your online store for local search, drive foot traffic, and dominate local marketplaces in 2025.",
    url: "/blog/the-complete-guide-to-local-seo-for-e-commerce",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "E-commerce SEO"
  },
  {
    title: "The Future of Search: AI, Voice, and Visual Search",
    description: "Explore the future of search with AI, voice, and visual search technologies. Learn how to optimize your content for the next generation of search experiences and stay ahead of the competition.",
    url: "/blog/the-future-of-search-ai-voice-and-visual-search",
    image: "/blog/seo-idea-lightbulbs.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "AI & Technology"
  },
  {
    title: "SEO for SaaS Companies: A Complete Strategy",
    description: "Master SEO for SaaS companies with our comprehensive strategy guide. Learn how to optimize your SaaS website, content, and user experience to drive organic growth and increase customer acquisition.",
    url: "/blog/seo-for-saas-companies-a-complete-strategy",
    image: "/blog/seo-web-design-article.png",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to International SEO",
    description: "Master international SEO with our comprehensive guide. Learn how to optimize your website for global markets, target multiple countries and languages, and drive international organic traffic.",
    url: "/blog/the-complete-guide-to-international-seo",
    image: "/blog/seo-graph.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Healthcare",
    description: "Master SEO for healthcare with our comprehensive guide. Learn how to optimize your medical website, build trust with patients, and navigate healthcare SEO regulations while driving organic growth.",
    url: "/blog/the-complete-guide-to-seo-for-healthcare",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Real Estate",
    description: "Master SEO for real estate with our comprehensive guide. Learn how to optimize your real estate website, dominate local search, and generate more leads and sales in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-real-estate",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Law Firms",
    description: "Master SEO for law firms with our comprehensive guide. Learn how to optimize your legal website, build trust with potential clients, and generate more leads and cases in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-law-firms",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Restaurants",
    description: "Master SEO for restaurants with our comprehensive guide. Learn how to optimize your restaurant website, dominate local search, and attract more customers in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-restaurants",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Fitness and Wellness",
    description: "Master SEO for fitness and wellness businesses with our comprehensive guide. Learn how to optimize your gym, studio, or wellness website, attract more clients, and grow your business in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-fitness-and-wellness",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for E-learning and Online Courses",
    description: "Master SEO for e-learning platforms and online courses with our comprehensive guide. Learn how to optimize your educational content, attract more students, and grow your online education business in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-e-learning-and-online-courses",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Nonprofits",
    description: "Master SEO for nonprofit organizations with our comprehensive guide. Learn how to optimize your nonprofit website, attract more donors and volunteers, and increase your impact in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-nonprofits",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "9 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for B2B Companies",
    description: "Master SEO for B2B companies with our comprehensive guide. Learn how to optimize your business website, attract more qualified leads, and grow your B2B sales in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-b2b-companies",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Travel and Tourism",
    description: "Master SEO for travel and tourism businesses with our comprehensive guide. Learn how to optimize your travel website, attract more visitors, and grow your tourism business in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-travel-and-tourism",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Home Services",
    description: "Master SEO for home services businesses with our comprehensive guide. Learn how to optimize your home services website, dominate local search, and generate more leads and customers in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-home-services",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Professional Services",
    description: "Master SEO for professional services with our comprehensive guide. Learn how to optimize your professional services website, build authority, and attract more clients in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-professional-services",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for E-commerce Marketplaces",
    description: "Master SEO for e-commerce marketplaces with our comprehensive guide. Learn how to optimize your marketplace platform, attract more sellers and buyers, and grow your e-commerce business in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-e-commerce-marketplaces",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for SaaS Startups",
    description: "Master SEO for SaaS startups with our comprehensive guide. Learn how to optimize your SaaS website, attract more users, and grow your software business in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-saas-startups",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Content Creators",
    description: "Master SEO for content creators with our comprehensive guide. Learn how to optimize your content, build your audience, and grow your creative business in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-content-creators",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for E-commerce Dropshipping",
    description: "Master SEO for e-commerce dropshipping with our comprehensive guide. Learn how to optimize your dropshipping store, attract more customers, and grow your dropshipping business in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-e-commerce-dropshipping",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Affiliate Marketing",
    description: "Master SEO for affiliate marketing with our comprehensive guide. Learn how to optimize your affiliate content, build authority, and increase your affiliate commissions in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-affiliate-marketing",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Online Courses and Training",
    description: "Master SEO for online courses and training with our comprehensive guide. Learn how to optimize your course content, attract more students, and grow your online education business in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-online-courses-and-training",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Local Service Businesses",
    description: "Master SEO for local service businesses with our comprehensive guide. Learn how to optimize your local service website, dominate local search, and generate more leads and customers in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-local-service-businesses",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for E-commerce Product Pages",
    description: "Master SEO for e-commerce product pages with our comprehensive guide. Learn how to optimize your product pages, increase product visibility, and boost sales in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-e-commerce-product-pages",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for Digital Agencies",
    description: "Master SEO for digital agencies with our comprehensive guide. Learn how to optimize your agency website, attract more clients, and grow your digital marketing business in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-digital-agencies",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for E-commerce Category Pages",
    description: "Master SEO for e-commerce category pages with our comprehensive guide. Learn how to optimize your category pages, improve product discovery, and boost category sales in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-e-commerce-category-pages",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for E-commerce Search Pages",
    description: "Master SEO for e-commerce search pages with our comprehensive guide. Learn how to optimize your search functionality, improve product discovery, and boost search-driven sales in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-e-commerce-search-pages",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "10 minutes",
    category: "SEO Strategy"
  },
  {
    title: "The Complete Guide to SEO for E-commerce Checkout Pages",
    description: "Master SEO for e-commerce checkout pages with our comprehensive guide. Learn how to optimize your checkout process, reduce cart abandonment, and boost conversion rates in 2025.",
    url: "/blog/the-complete-guide-to-seo-for-e-commerce-checkout-pages",
    image: "/blog/google-seo.jpg",
    publishedDate: "January 16, 2025",
    readingTime: "11 minutes",
    category: "SEO Strategy"
  }
]

const categories = [
  "All",
  "SEO Strategy",
  "Local SEO",
  "Technical SEO",
  "Content Marketing",
  "Digital Marketing",
  "Email Marketing",
  "Social Media",
  "AI & Technology",
  "SEO Services",
  "E-commerce SEO",
  "Mobile SEO",
  "Small Business SEO",
  "Voice Search SEO",
  "SEO Analytics"
]

export default function BlogPage() {
  return (
    <main>
      <Header />
      <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>
              SEO Blog
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Stay updated with the latest SEO trends, digital marketing strategies, and industry insights to grow your business online.
            </p>
          </div>

          {/* Category Filter */}
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '25px',
                    border: '2px solid #7c3aed',
                    background: category === 'All' ? '#7c3aed' : 'transparent',
                    color: category === 'All' ? 'white' : '#7c3aed',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    if (category !== 'All') {
                      e.currentTarget.style.background = '#7c3aed'
                      e.currentTarget.style.color = 'white'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (category !== 'All') {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#7c3aed'
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {blogPosts.map((post, index) => (
              <article key={index} style={{
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              >
                <Link href={post.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: '#7c3aed',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {post.category}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h2 style={{ 
                      fontSize: '1.3rem', 
                      marginBottom: '0.75rem', 
                      color: '#333',
                      lineHeight: '1.4'
                    }}>
                      {post.title}
                    </h2>
                    <p style={{ 
                      color: '#666', 
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                      fontSize: '0.95rem'
                    }}>
                      {post.description}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      fontSize: '0.85rem',
                      color: '#888'
                    }}>
                      <span>{post.publishedDate}</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
            color: 'white',
            padding: '3rem 2rem',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Ready to Grow Your Business with SEO?
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
              Get a free SEO audit and discover how we can help you dominate search results.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/contact" 
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
                href="tel:+13852162993"
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
                Call (385) 216-2993
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}