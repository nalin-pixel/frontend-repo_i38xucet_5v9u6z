import React from 'react'

const Step = ({ n, title, desc }: { n: number; title: string; desc: string }) => (
  <div className="flex gap-4 items-start">
    <div className="h-10 w-10 shrink-0 rounded-full bg-cyan-500 text-slate-900 font-bold grid place-content-center">{n}</div>
    <div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-cyan-100/80 text-sm mt-1">{desc}</p>
    </div>
  </div>
)

export default function HowItWorks() {
  return (
    <section id="how" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white">How It Works</h2>
      <div className="mt-8 grid gap-6">
        <Step n={1} title="Upload repo / connect GitHub" desc="Start with a local upload or grant read-only access to a repository (GitHub integration coming soon)." />
        <Step n={2} title="Secure sandbox scan" desc="We run static analysis in an isolated environment—no code execution, Python-only for MVP." />
        <Step n={3} title="Score + report download" desc="Get a security score and a downloadable, human-readable report with prioritized fixes." />
      </div>
    </section>
  )
}
