import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { createServiceData, commonWhyChooseUsFeatures, commonCtaButtons } from '@/lib/serviceUtils'

export const metadata: Metadata = {
  title: 'E-commerce SEO Services | Deepthink SEO | Online Store Optimization',
  description: 'Boost your online store\'s visibility with our expert E-commerce SEO services. Product optimization, category pages, and conversion-focused strategies.',
  keywords: 'ecommerce seo, online store seo, product seo, ecommerce optimization, online store marketing',
}

const ecommerceSeoData = createServiceData(
  'E-commerce SEO Services',
  'Maximize your online store\'s visibility and drive more qualified traffic with our specialized E-commerce SEO services.',
  'Dominate E-commerce Search Results',
  'Boost your online store\'s visibility and drive more qualified traffic with our proven E-commerce SEO strategies.',
  '/images/ecommerce-seo-hero.jpg',
  [
    {
      title: 'Product Page Optimization',
      description: 'Optimize individual product pages for better search visibility and higher conversion rates.',
      features: [
        'Product title optimization',
        'Meta descriptions and tags',
        'Product image optimization',
        'Product schema markup',
        'Internal linking strategy',
        'User-generated content integration'
      ],
      icon: '🛍️',
      benefits: [
        'Higher product search rankings',
        'Increased product visibility',
        'Better conversion rates',
        'Improved user experience'
      ]
    },
    {
      title: 'Category Page SEO',
      description: 'Optimize category and collection pages to rank for high-value commercial keywords.',
      features: [
        'Category page structure optimization',
        'Keyword research and targeting',
        'Content optimization',
        'Filter and sorting optimization',
        'Pagination SEO',
        'Category schema markup'
      ],
      icon: '📂',
      benefits: [
        'Better category rankings',
        'Increased category traffic',
        'Higher conversion rates',
        'Improved site architecture'
      ]
    },
    {
      title: 'E-commerce Technical SEO',
      description: 'Optimize the technical foundation of your online store for better search performance.',
      features: [
        'Site speed optimization',
        'Mobile-first optimization',
        'Crawlability improvements',
        'Duplicate content handling',
        'URL structure optimization',
        'Site security implementation'
      ],
      icon: '⚙️',
      benefits: [
        'Faster page load times',
        'Better mobile experience',
        'Improved search crawling',
        'Enhanced site security'
      ]
    },
    {
      title: 'Local E-commerce SEO',
      description: 'Optimize your online store for local search to attract nearby customers.',
      features: [
        'Google Business Profile optimization',
        'Local keyword targeting',
        'Location-based landing pages',
        'Local schema markup',
        'Local citation building',
        'Store locator optimization'
      ],
      icon: '📍',
      benefits: [
        'Higher local search visibility',
        'Increased local traffic',
        'Better local conversions',
        'Enhanced local authority'
      ]
    },
    {
      title: 'E-commerce Content Strategy',
      description: 'Create compelling content that drives traffic and converts visitors into customers.',
      features: [
        'Product description optimization',
        'Blog content strategy',
        'Buying guides and tutorials',
        'FAQ page optimization',
        'User-generated content',
        'Seasonal content planning'
      ],
      icon: '✍️',
      benefits: [
        'Higher organic traffic',
        'Better user engagement',
        'Increased conversion rates',
        'Stronger brand authority'
      ]
    },
    {
      title: 'Conversion Rate Optimization',
      description: 'Optimize your e-commerce site to convert more visitors into paying customers.',
      features: [
        'Landing page optimization',
        'Checkout process optimization',
        'Product page conversion testing',
        'Trust signal implementation',
        'User experience improvements',
        'A/B testing and optimization'
      ],
      icon: '📈',
      benefits: [
        'Higher conversion rates',
        'Increased revenue per visitor',
        'Better user experience',
        'Improved ROI'
      ]
    }
  ],
  {
    title: 'Why Choose Deepthink SEO for E-commerce SEO?',
    description: 'We specialize in e-commerce SEO and understand the unique challenges of optimizing online stores for search engines.',
    features: commonWhyChooseUsFeatures
  },
  {
    title: 'Ready to Boost Your Online Store?',
    description: 'Get a free e-commerce SEO audit and discover how we can help your online store rank higher and sell more.',
    primaryButton: commonCtaButtons.primary,
    secondaryButton: commonCtaButtons.secondary
  }
)

export default function EcommerceSEOPage() {
  return <ServicePageTemplate serviceData={ecommerceSeoData} />
}