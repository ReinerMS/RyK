// Funciones puras para agrupar y filtrar viajes por fecha.
// Separado de los componentes para que sea fácil de reutilizar/testear.

const MESES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]

export function getYear(dateString) {
  return new Date(dateString).getFullYear()
}

export function getMonth(dateString) {
  return new Date(dateString).getMonth() // 0-11
}

export function getMonthLabel(monthIndex) {
  return MESES[monthIndex]
}

// Devuelve los años disponibles en la lista, ordenados descendente (más reciente primero)
export function getAvailableYears(travels) {
  const years = new Set(travels.map((t) => getYear(t.date)))
  return [...years].sort((a, b) => b - a)
}

// Devuelve los meses disponibles para un año específico, ordenados cronológicamente
export function getAvailableMonths(travels, year) {
  const months = new Set(
    travels.filter((t) => getYear(t.date) === year).map((t) => getMonth(t.date))
  )
  return [...months].sort((a, b) => a - b)
}

// Filtra + ordena. year o month en null = "todos"
export function filterAndSortTravels(travels, { year = null, month = null } = {}) {
  return [...travels]
    .filter((t) => {
      if (year !== null && getYear(t.date) !== year) return false
      if (month !== null && getMonth(t.date) !== month) return false
      return true
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
}