import { useBirthdayCountdown } from '../hooks/useBirthdayCountdown'
import { ACCENTS } from '../utils/accents'

const RING_R = 42
const RING_C = 2 * Math.PI * RING_R

export default function FamilyPersonRing({ name, relation, date, accent = 'reiner' }) {
  const state = useBirthdayCountdown(date)
  const colors = ACCENTS[accent]
  const chipText = !state.valid
    ? 'sin fecha'
    : state.isToday
      ? '¡hoy!'
      : state.days === 1
        ? 'mañana'
        : `en ${state.days} días`

  return (
    <div className="flex flex-col items-center">
      {relation && (
        <span className={`text-[0.6rem] tracking-[0.14em] uppercase ${colors.text} mb-0.5`}>{relation}</span>
      )}
      <span className="font-display text-sm text-ink mb-2">{name}</span>

      <div className="relative h-24 w-24">
        <svg viewBox="0 0 100 100" className="birthday-ring h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={RING_R} strokeWidth="5" className="stroke-ink/10" />
          <circle
            cx="50"
            cy="50"
            r={RING_R}
            strokeWidth="5"
            className={`ring-progress ${colors.stroke}`}
            strokeDasharray={RING_C}
            strokeDashoffset={RING_C * (1 - state.progress)}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-xl leading-none">{state.valid ? state.age : '—'}</span>
          <span className="mt-0.5 text-[0.55rem] tracking-[0.15em] text-ink/40 uppercase">años</span>
        </div>
      </div>

      <span
        className={`mt-2 rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold ${
          state.valid && (state.isToday || state.days <= 1) ? 'bg-gold/15 text-gold' : 'bg-ink/5 text-ink/45'
        }`}
      >
        {chipText}
      </span>
    </div>
  )
}
