import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import FadeSection from './FadeSection'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

export default function Projects() {
  const projects = [
    { title: 'FinTrackr', desc: 'A full-stack personal finance tracker with real-time transaction tracking, budget alerts, and data visualizations. Built with React and Python Flask.', tags: ['React', 'Python', 'Flask', 'SQLite', 'Recharts'], live: 'https://myfintrackr.netlify.app', github: 'https://github.com/Khushi01-tech/budget-buddy', number: '01' },
    { title: 'Code Reviewer Recommendation System', desc: 'An automated system that recommends pull-request reviewers by analysing Git commit history, file ownership and past review patterns.', tags: ['Python', 'Git', 'Algorithms'], live: null, github: 'https://github.com/Khushi01-tech/RSSE', number: '02' },
    { title: 'Service Desk Ticketing System', desc: 'A full ITSM incident management workflow with ticket creation, prioritization, SLA-based escalation logic and resolution tracking.', tags: ['Python', 'ITSM', 'Automation'], live: null, github: null, number: '03' },
    { title: 'Text-Based Adventure Game', desc: 'An interactive CLI adventure game with branching narrative paths, input validation, and multiple outcomes built with core CS concepts.', tags: ['Python', 'CLI', 'Data Structures'], live: null, github: null, number: '04' },
  ]

  return (
    <section id="projects" style={{ padding: isMobile ? '80px 20px' : '120px 48px', background: 'rgba(13,13,13,0.4)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '30%', right: '0', width: '500px', height: '500px', background: 'radial-gradient(circle, #ff6b0008 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <FadeSection delay={0}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: '#ff6b00', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>What I've Built</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginTop: '12px' }}>My <span style={{ color: '#ff6b00' }}>Projects</span></h2>
          </motion.div>
        </FadeSection>
        <FadeSection delay={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {projects.map((project, i) => (
              <div key={i}
                style={{ background: 'linear-gradient(135deg, #1a1a1a, #111)', borderRadius: '20px', padding: isMobile ? '24px 20px' : '40px', border: '1px solid #2a2a2a', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '20px' : '40px', cursor: 'default', transition: 'border-color 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff6b00'; e.currentTarget.style.boxShadow = '0 30px 80px #ff6b0025' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: '800', color: '#ff6b0030', lineHeight: 1 }}>{project.number}</span>
                    <h3 style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: '700', color: '#fff' }}>{project.title}</h3>
                  </div>
                  <p style={{ color: '#777', fontSize: '14px', lineHeight: 1.8, marginBottom: '16px' }}>{project.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tags.map((tag, j) => (
                      <span key={j} style={{ padding: '4px 12px', background: '#ff6b0015', color: '#ff6b00', borderRadius: '99px', fontSize: '12px', fontWeight: '600', border: '1px solid #ff6b0030' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                {(project.live || project.github) && (
                  <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: '10px', width: isMobile ? '100%' : 'auto', minWidth: isMobile ? 'unset' : '140px' }}>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        style={{ padding: '12px 20px', background: '#ff6b00', color: 'white', borderRadius: '10px', fontWeight: '700', fontSize: '13px', textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', textDecoration: 'none', flex: isMobile ? 1 : 'unset' }}>
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        style={{ padding: '12px 20px', background: 'transparent', color: '#888', border: '1px solid #333', borderRadius: '10px', fontWeight: '700', fontSize: '13px', textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', textDecoration: 'none', flex: isMobile ? 1 : 'unset', transition: 'all 0.3s' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff6b00'; e.currentTarget.style.color = '#ff6b00' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#888' }}>
                        <FiGithub /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  )
}