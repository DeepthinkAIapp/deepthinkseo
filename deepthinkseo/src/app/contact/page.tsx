import type { Metadata } from 'next'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | Deepthink Technologies',
  description: 'Get in touch with Deepthink Technologies for your SEO needs. Free consultation and proposal available.',
  keywords: 'contact SEO agency, SEO consultation, Utah SEO experts',
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '2rem' }}>
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
