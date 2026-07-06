export default function Ornament({ children, className = '' }) {
  return (
    <div className={`ornament ${className}`}>
      {children}
    </div>
  )
}
