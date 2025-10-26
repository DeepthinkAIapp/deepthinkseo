import Image from 'next/image'

export default function FAQs() {
  const faqs = [
    {
      image: '/images/pexels-karolina-grabowska-5717760.jpg',
      question: 'What AI tools are good for SEO?',
      answer: 'Popular tools include ChatGPT, Claude, Perplexity, and a variety of AI-powered SEO platforms. Experiment to find what fits your workflow best.'
    },
    {
      image: '/images/pexels-pixabay-270637.jpg',
      question: 'Will AI replace SEO?',
      answer: 'No. AI will change how SEO is done, but users will always search for products and services. SEO will evolve, not disappear.'
    },
    {
      image: '/images/Screenshot 2025-07-14 144116.png',
      question: 'Can I use AI to write content?',
      answer: 'Yes, but always review and edit for quality. Google is fine with AI content as long as it\'s helpful and accurate.'
    },
    {
      image: '/images/Screenshot 2025-07-14 144137.png',
      question: 'Will AI replace SEO experts?',
      answer: 'AI makes some tasks easier, but expert strategy and oversight are more important than ever in a competitive landscape.'
    }
  ]

  return (
    <section className="faqs" id="faqs">
      <div className="container">
        <h2 className="faqs-title">AI and SEO FAQs</h2>
        <div className="faq-list-modern">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card">
              <div className="faq-img-wrap">
                <Image 
                  src={faq.image} 
                  alt={faq.question}
                  width={300}
                  height={200}
                />
              </div>
              <div className="faq-content">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
