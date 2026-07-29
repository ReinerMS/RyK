import VideoGallery from '../components/VideoGallery'
import Reveal from '../components/Reveal'

export default function Videos() {
  return (
    <div className="mx-auto max-w-6xl">
      <Reveal className="mb-10 text-center" as="header">
        <span className="page-eyebrow">Momentos en movimiento</span>
        <h1 className="page-title">Nuestra galería de recuerdos</h1>
        <p className="page-subtitle">Un pequeño espacio para revivir las risas y aventuras que hemos grabado.</p>
      </Reveal>

      <VideoGallery />
    </div>
  )
}
