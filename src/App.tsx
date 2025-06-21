import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Affiliate from './components/Affiliate'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Affiliate />
      <CTA />
      <Footer />
    </div>
  )
}

export default App