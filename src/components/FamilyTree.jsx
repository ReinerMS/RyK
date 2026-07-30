import FamilyUnitCard from './FamilyUnitCard'
import { ACCENTS } from '../utils/accents'

export default function FamilyTree({ title, accent, units }) {
  const colors = ACCENTS[accent]

  return (
    <div>
      <p className={`mb-4 text-center text-xs tracking-[0.25em] uppercase ${colors.text}`}>{title}</p>

      {units.length === 0 ? (
        <p className="text-center text-sm text-ink/40">Todavía no hay nadie cargado.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {units.map((unit) => (
            <FamilyUnitCard
              key={unit.id}
              title={unit.title}
              people={unit.people}
              marriedSince={unit.marriedSince}
              accent={accent}
            />
          ))}
        </div>
      )}
    </div>
  )
}
