export default function ScrollDownArrow() {
  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Bajar"
      className="scroll-arrow fixed bottom-8 left-1/2 -translate-x-1/2 z-20"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 9l6 6 6-6"
          stroke="var(--color-rose-500)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}