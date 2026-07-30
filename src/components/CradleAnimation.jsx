export default function CradleAnimation({ className = '' }) {
  return (
    <svg viewBox="0 0 120 96" className={`h-24 w-24 text-gold ${className}`} aria-hidden="true">
      <g className="cradle-rock">
        <path
          d="M10 82 Q60 100 110 82"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />
        <ellipse cx="60" cy="48" rx="34" ry="28" fill="currentColor" opacity="0.12" />
        <ellipse cx="60" cy="48" rx="34" ry="28" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M31 52 Q60 66 89 52" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      </g>
    </svg>
  )
}
