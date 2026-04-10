import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Cursor from './components/Cursor'

export default function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Loader />
      <Cursor />

      {/* Global animated orbs - fixed behind everything */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '10%', left: '5%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(40px)'
          }} />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          style={{
            position: 'absolute', top: '40%', right: '5%',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(60px)'
          }} />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 10 }}
          style={{
            position: 'absolute', bottom: '10%', left: '30%',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(50px)'
          }} />
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.015,
          backgroundImage: 'linear-gradient(#ff6b00 1px, transparent 1px), linear-gradient(90deg, #ff6b00 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* All content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="spotlight" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}