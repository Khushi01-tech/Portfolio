import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  const roles = ["Aspiring Software Developer", "Full-Stack Developer", "CS Student @ ULethbridge"]
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const cols = Math.floor(canvas.width / 18)
    const rows = Math.floor(canvas.height / 18)

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: i * 18,
          y: j * 18,
          baseY: j * 18,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.02 + 0.01,
          offset: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.3 + 0.05
        })
      }
    }

    let frame = 0
    let animId

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame += 0.015

      particles.forEach(p => {
        const wave = Math.sin(frame + p.x * 0.015 + p.offset) * 30
        const wave2 = Math.cos(frame * 0.7 + p.x * 0.02) * 15
        const currentY = p.baseY + wave + wave2
        const distFromBottom = (canvas.height - currentY) / canvas.height
        const alpha = p.opacity * (0.3 + distFromBottom * 0.7)

        ctx.beginPath()
        ctx.arc(p.x, currentY, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 107, 0, ${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 48px', position: 'relative', overflow: 'hidden',
      background: '#0a0a0a'
    }}>
      <style>{`
        @keyframes blink { 50% { opacity: 0 } }
      `}</style>

      {/* Wave particle canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', opacity: 0.8
      }} />

      {/* Floating code blocks - full background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[
          { code: 'const App = () => {', x: '5%', y: '10%', r: '-8deg' },
          { code: 'import React from "react"', x: '75%', y: '8%', r: '6deg' },
          { code: 'def analyze_git():', x: '88%', y: '30%', r: '-5deg' },
          { code: 'SELECT * FROM budget', x: '3%', y: '35%', r: '10deg' },
          { code: 'git commit -m "feat"', x: '80%', y: '55%', r: '-7deg' },
          { code: 'npm run build', x: '8%', y: '60%', r: '8deg' },
          { code: 'flask run --debug', x: '85%', y: '75%', r: '-6deg' },
          { code: 'return <Portfolio />', x: '5%', y: '80%', r: '5deg' },
          { code: '$ git push origin main', x: '70%', y: '88%', r: '-9deg' },
          { code: 'pip install flask', x: '40%', y: '5%', r: '7deg' },
          { code: 'useState([])', x: '45%', y: '90%', r: '-4deg' },
          { code: 'async def fetch():', x: '20%', y: '20%', r: '11deg' },
          { code: 'border-radius: 8px', x: '60%', y: '22%', r: '-12deg' },
          { code: 'git branch -M main', x: '15%', y: '75%', r: '9deg' },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 5 + i * 0.4, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', left: item.x, top: item.y,
              background: 'rgba(20, 20, 20, 0.7)',
              border: '1px solid #ff6b0020', borderRadius: '8px',
              padding: '8px 14px', fontFamily: 'monospace',
              fontSize: '11px', color: '#ff6b0060', whiteSpace: 'nowrap',
              transform: `rotate(${item.r})`,
              backdropFilter: 'blur(4px)',
            }}>
            {item.code}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto', width: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', position: 'relative', zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'inline-block', background: '#ff6b0015',
            border: '1px solid #ff6b0040', color: '#ff6b00',
            padding: '6px 20px', borderRadius: '99px',
            fontSize: '12px', fontWeight: '700', marginBottom: '32px',
            letterSpacing: '3px', textTransform: 'uppercase'
          }}>
          Hello, I am
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(64px, 12vw, 140px)',
            fontWeight: '900', lineHeight: 0.9,
            marginBottom: '0px', letterSpacing: '-4px',
            color: '#ffffff'
          }}>
          KHUSHI
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(64px, 12vw, 140px)',
            fontWeight: '900', lineHeight: 0.9,
            marginBottom: '32px', letterSpacing: '-4px',
            WebkitTextStroke: '2px #ff6b00',
            color: 'transparent',
            textShadow: '0 0 80px #ff6b0040'
          }}>
          SHAH
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: '500',
            color: '#888', marginBottom: '20px', minHeight: '36px'
          }}>
          <TypeWriter roles={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '15px', color: '#555', lineHeight: 1.8,
            marginBottom: '48px', maxWidth: '500px'
          }}>
          CS student at University of Lethbridge, graduating April 2026.
          Passionate about turning ideas into real software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '60px' }}>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px #ff6b0060' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 40px', background: '#ff6b00', color: 'white',
              borderRadius: '8px', fontWeight: '700', fontSize: '15px', cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: '#ff6b00', color: '#ff6b00' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 40px', background: 'transparent', color: '#555',
              border: '2px solid #333', borderRadius: '8px', fontWeight: '700',
              fontSize: '15px', cursor: 'pointer', transition: 'all 0.3s',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', gap: '32px' }}>
          {[
  { icon: <FiGithub size={22} />, url: 'https://github.com/Khushi01-tech' },
  { icon: <FiLinkedin size={22} />, url: 'https://www.linkedin.com/in/khushi-shah-005816306/' },
  { icon: <FiMail size={22} />, url: 'mailto:Khushi0101shah@gmail.com' },
].map(({ icon, url }, i) => (
  <motion.a key={i} href={url} target="_blank"
    whileHover={{ y: -3, color: '#ff6b00', scale: 1.2 }}
    style={{ color: '#555', transition: 'color 0.2s' }}>
    {icon}
  </motion.a>
))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '8px', color: '#333'
        }}>
        <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #ff6b00, transparent)' }} />
      </motion.div>
    </section>
  )
}

function TypeWriter({ roles }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index % roles.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length === current.length) setTimeout(() => setDeleting(true), 1500)
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) { setDeleting(false); setIndex(i => i + 1) }
      }
    }, deleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [text, deleting, index, roles])

  return (
    <span>
      {text}
      <span style={{ borderRight: '3px solid #ff6b00', marginLeft: '2px', animation: 'blink 1s infinite' }} />
    </span>
  )
}