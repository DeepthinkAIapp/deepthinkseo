export default function Services() {
  const serviceCategories = [
    {
      category: 'SEO Services',
      services: [
        {
          icon: '🔍',
          title: 'Search Engine Optimization',
          description: 'Increase your rankings, traffic, and conversions with comprehensive SEO services.'
        },
        {
          icon: '🤖',
          title: 'Generative Engine Optimization (AI SEO)',
          description: 'Optimize your content to rank in AI-generated search results and future-forward platforms.'
        },
        {
          icon: '📍',
          title: 'Local SEO',
          description: 'Dominate local search results and attract customers in your service area.'
        },
        {
          icon: '🛒',
          title: 'E-commerce SEO',
          description: 'Boost product visibility, traffic, and revenue with SEO built for online stores.'
        },
        {
          icon: '🌐',
          title: 'National SEO',
          description: 'Outrank competitors nationwide with scalable, enterprise-level SEO strategies.'
        },
        {
          icon: '🏢',
          title: 'Google Business Profile SEO',
          description: 'Maximize your visibility in Maps and local search with a fully optimized GBP.'
        },
        {
          icon: '⚙️',
          title: 'Technical SEO',
          description: 'Fix crawl errors, improve speed, and optimize site architecture for better indexing.'
        },
        {
          icon: '🔗',
          title: 'Link Building',
          description: 'Earn high-quality backlinks that boost authority and improve rankings.'
        },
        {
          icon: '💡',
          title: 'SEO Consulting',
          description: 'Get expert insight and strategy tailored to your business goals.'
        }
      ]
    },
    {
      category: 'Digital Advertising',
      services: [
        {
          icon: '🎯',
          title: 'Google Advertising',
          description: 'Capture high-intent search traffic with laser-focused PPC campaigns.'
        },
        {
          icon: '📺',
          title: 'YouTube Advertising',
          description: 'Reach your ideal audience with scroll-stopping video ads on the world\'s #2 search engine.'
        },
        {
          icon: '📱',
          title: 'Facebook/Instagram Advertising',
          description: 'Drive engagement and sales with targeted campaigns optimized for Meta\'s platforms.'
        },
        {
          icon: '🔄',
          title: 'Retargeting Campaigns',
          description: 'Bring back lost visitors and close more sales with smart retargeting strategies.'
        }
      ]
    },
    {
      category: 'Content & Marketing',
      services: [
        {
          icon: '✍️',
          title: 'Content Marketing',
          description: 'Craft high-value content that ranks, converts, and builds long-term brand authority.'
        },
        {
          icon: '📰',
          title: 'Online PR',
          description: 'Build brand authority and trust with earned media, outreach, and press features.'
        },
        {
          icon: '📱',
          title: 'Social Media Marketing',
          description: 'Grow your audience and engagement with platform-specific content and strategy.'
        },
        {
          icon: '⭐',
          title: 'Reputation Marketing',
          description: 'Manage, improve, and promote your online reputation for lasting credibility.'
        }
      ]
    },
    {
      category: 'Email & Automation',
      services: [
        {
          icon: '📧',
          title: 'Email Marketing',
          description: 'Automate, personalize, and scale your email campaigns to nurture and convert leads.'
        },
        {
          icon: '🤖',
          title: 'Marketing Automation',
          description: 'Streamline your workflows and campaigns with smart marketing automation tools.'
        },
        {
          icon: '📊',
          title: 'Audience Intelligence',
          description: 'Turn data into direction with detailed audience insights and segmentation.'
        }
      ]
    },
    {
      category: 'Website & Optimization',
      services: [
        {
          icon: '🎨',
          title: 'Website Design',
          description: 'Get a fast, modern, conversion-ready website tailored to your brand and goals.'
        },
        {
          icon: '📈',
          title: 'Conversion Rate Optimization (CRO)',
          description: 'Turn more clicks into customers with data-driven UX and funnel optimization.'
        },
        {
          icon: '🔧',
          title: 'WordPress Site Maintenance',
          description: 'Keep your WordPress site secure, updated, and running at peak performance.'
        }
      ]
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Comprehensive Digital Marketing Services</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
          Our services are designed to solve real business challenges and deliver measurable results across all digital marketing channels.
        </p>
        
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} style={{ marginBottom: '4rem' }}>
            <h3 style={{ 
              fontSize: '2rem', 
              textAlign: 'center', 
              marginBottom: '2rem', 
              color: '#7c3aed',
              borderBottom: '2px solid #7c3aed',
              paddingBottom: '0.5rem',
              display: 'inline-block',
              width: '100%'
            }}>
              {category.category}
            </h3>
            <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {category.services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
