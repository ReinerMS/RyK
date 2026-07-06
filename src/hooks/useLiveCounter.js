import { useEffect, useState } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

function computeElapsed(fromDate) {
  const now = new Date()
  const diff = now - fromDate

  if (diff < 0) {
    return { started: false, text: 'En proceso' }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    started: true,
    days,
    hours,
    minutes,
    seconds,
    text: `${days} días, ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
  }
}

/**
 * Cuenta el tiempo transcurrido desde `dateString` y se actualiza cada segundo.
 * @param {string} dateString - fecha ISO, p.ej. "2025-12-06T00:00:00"
 */
export function useLiveCounter(dateString) {
  const fromDate = new Date(dateString)
  const [elapsed, setElapsed] = useState(() => computeElapsed(fromDate))

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(computeElapsed(fromDate))
    }, 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateString])

  return elapsed
}
