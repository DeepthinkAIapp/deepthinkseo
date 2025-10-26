import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Technical SEO Services | Deepthink SEO | Website Optimization',
  description: 'Improve your website\'s technical foundation with our expert Technical SEO services. Site speed, mobile optimization, and crawlability improvements.',
  keywords: 'technical seo, website optimization, site speed, mobile seo, crawlability, technical seo audit',
}

const technicalSeoData = {
  title: 'Technical SEO Services',
  description: 'Optimize your website\'s technical foundation for better search engine crawling, indexing, and ranking performance.',
  heroTitle: 'Optimize Your Website\'s Technical Foundation',
  heroSubtitle: 'Improve site speed, mobile performance, and crawlability with our comprehensive Technical SEO services.',
  heroImage: '/images/technical-seo-hero.jpg',
  services: [
    {
      title: 'Site Speed Optimization',
      description: 'Improve your website\'s loading speed for better user experience and search rankings.',
      features: [
        'Core Web Vitals optimization',
        'Image compression and optimization',
        'Code minification',
        'CDN implementation',
        'Caching strategies',
        'Server response optimization'
      ],
      icon: '⚡',
      benefits: [
        'Faster page load times',
        'Better user experience',
        'Higher search rankings',
        'Reduced bounce rates'
      ]
    },
    {
      title: 'Mobile SEO Optimization',
      description: 'Ensure your website is fully optimized for mobile devices and mobile-first indexing.',
      features: [
        'Mobile-first design audit',
        'Responsive design optimization',
        'Mobile page speed optimization',
        'Touch-friendly navigation',
        'Mobile usability testing',
        'AMP implementation'
      ],
      icon: '📱',
      benefits: [
        'Better mobile rankings',
        'Improved mobile UX',
        'Higher mobile conversions',
        'Mobile-first indexing ready'
      ]
    },
    {
      title: 'Crawlability & Indexing',
      description: 'Ensure search engines can properly crawl and index all your important pages.',
      features: [
        'XML sitemap optimization',
        'Robots.txt configuration',
        'Internal linking structure',
        'URL structure optimization',
        'Canonical tag implementation',
        'Crawl error monitoring'
      ],
      icon: '🕷️',
      benefits: [
        'Better search engine crawling',
        'Improved indexing rates',
        'Faster content discovery',
        'Reduced crawl budget waste'
      ]
    },
    {
      title: 'Schema Markup Implementation',
      description: 'Add structured data to help search engines understand your content better.',
      features: [
        'Business schema markup',
        'Product schema implementation',
        'Review schema markup',
        'FAQ schema optimization',
        'Event schema markup',
        'Schema testing and validation'
      ],
      icon: '🏷️',
      benefits: [
        'Rich snippets in search results',
        'Better content understanding',
        'Higher click-through rates',
        'Enhanced search visibility'
      ]
    },
    {
      title: 'Technical SEO Audit',
      description: 'Comprehensive analysis of your website\'s technical SEO health and performance.',
      features: [
        'Site architecture analysis',
        'Page speed audit',
        'Mobile usability review',
        'Crawlability assessment',
        'Security audit',
        'Performance monitoring'
      ],
      icon: '🔍',
      benefits: [
        'Complete technical overview',
        'Identified optimization opportunities',
        'Performance baseline',
        'Actionable recommendations'
      ]
    },
    {
      title: 'Security & HTTPS',
      description: 'Implement security best practices and HTTPS to protect your website and users.',
      features: [
        'SSL certificate implementation',
        'HTTPS migration',
        'Security header configuration',
        'Mixed content fixes',
        'Security monitoring',
        'Vulnerability assessment'
      ],
      icon: '🔒',
      benefits: [
        'Better search rankings',
        'User trust and safety',
        'Compliance requirements',
        'Enhanced security posture'
      ]
    }
  ],
  whyChooseUs: {
    title: 'Why Choose Deepthink SEO for Technical SEO?',
    description: 'We combine technical expertise with proven strategies to optimize your website for maximum search performance.',
    features: [
      {
        title: 'Technical Expertise',
        description: 'Deep knowledge of web technologies, search engine algorithms, and technical SEO best practices.',
        icon: '⚙️'
      },
      {
        title: 'Comprehensive Analysis',
        description: 'Thorough technical audits covering all aspects of your website\'s SEO foundation.',
        icon: '📊'
      },
      {
        title: 'Proven Results',
        description: 'Track record of improving technical SEO metrics and search rankings for our clients.',
        icon: '📈'
      },
      {
        title: 'Ongoing Monitoring',
        description: 'Continuous monitoring and optimization to maintain peak technical performance.',
        icon: '👀'
      },
      {
        title: 'Developer Collaboration',
        description: 'Work directly with your development team to implement technical improvements.',
        icon: '🤝'
      },
      {
        title: 'Performance Focus',
        description: 'Focus on measurable improvements in site speed, usability, and search performance.',
        icon: '🎯'
      }
    ]
  },
  cta: {
    title: 'Ready to Optimize Your Website?',
    description: 'Get a free technical SEO audit and discover how we can improve your website\'s search performance.',
    primaryButton: {
      text: 'Get Free Technical SEO Audit',
      href: '/contact'
    },
    secondaryButton: {
      text: 'Call (385) 216-2993',
      href: 'tel:13852162993'
    }
  }
}

export default function TechnicalSEOPage() {
  return <ServicePageTemplate serviceData={technicalSeoData} />
}