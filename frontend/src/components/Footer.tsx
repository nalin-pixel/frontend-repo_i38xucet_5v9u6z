import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 text-cyan-100/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} SentinelAI. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
      </div>
    </footer>
  )
}
