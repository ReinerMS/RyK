import { getAvailableYears, getAvailableMonths, getMonthLabel } from '../utils/travelDates'

export default function TravelFilters({ travels, year, month, onYearChange, onMonthChange }) {
  const years = getAvailableYears(travels)
  const months = year !== null ? getAvailableMonths(travels, year) : []

  return (
    <div className="flex flex-col items-center gap-4 mb-10">
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => onYearChange(null)}
          className={`filter-chip ${year === null ? 'filter-chip-active' : ''}`}
        >
          Todos
        </button>
        {years.map((y) => (
          <button
            key={y}
            onClick={() => onYearChange(y)}
            className={`filter-chip ${year === y ? 'filter-chip-active' : ''}`}
          >
            {y}
          </button>
        ))}
      </div>

      {year !== null && months.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => onMonthChange(null)}
            className={`filter-chip filter-chip-sm ${month === null ? 'filter-chip-active' : ''}`}
          >
            Todo el año
          </button>
          {months.map((m) => (
            <button
              key={m}
              onClick={() => onMonthChange(m)}
              className={`filter-chip filter-chip-sm ${month === m ? 'filter-chip-active' : ''}`}
            >
              {getMonthLabel(m)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}