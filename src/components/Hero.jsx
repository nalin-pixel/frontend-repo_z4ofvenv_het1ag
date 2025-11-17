import { useEffect, useState } from 'react'

export default function Hero() {
  const [club, setClub] = useState({ name: 'Club', tagline: '', description: '' })

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/club`)
        const data = await res.json()
        setClub(data)
      } catch (e) {
        // fallback to defaults
      }
    }
    fetchClub()
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-90" />
      <svg className="absolute -top-10 -right-10 opacity-30" width="400" height="400" viewBox="0 0 200 200" fill="none">
        <path d="M50 0 L150 0 L200 50 L200 150 L150 200 L50 200 L0 150 L0 50 Z" stroke="white" strokeWidth="0.5" fill="none" />
      </svg>
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-white grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{club.name}</h1>
          <p className="mt-4 text-xl opacity-90">{club.tagline}</p>
          <p className="mt-6 opacity-90 max-w-prose">{club.description}</p>
          <div className="mt-8 flex gap-3">
            <a href="#events" className="bg-white text-indigo-700 font-semibold px-5 py-3 rounded-md shadow hover:shadow-lg transition">Upcoming Events</a>
            <a href="#join" className="bg-indigo-500/20 border border-white/30 px-5 py-3 rounded-md hover:bg-indigo-400/30 transition">Join the Club</a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center text-7xl font-black">
            ✦
          </div>
        </div>
      </div>
    </section>
  )
}
