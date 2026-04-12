import { motion } from 'framer-motion'
import FadeSection from './FadeSection'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

export default function Experience() {
  const experiences = [
    {
      role: 'Front-End Specialist',
      company: 'Save-On-Foods',
      location: 'Lethbridge, Alberta',
      date: 'April 2023 – Present',
      type: 'Part Time',
      points: [
        'Assisted customers with self-checkout processes and resolved POS terminal malfunctions, reducing wait times during peak hours.',
        'Provided technical support for login issues including forgotten passwords, locked accounts, and credential resets on customer mobile devices.',
        'Identified recurring hardware and software faults at checkout stations and created detailed support tickets for escalation.',
        'Communicated technical solutions in simple, clear language to customers of all ages and technical backgrounds.',
      ]
    },
    {
      role: 'IT Support Technician',
      company: 'KP Computers',
      location: 'India',
      date: '2020 – 2021',
      type: 'Full Time',
      points: [
        'Diagnosed and resolved hardware and software issues for walk-in clients including login failures and OS errors.',
        'Performed hardware repairs involving RAM replacement, storage upgrades, and peripheral device configuration.',
        'Installed, configured, and updated software applications and operating systems on customer devices.',
        'Maintained records of recurring device issues and repair outcomes to identify patterns and improve efficiency.',
      ]
    },
    {
      role: 'Camp Leader',
      company: 'Camping Association',
      location: 'India',
      date: '2021 – 2023',
      type: 'Volunteer',
      points: [
        'Led annual camping expeditions for groups of 20+ participants across multiple years.',
        'Coordinated logistics, safety planning, and team activities for multi-day outdoor events.',
        'Developed strong leadership, communication, and crisis management skills.',
        'Mentored junior campers and helped build a culture of teamwork and resilience.',
      ]
    },
  ]

  return (
    <section id="experience" style={{
      padding: '80px 24px', background: 'rgba(10,10,10,0.3)',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: '20%', left: '0',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, #ff6b0008 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        <FadeSection delay={0}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#ff6b00', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>Where I've Worked</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginTop: '12px' }}>
              My <span style={{ color: '#ff6b00' }}>Experience</span>
            </h2>
          </motion.div>
        </FadeSection>

        <FadeSection delay={0.1}>
          {/* Mobile: single column, Desktop: timeline */}
          <div className="experience-container" style={{ position: 'relative' }}>

            {/* Timeline line — hidden on mobile via CSS */}
            <div className="timeline-line" style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: '2px', background: 'linear-gradient(to bottom, #ff6b00, #ff6b0020)',
              transform: 'translateX(-50%)'
            }} />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="experience-item"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '32px',
                  position: 'relative'
                }}>

                {/* Timeline dot — hidden on mobile */}
                <motion.div
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
                  style={{
                    position: 'absolute', left: '50%', top: '24px',
                    width: '16px', height: '16px',
                    background: '#ff6b00', borderRadius: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 20px #ff6b0080',
                    zIndex: 1
                  }} />

                {/* Card — full width on mobile */}
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 60px #ff6b0020', borderColor: '#ff6b0050' }}
                  className="experience-card"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #1a1a1a, #111)',
                    borderRadius: '20px', padding: '24px',
                    border: '1px solid #2a2a2a',
                    transition: 'all 0.3s ease'
                  }}>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                      <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#fff' }}>{exp.role}</h3>
                      <span style={{
                        padding: '3px 10px', background: '#ff6b0020',
                        color: '#ff6b00', borderRadius: '99px',
                        fontSize: '11px', fontWeight: '700', whiteSpace: 'nowrap'
                      }}>{exp.type}</span>
                    </div>
                    <div style={{ color: '#ff6b00', fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>
                      {exp.company} · {exp.location}
                    </div>
                    <div style={{ color: '#555', fontSize: '13px' }}>{exp.date}</div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex', gap: '10px',
                          color: '#777', fontSize: '13px',
                          lineHeight: 1.7, marginBottom: '10px'
                        }}>
                        <span style={{ color: '#ff6b00', marginTop: '4px', flexShrink: 0 }}>▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </FadeSection>

      </div>

      <style>{`
        .timeline-line { display: none; }
        .timeline-dot { display: none; }
        .experience-card { width: 100% !important; }

        @media (min-width: 768px) {
          .timeline-line { display: block; }
          .timeline-dot { display: block; }
          .experience-item { justify-content: flex-start !important; }
          .experience-item:nth-child(even) { justify-content: flex-end !important; }
          .experience-card { width: 45% !important; }
          #experience { padding: 120px 48px; }
        }
      `}</style>
    </section>
  )
}
