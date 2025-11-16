export type WaitlistResponse = {
  status: 'ok' | 'exists' | 'error'
  message: string
}

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export async function joinWaitlist(email: string): Promise<WaitlistResponse> {
  try {
    const res = await fetch(`${BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    if (!res.ok) {
      const text = await res.text()
      return { status: 'error', message: text || 'Request failed' }
    }
    return (await res.json()) as WaitlistResponse
  } catch (e: any) {
    return { status: 'error', message: e?.message || 'Network error' }
  }
}

export function getReportUrl(): string {
  return `${BASE_URL}/api/report`
}
