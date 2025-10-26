'use client'

import Image from 'next/image'

export default function Award() {
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    // Convert FormData to JSON
    const data = {
      name: 'Website Visitor',
      email: 'no-email@provided.com',
      website: formData.get('website'),
      message: `SEO proposal request for website: ${formData.get('website')}`,
      formType: 'award-proposal'
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
        alert('Thank you for your interest! We will analyze your website and get back to you soon.')
        e.currentTarget.reset()
      } else {
        // If API fails, fall back to scrolling to contact
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }
    } catch (error) {
      // If API fails, fall back to scrolling to contact
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="award-section">
      <div className="container award-flex">
        <div className="award-image">
          <Image 
            src="/images/Screenshot 2025-07-14 144116.png" 
            alt="Google Finalist 2024 Award" 
            width={400}
            height={300}
          />
        </div>
        <div className="award-content">
          <h2 className="award-title">Top-notch SEO Company dedicated to your business growth</h2>
          <p className="award-desc">
            SEO strategies change time and time again, yet the goal still remains the same. <strong>Generate revenue from search.</strong> Unfortunately, many SEO agencies and experts are not equipped to deliver on that goal. That's why you need an agency partner like Deepthink SEO who acts as an extension of your own marketing department. We are driven by the same goals you are. The SEO services we provide are customized to your organization's priorities, no matter what changes in the industry occur.<br /><br />
            Do you want a top-notch SEO company partnered with your business's objectives? Fill out the form below to get started with a free proposal from our strategy team. We're ready to put SEO to work when you are.
          </p>
          <form className="award-form" onSubmit={handleFormSubmit}>
            <label htmlFor="award-website" className="sr-only">Enter your website</label>
            <div className="award-form-box">
              <span className="award-form-title">Let's Drive Results <span className="highlight">Together</span> <span aria-hidden="true">↗</span></span>
              <input type="url" id="award-website" name="website" placeholder="Enter your website" required />
              <button type="submit" className="cta-button">Get SEO Proposal &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
