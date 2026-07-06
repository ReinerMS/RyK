import { useLiveCounter } from '../hooks/useLiveCounter'
import InProgressBadge from './InProgressBadge'

export default function MilestoneCard({ label, date, dateDisplay }) {
  const elapsed = useLiveCounter(date)

  return (
    <div className="glass-card rounded-2xl p-10 text-center shadow-sm">
      <p className="text-xs tracking-[0.3em] uppercase mb-3 text-gold">{label}</p>
      <h2 className="font-display text-3xl mb-2 text-rose-700">{dateDisplay}</h2>
      <div className="ornament my-4" />
      {elapsed.started ? (
        <p className="font-display text-2xl leading-relaxed text-rose-500">
          {elapsed.text}
        </p>
      ) : (
        <div className="flex justify-center">
          <InProgressBadge />
        </div>
      )}
    </div>
  )
}
