'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  features: string[]
  icon: string
  benefits: string[]
}

interface WhyChooseUs {
  title: string
  description: string
  features: {
    title: string
    description: string
    icon: string
  }[]
}

interface Cta {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
}

interface ServicePageData {
  title: string
  description: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  services: Service[]
  whyChooseUs: WhyChooseUs
  cta: Cta
}

interface ServicePageTemplateProps {
  serviceData: ServicePageData
}

export default function ServicePageTemplate({ serviceData }: ServicePageTemplateProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'benefits'>('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="service-hero-section">
        <div className="container service-hero-flex">
          <div className="service-hero-content">
            <h1 className="service-hero-title">{serviceData.heroTitle}</h1>
            <p className="service-hero-subtitle">{serviceData.heroSubtitle}</p>
            <div className="service-hero-actions">
              <Link href={serviceData.cta.primaryButton.href} className="cta-button service-hero-cta-primary">
                {serviceData.cta.primaryButton.text}
              </Link>
              <Link href={serviceData.cta.secondaryButton.href} className="cta-button service-hero-cta-secondary">
                {serviceData.cta.secondaryButton.text}
              </Link>
            </div>
          </div>
          <div className="service-hero-image-wrap">
            <Image
              src={serviceData.heroImage}
              alt={serviceData.heroTitle}
              width={600}
              height={400}
              className="service-hero-image"
            />
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Tabs */}
        <div className="service-tabs-container">
          <div className="service-tabs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`service-tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`service-tab-button ${activeTab === 'services' ? 'active' : ''}`}
            >
              Our Services
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`service-tab-button ${activeTab === 'benefits' ? 'active' : ''}`}
            >
              Benefits
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="service-tab-content">
          {activeTab === 'overview' && (
            <div className="service-overview-grid">
              {serviceData.services.map((service, index) => (
                <div key={index} className="service-card-overview">
                  <div className="service-card-icon">{service.icon}</div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'services' && (
            <div className="service-details-grid">
              {serviceData.services.map((service, index) => (
                <div key={index} className="service-detail-card">
                  <div className="service-detail-header">
                    <div className="service-detail-icon">{service.icon}</div>
                    <h3 className="service-detail-title">{service.title}</h3>
                  </div>
                  <p className="service-detail-description">{service.description}</p>
                  <div className="service-detail-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-detail-benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {service.benefits.map((benefit, bIndex) => (
                        <li key={bIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="why-choose-us-section">
              <h2 className="why-choose-us-title">{serviceData.whyChooseUs.title}</h2>
              <p className="why-choose-us-description">{serviceData.whyChooseUs.description}</p>
              <div className="why-choose-us-grid">
                {serviceData.whyChooseUs.features.map((feature, index) => (
                  <div key={index} className="why-choose-us-card">
                    <div className="why-choose-us-icon">{feature.icon}</div>
                    <h3 className="why-choose-us-card-title">{feature.title}</h3>
                    <p className="why-choose-us-card-description">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="service-cta-section">
          <h2 className="service-cta-title">{serviceData.cta.title}</h2>
          <p className="service-cta-description">{serviceData.cta.description}</p>
          <div className="service-cta-actions">
            <Link href={serviceData.cta.primaryButton.href} className="cta-button service-cta-primary">
              {serviceData.cta.primaryButton.text}
            </Link>
            <Link href={serviceData.cta.secondaryButton.href} className="cta-button service-cta-secondary">
              {serviceData.cta.secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}