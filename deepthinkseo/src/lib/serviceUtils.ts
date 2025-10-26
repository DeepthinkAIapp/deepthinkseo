export interface ServiceData {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  services: {
    title: string;
    description: string;
    features: string[];
    icon: string;
    benefits: string[];
  }[];
  whyChooseUs: {
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton: {
      text: string;
      href: string;
    };
  };
}

export function createServiceData(
  title: string,
  description: string,
  heroTitle: string,
  heroSubtitle: string,
  heroImage: string,
  services: ServiceData['services'],
  whyChooseUs: ServiceData['whyChooseUs'],
  cta: ServiceData['cta']
): ServiceData {
  return {
    title,
    description,
    heroTitle,
    heroSubtitle,
    heroImage,
    services,
    whyChooseUs,
    cta
  };
}

export const commonWhyChooseUsFeatures = [
  {
    title: 'Proven Results',
    description: 'We\'ve helped hundreds of businesses improve their search rankings and drive more organic traffic.',
    icon: '🏆'
  },
  {
    title: 'Expert Team',
    description: 'Certified SEO professionals with years of experience in digital marketing and search optimization.',
    icon: '👥'
  },
  {
    title: 'Data-Driven Approach',
    description: 'All strategies are based on comprehensive data analysis and proven SEO methodologies.',
    icon: '📊'
  },
  {
    title: 'Transparent Reporting',
    description: 'Regular reports and updates on your SEO performance with clear metrics and insights.',
    icon: '📋'
  },
  {
    title: 'Dedicated Support',
    description: 'Personal account manager dedicated to your SEO success and business growth.',
    icon: '🤝'
  },
  {
    title: 'Competitive Pricing',
    description: 'Affordable SEO packages designed for businesses of all sizes and budgets.',
    icon: '💰'
  }
];

export const commonCtaButtons = {
  primary: {
    text: 'Get Free SEO Audit',
    href: '/contact'
  },
  secondary: {
    text: 'Call (385) 216-2993',
    href: 'tel:13852162993'
  }
};
