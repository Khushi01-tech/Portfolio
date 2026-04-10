import { motion } from 'framer-motion'
import { useEffect, useState, useRef, useMemo } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function BrainNodes() {
  const groupRef = useRef()
  const count = 80

  const { positions, lineGeo } = useMemo(() => {
    const pos = []
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      pos.push([
        2.2 * Math.sin(phi) * Math.cos(theta),
        2.2 * Math.sin(phi) * Math.sin(theta),
        2.2 * Math.cos(phi)
      ])
    }
    const points = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i][0] - pos[j][0]
        const dy = pos[i][1] - pos[j][1]
        const dz = pos[i][2] - pos[j][2]
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz)
        if (dist < 1.4) {
          points.push(new THREE.Vector3(...pos[i]))
          points.push(new THREE.Vector3(...pos[j]))
        }
      }
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points)
    return { positions: pos, lineGeo: geo }
  }, [])

  useFrame((state) => {
    groupRef.current.rotation.y += 0.004
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
  })

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#ff6b00" transparent opacity={0.3} />
      </lineSegments>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#ff9944" emissive="#ff4400" emissiveIntensity={2} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color="#ff6b00" transparent opacity={0.05} emissive="#ff6b00" emissiveIntensity={1} />
      </mesh>
      <pointLight color="#ff6b00" intensity={10} distance={12} position={[3, 3, 3]} />
      <pointLight color="#ffaa00" intensity={6} distance={10} position={[-3, -2, -2]} />
      <pointLight color="#ff4400" intensity={4} distance={8} position={[0, 3, 0]} />
      <ambientLight intensity={0.5} />
    </group>
  )
}

// Global wave canvas component
function WaveCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()

    const particles = []
    const spacing = 20

    const buildParticles = () => {
      particles.length = 0
      const cols = Math.floor(canvas.width / spacing)
      const rows = Math.floor(canvas.height / spacing)
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            x: i * spacing,
            baseY: j * spacing,
            size: Math.random() * 1.4 + 0.4,
            offset: Math.random() * Math.PI * 2,
            opacity: Math.random() * 0.25 + 0.04
          })
        }
      }
    }
    buildParticles()

    let frame = 0
    let animId

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame += 0.013
      particles.forEach(p => {
        const wave = Math.sin(frame + p.x * 0.015 + p.offset) * 28
        const wave2 = Math.cos(frame * 0.7 + p.x * 0.02) * 13
        const y = p.baseY + wave + wave2
        ctx.beginPath()
        ctx.arc(p.x, y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 107, 0, ${p.opacity})`
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      setSize()
      buildParticles()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 100,
      }}
    />
  )
}

export default function Hero() {
  const roles = ["Aspiring Software Developer", "Full-Stack Developer", "CS Graduate @ ULethbridge"]

  return (
    <>
      {/* Wave canvas fixed — covers whole site */}
      <WaveCanvas />

      <section id="home" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '0 64px', position: 'relative', overflow: 'hidden',
        background: 'transparent'
      }}>
        <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>

        {/* Floating code blocks */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[
            { code: 'const App = () => {', x: '5%', y: '10%', r: '-8deg' },
            { code: 'def analyze_git():', x: '3%', y: '35%', r: '10deg' },
            { code: 'npm run build', x: '8%', y: '60%', r: '8deg' },
            { code: 'return <Portfolio />', x: '5%', y: '80%', r: '5deg' },
            { code: 'pip install flask', x: '40%', y: '5%', r: '7deg' },
            { code: 'useState([])', x: '45%', y: '90%', r: '-4deg' },
          ].map((item, i) => (
            <motion.div key={i}
              animate={{ y: [0, -12, 0], opacity: [0.2, 0.45, 0.2] }}
              transition={{ duration: 5 + i * 0.4, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', left: item.x, top: item.y,
                background: 'rgba(20,20,20,0.7)', border: '1px solid #ff6b0020',
                borderRadius: '8px', padding: '8px 14px', fontFamily: 'monospace',
                fontSize: '11px', color: '#ff6b0060', whiteSpace: 'nowrap',
                transform: `rotate(${item.r})`, backdropFilter: 'blur(4px)',
              }}>
              {item.code}
            </motion.div>
          ))}
        </div>

        {/* SPLIT LAYOUT */}
        <div style={{
          maxWidth: '1200px', margin: '0 auto', width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '40px', position: 'relative', zIndex: 1
        }}>
          {/* LEFT — Text */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'inline-block', background: '#ff6b0015',
                border: '1px solid #ff6b0040', color: '#ff6b00',
                padding: '6px 20px', borderRadius: '99px',
                fontSize: '12px', fontWeight: '700', marginBottom: '32px',
                letterSpacing: '3px', textTransform: 'uppercase'
              }}>
              Hello, I Am
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(52px, 8vw, 110px)',
                fontWeight: '900', lineHeight: 0.9,
                marginBottom: '0px', letterSpacing: '-4px', color: '#ffffff'
              }}>
              KHUSHI
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(52px, 8vw, 110px)',
                fontWeight: '900', lineHeight: 0.9,
                marginBottom: '28px', letterSpacing: '-4px',
                WebkitTextStroke: '2px #ff6b00',
                color: 'transparent', textShadow: '0 0 80px #ff6b0040'
              }}>
              SHAH
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: 'clamp(15px, 1.5vw, 20px)', fontWeight: '500',
                color: '#888', marginBottom: '16px', minHeight: '32px'
              }}>
              <TypeWriter roles={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: '15px', color: '#555', lineHeight: 1.8,
                marginBottom: '40px', maxWidth: '460px'
              }}>
              CS graduate from University of Lethbridge, April 2026.
              Passionate about turning ideas into real software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <motion.a href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px #ff6b0060' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '14px 36px', background: '#ff6b00', color: 'white',
                  borderRadius: '8px', fontWeight: '700', fontSize: '15px',
                  cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif"
                }}>
                View My Work
              </motion.a>
              <motion.a href="#contact"
                whileHover={{ scale: 1.05, borderColor: '#ff6b00', color: '#ff6b00' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '14px 36px', background: 'transparent', color: '#555',
                  border: '2px solid #333', borderRadius: '8px', fontWeight: '700',
                  fontSize: '15px', cursor: 'pointer', transition: 'all 0.3s',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: '28px' }}>
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

          {/* RIGHT — 3D Brain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ width: '480px', height: '480px', flexShrink: 0, position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(circle at center, #ff6b0020 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none'
            }} />
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}
              style={{ background: 'transparent' }}
              gl={{ alpha: true, antialias: true }}>
              <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
                <BrainNodes />
              </Float>
            </Canvas>
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
    </>
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