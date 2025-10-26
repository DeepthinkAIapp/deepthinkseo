'use client'

import { useState, useRef } from 'react'
import { fullUtahCompaniesList } from '../config/utahCompanies'

interface Suggestion {
  place_id: string
  description: string
}

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: '',
    businessName: '',
    email: '',
    website: '',
    searchType: 'search'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const autocompleteInputRef = useRef<HTMLInputElement>(null)
  
  // 10,000+ Utah businesses for autocomplete (no API needed!)
  const mockBusinesses = fullUtahCompaniesList

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Handle autocomplete for business name using mock data
    if (name === 'businessName' && value.length > 2) {
      // Filter mock businesses based on search input (limit to top 50 results for performance)
      const filtered = mockBusinesses
        .filter(business => 
          business.name.toLowerCase().includes(value.toLowerCase()) ||
          business.address.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 50) // Limit to top 50 results
        .map(business => ({
          place_id: business.id,
          description: `${business.name}, ${business.address}`
        }))
      
      if (filtered.length > 0) {
        setSuggestions(filtered)
        setShowSuggestions(true)
      } else {
        setSuggestions([])
        setShowSuggestions(false)
      }
    } else if (name === 'businessName' && value.length <= 2) {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setFormData(prev => ({
      ...prev,
      businessName: suggestion.description
    }))
    setSuggestions([])
    setShowSuggestions(false)
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      searchType: e.target.value
    }))
  }

  const handleBusinessNameFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true)
    }
  }

  const handleBusinessNameBlur = () => {
    // Delay hiding suggestions to allow click on suggestion
    setTimeout(() => {
      setShowSuggestions(false)
    }, 200)
  }

  // Function to normalize website URL
  const normalizeWebsiteUrl = (url: string): string => {
    if (!url) return ''
    
    // Remove whitespace
    url = url.trim()
    
    // If empty, return empty
    if (!url) return ''
    
    // Remove www. if present
    url = url.replace(/^www\./i, '')
    
    // If it doesn't start with http:// or https://, add https://
    if (!url.match(/^https?:\/\//i)) {
      url = 'https://' + url
    }
    
    return url
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Normalize the website URL
    const normalizedWebsite = normalizeWebsiteUrl(formData.website)
    
    const data = {
      name: formData.firstName || 'Website Visitor',
      email: formData.email || 'no-email@provided.com',
      website: normalizedWebsite,
      businessName: formData.businessName,
      message: `SEO Report Request - Business: ${formData.businessName}, Website: ${normalizedWebsite}`,
      formType: 'seo-report-request'
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
        alert('Thank you! Your SEO report request has been submitted. We will analyze your website and send you a comprehensive report within 24 hours.')
        setFormData({
          firstName: '',
          businessName: '',
          email: '',
          website: '',
          searchType: 'search'
        })
      } else {
        alert('Thank you for your interest! We will get back to you soon with your SEO report.')
      }
    } catch (error) {
      alert('Thank you for your interest! We will get back to you soon with your SEO report.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="hero seo-report-hero" id="hero">
      {/* Map Pin Elements */}
      <div className="map-pin-1"></div>
      <div className="map-pin-2"></div>
      <div className="map-pin-3"></div>
      
      <div className="container">
        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <h1 className="hero-main-title">
              Utah SEO & Digital Marketing Company<br />
              <span className="hero-title-accent">Delivering Results</span>
            </h1>
            <p className="hero-description">
              Deepthink Technologies goes beyond rankings to generate leads, grow revenue, and maximize your ROI.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="hero-cta-primary">
                Contact Us
                <span className="cta-arrow">→</span>
              </a>
              <a href="#services" className="hero-cta-secondary">
                View Services
                <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
          
          <div className="hero-form-container">
            <div className="seo-report-form">
              <h2 className="form-title">Get Your Marketing Report In Seconds</h2>
              <form onSubmit={handleFormSubmit} className="report-form">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="searchType"
                        value="search"
                        checked={formData.searchType === 'search'}
                        onChange={handleRadioChange}
                      />
                      <span className="radio-label">Search Business</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="searchType"
                        value="manual"
                        checked={formData.searchType === 'manual'}
                        onChange={handleRadioChange}
                      />
                      <span className="radio-label">Manually Enter Business</span>
                    </label>
                  </div>
                </div>

                <div className="form-group autocomplete-container">
                  <label htmlFor="businessName">Search Business *</label>
                  <div className="autocomplete-wrapper">
                    <input
                      ref={autocompleteInputRef}
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      onFocus={handleBusinessNameFocus}
                      onBlur={handleBusinessNameBlur}
                      placeholder="Business Name and Address"
                      required
                      autoComplete="off"
                    />
                    {showSuggestions && suggestions.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {suggestions.map((suggestion) => (
                          <div
                            key={suggestion.place_id}
                            className="autocomplete-item"
                            onMouseDown={(e) => {
                              e.preventDefault()
                              handleSuggestionClick(suggestion)
                            }}
                          >
                            <span className="pin-icon">📍</span>
                            <div className="suggestion-details">
                              <div className="suggestion-name">{suggestion.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="youremail@domain.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="example.com"
                  />
                </div>

                <button 
                  type="submit" 
                  className="generate-report-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Generating Report...' : 'Generate Report'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
