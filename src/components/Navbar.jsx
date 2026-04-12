import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '16px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid #ff6b0030' : 'none',
        transition: 'all 0.3s ease'
      }}>
      <motion.div whileHover={{ scale: 1.05 }} style={{ fontSize: '24px', fontWeight: '800', cursor: 'pointer' }}>
        <span style={{ color: '#ff6b00' }}>K</span>hushi<span style={{ color: '#ff6b00' }}>.</span>
      </motion.div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {links.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ color: '#ff6b00', y: -2 }}
            style={{ fontSize: '14px', fontWeight: '500', color: '#ccc', transition: 'color 0.2s', cursor: 'pointer' }}>
            {link}
          </motion.a>
        ))}
        <motion.a
        href="mailto:Khushi0101shah@gmail.com"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px #ff6b0060' }}
        whileTap={{ scale: 0.95 }}
        style={{
        padding: '10px 24px', background: '#ff6b00', color: 'white',
        borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer'
  }}>
         Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}