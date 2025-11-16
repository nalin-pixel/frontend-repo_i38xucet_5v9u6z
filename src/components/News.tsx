import React, { useEffect, useState } from 'react'

export type NewsItem = {
  title: string
  link: string
  published?: string
  timestamp?: number
  source?: string
}

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function News() {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${BACKEND}/api/news?limit=12`)
        if (!res.ok) throw new Error('Failed to load news')
        const data = await res.json()
        setItems(data.items || [])
      } catch (e: any) {
        setError(e?.message || 'Failed to load news')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Trending in AI & Security</h2>
          <p className="mt-1 text-cyan-100/80">Curated headlines from trusted sources, updated throughout the day.</p>
        </div>
        <div className="text-cyan-300/80 text-sm hidden sm:block">Auto-refreshed every 10 minutes</div>
      </div>

      {loading && (
        <div className="mt-8 text-cyan-100">Loading news…</div>
      )}
      {error && (
        <div className="mt-8 text-red-300">{error}</div>
      )}

      {!loading && !error && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 p-5 transition-colors"
            >
              <div className="text-sm text-cyan-300/80">{item.source || 'Source'}</div>
              <h3 className="mt-1 text-white font-semibold group-hover:text-cyan-200">{item.title}</h3>
              {item.published && (
                <div className="mt-2 text-xs text-cyan-100/60">{new Date(item.timestamp ? item.timestamp * 1000 : Date.now()).toLocaleString()}</div>
              )}
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
