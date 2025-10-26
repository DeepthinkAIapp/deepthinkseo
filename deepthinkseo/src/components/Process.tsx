export default function Process() {
  const steps = [
    {
      icon: '🔎',
      title: '1. Discovery & Audit',
      description: 'We analyze your site and competitors to find growth opportunities.'
    },
    {
      icon: '🗺️',
      title: '2. Strategy & Planning',
      description: 'We build a custom SEO roadmap for your business goals.'
    },
    {
      icon: '⚙️',
      title: '3. Implementation',
      description: 'Our team optimizes your site, content, and local presence.'
    },
    {
      icon: '📈',
      title: '4. Reporting & Improvement',
      description: 'Transparent reporting and ongoing optimization for lasting results.'
    }
  ]

  return (
    <section className="process" id="process">
      <div className="container">
        <h2 className="process-title">Our Proven SEO Process</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-icon">
                <span>{step.icon}</span>
              </div>
              <div className="process-step-title">{step.title}</div>
              <div className="process-step-desc">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
