import React from 'react'

export default function PainValue() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-white">AI-generated code ships fast—but risk ships faster.</h2>
          <p className="mt-3 text-cyan-100/80">
            Python projects increasingly blend AI-generated snippets with hand-written code. Small mistakes can introduce
            vulnerabilities, secrets exposure, and supply-chain risks.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <ul className="list-disc list-inside text-cyan-100/80 space-y-2">
            <li>Detects insecure patterns commonly produced by LLMs</li>
            <li>Flags risky dependencies and weak configurations</li>
            <li>Clear guidance—no security PhD required</li>
            <li>Built for teams shipping Python quickly</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
