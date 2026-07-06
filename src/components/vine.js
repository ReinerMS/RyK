// Genera el markup SVG de un segmento de enredadera: un tallo curvo con
// hojas y flores que "brotan" mediante animaciones CSS (ver index.css).
// Separado de React para mantenerlo simple y fácil de testear/ajustar.

const SEGMENT_HEIGHT = 620
const SEGMENT_WIDTH = 120
const AMPLITUDE = 22

function buildStemPath() {
  const h = SEGMENT_HEIGHT
  const amp = AMPLITUDE
  const steps = 6
  let d = `M 20 ${h}`

  for (let i = 1; i <= steps; i++) {
    const y = h - (h / steps) * i
    const x = 20 + (i % 2 === 0 ? amp : -amp)
    const cx = 20 + (i % 2 === 0 ? -amp : amp)
    d += ` C ${cx} ${y + h / steps / 2}, ${x} ${y + h / steps / 2}, ${x} ${y}`
  }

  return d
}

function buildLeaves(segIndex) {
  const positions = [0.15, 0.32, 0.5, 0.68, 0.85]
  const h = SEGMENT_HEIGHT

  return positions
    .map((p, i) => {
      const y = h - h * p
      const side = i % 2 === 0 ? 1 : -1
      const x = 20 + side * AMPLITUDE * 0.9
      const delay = (segIndex * 1.2 + i * 0.5).toFixed(2)
      const swayDuration = (1 + i * 0.3).toFixed(2)

      return `<g class="leaf" style="animation-delay:${delay}s,${swayDuration}s">
        <path transform="translate(${x},${y}) rotate(${side * 40})"
          d="M0,0 C 8,-6 8,-16 0,-20 C -8,-16 -8,-6 0,0 Z"/>
      </g>`
    })
    .join('')
}

function buildBlooms(segIndex) {
  const positions = [0.23, 0.58, 0.9]
  const h = SEGMENT_HEIGHT

  return positions
    .map((p, i) => {
      const y = h - h * p
      const side = i % 2 === 0 ? 1 : -1
      const x = 20 + side * AMPLITUDE * 1.15
      const delay = (segIndex * 1.2 + 0.4 + i * 0.7).toFixed(2)
      const swayDuration = (2 + i * 0.4).toFixed(2)

      return `<g class="bloom" style="animation-delay:${delay}s,${swayDuration}s" transform="translate(${x},${y})">
        <circle r="3.4" fill="var(--color-gold)"/>
        <g fill="var(--color-rose-300)">
          <ellipse cx="0" cy="-6.5" rx="3.4" ry="5.2"/>
          <ellipse cx="6" cy="-2" rx="3.4" ry="5.2" transform="rotate(72 6 -2)"/>
          <ellipse cx="4" cy="5.5" rx="3.4" ry="5.2" transform="rotate(144 4 5.5)"/>
          <ellipse cx="-4" cy="5.5" rx="3.4" ry="5.2" transform="rotate(216 -4 5.5)"/>
          <ellipse cx="-6" cy="-2" rx="3.4" ry="5.2" transform="rotate(288 -6 -2)"/>
        </g>
      </g>`
    })
    .join('')
}

export function buildVineSegmentSVG(segIndex) {
  const d = buildStemPath()
  const leaves = buildLeaves(segIndex)
  const blooms = buildBlooms(segIndex)

  return `<svg viewBox="0 0 ${SEGMENT_WIDTH} ${SEGMENT_HEIGHT}" style="top:${segIndex * SEGMENT_HEIGHT}px; height:${SEGMENT_HEIGHT}px;">
      <path class="vine-path" d="${d}" style="animation-delay:${segIndex * 0.6}s"/>
      ${leaves}
      ${blooms}
    </svg>`
}

export const VINE_SEGMENT_HEIGHT = SEGMENT_HEIGHT
