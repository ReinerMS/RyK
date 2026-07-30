const MS_DAY = 86400000

/** Años completos transcurridos desde una fecha ("AAAA-MM-DD"), contando el día exacto. */
export function yearsSince(dateString, now = new Date()) {
  const [year, month, day] = dateString.split('-').map(Number)
  let years = now.getFullYear() - year
  const beforeAnniversary =
    now.getMonth() < month - 1 || (now.getMonth() === month - 1 && now.getDate() < day)
  if (beforeAnniversary) years--
  return years
}

/** Días hasta la próxima ocurrencia de un mes/día, y la fecha exacta de esa ocurrencia. */
export function daysUntilNext(month, day, now = new Date()) {
  const todayStart = new Date(now)
  todayStart.setHours(0, 0, 0, 0)

  let next = new Date(now.getFullYear(), month - 1, day)
  if (next.getTime() < todayStart.getTime()) next = new Date(now.getFullYear() + 1, month - 1, day)

  return { days: Math.round((next.getTime() - todayStart.getTime()) / MS_DAY), next }
}
