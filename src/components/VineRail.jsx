import { useEffect, useRef } from 'react'
import { buildVineSegmentSVG, VINE_SEGMENT_HEIGHT } from './vine'

function fillRail(node) {
  if (!node) return
  const count = Math.ceil(document.body.scrollHeight / VINE_SEGMENT_HEIGHT) + 1
  let html = ''
  for (let i = 0; i < count; i++) {
    html += buildVineSegmentSVG(i)
  }
  node.innerHTML = html
}

export default function VineRail() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const render = () => {
      fillRail(leftRef.current)
      fillRail(rightRef.current)
    }

    // Espera a que el layout esté pintado para medir el alto real.
    const raf = requestAnimationFrame(render)
    window.addEventListener('resize', render)

    // Si el contenido cambia de tamaño dinámicamente (imágenes, fuentes, etc.)
    const resizeObserver = new ResizeObserver(render)
    resizeObserver.observe(document.body)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', render)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      <div className="vine-rail left" ref={leftRef} aria-hidden="true" />
      <div className="vine-rail right" ref={rightRef} aria-hidden="true" />
    </>
  )
}
