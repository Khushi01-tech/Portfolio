import { useInView } from '../hooks/useInView'

export default function FadeSection({ children, delay = 0, style = {} }) {
  const { ref, inView } = useInView(0.12)

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1) translateY(0)' : 'scale(0.94) translateY(40px)',
        transition: `opacity 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
        ...style
      }}>
      {children}
    </div>
  )
}