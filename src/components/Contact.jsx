import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import FadeSection from './FadeSection'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:Khushi0101shah@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0D%0A%0D%0AFrom: ${form.email}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const contactInfo = [
    { icon: <FiMail size={22} />, label: 'Email', value: 'Khushi0101shah@gmail.com', href: 'mailto:Khushi0101shah@gmail.com' },
    { icon: <FiLinkedin size={22} />, label: 'LinkedIn', value: 'khushi-shah-005816306', href: 'https://www.linkedin.com/in/khushi-shah-005816306/' },
    { icon: <FiGithub size={22} />, label: 'GitHub', value: 'Khushi01-tech', href: 'https://github.com/Khushi01-tech' },
  ]

  return (
    <section id="contact" style={{
      padding: '120px 48px', background: 'rgba(13,13,13,0.4)',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, #ff6b0008 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <FadeSection delay={0}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: '#ff6b00', fontSize: '13px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>Get In Touch</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', marginTop: '12px' }}>
              Contact <span style={{ color: '#ff6b00' }}>Me</span>
            </h2>
            <p style={{ color: '#666', fontSize: '16px', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi — my inbox is always open!
            </p>
          </motion.div>
        </FadeSection>

        {/* Grid */}
        <FadeSection delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>

            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '32px' }}>
                Let's work <span style={{ color: '#ff6b00' }}>together</span>
              </h3>
              <p style={{ color: '#666', lineHeight: 1.8, fontSize: '15px', marginBottom: '40px' }}>
                I'm actively looking for Software Developer roles and open to IT support positions. If you have an opportunity that matches my skills, I'd love to hear from you!
              </p>
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8, borderColor: '#ff6b00' }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '20px 24px', background: '#1a1a1a',
                    borderRadius: '14px', border: '1px solid #2a2a2a',
                    marginBottom: '12px', cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}>
                  <span style={{ fontSize: '24px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                    <div style={{ fontSize: '14px', color: '#ccc', fontWeight: '600', marginTop: '2px' }}>{item.value}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: '#ff6b00' }}>↗</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: '#555', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Your Name</label>
                  <input
                    type="text" required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: '100%', padding: '14px 18px',
                      background: '#1a1a1a', border: '1px solid #2a2a2a',
                      borderRadius: '10px', color: '#fff', fontSize: '14px',
                      outline: 'none', boxSizing: 'border-box',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={e => e.target.style.borderColor = '#ff6b00'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#555', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Your Email</label>
                  <input
                    type="email" required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: '100%', padding: '14px 18px',
                      background: '#1a1a1a', border: '1px solid #2a2a2a',
                      borderRadius: '10px', color: '#fff', fontSize: '14px',
                      outline: 'none', boxSizing: 'border-box',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={e => e.target.style.borderColor = '#ff6b00'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#555', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Message</label>
                  <textarea
                    required rows={6}
                    placeholder="Tell me about the opportunity..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%', padding: '14px 18px',
                      background: '#1a1a1a', border: '1px solid #2a2a2a',
                      borderRadius: '10px', color: '#fff', fontSize: '14px',
                      outline: 'none', boxSizing: 'border-box', resize: 'vertical',
                      fontFamily: 'inherit', transition: 'border-color 0.3s'
                    }}
                    onFocus={e => e.target.style.borderColor = '#ff6b00'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px #ff6b0060' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '16px', background: sent ? '#22c55e' : '#ff6b00',
                    color: 'white', border: 'none', borderRadius: '10px',
                    fontSize: '15px', fontWeight: '700', cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}>
                  {sent ? '✓ Message Sent!' : 'Send Message →'}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </FadeSection>

      </div>
    </section>
  )
}