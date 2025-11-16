import React from 'react'

const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-cyan-100/80 text-sm">{desc}</p>
  </div>
)

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white">Core Capabilities</h2>
      <p className="mt-2 text-cyan-100/80">Focused MVP features that deliver immediate value.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <FeatureCard title="Static Python Vulnerability Scanning" desc="Analyze Python code without executing it to catch common vulnerabilities early." />
        <FeatureCard title="Security Score (0–100)" desc="A simple, trustable score summarizing risk, trends, and remediation priority." />
        <FeatureCard title="Actionable Fix Recommendations" desc="Human-readable steps and references to help engineers remediate quickly." />
      </div>
    </section>
  )
}
