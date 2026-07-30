import { useBirthdayCountdown } from '../hooks/useBirthdayCountdown'
import { ACCENTS } from '../utils/accents'

const RING_R = 70
const RING_C = 2 * Math.PI * RING_R

const longDateFmt = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
const nextBirthdayFmt = new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function BirthdayCard({ name, date, accent = 'reiner' }) {
  const state = useBirthdayCountdown(date)
  const colors = ACCENTS[accent]
  const [year, month, day] = date.split('-').map(Number)

  return (
    <div className="glass-card flex flex-col items-center rounded-3xl p-8 text-center shadow-sm sm:p-10">
      <div className="mb-1 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${colors.dot}`} />
        <h2 className={`font-display text-2xl ${colors.text}`}>{name}</h2>
      </div>
      <p className="mb-6 text-sm text-ink/55">{longDateFmt.format(new Date(year, month - 1, day))}</p>

      <div className="relative h-40 w-40">
        <svg viewBox="0 0 160 160" className="birthday-ring h-full w-full -rotate-90">
          <circle cx="80" cy="80" r={RING_R} strokeWidth="7" className="stroke-ink/10" />
          <circle
            cx="80"
            cy="80"
            r={RING_R}
            strokeWidth="7"
            className={`ring-progress ${colors.stroke}`}
            strokeDasharray={RING_C}
            strokeDashoffset={RING_C * (1 - state.progress)}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-4xl leading-none">{state.age}</span>
          <span className="mt-1 text-[0.65rem] tracking-[0.2em] text-ink/45 uppercase">años</span>
        </div>
      </div>

      <p className="mt-4 text-sm text-ink/60">
        {state.isToday ? (
          <span className={`font-semibold ${colors.text}`}>¡Hoy cumple {state.age} años!</span>
        ) : (
          <>
            <span className={`font-semibold ${colors.text}`}>{Math.round(state.progress * 100)}%</span> del año recorrido
          </>
        )}
      </p>

      {!state.isToday && (
        <div className="mt-5 flex gap-2">
          <div className="countdown-unit">
            <span className="font-display text-xl leading-none">{state.days}</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.1em] text-ink/45 uppercase">días</span>
          </div>
          <div className="countdown-unit">
            <span className="font-display text-xl leading-none">{pad(state.hours)}</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.1em] text-ink/45 uppercase">hs</span>
          </div>
          <div className="countdown-unit">
            <span className="font-display text-xl leading-none">{pad(state.minutes)}</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.1em] text-ink/45 uppercase">min</span>
          </div>
          <div className="countdown-unit">
            <span className="font-display text-xl leading-none">{pad(state.seconds)}</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.1em] text-ink/45 uppercase">seg</span>
          </div>
        </div>
      )}

      <p className="mt-5 text-xs text-ink/50">
        Próximo cumpleaños:{' '}
        <span className="font-medium text-ink/75">{nextBirthdayFmt.format(state.nextBirthday)}</span>
      </p>
    </div>
  )
}
