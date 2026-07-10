import { useState } from 'react'
import Reveal from './Reveal'
import Ornament from './Ornament'
import TravelCard from './TravelCard'
import TravelGalleryModal from './TravelGalleryModal'
import TravelFilters from './TravelFilters'
import { travels } from '../data/siteDataTravel'
import { filterAndSortTravels } from '../utils/travelDates'

export default function TravelsSection() {
  const [selectedTravel, setSelectedTravel] = useState(null)
  const [year, setYear] = useState(null)
  const [month, setMonth] = useState(null)

  const handleYearChange = (newYear) => {
    setYear(newYear)
    setMonth(null) // al cambiar de año, reinicia el filtro de mes
  }

  const visibleTravels = filterAndSortTravels(travels, { year, month })

  return (
    <section className="max-w-5xl mx-auto px-6 py-8 relative">
      <Reveal className="text-center mb-6">
        <Ornament className="mb-4">
          <span className="font-script text-3xl text-rose-500">Nuestros viajes</span>
        </Ornament>
      </Reveal>

      <TravelFilters
        travels={travels}
        year={year}
        month={month}
        onYearChange={handleYearChange}
        onMonthChange={setMonth}
      />

      {visibleTravels.length === 0 ? (
        <p className="text-center text-ink/60 italic">No hay viajes en este período todavía.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleTravels.map((travel) => (
            <Reveal key={travel.id}>
              <TravelCard {...travel} onSeeMore={() => setSelectedTravel(travel)} />
            </Reveal>
          ))}
        </div>
      )}

      <TravelGalleryModal
        travel={selectedTravel}
        onClose={() => setSelectedTravel(null)}
      />
    </section>
  )
}