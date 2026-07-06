export default function TravelCard({ img, title, place, dateDisplay, description, emoji }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden text-center shadow-sm">
      {img && (
        <img
          src={`${import.meta.env.BASE_URL}${img}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-8">
        <div className="text-4xl mb-2">{emoji}</div>
        <h3 className="font-display text-2xl text-rose-700">{title}</h3>
        <p className="text-sm text-ink/70 mt-1">{place}</p>
        <p className="text-xs tracking-[0.25em] uppercase mt-2 text-gold">{dateDisplay}</p>
        <div className="ornament my-4" />
        <p className="text-sm font-light text-ink">{description}</p>
      </div>
    </div>
  )
}