import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Affiliate from './components/Affiliate'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-dark-blue-bg">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Affiliate />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App