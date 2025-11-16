import React from 'react'

const Item = ({ q, a }: { q: string; a: string }) => (
  <div className="p-5 rounded-xl bg-white/5 border border-white/10">
    <h3 className="text-white font-semibold">{q}</h3>
    <p className="text-cyan-100/80 mt-2 text-sm">{a}</p>
  </div>
)

export default function FAQ() {
  return (
    <section id="faq" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white">FAQ</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        <Item q="Is it Python only?" a="Yes. The MVP focuses exclusively on Python projects for accurate, fast analysis." />
        <Item q="Does it execute my code?" a="No. It is static analysis only—no runtime execution." />
        <Item q="Will it auto-fix issues?" a="Not yet. For MVP, we provide prioritized, human-readable recommendations." />
        <Item q="GitHub support?" a="Read-only GitHub repo scanning is planned—join the waitlist to get updates." />
      </div>
    </section>
  )
}
