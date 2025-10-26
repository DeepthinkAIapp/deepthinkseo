'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isSeoDropdownOpen, setIsSeoDropdownOpen] = useState(false)

  const seoServices = [
    {
      name: 'Search Engine Optimization',
      href: '/services',
      icon: '🔍'
    },
    {
      name: 'Local SEO',
      href: '/local-seo',
      icon: '📍'
    },
    {
      name: 'E-commerce SEO',
      href: '/e-commerce-seo',
      icon: '🛒'
    },
    {
      name: 'Technical SEO',
      href: '/technical-seo',
      icon: '⚙️'
    },
    {
      name: 'Link Building',
      href: '/link-building',
      icon: '🔗'
    },
    {
      name: 'Content Marketing',
      href: '/content-marketing',
      icon: '✍️'
    }
  ]

  return (
    <header className="site-header sticky">
      <div className="container header-flex">
        <div className="logo">
          <Image 
            src="/images/logo/logo.png" 
            alt="Deepthink SEO Logo" 
            className="logo-img"
            width={45}
            height={45}
          />
          <div className="logo-text">
            <span className="logo-main">deepthink</span>
            <span className="logo-accent">SEO</span>
          </div>
        </div>
        <nav aria-label="Main navigation">
          <ul>
            <li 
              className="nav-item dropdown-container"
              onMouseEnter={() => setIsSeoDropdownOpen(true)}
              onMouseLeave={() => setIsSeoDropdownOpen(false)}
            >
              <Link href="#services" className="dropdown-trigger">
                SEO <span className="dropdown-arrow">▼</span>
              </Link>
              {isSeoDropdownOpen && (
                <div className="dropdown-menu">
                  {seoServices.map((service, index) => (
                    <Link key={index} href={service.href} className="dropdown-item">
                      <span className="dropdown-icon">{service.icon}</span>
                      <span className="dropdown-text">{service.name}</span>
                    </Link>
                  ))}
                  <Link href="/services" className="dropdown-item all-services">
                    <span className="dropdown-text">All Services</span>
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link href="#results">Results</Link>
            </li>
            <li className="nav-item">
              <Link href="#process">Process</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Link href="#contact" className="cta-header">Get Free SEO Audit</Link>
      </div>
    </header>
  )
}
