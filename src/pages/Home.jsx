import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import LetterSection from '../components/LetterSection'
import Reveal from '../components/Reveal'
import Ornament from '../components/Ornament'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl space-y-16">
        <Hero />
        <LetterSection />

        <Reveal className="pb-16 text-center" as="section">
          <Ornament className="mb-6">
            <span className="font-script text-2xl text-rose-500">Sigue explorando</span>
          </Ornament>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/citas" className="explore-link">Nuestros hitos</Link>
            <Link to="/viajes" className="explore-link">Nuestros viajes</Link>
            <Link to="/videos" className="explore-link">Nuestros videos</Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
