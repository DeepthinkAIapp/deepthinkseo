import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Results from '@/components/Results'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import AIEra from '@/components/AIEra'
import HowToUse from '@/components/HowToUse'
import FAQs from '@/components/FAQs'
import Proposal from '@/components/Proposal'
import Award from '@/components/Award'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Results />
      <Process />
      <Contact />
      <AIEra />
      <HowToUse />
      <FAQs />
      <Proposal />
      <Award />
      <Footer />
    </main>
  )
}
