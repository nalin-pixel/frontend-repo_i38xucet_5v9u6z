import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import AuthPages from './components/AuthPages'

function AuthCallback() {
  React.useEffect(() => {
    const hash = window.location.hash
    const token = new URLSearchParams(hash.replace('#', '')).get('token')
    if (token) {
      localStorage.setItem('token', token)
      window.location.replace('/')
    } else {
      window.location.replace('/auth')
    }
  }, [])
  return <div className="min-h-screen bg-slate-950 text-cyan-50 flex items-center justify-center">Signing in…</div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/auth" element={<AuthPages />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
