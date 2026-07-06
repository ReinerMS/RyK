import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const [ref, isVisible] = useReveal()

  return (
    <Tag ref={ref} className={`reveal ${isVisible ? 'in' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
