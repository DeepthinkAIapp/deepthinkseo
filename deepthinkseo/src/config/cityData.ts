export interface CityData {
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
  heroImage: string;
  landmarks: Array<{
    name: string;
    address: string;
    url: string;
    image?: string;
  }>;
  businessDistricts: Array<{
    name: string;
    description: string;
    link: string;
  }>;
  permitInfo: {
    cityName: string;
    phoneNumber: string;
    requirements: string;
  };
  contentSections: {
    overview: string;
    residentialServices: string[];
    commercialServices: string[];
    whyChooseUs: string;
    seoServices: Array<{
      service: string;
      description: string;
      useCases: string[];
    }>;
    localInfo: string;
    serviceAreas: string;
  };
}

export const cityData: Record<string, CityData> = {
  'new-york-city': {
    cityName: 'New York City',
    citySlug: 'new-york-city',
    state: 'NY',
    phoneNumber: '385-216-2993',
    latitude: '40.7128',
    longitude: '-74.0060',
    heroImage: '/images/cities/new-york-city-skyline.jpg',
    landmarks: [
      {
        name: 'Times Square',
        address: 'Times Square, New York, NY 10036',
        url: 'https://www.timessquarenyc.org/',
      },
      {
        name: 'Central Park',
        address: 'Central Park, New York, NY 10024',
        url: 'https://www.centralparknyc.org/',
      },
      {
        name: 'Statue of Liberty',
        address: 'Liberty Island, New York, NY 10004',
        url: 'https://www.nps.gov/stli/',
      },
      {
        name: 'Empire State Building',
        address: '350 5th Ave, New York, NY 10118',
        url: 'https://www.esbnyc.com/',
      },
    ],
    businessDistricts: [
      {
        name: 'Manhattan',
        description: 'Financial and business hub',
        link: '/seo-services',
      },
      {
        name: 'Brooklyn',
        description: 'Growing tech and creative industries',
        link: '/local-seo',
      },
      {
        name: 'Queens',
        description: 'Diverse business community',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'New York City',
      phoneNumber: '311',
      requirements: 'Contact NYC Business Services for SEO and digital marketing permit requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout New York City, helping businesses dominate search results in the most competitive market in the world. Our proven strategies help NYC businesses increase their online visibility, drive qualified traffic, and generate more leads and sales.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for small businesses',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in New York City, Deepthink SEO stands out as the premier choice. Our team of experienced professionals understands the unique challenges of competing in NYC\'s saturated market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the Big Apple.',
      seoServices: [
        {
          service: 'Local SEO',
          description: 'Dominate local search results in NYC',
          useCases: ['Restaurant visibility', 'Retail store optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Blog content strategy', 'Video marketing', 'Social media content', 'Email campaigns'],
        },
        {
          service: 'Technical SEO',
          description: 'Optimize your website for peak performance',
          useCases: ['Site speed optimization', 'Mobile responsiveness', 'Core Web Vitals', 'Crawl optimization'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'New York City is home to some of the world\'s most iconic landmarks and a thriving business ecosystem. From the bustling streets of Manhattan to the innovative startups in Brooklyn, NYC offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout all five boroughs of New York City, including Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Our local expertise helps businesses connect with customers across the entire metropolitan area.',
    },
  },
  'los-angeles': {
    cityName: 'Los Angeles',
    citySlug: 'los-angeles',
    state: 'CA',
    phoneNumber: '385-216-2993',
    latitude: '34.0522',
    longitude: '-118.2437',
    heroImage: '/images/cities/los-angeles-hollywood-sign.jpg',
    landmarks: [
      {
        name: 'Hollywood Sign',
        address: 'Hollywood Sign, Los Angeles, CA 90068',
        url: 'https://www.hollywoodsign.org/',
      },
      {
        name: 'Santa Monica Pier',
        address: '200 Santa Monica Pier, Santa Monica, CA 90401',
        url: 'https://www.santamonicapier.org/',
      },
      {
        name: 'Griffith Observatory',
        address: '2800 E Observatory Rd, Los Angeles, CA 90027',
        url: 'https://griffithobservatory.org/',
      },
      {
        name: 'The Getty Center',
        address: '1200 Getty Center Dr, Los Angeles, CA 90049',
        url: 'https://www.getty.edu/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown LA',
        description: 'Financial and business district',
        link: '/seo-services',
      },
      {
        name: 'Hollywood',
        description: 'Entertainment and media hub',
        link: '/content-marketing',
      },
      {
        name: 'Beverly Hills',
        description: 'Luxury retail and services',
        link: '/local-seo',
      },
    ],
    permitInfo: {
      cityName: 'Los Angeles',
      phoneNumber: '311',
      requirements: 'Contact LA Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO delivers cutting-edge digital marketing solutions throughout Los Angeles, helping businesses in the entertainment capital of the world achieve online success. Our specialized strategies are designed to help LA businesses stand out in the competitive digital landscape and reach their target audiences effectively.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for entertainment industry',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Los Angeles, Deepthink SEO is your trusted partner for digital success. Our team understands the unique dynamics of the LA market, from entertainment industry needs to local business requirements. We provide customized strategies, transparent reporting, and measurable results that help your business thrive in the City of Angels.',
      seoServices: [
        {
          service: 'Entertainment SEO',
          description: 'Specialized SEO for entertainment industry',
          useCases: ['Film production companies', 'Music venues', 'Event promotion', 'Celebrity services'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate LA area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create compelling content that engages',
          useCases: ['Video marketing', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Fashion retail', 'Beauty products', 'Home goods', 'Electronics'],
        },
      ],
      localInfo: 'Los Angeles is a global entertainment capital and a thriving business hub with diverse industries. From the entertainment studios in Hollywood to the tech companies in Silicon Beach, LA offers unique opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Los Angeles area, including Downtown LA, Hollywood, Beverly Hills, Santa Monica, Pasadena, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire LA metropolitan region.',
    },
  },
  'chicago': {
    cityName: 'Chicago',
    citySlug: 'chicago',
    state: 'IL',
    phoneNumber: '385-216-2993',
    latitude: '41.8781',
    longitude: '-87.6298',
    heroImage: '/images/cities/chicago-cloud-gate.jpg',
    landmarks: [
      {
        name: 'Millennium Park',
        address: '201 E Randolph St, Chicago, IL 60602',
        url: 'https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html',
      },
      {
        name: 'Navy Pier',
        address: '600 E Grand Ave, Chicago, IL 60611',
        url: 'https://navypier.org/',
      },
      {
        name: 'Willis Tower',
        address: '233 S Wacker Dr, Chicago, IL 60606',
        url: 'https://www.willistower.com/',
      },
      {
        name: 'Art Institute of Chicago',
        address: '111 S Michigan Ave, Chicago, IL 60603',
        url: 'https://www.artic.edu/',
      },
    ],
    businessDistricts: [
      {
        name: 'The Loop',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'River North',
        description: 'Tech and creative hub',
        link: '/content-marketing',
      },
      {
        name: 'Gold Coast',
        description: 'Luxury retail and services',
        link: '/local-seo',
      },
    ],
    permitInfo: {
      cityName: 'Chicago',
      phoneNumber: '311',
      requirements: 'Contact Chicago Business Affairs for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout Chicago, helping businesses in the Windy City achieve online dominance. Our proven strategies help Chicago businesses increase their search visibility, drive qualified traffic, and generate more leads and sales in this competitive market.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for small businesses',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Chicago, Deepthink SEO delivers exceptional results. Our team understands the unique challenges of competing in Chicago\'s diverse market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the Windy City.',
      seoServices: [
        {
          service: 'Local SEO',
          description: 'Dominate Chicago area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Blog content strategy', 'Video marketing', 'Social media content', 'Email campaigns'],
        },
        {
          service: 'Technical SEO',
          description: 'Optimize your website for peak performance',
          useCases: ['Site speed optimization', 'Mobile responsiveness', 'Core Web Vitals', 'Crawl optimization'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Chicago is a major business hub with a diverse economy spanning finance, technology, manufacturing, and more. From the bustling Loop to the innovative startups in River North, Chicago offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Chicago area, including The Loop, River North, Gold Coast, Lincoln Park, and all surrounding suburbs. Our local expertise helps businesses connect with customers across the entire Chicago metropolitan region.',
    },
  },
  'houston': {
    cityName: 'Houston',
    citySlug: 'houston',
    state: 'TX',
    phoneNumber: '385-216-2993',
    latitude: '29.7604',
    longitude: '-95.3698',
    heroImage: '/images/cities/houston-space-center.jpg',
    landmarks: [
      {
        name: 'Space Center Houston',
        address: '1601 E NASA Pkwy, Houston, TX 77058',
        url: 'https://spacecenter.org/',
      },
      {
        name: 'Museum of Fine Arts',
        address: '1001 Bissonnet St, Houston, TX 77005',
        url: 'https://www.mfah.org/',
      },
      {
        name: 'Houston Zoo',
        address: '6200 Hermann Park Dr, Houston, TX 77030',
        url: 'https://www.houstonzoo.org/',
      },
      {
        name: 'Discovery Green',
        address: '1500 McKinney St, Houston, TX 77010',
        url: 'https://www.discoverygreen.com/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Houston',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Galleria Area',
        description: 'Upscale retail and business',
        link: '/local-seo',
      },
      {
        name: 'Medical Center',
        description: 'Healthcare and research hub',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'Houston',
      phoneNumber: '311',
      requirements: 'Contact Houston Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO delivers comprehensive digital marketing solutions throughout Houston, helping businesses in the energy capital of the world achieve online success. Our specialized strategies are designed to help Houston businesses stand out in the competitive digital landscape and reach their target audiences effectively.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for energy sector',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Houston, Deepthink SEO is your trusted partner for digital success. Our team understands the unique dynamics of the Houston market, from energy industry needs to local business requirements. We provide customized strategies, transparent reporting, and measurable results that help your business thrive in Space City.',
      seoServices: [
        {
          service: 'Energy Sector SEO',
          description: 'Specialized SEO for energy and oil companies',
          useCases: ['Oil & gas companies', 'Energy services', 'Renewable energy', 'Industrial services'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Houston area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create compelling content that engages',
          useCases: ['Industry content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Industrial equipment', 'Energy products', 'Home goods', 'Electronics'],
        },
      ],
      localInfo: 'Houston is a major business hub with a diverse economy spanning energy, healthcare, technology, and more. From the bustling downtown to the innovative companies in the Medical Center, Houston offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Houston area, including Downtown, Galleria, Medical Center, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Houston metropolitan region.',
    },
  },
  'phoenix': {
    cityName: 'Phoenix',
    citySlug: 'phoenix',
    state: 'AZ',
    phoneNumber: '385-216-2993',
    latitude: '33.4484',
    longitude: '-112.0740',
    heroImage: '/images/cities/phoenix-desert-botanical.jpg',
    landmarks: [
      {
        name: 'Desert Botanical Garden',
        address: '1201 N Galvin Pkwy, Phoenix, AZ 85008',
        url: 'https://www.dbg.org/',
      },
      {
        name: 'Heard Museum',
        address: '2301 N Central Ave, Phoenix, AZ 85004',
        url: 'https://heard.org/',
      },
      {
        name: 'Phoenix Art Museum',
        address: '1625 N Central Ave, Phoenix, AZ 85004',
        url: 'https://phxart.org/',
      },
      {
        name: 'Camelback Mountain',
        address: 'Camelback Mountain, Phoenix, AZ 85018',
        url: 'https://www.phoenix.gov/parks/trails/locations/camelback-mountain',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Phoenix',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Scottsdale',
        description: 'Upscale retail and business',
        link: '/local-seo',
      },
      {
        name: 'Tempe',
        description: 'University and tech hub',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'Phoenix',
      phoneNumber: '602-262-6011',
      requirements: 'Contact Phoenix Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout Phoenix, helping businesses in the Valley of the Sun achieve online success. Our proven strategies help Phoenix businesses increase their search visibility, drive qualified traffic, and generate more leads and sales in this growing market.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for desert climate businesses',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Phoenix, Deepthink SEO delivers exceptional results. Our team understands the unique challenges of competing in Phoenix\'s growing market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the Valley of the Sun.',
      seoServices: [
        {
          service: 'Local SEO',
          description: 'Dominate Phoenix area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Desert lifestyle content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'Technical SEO',
          description: 'Optimize your website for peak performance',
          useCases: ['Site speed optimization', 'Mobile responsiveness', 'Core Web Vitals', 'Crawl optimization'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Phoenix is a rapidly growing business hub with a diverse economy spanning technology, healthcare, manufacturing, and tourism. From the bustling downtown to the innovative companies in Tempe, Phoenix offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Phoenix area, including Downtown, Scottsdale, Tempe, Mesa, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Phoenix metropolitan region.',
    },
  },
  'philadelphia': {
    cityName: 'Philadelphia',
    citySlug: 'philadelphia',
    state: 'PA',
    phoneNumber: '385-216-2993',
    latitude: '39.9526',
    longitude: '-75.1652',
    heroImage: '/images/cities/philadelphia-liberty-bell.jpg',
    landmarks: [
      {
        name: 'Liberty Bell',
        address: '526 Market St, Philadelphia, PA 19106',
        url: 'https://www.nps.gov/inde/learn/historyculture/stories-liberty-bell.htm',
      },
      {
        name: 'Independence Hall',
        address: '520 Chestnut St, Philadelphia, PA 19106',
        url: 'https://www.nps.gov/inde/learn/historyculture/places-independencehall.htm',
      },
      {
        name: 'Philadelphia Museum of Art',
        address: '2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130',
        url: 'https://www.philamuseum.org/',
      },
      {
        name: 'Reading Terminal Market',
        address: '51 N 12th St, Philadelphia, PA 19107',
        url: 'https://readingterminalmarket.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Center City',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'University City',
        description: 'Education and research hub',
        link: '/content-marketing',
      },
      {
        name: 'Old City',
        description: 'Historic and creative district',
        link: '/local-seo',
      },
    ],
    permitInfo: {
      cityName: 'Philadelphia',
      phoneNumber: '215-686-1776',
      requirements: 'Contact Philadelphia Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO delivers comprehensive digital marketing solutions throughout Philadelphia, helping businesses in the City of Brotherly Love achieve online success. Our specialized strategies are designed to help Philadelphia businesses stand out in the competitive digital landscape and reach their target audiences effectively.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for historic city businesses',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Philadelphia, Deepthink SEO is your trusted partner for digital success. Our team understands the unique dynamics of the Philadelphia market, from historic district businesses to modern tech companies. We provide customized strategies, transparent reporting, and measurable results that help your business thrive in the City of Brotherly Love.',
      seoServices: [
        {
          service: 'Local SEO',
          description: 'Dominate Philadelphia area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create compelling content that engages',
          useCases: ['Historic content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'Technical SEO',
          description: 'Optimize your website for peak performance',
          useCases: ['Site speed optimization', 'Mobile responsiveness', 'Core Web Vitals', 'Crawl optimization'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Philadelphia is a major business hub with a rich history and diverse economy spanning healthcare, education, technology, and manufacturing. From the historic Old City to the innovative companies in University City, Philadelphia offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Philadelphia area, including Center City, University City, Old City, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Philadelphia metropolitan region.',
    },
  },
  'san-antonio': {
    cityName: 'San Antonio',
    citySlug: 'san-antonio',
    state: 'TX',
    phoneNumber: '385-216-2993',
    latitude: '29.4241',
    longitude: '-98.4936',
    heroImage: '/images/cities/san-antonio-alamo.jpg',
    landmarks: [
      {
        name: 'The Alamo',
        address: '300 Alamo Plaza, San Antonio, TX 78205',
        url: 'https://www.thealamo.org/',
      },
      {
        name: 'River Walk',
        address: '110 Broadway St, San Antonio, TX 78205',
        url: 'https://www.thesanantonioriverwalk.com/',
      },
      {
        name: 'San Antonio Missions',
        address: '2202 Roosevelt Ave, San Antonio, TX 78210',
        url: 'https://www.nps.gov/saan/',
      },
      {
        name: 'San Antonio Zoo',
        address: '3903 N St Mary\'s St, San Antonio, TX 78212',
        url: 'https://sazoo.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown San Antonio',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Medical Center',
        description: 'Healthcare and research hub',
        link: '/content-marketing',
      },
      {
        name: 'Stone Oak',
        description: 'Upscale residential and business',
        link: '/local-seo',
      },
    ],
    permitInfo: {
      cityName: 'San Antonio',
      phoneNumber: '210-207-6000',
      requirements: 'Contact San Antonio Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout San Antonio, helping businesses in the Alamo City achieve online success. Our proven strategies help San Antonio businesses increase their search visibility, drive qualified traffic, and generate more leads and sales in this historic and growing market.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for tourism and hospitality',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in San Antonio, Deepthink SEO delivers exceptional results. Our team understands the unique challenges of competing in San Antonio\'s diverse market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the Alamo City.',
      seoServices: [
        {
          service: 'Tourism SEO',
          description: 'Specialized SEO for tourism and hospitality',
          useCases: ['Hotels and resorts', 'Restaurants', 'Tourist attractions', 'Event venues'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate San Antonio area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Cultural content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'San Antonio is a major business hub with a diverse economy spanning healthcare, military, tourism, and technology. From the historic downtown to the innovative companies in the Medical Center, San Antonio offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater San Antonio area, including Downtown, Medical Center, Stone Oak, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire San Antonio metropolitan region.',
    },
  },
  'san-diego': {
    cityName: 'San Diego',
    citySlug: 'san-diego',
    state: 'CA',
    phoneNumber: '385-216-2993',
    latitude: '32.7157',
    longitude: '-117.1611',
    heroImage: '/images/cities/san-diego-balboa-park.jpg',
    landmarks: [
      {
        name: 'Balboa Park',
        address: '1549 El Prado, San Diego, CA 92101',
        url: 'https://balboapark.org/',
      },
      {
        name: 'San Diego Zoo',
        address: '2920 Zoo Dr, San Diego, CA 92101',
        url: 'https://zoo.sandiegozoo.org/',
      },
      {
        name: 'USS Midway Museum',
        address: '910 N Harbor Dr, San Diego, CA 92101',
        url: 'https://www.midway.org/',
      },
      {
        name: 'La Jolla Cove',
        address: '1100 Coast Blvd, La Jolla, CA 92037',
        url: 'https://www.sandiego.gov/park-and-recreation/parks/regional/beaches/lajolla',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown San Diego',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'La Jolla',
        description: 'Upscale retail and business',
        link: '/local-seo',
      },
      {
        name: 'Sorrento Valley',
        description: 'Tech and biotech hub',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'San Diego',
      phoneNumber: '619-236-5555',
      requirements: 'Contact San Diego Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO delivers comprehensive digital marketing solutions throughout San Diego, helping businesses in America\'s Finest City achieve online success. Our specialized strategies are designed to help San Diego businesses stand out in the competitive digital landscape and reach their target audiences effectively.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for biotech and defense',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in San Diego, Deepthink SEO is your trusted partner for digital success. Our team understands the unique dynamics of the San Diego market, from biotech and defense industries to tourism and local businesses. We provide customized strategies, transparent reporting, and measurable results that help your business thrive in America\'s Finest City.',
      seoServices: [
        {
          service: 'Biotech SEO',
          description: 'Specialized SEO for biotech and life sciences',
          useCases: ['Pharmaceutical companies', 'Medical devices', 'Research institutions', 'Healthcare services'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate San Diego area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create compelling content that engages',
          useCases: ['Scientific content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'San Diego is a major business hub with a diverse economy spanning biotechnology, defense, tourism, and technology. From the bustling downtown to the innovative companies in Sorrento Valley, San Diego offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater San Diego area, including Downtown, La Jolla, Sorrento Valley, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire San Diego metropolitan region.',
    },
  },
  'dallas': {
    cityName: 'Dallas',
    citySlug: 'dallas',
    state: 'TX',
    phoneNumber: '385-216-2993',
    latitude: '32.7767',
    longitude: '-96.7970',
    heroImage: '/images/cities/dallas-reunion-tower.jpg',
    landmarks: [
      {
        name: 'Reunion Tower',
        address: '300 Reunion Blvd E, Dallas, TX 75207',
        url: 'https://reuniontower.com/',
      },
      {
        name: 'Dallas Museum of Art',
        address: '1717 N Harwood St, Dallas, TX 75201',
        url: 'https://dma.org/',
      },
      {
        name: 'Perot Museum of Nature and Science',
        address: '2201 N Field St, Dallas, TX 75201',
        url: 'https://www.perotmuseum.org/',
      },
      {
        name: 'Dallas Arboretum',
        address: '8525 Garland Rd, Dallas, TX 75218',
        url: 'https://www.dallasarboretum.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Dallas',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Uptown Dallas',
        description: 'Upscale retail and business',
        link: '/local-seo',
      },
      {
        name: 'Plano',
        description: 'Tech and corporate hub',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'Dallas',
      phoneNumber: '214-670-3111',
      requirements: 'Contact Dallas Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout Dallas, helping businesses in the Big D achieve online success. Our proven strategies help Dallas businesses increase their search visibility, drive qualified traffic, and generate more leads and sales in this major business hub.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for corporate businesses',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Dallas, Deepthink SEO delivers exceptional results. Our team understands the unique challenges of competing in Dallas\'s corporate market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the Big D.',
      seoServices: [
        {
          service: 'Corporate SEO',
          description: 'Specialized SEO for large corporations',
          useCases: ['Fortune 500 companies', 'Financial services', 'Real estate', 'Professional services'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Dallas area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Corporate content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Dallas is a major business hub with a diverse economy spanning finance, technology, telecommunications, and energy. From the bustling downtown to the corporate headquarters in Plano, Dallas offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Dallas area, including Downtown, Uptown, Plano, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Dallas metropolitan region.',
    },
  },
  'san-jose': {
    cityName: 'San Jose',
    citySlug: 'san-jose',
    state: 'CA',
    phoneNumber: '385-216-2993',
    latitude: '37.3382',
    longitude: '-121.8863',
    heroImage: '/images/cities/san-jose-tech-interactive.jpg',
    landmarks: [
      {
        name: 'Tech Interactive',
        address: '201 S Market St, San Jose, CA 95113',
        url: 'https://www.thetech.org/',
      },
      {
        name: 'San Jose Museum of Art',
        address: '110 S Market St, San Jose, CA 95110',
        url: 'https://sjmusart.org/',
      },
      {
        name: 'Santana Row',
        address: '377 Santana Row, San Jose, CA 95128',
        url: 'https://santanarow.com/',
      },
      {
        name: 'Alum Rock Park',
        address: '15350 Penitencia Creek Rd, San Jose, CA 95127',
        url: 'https://www.sanjoseca.gov/your-government/departments/parks-recreation-community-services/parks-trails/regional-parks/alum-rock-park',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown San Jose',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Santana Row',
        description: 'Upscale retail and business',
        link: '/local-seo',
      },
      {
        name: 'North San Jose',
        description: 'Tech and corporate hub',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'San Jose',
      phoneNumber: '408-535-3500',
      requirements: 'Contact San Jose Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO delivers comprehensive digital marketing solutions throughout San Jose, helping businesses in the Capital of Silicon Valley achieve online success. Our specialized strategies are designed to help San Jose businesses stand out in the competitive digital landscape and reach their target audiences effectively.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for tech companies',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in San Jose, Deepthink SEO is your trusted partner for digital success. Our team understands the unique dynamics of the San Jose market, from tech startups to established corporations. We provide customized strategies, transparent reporting, and measurable results that help your business thrive in the Capital of Silicon Valley.',
      seoServices: [
        {
          service: 'Tech SEO',
          description: 'Specialized SEO for technology companies',
          useCases: ['SaaS companies', 'Software development', 'Tech startups', 'Hardware companies'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate San Jose area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create compelling content that engages',
          useCases: ['Technical content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'San Jose is a major business hub with a diverse economy spanning technology, healthcare, education, and manufacturing. From the bustling downtown to the innovative companies in North San Jose, San Jose offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater San Jose area, including Downtown, Santana Row, North San Jose, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire San Jose metropolitan region.',
    },
  },
  'austin': {
    cityName: 'Austin',
    citySlug: 'austin',
    state: 'TX',
    phoneNumber: '385-216-2993',
    latitude: '30.2672',
    longitude: '-97.7431',
    heroImage: '/images/cities/austin-capitol.jpg',
    landmarks: [
      {
        name: 'Texas State Capitol',
        address: '1100 Congress Ave, Austin, TX 78701',
        url: 'https://tspb.texas.gov/prop/tc/tc/capitol.html',
      },
      {
        name: 'South by Southwest (SXSW)',
        address: 'Multiple venues, Austin, TX',
        url: 'https://www.sxsw.com/',
      },
      {
        name: 'Zilker Park',
        address: '2100 Barton Springs Rd, Austin, TX 78704',
        url: 'https://www.austintexas.gov/department/zilker-park',
      },
      {
        name: 'Austin City Limits Music Festival',
        address: 'Zilker Park, Austin, TX 78704',
        url: 'https://www.aclfestival.com/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Austin',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'South Austin',
        description: 'Creative and tech hub',
        link: '/content-marketing',
      },
      {
        name: 'East Austin',
        description: 'Emerging business district',
        link: '/local-seo',
      },
    ],
    permitInfo: {
      cityName: 'Austin',
      phoneNumber: '512-974-2000',
      requirements: 'Contact Austin Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout Austin, helping businesses in the Live Music Capital of the World achieve online success. Our proven strategies help Austin businesses increase their search visibility, drive qualified traffic, and generate more leads and sales in this vibrant and growing market.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for creative industries',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Austin, Deepthink SEO delivers exceptional results. Our team understands the unique challenges of competing in Austin\'s creative and tech market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the Live Music Capital of the World.',
      seoServices: [
        {
          service: 'Creative SEO',
          description: 'Specialized SEO for creative industries',
          useCases: ['Music venues', 'Art galleries', 'Creative agencies', 'Event venues'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Austin area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Cultural content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Austin is a major business hub with a diverse economy spanning technology, music, film, and healthcare. From the bustling downtown to the innovative companies in South Austin, Austin offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Austin area, including Downtown, South Austin, East Austin, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Austin metropolitan region.',
    },
  },
  'jacksonville': {
    cityName: 'Jacksonville',
    citySlug: 'jacksonville',
    state: 'FL',
    phoneNumber: '385-216-2993',
    latitude: '30.3322',
    longitude: '-81.6557',
    heroImage: '/images/cities/jacksonville-zoo.jpg',
    landmarks: [
      {
        name: 'Jacksonville Zoo and Gardens',
        address: '370 Zoo Pkwy, Jacksonville, FL 32218',
        url: 'https://www.jacksonvillezoo.org/',
      },
      {
        name: 'Cummer Museum of Art & Gardens',
        address: '829 Riverside Ave, Jacksonville, FL 32204',
        url: 'https://www.cummermuseum.org/',
      },
      {
        name: 'Jacksonville Landing',
        address: '2 Independent Dr, Jacksonville, FL 32202',
        url: 'https://www.jacksonvillelanding.com/',
      },
      {
        name: 'Timucuan Ecological and Historic Preserve',
        address: '12713 Fort Caroline Rd, Jacksonville, FL 32225',
        url: 'https://www.nps.gov/timu/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Jacksonville',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Southside',
        description: 'Corporate and retail hub',
        link: '/local-seo',
      },
      {
        name: 'Beaches',
        description: 'Tourism and hospitality',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'Jacksonville',
      phoneNumber: '904-630-2489',
      requirements: 'Contact Jacksonville Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO delivers comprehensive digital marketing solutions throughout Jacksonville, helping businesses in the Bold New City of the South achieve online success. Our specialized strategies are designed to help Jacksonville businesses stand out in the competitive digital landscape and reach their target audiences effectively.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for tourism and hospitality',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Jacksonville, Deepthink SEO is your trusted partner for digital success. Our team understands the unique dynamics of the Jacksonville market, from tourism and hospitality to corporate headquarters. We provide customized strategies, transparent reporting, and measurable results that help your business thrive in the Bold New City of the South.',
      seoServices: [
        {
          service: 'Tourism SEO',
          description: 'Specialized SEO for tourism and hospitality',
          useCases: ['Hotels and resorts', 'Restaurants', 'Tourist attractions', 'Event venues'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Jacksonville area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create compelling content that engages',
          useCases: ['Tourism content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Jacksonville is a major business hub with a diverse economy spanning logistics, healthcare, finance, and tourism. From the bustling downtown to the corporate headquarters in Southside, Jacksonville offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Jacksonville area, including Downtown, Southside, Beaches, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Jacksonville metropolitan region.',
    },
  },
  'fort-worth': {
    cityName: 'Fort Worth',
    citySlug: 'fort-worth',
    state: 'TX',
    phoneNumber: '385-216-2993',
    latitude: '32.7555',
    longitude: '-97.3308',
    heroImage: '/images/cities/fort-worth-stockyards.jpg',
    landmarks: [
      {
        name: 'Fort Worth Stockyards',
        address: '131 E Exchange Ave, Fort Worth, TX 76164',
        url: 'https://www.fortworthstockyards.org/',
      },
      {
        name: 'Kimbell Art Museum',
        address: '3333 Camp Bowie Blvd, Fort Worth, TX 76107',
        url: 'https://www.kimbellart.org/',
      },
      {
        name: 'Fort Worth Zoo',
        address: '1989 Colonial Pkwy, Fort Worth, TX 76110',
        url: 'https://www.fortworthzoo.org/',
      },
      {
        name: 'Sundance Square',
        address: '420 Main St, Fort Worth, TX 76102',
        url: 'https://sundancesquare.com/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Fort Worth',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Cultural District',
        description: 'Arts and entertainment hub',
        link: '/content-marketing',
      },
      {
        name: 'Stockyards District',
        description: 'Historic and tourism area',
        link: '/local-seo',
      },
    ],
    permitInfo: {
      cityName: 'Fort Worth',
      phoneNumber: '817-392-1234',
      requirements: 'Contact Fort Worth Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout Fort Worth, helping businesses in the City of Cowboys and Culture achieve online success. Our proven strategies help Fort Worth businesses increase their search visibility, drive qualified traffic, and generate more leads and sales in this historic and growing market.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for tourism and hospitality',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Fort Worth, Deepthink SEO delivers exceptional results. Our team understands the unique challenges of competing in Fort Worth\'s diverse market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the City of Cowboys and Culture.',
      seoServices: [
        {
          service: 'Tourism SEO',
          description: 'Specialized SEO for tourism and hospitality',
          useCases: ['Hotels and resorts', 'Restaurants', 'Tourist attractions', 'Event venues'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Fort Worth area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Cultural content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Fort Worth is a major business hub with a diverse economy spanning aviation, healthcare, energy, and tourism. From the bustling downtown to the historic Stockyards, Fort Worth offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Fort Worth area, including Downtown, Cultural District, Stockyards, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Fort Worth metropolitan region.',
    },
  },
  'columbus': {
    cityName: 'Columbus',
    citySlug: 'columbus',
    state: 'OH',
    phoneNumber: '385-216-2993',
    latitude: '39.9612',
    longitude: '-82.9988',
    heroImage: '/images/cities/columbus-statehouse.jpg',
    landmarks: [
      {
        name: 'Columbus Zoo and Aquarium',
        address: '4850 W Powell Rd, Powell, OH 43065',
        url: 'https://www.columbuszoo.org/',
      },
      {
        name: 'Ohio Statehouse',
        address: '1 Capitol Square, Columbus, OH 43215',
        url: 'https://www.ohiostatehouse.org/',
      },
      {
        name: 'Columbus Museum of Art',
        address: '480 E Broad St, Columbus, OH 43215',
        url: 'https://www.columbusmuseum.org/',
      },
      {
        name: 'Short North Arts District',
        address: '1200 N High St, Columbus, OH 43201',
        url: 'https://www.shortnorth.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Columbus',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Short North',
        description: 'Arts and entertainment district',
        link: '/content-marketing',
      },
      {
        name: 'Easton Town Center',
        description: 'Retail and business hub',
        link: '/local-seo',
      },
    ],
    permitInfo: {
      cityName: 'Columbus',
      phoneNumber: '614-645-3111',
      requirements: 'Contact Columbus Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO delivers comprehensive digital marketing solutions throughout Columbus, helping businesses in the Arch City achieve online success. Our specialized strategies are designed to help Columbus businesses stand out in the competitive digital landscape and reach their target audiences effectively.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for education and healthcare',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Columbus, Deepthink SEO is your trusted partner for digital success. Our team understands the unique dynamics of the Columbus market, from education and healthcare to retail and technology. We provide customized strategies, transparent reporting, and measurable results that help your business thrive in the Arch City.',
      seoServices: [
        {
          service: 'Education SEO',
          description: 'Specialized SEO for educational institutions',
          useCases: ['Universities', 'Schools', 'Training centers', 'Educational services'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Columbus area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create compelling content that engages',
          useCases: ['Educational content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Columbus is a major business hub with a diverse economy spanning education, healthcare, technology, and retail. From the bustling downtown to the innovative companies in the Short North, Columbus offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Columbus area, including Downtown, Short North, Easton, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Columbus metropolitan region.',
    },
  },
  'charlotte': {
    cityName: 'Charlotte',
    citySlug: 'charlotte',
    state: 'NC',
    phoneNumber: '385-216-2993',
    latitude: '35.2271',
    longitude: '-80.8431',
    heroImage: '/images/cities/charlotte-nascar-hall.jpg',
    landmarks: [
      {
        name: 'NASCAR Hall of Fame',
        address: '400 E Martin Luther King Jr Blvd, Charlotte, NC 28202',
        url: 'https://www.nascarhall.com/',
      },
      {
        name: 'Mint Museum',
        address: '2730 Randolph Rd, Charlotte, NC 28207',
        url: 'https://mintmuseum.org/',
      },
      {
        name: 'Discovery Place Science',
        address: '301 N Tryon St, Charlotte, NC 28202',
        url: 'https://www.discoveryplace.org/',
      },
      {
        name: 'Freedom Park',
        address: '1900 East Blvd, Charlotte, NC 28203',
        url: 'https://charlottenc.gov/Parks-and-Recreation/Parks/Pages/Freedom-Park.aspx',
      },
    ],
    businessDistricts: [
      {
        name: 'Uptown Charlotte',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'SouthPark',
        description: 'Upscale retail and business',
        link: '/local-seo',
      },
      {
        name: 'NoDa',
        description: 'Arts and entertainment district',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'Charlotte',
      phoneNumber: '704-336-7600',
      requirements: 'Contact Charlotte Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout Charlotte, helping businesses in the Queen City achieve online success. Our proven strategies help Charlotte businesses increase their search visibility, drive qualified traffic, and generate more leads and sales in this major financial hub.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for financial services',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Charlotte, Deepthink SEO delivers exceptional results. Our team understands the unique challenges of competing in Charlotte\'s financial and corporate market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the Queen City.',
      seoServices: [
        {
          service: 'Financial SEO',
          description: 'Specialized SEO for financial services',
          useCases: ['Banks', 'Credit unions', 'Investment firms', 'Insurance companies'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Charlotte area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Financial content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Charlotte is a major business hub with a diverse economy spanning finance, technology, healthcare, and energy. From the bustling uptown to the innovative companies in SouthPark, Charlotte offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Charlotte area, including Uptown, SouthPark, NoDa, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Charlotte metropolitan region.',
    },
  },
  'seattle': {
    cityName: 'Seattle',
    citySlug: 'seattle',
    state: 'WA',
    phoneNumber: '385-216-2993',
    latitude: '47.6062',
    longitude: '-122.3321',
    heroImage: '/images/cities/seattle-space-needle.jpg',
    landmarks: [
      {
        name: 'Space Needle',
        address: '400 Broad St, Seattle, WA 98109',
        url: 'https://www.spaceneedle.com/',
      },
      {
        name: 'Pike Place Market',
        address: '85 Pike St, Seattle, WA 98101',
        url: 'https://pikeplacemarket.org/',
      },
      {
        name: 'Museum of Pop Culture',
        address: '325 5th Ave N, Seattle, WA 98109',
        url: 'https://www.mopop.org/',
      },
      {
        name: 'Chihuly Garden and Glass',
        address: '305 Harrison St, Seattle, WA 98109',
        url: 'https://www.chihulygardenandglass.com/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Seattle',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'South Lake Union',
        description: 'Tech and biotech hub',
        link: '/content-marketing',
      },
      {
        name: 'Belltown',
        description: 'Arts and entertainment district',
        link: '/local-seo',
      },
    ],
    permitInfo: {
      cityName: 'Seattle',
      phoneNumber: '206-684-3000',
      requirements: 'Contact Seattle Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO delivers comprehensive digital marketing solutions throughout Seattle, helping businesses in the Emerald City achieve online success. Our specialized strategies are designed to help Seattle businesses stand out in the competitive digital landscape and reach their target audiences effectively.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for tech companies',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Seattle, Deepthink SEO is your trusted partner for digital success. Our team understands the unique dynamics of the Seattle market, from tech giants to local businesses. We provide customized strategies, transparent reporting, and measurable results that help your business thrive in the Emerald City.',
      seoServices: [
        {
          service: 'Tech SEO',
          description: 'Specialized SEO for technology companies',
          useCases: ['Software companies', 'E-commerce platforms', 'SaaS businesses', 'Tech startups'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Seattle area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create compelling content that engages',
          useCases: ['Technical content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Seattle is a major business hub with a diverse economy spanning technology, aerospace, healthcare, and retail. From the bustling downtown to the innovative companies in South Lake Union, Seattle offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Seattle area, including Downtown, South Lake Union, Belltown, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Seattle metropolitan region.',
    },
  },
  'denver': {
    cityName: 'Denver',
    citySlug: 'denver',
    state: 'CO',
    phoneNumber: '385-216-2993',
    latitude: '39.7392',
    longitude: '-104.9903',
    heroImage: '/images/cities/denver-red-rocks.jpg',
    landmarks: [
      {
        name: 'Red Rocks Park and Amphitheatre',
        address: '18300 W Alameda Pkwy, Morrison, CO 80465',
        url: 'https://www.redrocksonline.com/',
      },
      {
        name: 'Denver Art Museum',
        address: '100 W 14th Ave Pkwy, Denver, CO 80204',
        url: 'https://www.denverartmuseum.org/',
      },
      {
        name: 'Union Station',
        address: '1701 Wynkoop St, Denver, CO 80202',
        url: 'https://unionstationindenver.com/',
      },
      {
        name: 'Denver Botanic Gardens',
        address: '1007 York St, Denver, CO 80206',
        url: 'https://www.botanicgardens.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Denver',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'LoDo',
        description: 'Historic and entertainment district',
        link: '/local-seo',
      },
      {
        name: 'Cherry Creek',
        description: 'Upscale retail and business',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'Denver',
      phoneNumber: '720-913-1311',
      requirements: 'Contact Denver Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout Denver, helping businesses in the Mile High City achieve online success. Our proven strategies help Denver businesses increase their search visibility, drive qualified traffic, and generate more leads and sales in this thriving mountain city.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for outdoor and recreation',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Denver, Deepthink SEO delivers exceptional results. Our team understands the unique challenges of competing in Denver\'s outdoor and tech market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the Mile High City.',
      seoServices: [
        {
          service: 'Outdoor SEO',
          description: 'Specialized SEO for outdoor and recreation',
          useCases: ['Outdoor gear', 'Recreation services', 'Tourism', 'Adventure sports'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Denver area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Outdoor content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Denver is a major business hub with a diverse economy spanning technology, aerospace, healthcare, and outdoor recreation. From the bustling downtown to the innovative companies in LoDo, Denver offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Denver area, including Downtown, LoDo, Cherry Creek, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Denver metropolitan region.',
    },
  },
  'washington-dc': {
    cityName: 'Washington DC',
    citySlug: 'washington-dc',
    state: 'DC',
    phoneNumber: '385-216-2993',
    latitude: '38.9072',
    longitude: '-77.0369',
    heroImage: '/images/cities/washington-dc-capitol.jpg',
    landmarks: [
      {
        name: 'National Mall',
        address: 'Washington, DC 20004',
        url: 'https://www.nps.gov/nama/',
      },
      {
        name: 'Smithsonian Institution',
        address: '1000 Jefferson Dr SW, Washington, DC 20560',
        url: 'https://www.si.edu/',
      },
      {
        name: 'Capitol Building',
        address: 'First St SE, Washington, DC 20004',
        url: 'https://www.visitthecapitol.gov/',
      },
      {
        name: 'Georgetown',
        address: 'Georgetown, Washington, DC 20007',
        url: 'https://www.georgetowndc.com/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown DC',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Georgetown',
        description: 'Historic and upscale retail',
        link: '/local-seo',
      },
      {
        name: 'Capitol Hill',
        description: 'Government and policy hub',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'Washington DC',
      phoneNumber: '202-727-1000',
      requirements: 'Contact Washington DC Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO delivers comprehensive digital marketing solutions throughout Washington DC, helping businesses in the Nation\'s Capital achieve online success. Our specialized strategies are designed to help DC businesses stand out in the competitive digital landscape and reach their target audiences effectively.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for government and policy',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Washington DC, Deepthink SEO is your trusted partner for digital success. Our team understands the unique dynamics of the DC market, from government contractors to local businesses. We provide customized strategies, transparent reporting, and measurable results that help your business thrive in the Nation\'s Capital.',
      seoServices: [
        {
          service: 'Government SEO',
          description: 'Specialized SEO for government and policy',
          useCases: ['Government contractors', 'Policy organizations', 'Non-profits', 'Legal services'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Washington DC area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create compelling content that engages',
          useCases: ['Policy content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Washington DC is a major business hub with a diverse economy spanning government, technology, healthcare, and education. From the bustling downtown to the innovative companies in Georgetown, Washington DC offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Washington DC area, including Downtown, Georgetown, Capitol Hill, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Washington DC metropolitan region.',
    },
  },
  'boston': {
    cityName: 'Boston',
    citySlug: 'boston',
    state: 'MA',
    phoneNumber: '385-216-2993',
    latitude: '42.3601',
    longitude: '-71.0589',
    heroImage: '/images/cities/boston-faneuil-hall.jpg',
    landmarks: [
      {
        name: 'Faneuil Hall Marketplace',
        address: '1 Faneuil Hall Sq, Boston, MA 02109',
        url: 'https://faneuilhallmarketplace.com/',
      },
      {
        name: 'Boston Common',
        address: '139 Tremont St, Boston, MA 02111',
        url: 'https://www.boston.gov/parks/boston-common',
      },
      {
        name: 'Museum of Fine Arts',
        address: '465 Huntington Ave, Boston, MA 02115',
        url: 'https://www.mfa.org/',
      },
      {
        name: 'Fenway Park',
        address: '4 Yawkey Way, Boston, MA 02215',
        url: 'https://www.mlb.com/redsox/ballpark',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Boston',
        description: 'Central business district',
        link: '/seo-services',
      },
      {
        name: 'Back Bay',
        description: 'Upscale retail and business',
        link: '/local-seo',
      },
      {
        name: 'Cambridge',
        description: 'Education and tech hub',
        link: '/content-marketing',
      },
    ],
    permitInfo: {
      cityName: 'Boston',
      phoneNumber: '617-635-4500',
      requirements: 'Contact Boston Business Services for digital marketing and SEO service requirements.',
    },
    contentSections: {
      overview: 'Deepthink SEO provides comprehensive digital marketing services throughout Boston, helping businesses in the Cradle of Liberty achieve online success. Our proven strategies help Boston businesses increase their search visibility, drive qualified traffic, and generate more leads and sales in this historic and innovative city.',
      residentialServices: [
        'Local business SEO optimization',
        'Google Business Profile management',
        'Content marketing for education and healthcare',
        'Social media marketing',
        'Online reputation management',
      ],
      commercialServices: [
        'Enterprise SEO strategies',
        'E-commerce optimization',
        'Technical SEO audits',
        'Link building campaigns',
        'Digital advertising management',
        'Marketing automation',
      ],
      whyChooseUs: 'When you need reliable SEO services in Boston, Deepthink SEO delivers exceptional results. Our team understands the unique challenges of competing in Boston\'s education and healthcare market. We provide personalized strategies, transparent reporting, and proven results that help your business thrive in the Cradle of Liberty.',
      seoServices: [
        {
          service: 'Education SEO',
          description: 'Specialized SEO for educational institutions',
          useCases: ['Universities', 'Schools', 'Training centers', 'Educational services'],
        },
        {
          service: 'Local SEO',
          description: 'Dominate Boston area search results',
          useCases: ['Restaurant visibility', 'Retail optimization', 'Service area expansion', 'Google Maps ranking'],
        },
        {
          service: 'Content Marketing',
          description: 'Create engaging content that converts',
          useCases: ['Educational content', 'Social media content', 'Blog strategy', 'Email campaigns'],
        },
        {
          service: 'E-commerce SEO',
          description: 'Boost online sales and product visibility',
          useCases: ['Product page optimization', 'Category page strategy', 'Shopping feed optimization', 'Conversion tracking'],
        },
      ],
      localInfo: 'Boston is a major business hub with a diverse economy spanning education, healthcare, technology, and finance. From the bustling downtown to the innovative companies in Cambridge, Boston offers endless opportunities for businesses to grow and succeed online.',
      serviceAreas: 'We provide comprehensive SEO services throughout the greater Boston area, including Downtown, Back Bay, Cambridge, and all surrounding communities. Our local expertise helps businesses connect with customers across the entire Boston metropolitan region.',
    },
  },
  // Add more cities as needed...
};

export function getCityData(citySlug: string): CityData | null {
  return cityData[citySlug] || null;
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cityData);
}
