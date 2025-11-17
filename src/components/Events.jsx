import { useEffect, useState } from 'react'

function EventCard({ e }) {
  return (
    <div className="p-5 rounded-xl border bg-white/80 backdrop-blur-sm shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold text-gray-800">{e.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{e.location} • {new Date(e.date).toLocaleString()}</p>
      <p className="mt-3 text-gray-700">{e.description}</p>
      {e.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {e.tags.map((t, idx) => (
            <span key={idx} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">#{t}</span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/events`)
        const data = await res.json()
        setEvents(data.items || [])
      } catch (e) {
        setEvents([])
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  return (
    <section id="events" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-gray-600">Stay in the loop with what's happening next.</p>
          </div>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : events.length ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <EventCard key={e.id} e={e} />
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-xl border bg-white text-center text-gray-600">
            No events yet. Check back soon!
          </div>
        )}
      </div>
    </section>
  )
}
