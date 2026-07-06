// Pétalos cayendo de fondo — decorativos, no interactivos.
// A diferencia de las vines, no depende del alto de la página:
// simplemente se reinician con CSS cuando salen de pantalla.

const PETALS = [
  { left: '4%', size: 18, duration: 11, delay: 0 },
  { left: '14%', size: 14, duration: 9, delay: 2 },
  { left: '24%', size: 20, duration: 13, delay: 4 },
  { left: '38%', size: 16, duration: 10, delay: 1 },
  { left: '52%', size: 22, duration: 14, delay: 6 },
  { left: '64%', size: 15, duration: 9, delay: 3 },
  { left: '76%', size: 19, duration: 12, delay: 5 },
  { left: '86%', size: 16, duration: 10, delay: 7 },
  { left: '94%', size: 21, duration: 13, delay: 2.5 },
]

export default function FallingPetals() {
  return (
    <div className="petals-layer" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  )
}