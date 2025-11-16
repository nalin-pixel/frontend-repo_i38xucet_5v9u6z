import React from 'react'

export default function Navbar() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const logout = () => { localStorage.removeItem('token'); window.location.href = '/' }

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-lg">SentinelAI</a>
        <nav className="hidden md:flex items-center gap-6 text-cyan-100/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How It Works</a>
          <a href="#pricing" className="hover:text-white">Early Access</a>
          <a href="/auth" className="hover:text-white">Sign in</a>
        </nav>
        <div className="flex items-center gap-3">
          {token ? (
            <button onClick={logout} className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium px-3 py-2">Logout</button>
          ) : (
            <a href="/auth" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 transition-colors">Get Started</a>
          )}
        </div>
      </div>
    </header>
  )
}
