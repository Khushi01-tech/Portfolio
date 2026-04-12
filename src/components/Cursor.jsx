import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [dot, setDot] = useState({ x: 0, y: 0 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (isSafari || isMobile) return null

  useEffect(() => {
    document.body.style.cursor = 'none'
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setDot({ x: e.clientX, y: e.clientY })
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const hoverIn = () => setHovering(true)
    const hoverOut = () => setHovering(false)

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', hoverIn)
      el.addEventListener('mouseleave', hoverOut)
    })

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        animate={{
          x: dot.x - 20,
          y: dot.y - 20,
          scale: hovering ? 1.8 : clicking ? 0.8 : 1,
          opacity: pos.x === 0 ? 0 : 1
        }}
        transition={{ type: 'tween', duration: 0.09, ease: 'linear' }}
        style={{
          position: 'fixed', width: '40px', height: '40px',
          border: `2px solid ${hovering ? '#ff6b00' : '#ff6b0060'}`,
          borderRadius: '50%', pointerEvents: 'none', zIndex: 99999,
          mixBlendMode: 'difference',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }} />
  
      {/* Inner dot —*/}
      <div
        style={{
          position: 'fixed',
          width: '8px', height: '8px',
          background: '#ff6b00', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 99999,
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
          opacity: pos.x === 0 ? 0 : 1,
          willChange: 'transform',
          transition: 'opacity 0.3s'
        }} />
    </>
  )
}