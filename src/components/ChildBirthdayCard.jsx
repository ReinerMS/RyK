import { useCountdownTo } from '../hooks/useCountdownTo'
import BirthdayCard from './BirthdayCard'
import CradleAnimation from './CradleAnimation'

const longDateFmt = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function ChildBirthdayCard({ name, date }) {
  const alreadyBorn = date && new Date(date) <= new Date()

  if (alreadyBorn) {
    return <BirthdayCard name={name} date={date} accent="child" />
  }

  return date ? <PendingCard name={name} date={date} /> : <UnknownCard name={name} />
}

function UnknownCard({ name }) {
  return (
    <div className="glass-card flex flex-col items-center rounded-3xl p-8 text-center shadow-sm sm:p-10">
      <div className="mb-1 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" />
        <h2 className="font-display text-2xl text-gold">{name}</h2>
      </div>
      <p className="mb-2 text-sm text-ink/55">Todavía no hay fecha prevista</p>

      <CradleAnimation className="my-4" />

      <p className="max-w-[24ch] text-sm text-ink/60">
        Ya le tenemos un lugar reservado acá. En cuanto haya novedades, esta tarjeta arranca a contar sola.
      </p>
    </div>
  )
}

function PendingCard({ name, date }) {
  const cd = useCountdownTo(date)

  return (
    <div className="glass-card flex flex-col items-center rounded-3xl p-8 text-center shadow-sm sm:p-10">
      <div className="mb-1 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" />
        <h2 className="font-display text-2xl text-gold">{name}</h2>
      </div>
      <p className="mb-4 text-sm text-ink/55">En camino</p>

      <CradleAnimation className="mb-4" />

      <p className="font-display text-4xl leading-none text-gold">{cd.days}</p>
      <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-ink/45 uppercase">días para conocerlo/a</p>

      <div className="mt-5 flex gap-2">
        <div className="countdown-unit">
          <span className="font-display text-xl leading-none">{pad(cd.hours)}</span>
          <span className="mt-1 text-[0.6rem] tracking-[0.1em] text-ink/45 uppercase">hs</span>
        </div>
        <div className="countdown-unit">
          <span className="font-display text-xl leading-none">{pad(cd.minutes)}</span>
          <span className="mt-1 text-[0.6rem] tracking-[0.1em] text-ink/45 uppercase">min</span>
        </div>
        <div className="countdown-unit">
          <span className="font-display text-xl leading-none">{pad(cd.seconds)}</span>
          <span className="mt-1 text-[0.6rem] tracking-[0.1em] text-ink/45 uppercase">seg</span>
        </div>
      </div>

      <p className="mt-5 text-xs text-ink/50">
        Fecha prevista: <span className="font-medium text-ink/75">{longDateFmt.format(new Date(date))}</span>
      </p>
    </div>
  )
}
