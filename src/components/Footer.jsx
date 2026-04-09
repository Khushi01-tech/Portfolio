import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <footer style={{
      padding: '60px 48px 40px',
      background: '#0a0a0a',
      borderTop: '1px solid #1a1a1a',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} style={{ fontSize: '28px', fontWeight: '800', cursor: 'pointer' }}>
            <span style={{ color: '#ff6b00' }}>K</span>hushi<span style={{ color: '#ff6b00' }}>.</span>
          </motion.div>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {links.map(link => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ color: '#ff6b00', y: -2 }}
                style={{ color: '#555', fontSize: '13px', fontWeight: '500', cursor: 'pointer', transition: 'color 0.2s' }}>
                {link}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '20px' }}>
           {[
              { icon: <FiGithub size={18} />, url: 'https://github.com/Khushi01-tech' },
              { icon: <FiLinkedin size={18} />, url: 'https://www.linkedin.com/in/khushi-shah-005816306/' },
              { icon: <FiMail size={18} />, url: 'mailto:Khushi0101shah@gmail.com' },
            ].map(({ icon, url }, i) => (
             <motion.a key={i} href={url} target="_blank"
               whileHover={{ y: -3, color: '#ff6b00' }}
               style={{ color: '#444', transition: 'color 0.2s' }}>
              {icon}
             </motion.a>
       ))}
     </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #ff6b0030, transparent)', marginBottom: '32px' }} />

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#333', fontSize: '13px' }}>
            © 2026 Khushi Shah. Built with React & Framer Motion.
          </p>
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #ff6b0060' }}
            style={{
              padding: '10px 20px', background: '#ff6b00',
              color: 'white', borderRadius: '8px',
              fontSize: '12px', fontWeight: '700', cursor: 'pointer'
            }}>
            Back to Top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  )
}