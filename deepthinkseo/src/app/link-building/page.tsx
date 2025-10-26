import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { createServiceData, commonWhyChooseUsFeatures, commonCtaButtons } from '@/lib/serviceUtils'

export const metadata: Metadata = {
  title: "Link Building Services - High-Quality Backlinks | Deepthink SEO",
  description: "Professional link building services to improve your domain authority and search rankings. White-hat link building strategies that deliver lasting results.",
  keywords: "link building, backlinks, domain authority, link building services, white hat SEO",
  openGraph: {
    title: "Link Building Services - High-Quality Backlinks | Deepthink SEO",
    description: "Professional link building services to improve your domain authority and search rankings. White-hat link building strategies that deliver lasting results.",
    url: 'https://deepthinkseo.online/link-building',
    siteName: 'Deepthink SEO',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Link Building Services - Deepthink SEO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Link Building Services - High-Quality Backlinks | Deepthink SEO",
    description: "Professional link building services to improve your domain authority and search rankings. White-hat link building strategies that deliver lasting results.",
    images: ['/images/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://deepthinkseo.online/link-building',
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

const linkBuildingData = createServiceData(
  'Link Building Services',
  'Build high-quality backlinks that improve your domain authority and search rankings. Our white-hat link building strategies deliver lasting results and sustainable growth.',
  'Build Authority with Quality Backlinks',
  'Build high-quality backlinks that improve your domain authority and search rankings. Our white-hat link building strategies deliver lasting results and sustainable growth.',
  '/images/link-building-hero.jpg',
  [
    {
      title: 'Guest Posting & Outreach',
      description: 'Secure high-quality guest posting opportunities on relevant, authoritative websites in your industry.',
      features: [
        'Target website identification',
        'Outreach campaign management',
        'Content creation for guest posts',
        'Relationship building',
        'Follow-up and maintenance',
        'Performance tracking'
      ],
      icon: '✍️',
      benefits: [
        'High-quality backlinks',
        'Increased brand visibility',
        'Better domain authority',
        'Targeted traffic'
      ]
    },
    {
      title: 'Resource Page Link Building',
      description: 'Identify and secure links from resource pages and industry directories.',
      features: [
        'Resource page discovery',
        'Content gap analysis',
        'Resource creation',
        'Outreach and submission',
        'Link monitoring',
        'Relationship maintenance'
      ],
      icon: '📋',
      benefits: [
        'Relevant backlinks',
        'Industry authority',
        'Long-term link value',
        'Targeted referral traffic'
      ]
    },
    {
      title: 'Broken Link Building',
      description: 'Find and replace broken links with your content to earn valuable backlinks.',
      features: [
        'Broken link identification',
        'Replacement content creation',
        'Website owner outreach',
        'Link replacement process',
        'Quality assurance',
        'Success tracking'
      ],
      icon: '🔗',
      benefits: [
        'High-value backlinks',
        'Improved user experience',
        'Better search rankings',
        'Cost-effective strategy'
      ]
    },
    {
      title: 'Digital PR & Media Outreach',
      description: 'Create newsworthy content and secure media coverage and backlinks from news sites.',
      features: [
        'Newsworthy content creation',
        'Media list building',
        'Press release distribution',
        'Journalist outreach',
        'Media relationship building',
        'Coverage tracking'
      ],
      icon: '📰',
      benefits: [
        'High-authority backlinks',
        'Brand exposure',
        'Media credibility',
        'Wide reach'
      ]
    },
    {
      title: 'Local Link Building',
      description: 'Build local backlinks from relevant local websites, directories, and business associations.',
      features: [
        'Local directory submissions',
        'Chamber of Commerce listings',
        'Local business partnerships',
        'Community event sponsorships',
        'Local media outreach',
        'Citation building'
      ],
      icon: '📍',
      benefits: [
        'Local authority building',
        'Geographic relevance',
        'Local search visibility',
        'Community credibility'
      ]
    },
    {
      title: 'Link Audit & Disavowal',
      description: 'Audit your existing backlink profile and identify opportunities for improvement.',
      features: [
        'Comprehensive link audit',
        'Toxic link identification',
        'Disavowal file creation',
        'Link quality assessment',
        'Recovery strategies',
        'Ongoing monitoring'
      ],
      icon: '🔍',
      benefits: [
        'Clean backlink profile',
        'Penalty prevention',
        'Better link quality',
        'Improved rankings'
      ]
    }
  ],
  {
    title: 'Why Choose Deepthink SEO for Link Building?',
    description: 'We build high-quality, white-hat backlinks that improve your domain authority and search rankings.',
    features: commonWhyChooseUsFeatures
  },
  {
    title: 'Ready to Build Quality Backlinks?',
    description: 'Get a free link building audit and discover how we can help you build authority and improve your search rankings.',
    primaryButton: {
      text: 'Get Free Link Building Audit',
      href: '/contact'
    },
    secondaryButton: commonCtaButtons.secondary
  }
)

export default function LinkBuildingPage() {
  return <ServicePageTemplate serviceData={linkBuildingData} />
}
