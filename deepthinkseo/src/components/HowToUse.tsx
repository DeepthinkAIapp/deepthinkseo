import Image from 'next/image'

export default function HowToUse() {
  const aiUses = [
    'Keyword research and content topic discovery: Use AI to find new content ideas and keyword clusters.',
    'Competitor analysis: Analyze top-ranking competitors, their keywords, and strategies using AI tools.',
    'Content writing: Speed up content creation with AI-generated outlines and drafts (always review for quality!).',
    'Building backlinks: Use AI to identify backlink opportunities and create link-worthy assets.',
    'And more! AI can help with technical SEO, reporting, and more as new tools emerge.'
  ]

  return (
    <section className="how-to-use ai-section-card" id="how-to-use">
      <div className="container ai-flex">
        <div className="ai-content">
          <h2>How You Can Use AI for SEO</h2>
          <ul className="ai-uses-list">
            {aiUses.map((use, index) => (
              <li key={index}>
                <strong>{use.split(':')[0]}:</strong> {use.split(':')[1]}
              </li>
            ))}
          </ul>
        </div>
        <div className="how-to-use-image ai-img-card">
          <Image 
            src="/images/pexels-goumbik-669619.jpg" 
            alt="How to use AI for SEO" 
            className="section-img-wide"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
