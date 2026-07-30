import FamilyPersonRing from './FamilyPersonRing'
import Ornament from './Ornament'
import { yearsSince } from '../utils/familyDates'
import { ACCENTS } from '../utils/accents'

const marriedDateFmt = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })

function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export default function FamilyUnitCard({ title, people, marriedSince, accent = 'reiner' }) {
  const colors = ACCENTS[accent]
  const isCouple = people.length === 2

  return (
    <div className="glass-card rounded-2xl p-6 shadow-sm">
      {title && (
        <p className={`mb-4 text-center text-[0.68rem] tracking-[0.2em] uppercase ${colors.text}`}>{title}</p>
      )}

      <div className={`flex items-start justify-center ${isCouple ? 'gap-5' : ''}`}>
        <FamilyPersonRing {...people[0]} accent={accent} />
        {isCouple && (
          <>
            <span className="mt-9 font-display text-xl text-ink/25">&</span>
            <FamilyPersonRing {...people[1]} accent={accent} />
          </>
        )}
      </div>

      {marriedSince && (
        <div className="mt-5 text-center">
          <Ornament className="mb-2 opacity-60" />
          <p className="text-sm text-ink/60">
            <span className={`font-semibold ${colors.text}`}>{yearsSince(marriedSince)}</span> años de casados
          </p>
          <p className="mt-0.5 text-xs text-ink/40">Desde el {marriedDateFmt.format(parseLocalDate(marriedSince))}</p>
        </div>
      )}
    </div>
  )
}
