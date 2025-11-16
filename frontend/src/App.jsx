import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import PainValue from './components/PainValue'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <PainValue />
      <div id="early"><Pricing /></div>
      <FAQ />
      <Footer />
    </div>
  )
}
