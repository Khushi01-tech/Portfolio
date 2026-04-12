import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '16px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid #ff6b0030' : 'none',
          transition: 'all 0.3s ease'
        }}>

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} style={{ fontSize: '24px', fontWeight: '800', cursor: 'pointer' }}>
          <span style={{ color: '#ff6b00' }}>K</span>hushi<span style={{ color: '#ff6b00' }}>.</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
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
              borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer',
              textDecoration: 'none'
            }}>
            Hire Me
          </motion.a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', flexDirection: 'column', gap: '5px',
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px'
          }}>
          <span style={{ width: '24px', height: '2px', background: menuOpen ? '#ff6b00' : '#fff', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ width: '24px', height: '2px', background: menuOpen ? '#ff6b00' : '#fff', display: 'block', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: '24px', height: '2px', background: menuOpen ? '#ff6b00' : '#fff', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0,
              background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)',
              zIndex: 999, padding: '24px',
              borderBottom: '1px solid #ff6b0030',
              display: 'flex', flexDirection: 'column', gap: '16px'
            }}>
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={handleLinkClick}
                style={{
                  fontSize: '18px', fontWeight: '600', color: '#ccc',
                  padding: '12px 0', borderBottom: '1px solid #1a1a1a',
                  textDecoration: 'none', transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.target.style.color = '#ff6b00'}
                onMouseLeave={e => e.target.style.color = '#ccc'}>
                {link}
              </a>
            ))}
            <a
              href="mailto:Khushi0101shah@gmail.com"
              onClick={handleLinkClick}
              style={{
                padding: '14px 24px', background: '#ff6b00', color: 'white',
                borderRadius: '6px', fontSize: '16px', fontWeight: '600',
                textAlign: 'center', textDecoration: 'none', marginTop: '8px'
              }}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
