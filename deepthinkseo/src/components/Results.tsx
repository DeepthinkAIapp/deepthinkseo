import Image from 'next/image'

export default function Results() {
  const stats = [
    {
      icon: '💰',
      number: '2.6x',
      label: 'Increase in Organic Revenue'
    },
    {
      icon: '📈',
      number: '150%',
      label: 'Increase in SEO Traffic'
    },
    {
      icon: '🎯',
      number: '15%',
      label: 'Increase in Conversion Rate'
    }
  ]

  return (
    <section className="results" id="results">
      <div className="container results-flex-modern">
        <div className="results-card">
          <h2>Proven Results</h2>
          <div className="results-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="results-stat">
                <div className="results-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="results-note">*Based on real client outcomes. Your results may vary.</p>
        </div>
        <div className="testimonial-card-modern">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-content">
            <div className="testimonial-img-wrap">
              <Image 
                src="/images/Screenshot 2025-07-14 123250.png" 
                alt="Client testimonial" 
                className="testimonial-img-modern"
                width={80}
                height={80}
                style={{ borderRadius: '50%' }}
              />
            </div>
            <blockquote>
              <span className="testimonial-quote-mark">"</span>
              Our keyword rankings jumped quite a bit, making us appear on the 1st page of Google where before we were not showing up. Deepthink provided a well-defined project plan and really understood our business.
            </blockquote>
            <cite>- Satisfied Client, Salt Lake City</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
