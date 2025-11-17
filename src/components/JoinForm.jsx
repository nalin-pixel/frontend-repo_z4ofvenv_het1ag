import { useState } from 'react'

export default function JoinForm() {
  const [form, setForm] = useState({ name: '', email: '', interests: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus('success')
      setForm({ name: '', email: '', interests: '' })
    } catch (err) {
      setStatus(`error:${err.message}`)
    }
  }

  return (
    <section id="join" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900">Join the Club</h2>
          <p className="text-gray-600 mt-1">Tell us a bit about yourself and we'll reach out.</p>

          <form onSubmit={submit} className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Interests</label>
              <textarea rows="3" value={form.interests} onChange={(e)=>setForm({...form, interests:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <button disabled={status==='submitting'} className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-60">{status==='submitting' ? 'Submitting...' : 'Submit'}</button>
              {status==='success' && <span className="text-green-600">Thanks! We will reach out soon.</span>}
              {status?.startsWith('error:') && <span className="text-red-600">{status.replace('error:','')}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
