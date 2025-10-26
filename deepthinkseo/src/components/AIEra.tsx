import Image from 'next/image'

export default function AIEra() {
  return (
    <section className="ai-era ai-hero-card" id="ai-era">
      <div className="container ai-hero-flex">
        <div className="ai-hero-content">
          <h2>
            <span className="ai-badge">AI-Powered</span> SEO: <span className="highlight">A New Era</span> For SEO
          </h2>
          <p className="ai-hero-sub">
            AI has changed the landscape of SEO, from content creation to keyword research and competitor analysis. Generative AI tools like ChatGPT, Google AI Overviews, and others are now part of the search ecosystem. Don't get left behind—learn how to leverage AI for your SEO strategy.
          </p>
          <a href="#proposal" className="cta-button ai-hero-cta">Get Free Proposal</a>
        </div>
        <div className="ai-hero-image ai-img-card">
          <Image 
            src="/images/pexels-marketingtuig-185576.jpg" 
            alt="AI and SEO new era" 
            className="section-img-wide"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
