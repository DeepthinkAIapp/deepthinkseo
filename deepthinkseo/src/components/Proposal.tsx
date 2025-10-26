'use client'

export default function Proposal() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    // Convert FormData to JSON
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      website: formData.get('website'),
      phone: formData.get('phone'),
      message: formData.get('message') || 'Requesting SEO proposal',
      formType: 'proposal'
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
        alert('Thank you for your proposal request! We will get back to you soon.')
        e.currentTarget.reset()
      } else {
        alert(result.error || 'There was an error sending your request. Please try again.')
      }
    } catch (error) {
      alert('There was an error sending your request. Please try again.')
    }
  }

  return (
    <section className="proposal" id="proposal">
      <div className="container proposal-flex">
        <div className="proposal-form-card">
          <h2>Get Your Free SEO Proposal</h2>
          <form className="proposal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" placeholder="Your Company" required />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" placeholder="yourwebsite.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="(555) 555-5555" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Comments or Questions</label>
              <textarea id="message" name="message" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="cta-button">Get Proposal</button>
            <p className="privacy-note">We respect your privacy. Your information will never be shared.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
