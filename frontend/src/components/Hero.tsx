import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { joinWaitlist } from '../lib/api'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMsg(null)
    const res = await joinWaitlist(email)
    setMsg(res.message)
    setLoading(false)
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center text-xs uppercase tracking-widest text-cyan-300/80 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full">SentinelAI • Early Access</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight text-white">
            Secure Your AI-Generated Python Code—Automatically.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-cyan-100/90">
            SentinelAI scans Python repos for vulnerabilities and produces a Security Score with clear, actionable insights.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 rounded-lg bg-white/10 backdrop-blur border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition-colors disabled:opacity-60"
            >
              {loading ? 'Joining…' : 'Join Early Access'}
            </button>
          </form>
          {msg && <p className="mt-3 text-cyan-200">{msg}</p>}

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 text-cyan-100/80">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm">Python-only static scanning</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm">Security Score (0–100)</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm">Actionable, human-readable fixes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/80 to-slate-950"></div>
    </section>
  )
}
