import React, { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

type Mode = 'signin' | 'signup'

type Props = {
  initial?: Mode
}

function IceCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-2xl" />
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
        {children}
      </div>
    </div>
  )
}

export default function AuthPages({ initial = 'signin' }: Props) {
  const [mode, setMode] = useState<Mode>(initial)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [plan, setPlan] = useState<'individual' | 'team'>('individual')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      if (mode === 'signup') {
        const res = await fetch(`${BACKEND}/api/auth/signup`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, name, plan })
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data?.detail || 'Sign up failed')
        localStorage.setItem('token', data.access_token)
        window.location.href = '/'
      } else {
        const res = await fetch(`${BACKEND}/api/auth/login`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data?.detail || 'Sign in failed')
        localStorage.setItem('token', data.access_token)
        window.location.href = '/'
      }
    } catch (e: any) {
      setError(e?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const startGitHubOAuth = async () => {
    const res = await fetch(`${BACKEND}/api/auth/github/url`)
    const data = await res.json()
    if (data?.url) {
      window.location.href = data.url
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50 flex items-center justify-center px-6 py-20">
      <IceCard>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Welcome to SentinelAI</h1>
          <p className="text-cyan-100/80 mt-1">{mode === 'signup' ? 'Create your account' : 'Sign in to continue'}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-white/5 p-1">
          <button onClick={() => setMode('signin')} className={`py-2 rounded-lg text-sm ${mode==='signin' ? 'bg-cyan-500 text-slate-900 font-semibold' : 'text-cyan-100'}`}>Sign in</button>
          <button onClick={() => setMode('signup')} className={`py-2 rounded-lg text-sm ${mode==='signup' ? 'bg-cyan-500 text-slate-900 font-semibold' : 'text-cyan-100'}`}>Sign up</button>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {mode === 'signup' && (
            <>
              <div>
                <label className="text-sm text-cyan-100/70">Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Jane Doe" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div>
                <label className="text-sm text-cyan-100/70">Plan</label>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <button type="button" onClick={()=>setPlan('individual')} className={`py-2 rounded-lg border ${plan==='individual' ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/10'}`}>Individual</button>
                  <button type="button" onClick={()=>setPlan('team')} className={`py-2 rounded-lg border ${plan==='team' ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/10'}`}>Team</button>
                </div>
              </div>
            </>
          )}
          <div>
            <label className="text-sm text-cyan-100/70">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          </div>
          <div>
            <label className="text-sm text-cyan-100/70">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-cyan-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          </div>

          {error && <div className="text-red-300 text-sm">{error}</div>}

          <button disabled={loading} className="w-full inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 transition-colors disabled:opacity-60">
            {loading ? 'Please wait…' : (mode === 'signup' ? 'Create account' : 'Sign in')}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-white/5 px-2 text-cyan-100/70">Or</span></div>
          </div>
          <button onClick={startGitHubOAuth} className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/10">
            <span>Continue with GitHub</span>
          </button>
        </div>
      </IceCard>
    </div>
  )
}
