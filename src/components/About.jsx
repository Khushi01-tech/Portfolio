import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiCompass, FiBookOpen } from 'react-icons/fi'
import FadeSection from './FadeSection'

export default function About() {
  const stats = [
    { number: '2+', label: 'Years Leadership' },
    { number: '3+', label: 'Projects Built' },
    { number: '5+', label: 'Tech Skills' },
    { number: '2026', label: 'Graduated' },
  ]

  const cards = [
    { icon: <FiCode size={32} />, title: 'Full-Stack Dev', desc: 'Building end-to-end applications with React and Python Flask' },
    { icon: <FiCpu size={32} />, title: 'Problem Solver', desc: 'Turning complex technical problems into clean, working solutions' },
    { icon: <FiCompass size={32} />, title: 'Leader', desc: 'Led camping expeditions for 2+ years, building teamwork skills' },
    { icon: <FiBookOpen size={32} />, title: 'CS Graduate', desc: 'Bachelor of Science in Computer Science, graduated April 2026' },
  ]

  return (
    <section id="about" style={{
      padding: '80px 24px', background: 'rgba(13,13,13,0.4)', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, #ff6b0015 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, #ff6b0010 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <FadeSection delay={0}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#ff6b00', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>Who I Am</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginTop: '12px' }}>
              About <span style={{ color: '#ff6b00' }}>Me</span>
            </h2>
          </motion.div>
        </FadeSection>

        <FadeSection delay={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center' }}>
            <p style={{ color: '#999', lineHeight: 1.9, fontSize: '15px', marginBottom: '20px' }}>
              I'm a Computer Science student at the University of Lethbridge, originally from India, graduated April 2026. I'm passionate about turning ideas into real software — whether that's building full-stack applications, solving technical problems, or creating tools people actually use.
            </p>
            <p style={{ color: '#999', lineHeight: 1.9, fontSize: '15px' }}>
              Beyond coding, I'm an outdoor enthusiast who led annual camping expeditions for 2+ years back in India, which taught me leadership, teamwork, and staying calm under pressure. I'm looking to join a software development team where I can contribute, grow, and help build something meaningful.
            </p>
          </motion.div>
        </FadeSection>

        {/* Cards — 2 cols on mobile, 4 on desktop */}
        <FadeSection delay={0.2}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px', marginBottom: '40px'
          }}>
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 60px #ff6b0030', borderColor: '#ff6b00' }}
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a, #111)',
                  borderRadius: '16px', padding: '24px 20px',
                  border: '1px solid #2a2a2a', cursor: 'default',
                  transition: 'all 0.3s ease'
                }}>
                <div style={{ marginBottom: '12px', color: '#ff6b00' }}>{card.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>{card.title}</h3>
                <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.7 }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeSection>

        {/* Stats — 2 cols on mobile, 4 on desktop */}
        <FadeSection delay={0.3}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px', marginBottom: '48px'
          }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, borderColor: '#ff6b00' }}
                style={{
                  textAlign: 'center', padding: '24px 16px',
                  background: 'linear-gradient(135deg, #1a1a1a, #111)',
                  borderRadius: '16px', border: '1px solid #2a2a2a',
                  transition: 'border-color 0.3s'
                }}>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#ff6b00', lineHeight: 1 }}>{stat.number}</div>
                <div style={{ fontSize: '11px', color: '#666', marginTop: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeSection>

        <FadeSection delay={0.4}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            style={{ textAlign: 'center' }}>
            <motion.a
              href="mailto:Khushi0101shah@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px #ff6b0060' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block', padding: '16px 40px',
                background: '#ff6b00', color: 'white',
                borderRadius: '8px', fontWeight: '700',
                fontSize: '15px', cursor: 'pointer', textDecoration: 'none'
              }}>
              Get In Touch
            </motion.a>
          </motion.div>
        </FadeSection>

      </div>

      <style>{`
        @media (min-width: 768px) {
          #about .cards-grid { grid-template-columns: repeat(4, 1fr) !important; }
          #about .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
