import DatesSection from '../components/DatesSection'
import Reveal from '../components/Reveal'

export default function Citas() {
  return (
    <div className="mx-auto max-w-6xl">
      <Reveal className="mb-14 text-center" as="header">
        <span className="page-eyebrow">Nuestros momentos</span>
        <h1 className="page-title">Hitos en nuestra relación</h1>
        <p className="page-subtitle">Cada fecha, un paso más cerca del para siempre.</p>
      </Reveal>

      <DatesSection />
    </div>
  )
}
