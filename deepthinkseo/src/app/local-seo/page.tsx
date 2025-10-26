import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Local SEO Services | Deepthink SEO | Get Found Locally',
  description: 'Boost your local search rankings with our expert Local SEO services. Get found by customers in your area with Google Business Profile optimization and local link building.',
  keywords: 'local seo, google business profile, local search optimization, local seo services, get found locally',
}

const localSeoData = {
  title: 'Local SEO Services',
  description: 'Dominate local search results and get found by customers in your area with our comprehensive Local SEO services.',
  heroTitle: 'Get Found by Local Customers',
  heroSubtitle: 'Dominate local search results and drive more foot traffic to your business with our proven Local SEO strategies.',
  heroImage: '/images/local-seo-hero.jpg',
  services: [
    {
      title: 'Google Business Profile Optimization',
      description: 'Optimize your Google Business Profile to appear in local searches and attract more customers.',
      features: [
        'Complete profile optimization',
        'High-quality photos and videos',
        'Regular posts and updates',
        'Review management',
        'Q&A optimization',
        'Local keyword targeting'
      ],
      icon: '📍',
      benefits: [
        'Higher local search visibility',
        'Increased click-through rates',
        'More customer inquiries',
        'Better local authority'
      ]
    },
    {
      title: 'Local Citation Building',
      description: 'Build consistent business citations across local directories and platforms.',
      features: [
        'NAP consistency across platforms',
        'Directory submissions',
        'Citation cleanup and correction',
        'Local schema markup',
        'Industry-specific directories',
        'Citation monitoring'
      ],
      icon: '📋',
      benefits: [
        'Improved local rankings',
        'Enhanced online presence',
        'Better local trust signals',
        'Increased local visibility'
      ]
    },
    {
      title: 'Local Link Building',
      description: 'Build high-quality local backlinks from relevant local websites and directories.',
      features: [
        'Local directory submissions',
        'Chamber of Commerce listings',
        'Local news and media outreach',
        'Community partnerships',
        'Local event sponsorships',
        'Industry association links'
      ],
      icon: '🔗',
      benefits: [
        'Stronger local authority',
        'Higher search rankings',
        'Increased referral traffic',
        'Better local credibility'
      ]
    },
    {
      title: 'Local Content Marketing',
      description: 'Create location-specific content that resonates with your local audience.',
      features: [
        'Local blog posts',
        'Community-focused content',
        'Local event coverage',
        'Area-specific landing pages',
        'Local keyword optimization',
        'Location-based content strategy'
      ],
      icon: '✍️',
      benefits: [
        'Better local engagement',
        'Increased local traffic',
        'Stronger community connection',
        'Higher conversion rates'
      ]
    },
    {
      title: 'Local Review Management',
      description: 'Manage and improve your online reviews to build trust and credibility.',
      features: [
        'Review monitoring and alerts',
        'Review response management',
        'Review generation strategies',
        'Review platform optimization',
        'Crisis management',
        'Review analytics and reporting'
      ],
      icon: '⭐',
      benefits: [
        'Improved reputation',
        'Higher conversion rates',
        'Better customer trust',
        'Increased local visibility'
      ]
    },
    {
      title: 'Local SEO Analytics',
      description: 'Track and measure your local SEO performance with detailed analytics and reporting.',
      features: [
        'Local ranking tracking',
        'Google Business Profile insights',
        'Local traffic analysis',
        'Citation monitoring',
        'Competitor analysis',
        'ROI measurement'
      ],
      icon: '📊',
      benefits: [
        'Data-driven decisions',
        'Clear performance metrics',
        'Optimized strategies',
        'Proven ROI'
      ]
    }
  ],
  whyChooseUs: {
    title: 'Why Choose Deepthink SEO for Local SEO?',
    description: 'We\'re Utah\'s trusted partner for local search optimization with proven results and expert strategies.',
    features: [
      {
        title: 'Proven Local Results',
        description: 'We\'ve helped hundreds of local businesses increase their visibility and drive more foot traffic.',
        icon: '🏆'
      },
      {
        title: 'Local Market Expertise',
        description: 'Deep understanding of Utah\'s local market and consumer behavior patterns.',
        icon: '🎯'
      },
      {
        title: 'Comprehensive Strategy',
        description: 'Full-service local SEO approach covering all aspects of local search optimization.',
        icon: '📈'
      },
      {
        title: 'Transparent Reporting',
        description: 'Regular reports and updates on your local SEO performance and progress.',
        icon: '📋'
      },
      {
        title: 'Dedicated Support',
        description: 'Personal account manager dedicated to your local SEO success.',
        icon: '🤝'
      },
      {
        title: 'Competitive Pricing',
        description: 'Affordable local SEO packages designed for businesses of all sizes.',
        icon: '💰'
      }
    ]
  },
  cta: {
    title: 'Ready to Dominate Local Search?',
    description: 'Get a free local SEO audit and discover how we can help your business get found by more local customers.',
    primaryButton: {
      text: 'Get Free Local SEO Audit',
      href: '/contact'
    },
    secondaryButton: {
      text: 'Call (385) 216-2993',
      href: 'tel:13852162993'
    }
  }
}

export default function LocalSEOPage() {
  return <ServicePageTemplate serviceData={localSeoData} />
}