import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-lg">SentinelAI</a>
        <nav className="hidden md:flex items-center gap-6 text-cyan-100/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How It Works</a>
          <a href="#pricing" className="hover:text-white">Early Access</a>
        </nav>
        <a href="#early" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 transition-colors">Get Started</a>
      </div>
    </header>
  )
}
