import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { createServiceData, commonWhyChooseUsFeatures, commonCtaButtons } from '@/lib/serviceUtils'

export const metadata: Metadata = {
  title: "Content Marketing Services - SEO-Optimized Content | Deepthink SEO",
  description: "Professional content marketing services that drive traffic and conversions. SEO-optimized blog posts, articles, and content strategies that engage your audience.",
  keywords: "content marketing, SEO content, blog writing, content strategy, content creation",
  openGraph: {
    title: "Content Marketing Services - SEO-Optimized Content | Deepthink SEO",
    description: "Professional content marketing services that drive traffic and conversions. SEO-optimized blog posts, articles, and content strategies that engage your audience.",
    url: 'https://deepthinkseo.online/content-marketing',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Content Marketing Services - Deepthink SEO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Content Marketing Services - SEO-Optimized Content | Deepthink SEO",
    description: "Professional content marketing services that drive traffic and conversions. SEO-optimized blog posts, articles, and content strategies that engage your audience.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/content-marketing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const contentMarketingData = createServiceData(
  'Content Marketing Services',
  'Create valuable, SEO-optimized content that attracts and engages your target audience. Our content marketing strategies drive traffic, build authority, and convert visitors into customers.',
  'Drive Traffic with Compelling Content',
  'Create valuable, SEO-optimized content that attracts and engages your target audience. Our content marketing strategies drive traffic, build authority, and convert visitors into customers.',
  '/images/content-marketing-hero.jpg',
  [
    {
      title: 'Blog Writing & Management',
      description: 'Professional blog posts that engage your audience and rank well in search results.',
      features: [
        'SEO-optimized blog posts',
        'Keyword research and targeting',
        'Content calendar management',
        'Regular publishing schedule',
        'Content performance tracking',
        'Reader engagement optimization'
      ],
      icon: '✍️',
      benefits: [
        'Higher search rankings',
        'Increased organic traffic',
        'Better user engagement',
        'Stronger brand authority'
      ]
    },
    {
      title: 'Content Strategy Development',
      description: 'Develop comprehensive content strategies aligned with your business goals and SEO objectives.',
      features: [
        'Content audit and analysis',
        'Keyword research and mapping',
        'Content gap analysis',
        'Editorial calendar planning',
        'Content pillar development',
        'Performance measurement'
      ],
      icon: '📋',
      benefits: [
        'Strategic content direction',
        'Better content ROI',
        'Improved search visibility',
        'Aligned business goals'
      ]
    },
    {
      title: 'SEO Content Optimization',
      description: 'Content optimized for search engines while maintaining readability and user engagement.',
      features: [
        'On-page SEO optimization',
        'Keyword density optimization',
        'Meta tag optimization',
        'Internal linking strategy',
        'Content structure optimization',
        'Schema markup implementation'
      ],
      icon: '🔍',
      benefits: [
        'Better search rankings',
        'Higher click-through rates',
        'Improved user experience',
        'Enhanced search visibility'
      ]
    },
    {
      title: 'Content Calendar Management',
      description: 'Strategic content planning and scheduling to maintain consistent publishing and engagement.',
      features: [
        'Editorial calendar creation',
        'Content scheduling',
        'Deadline management',
        'Content workflow optimization',
        'Team collaboration tools',
        'Performance tracking'
      ],
      icon: '📅',
      benefits: [
        'Consistent publishing',
        'Better content planning',
        'Improved team efficiency',
        'Higher content quality'
      ]
    },
    {
      title: 'Content Performance Analysis',
      description: 'Track and analyze content performance to optimize strategies and improve results.',
      features: [
        'Content analytics tracking',
        'Performance reporting',
        'ROI measurement',
        'A/B testing',
        'User behavior analysis',
        'Conversion tracking'
      ],
      icon: '📊',
      benefits: [
        'Data-driven decisions',
        'Improved content ROI',
        'Better performance insights',
        'Optimized strategies'
      ]
    },
    {
      title: 'Content Promotion & Distribution',
      description: 'Promote your content across multiple channels to maximize reach and engagement.',
      features: [
        'Social media promotion',
        'Email marketing integration',
        'Influencer outreach',
        'Content syndication',
        'PR and media outreach',
        'Community engagement'
      ],
      icon: '📢',
      benefits: [
        'Increased content reach',
        'Higher engagement rates',
        'Better brand visibility',
        'More qualified traffic'
      ]
    }
  ],
  {
    title: 'Why Choose Deepthink SEO for Content Marketing?',
    description: 'We create content that not only ranks well but also converts visitors into customers.',
    features: commonWhyChooseUsFeatures
  },
  {
    title: 'Ready to Create Content That Converts?',
    description: 'Get a free content marketing audit and discover how we can help your content drive more traffic and conversions.',
    primaryButton: {
      text: 'Get Free Content Marketing Audit',
      href: '/contact'
    },
    secondaryButton: commonCtaButtons.secondary
  }
)

export default function ContentMarketingPage() {
  return <ServicePageTemplate serviceData={contentMarketingData} />
}
