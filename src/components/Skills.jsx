import { motion } from 'framer-motion'
import { SiPython, SiReact, SiJavascript, SiFlask, SiHtml5, SiCplusplus, SiSqlite, SiGit } from 'react-icons/si'
import { FiCpu, FiUsers, FiMessageSquare, FiRefreshCw, FiClock, FiStar } from 'react-icons/fi'
import FadeSection from './FadeSection'

export default function Skills() {
    const technical = [
        { name: 'Python', level: 85, icon: <SiPython /> },
        { name: 'React', level: 80, icon: <SiReact /> },
        { name: 'JavaScript', level: 75, icon: <SiJavascript /> },
        { name: 'Flask', level: 78, icon: <SiFlask /> },
        { name: 'HTML & CSS', level: 85, icon: <SiHtml5 /> },
        { name: 'C++', level: 70, icon: <SiCplusplus /> },
        { name: 'SQL & SQLite', level: 72, icon: <SiSqlite /> },
        { name: 'Git & GitHub', level: 80, icon: <SiGit /> },
      ]

      const soft = [
        { name: 'Problem Solving', icon: <FiCpu size={28} /> },
        { name: 'Leadership', icon: <FiStar size={28} /> },
        { name: 'Teamwork', icon: <FiUsers size={28} /> },
        { name: 'Communication', icon: <FiMessageSquare size={28} /> },
        { name: 'Adaptability', icon: <FiRefreshCw size={28} /> },
        { name: 'Time Management', icon: <FiClock size={28} /> },
      ]

  const tools = [
    'VS Code', 'GitHub', 'Netlify', 'Render',
    'Linux', 'WordPress', 'REST APIs', 'Vite'
  ]

  return (
    <section id="skills" style={{
      padding: '120px 48px', background: 'rgba(10,10,10,0.3)', position: 'relative', overflow: 'hidden'
    }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(#ff6b00 1px, transparent 1px), linear-gradient(90deg, #ff6b00 1px, transparent 1px)',
        backgroundSize: '60px 60px', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <FadeSection delay={0}></FadeSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: '#ff6b00', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>What I Know</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginTop: '12px' }}>
            My <span style={{ color: '#ff6b00' }}>Skills</span>
          </h2>
        </motion.div>

        {/* Technical Skills */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          style={{ fontSize: '20px', fontWeight: '700', marginBottom: '32px', color: '#fff' }}>
          Technical Skills
        </motion.h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '80px' }}>
          {technical.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: '#1a1a1a', borderRadius: '14px',
                padding: '20px 24px', border: '1px solid #2a2a2a'
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {skill.icon}
                  <span style={{ fontWeight: '600', fontSize: '14px' }}>{skill.name}</span>
                </div>
                <span style={{ color: '#ff6b00', fontWeight: '700', fontSize: '14px' }}>{skill.level}%</span>
              </div>
              <div style={{ background: '#2a2a2a', borderRadius: '99px', height: '6px' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                  style={{
                    height: '6px', borderRadius: '99px',
                    background: 'linear-gradient(90deg, #ff6b00, #ff9500)',
                    boxShadow: '0 0 10px #ff6b0060'
                  }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          style={{ fontSize: '20px', fontWeight: '700', marginBottom: '32px', color: '#fff' }}>
          Soft Skills
        </motion.h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', marginBottom: '80px' }}>
  {soft.map((skill, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: i * 0.08, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ y: -8, borderColor: '#ff6b00', boxShadow: '0 10px 40px #ff6b0030' }}
      style={{
        background: '#1a1a1a', borderRadius: '14px',
        padding: '24px 16px', border: '1px solid #2a2a2a',
        textAlign: 'center', cursor: 'default', transition: 'all 0.3s'
      }}>
      <div style={{ marginBottom: '10px', color: '#ff6b00' }}>{skill.icon}</div>
      <div style={{ fontSize: '12px', fontWeight: '600', color: '#ccc' }}>{skill.name}</div>
    </motion.div>
  ))}
</div>

        {/* Tools */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          style={{ fontSize: '20px', fontWeight: '700', marginBottom: '32px', color: '#fff' }}>
          Tools & Platforms
        </motion.h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.05, type: 'spring' }}
              whileHover={{ scale: 1.1, background: '#ff6b00', color: 'white' }}
              style={{
                padding: '10px 20px', background: '#1a1a1a',
                borderRadius: '99px', border: '1px solid #ff6b0040',
                fontSize: '13px', fontWeight: '600', color: '#ff6b00',
                cursor: 'default', transition: 'all 0.3s'
              }}>
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}