import Hero from './components/Hero'
import Events from './components/Events'
import JoinForm from './components/JoinForm'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl">Club</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#events" className="hover:text-indigo-600">Events</a>
            <a href="#join" className="hover:text-indigo-600">Join</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="/test" className="text-gray-500 hover:text-gray-800">Status</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Events />
        <JoinForm />
        <Contact />
      </main>

      <footer className="py-10 border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Club. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#events" className="hover:text-indigo-600">Events</a>
            <a href="#join" className="hover:text-indigo-600">Join</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
