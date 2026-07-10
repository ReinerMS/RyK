export default function TravelGalleryModal({ travel, onClose }) {
  if (!travel) return null

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        <h3 className="font-display text-2xl text-rose-700 mb-4 text-center">
          {travel.title}
        </h3>
        <div className="gallery-grid">
          {travel.gallery.map((img, i) => (
            <img
              key={i}
              src={`${import.meta.env.BASE_URL}${img}`}
              alt={`${travel.title} ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}