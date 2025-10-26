'use client'

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    // Convert FormData to JSON
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      formType: 'contact'
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      
      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.')
        e.currentTarget.reset()
      } else {
        alert(result.error || 'There was an error sending your message. Please try again.')
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-flex">
        <div className="contact-form-card">
          <h2>Request Your Free SEO Proposal</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="cta-button">Send Message</button>
            <p className="privacy-note">We respect your privacy. Your information will never be shared.</p>
          </form>
        </div>
        <div className="contact-info-card">
          <h3>Contact Info</h3>
          <p>
            <span className="contact-icon" style={{color:'#d7263d'}}>📞</span> 
            <strong>Phone:</strong> <a href="tel:13852162993">(385) 216-2993</a>
          </p>
          <p>
            <span className="contact-icon" style={{color:'#7c3aed'}}>✉️</span> 
            <strong>Email:</strong> <a href="mailto:deepthinkseo@gmail.com">deepthinkseo@gmail.com</a>
          </p>
          <p>
            <span className="contact-icon" style={{color:'#10b981'}}>🌐</span> 
            <strong>Domain:</strong> <a href="https://deepthinkstudio.com" target="_blank" rel="noopener">deepthinkstudio.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
