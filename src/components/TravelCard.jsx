export default function TravelCard({ gallery, title, place, dateDisplay, description, emoji, onSeeMore }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden text-center shadow-sm hover:scale-105 transition-transform">
      {gallery?.[0] && (
        <img
          src={`${import.meta.env.BASE_URL}${gallery[0]}`}
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

        {gallery?.length > 1 ? (
          <button
            onClick={onSeeMore}
            className="mt-5 text-sm font-medium text-rose-500 underline underline-offset-4 hover:text-rose-700 transition cursor-pointer"
          >
            Ver más fotos →
          </button>
        ) : (
          <p className="mt-5 text-sm font-light text-ink/50 italic">
            📸 Faltan fotos... ¡hay que volver!
          </p>
        )}
      </div>
    </div>
  )
}