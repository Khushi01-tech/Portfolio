import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'FinTrackr',
      desc: 'A full-stack personal finance tracker with real-time transaction tracking, budget alerts, and data visualizations. Built with React and Python Flask.',
      tags: ['React', 'Python', 'Flask', 'SQLite', 'Recharts'],
      live: 'https://myfintrackr.netlify.app',
      github: 'https://github.com/Khushi01-tech/budget-buddy',
      number: '01'
    },
    {
      title: 'Code Reviewer Recommendation System',
      desc: 'An automated system that recommends pull-request reviewers by analysing Git commit history, file ownership and past review patterns.',
      tags: ['Python', 'Git', 'Algorithms'],
      live: null,
      github: 'https://github.com/Khushi01-tech',
      number: '02'
    },
    {
      title: 'Service Desk Ticketing System',
      desc: 'A full ITSM incident management workflow with ticket creation, prioritization, SLA-based escalation logic and resolution tracking.',
      tags: ['Python', 'ITSM', 'Automation'],
      live: null,
      github: null,
      number: '03'
    },
    {
      title: 'Text-Based Adventure Game',
      desc: 'An interactive CLI adventure game with branching narrative paths, input validation, and multiple outcomes built with core CS concepts.',
      tags: ['Python', 'CLI', 'Data Structures'],
      live: null,
      github: null,
      number: '04'
    },
  ]

  return (
    <section id="projects" style={{
      padding: '120px 48px', background: '#0d0d0d',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: '30%', right: '0',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, #ff6b0008 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: '#ff6b00', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>What I've Built</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginTop: '12px' }}>
            My <span style={{ color: '#ff6b00' }}>Projects</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ x: 8, borderColor: '#ff6b00', boxShadow: '0 20px 60px #ff6b0015' }}
              style={{
                background: 'linear-gradient(135deg, #1a1a1a, #111)',
                borderRadius: '20px', padding: '40px',
                border: '1px solid #2a2a2a',
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', gap: '40px',
                transition: 'all 0.3s ease', cursor: 'default'
              }}>
              {/* Left */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '800', color: '#ff6b0020', lineHeight: 1 }}>{project.number}</span>
                  <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff' }}>{project.title}</h3>
                </div>
                <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.8, marginBottom: '20px', maxWidth: '600px' }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag, j) => (
                    <span key={j} style={{
                      padding: '4px 12px', background: '#ff6b0015',
                      color: '#ff6b00', borderRadius: '99px',
                      fontSize: '12px', fontWeight: '600',
                      border: '1px solid #ff6b0030'
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right - Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '140px' }}>
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px #ff6b0060' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '12px 24px', background: '#ff6b00',
                      color: 'white', borderRadius: '10px',
                      fontWeight: '700', fontSize: '13px',
                      textAlign: 'center', cursor: 'pointer',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center', gap: '8px'
                    }}>
                    <FiExternalLink /> Live Demo
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.05, borderColor: '#ff6b00', color: '#ff6b00' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '12px 24px', background: 'transparent',
                      color: '#666', border: '1px solid #2a2a2a',
                      borderRadius: '10px', fontWeight: '700',
                      fontSize: '13px', textAlign: 'center',
                      cursor: 'pointer', transition: 'all 0.3s',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center', gap: '8px'
                    }}>
                    <FiGithub /> GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}