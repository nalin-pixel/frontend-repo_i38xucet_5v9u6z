import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-white">Early Access Pricing</h2>
            <p className="mt-2 text-cyan-100/80">$49–$99/month per repo • Discount for the first 20 users</p>
          </div>
          <a href="#early" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition-colors">
            Join Early Access
          </a>
        </div>
      </div>
    </section>
  )
}
