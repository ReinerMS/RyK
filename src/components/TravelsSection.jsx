import Reveal from './Reveal'
import Ornament from './Ornament'
import TravelCard from './TravelCard'
import { travels } from '../data/siteDataTravel'

export default function TravelsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 relative">
      <Reveal className="text-center mb-10">
        <Ornament className="mb-4">
          <span className="font-script text-2xl sm:text-4xl text-rose-500">Nuestros viajes</span>
        </Ornament>
      </Reveal>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {travels.map((travel) => (
          <Reveal key={travel.id}>
            <TravelCard {...travel} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}