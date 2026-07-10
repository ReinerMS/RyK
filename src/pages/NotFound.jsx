import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const navigate = useNavigate()
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    if (seconds === 0) {
      navigate('/')
      return
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [seconds, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <div className="font-script text-8xl md:text-9xl text-rose-500 animate-bounce">
          404
        </div>

        <h1 className="font-display text-2xl text-rose-700 mt-4 mb-3">
          Esta página se perdió como pareja sin GPS 💔
        </h1>

        <p className="text-ink font-light mb-8">
          No encontramos lo que buscabas, pero sí el camino de vuelta.
        </p>

        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 rounded-full bg-rose-500 text-white hover:bg-rose-700 transition cursor-pointer"
        >
          Volver al inicio
        </button>

        <p className="mt-4 text-sm text-ink/50">
          Te llevamos en {seconds}...
        </p>
      </div>
    </div>
  )
}