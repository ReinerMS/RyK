import { useEffect, useState } from 'react'

const MS_DAY = 86400000

function computeState(dateString) {
  const [year, month, day] = (dateString || '').split('-').map(Number)
  if (!year || !month || !day) {
    return { valid: false, age: null, progress: 0, isToday: false, nextBirthday: null, days: null, hours: 0, minutes: 0, seconds: 0 }
  }

  const now = new Date()

  let lastBirthday = new Date(now.getFullYear(), month - 1, day)
  if (lastBirthday > now) {
    lastBirthday = new Date(now.getFullYear() - 1, month - 1, day)
  }
  const nextBirthday = new Date(lastBirthday.getFullYear() + 1, month - 1, day)
  const isToday = now.getMonth() === month - 1 && now.getDate() === day

  const age = lastBirthday.getFullYear() - year
  const cycleMs = nextBirthday.getTime() - lastBirthday.getTime()
  const elapsedMs = now.getTime() - lastBirthday.getTime()
  const progress = Math.min(1, Math.max(0, elapsedMs / cycleMs))

  const diff = isToday ? 0 : nextBirthday.getTime() - now.getTime()
  const days = Math.floor(diff / MS_DAY)
  const hours = Math.floor((diff % MS_DAY) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)

  return { valid: true, age, progress, isToday, nextBirthday, days, hours, minutes, seconds }
}

/**
 * Edad, progreso del año y cuenta regresiva hasta el próximo cumpleaños,
 * a partir de una fecha de nacimiento ISO ("YYYY-MM-DD"). Se actualiza cada segundo.
 */
export function useBirthdayCountdown(dateString) {
  const [state, setState] = useState(() => computeState(dateString))

  useEffect(() => {
    setState(computeState(dateString))
    const id = setInterval(() => setState(computeState(dateString)), 1000)
    return () => clearInterval(id)
  }, [dateString])

  return state
}
