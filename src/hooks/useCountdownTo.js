import { useEffect, useState } from 'react'

const MS_DAY = 86400000

function computeState(dateString) {
  const target = new Date(dateString)
  const now = new Date()
  const diff = Math.max(0, target.getTime() - now.getTime())

  return {
    isPast: target.getTime() <= now.getTime(),
    days: Math.floor(diff / MS_DAY),
    hours: Math.floor((diff % MS_DAY) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

/**
 * Cuenta regresiva en vivo hasta una fecha futura ("YYYY-MM-DD" o ISO completo).
 */
export function useCountdownTo(dateString) {
  const [state, setState] = useState(() => computeState(dateString))

  useEffect(() => {
    setState(computeState(dateString))
    const id = setInterval(() => setState(computeState(dateString)), 1000)
    return () => clearInterval(id)
  }, [dateString])

  return state
}
