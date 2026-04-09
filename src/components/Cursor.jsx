import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    // Ring follows with delay
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    // Grow ring on hoverable elements
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [style*="cursor: pointer"]')) {
        ringRef.current?.style.setProperty('width', '50px')
        ringRef.current?.style.setProperty('height', '50px')
        ringRef.current?.style.setProperty('border-color', '#ff6b00')
        dotRef.current?.style.setProperty('opacity', '0')
      }
    }
    const handleMouseOut = () => {
      ringRef.current?.style.setProperty('width', '30px')
      ringRef.current?.style.setProperty('height', '30px')
      ringRef.current?.style.setProperty('border-color', '#ff6b0080')
      dotRef.current?.style.setProperty('opacity', '1')
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      {/* Small dot */}
      <div ref={dotRef} style={{
        position: 'fixed', width: '6px', height: '6px',
        background: '#ff6b00', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.3s'
      }} />
      {/* Outer ring */}
      <div ref={ringRef} style={{
        position: 'fixed', width: '30px', height: '30px',
        border: '1.5px solid #ff6b0080', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 99998,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s, height 0.3s, border-color 0.3s'
      }} />
    </>
  )
}