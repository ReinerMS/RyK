export default function InProgressBadge({ label = 'En proceso' }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/70 border border-gold/40">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
      </span>
      <span className="font-display text-lg tracking-wide text-rose-700">
        {label}
      </span>
      <span className="flex gap-1 ml-1">
        <span className="dot-bounce w-1.5 h-1.5 rounded-full bg-rose-500" style={{ animationDelay: '0s' }} />
        <span className="dot-bounce w-1.5 h-1.5 rounded-full bg-rose-500" style={{ animationDelay: '0.15s' }} />
        <span className="dot-bounce w-1.5 h-1.5 rounded-full bg-rose-500" style={{ animationDelay: '0.3s' }} />
      </span>
    </div>
  )
}
