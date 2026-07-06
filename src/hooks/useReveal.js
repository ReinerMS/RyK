import { useEffect, useRef, useState } from 'react'

/**
 * Devuelve un ref y una clase 'in' cuando el elemento entra en el viewport.
 * Úsalo junto a la clase CSS `.reveal` definida en index.css
 */
export function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
