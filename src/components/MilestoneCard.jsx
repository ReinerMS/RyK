import { useLiveCounter } from '../hooks/useLiveCounter'
import InProgressBadge from './InProgressBadge'

export default function MilestoneCard({ label, date, dateDisplay }) {
  const elapsed = useLiveCounter(date)

  return (
    <div className="relative flex gap-5 sm:gap-7">
      <div className="relative z-10 flex w-10 shrink-0 justify-center pt-8 sm:w-12">
        <span className="timeline-dot" />
      </div>

      <div className="glass-card flex-1 rounded-2xl p-8 text-center shadow-sm sm:p-10">
        <p className="text-xs tracking-[0.3em] uppercase mb-3 text-gold">{label}</p>
        <h2 className="font-display text-3xl mb-2 text-rose-700">
          {dateDisplay || 'Fecha por definir'}
        </h2>
        <div className="ornament my-4 " />
        {elapsed.started ? (
          <p className="font-display text-2xl leading-relaxed text-gold">
            {elapsed.text}
          </p>
        ) : (
          <div className="flex justify-center">
            <InProgressBadge />
          </div>
        )}
      </div>
    </div>
  )
}
