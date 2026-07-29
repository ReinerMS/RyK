import TravelsSection from '../components/TravelsSection'
import Reveal from '../components/Reveal'

export default function Viajes() {
  return (
    <div className="mx-auto max-w-6xl">
      <Reveal className="mb-10 text-center" as="header">
        <span className="page-eyebrow">Explorando juntos</span>
        <h1 className="page-title">Nuestros viajes</h1>
        <p className="page-subtitle">Cada lugar se vuelve mágico si voy contigo.</p>
      </Reveal>

      <TravelsSection />
    </div>
  )
}
