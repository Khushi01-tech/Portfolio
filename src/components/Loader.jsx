import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 400)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed', inset: 0, background: '#0a0a0a',
            zIndex: 9999, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '32px'
          }}>
          {/* Logo */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '48px', fontWeight: '900' }}>
            <span style={{ color: '#fff' }}>K</span>
            <span style={{ color: '#ff6b00' }}>.</span>
          </motion.div>

          {/* Progress bar */}
          <div style={{ width: '200px', height: '2px', background: '#1a1a1a', borderRadius: '99px' }}>
            <motion.div
              style={{
                height: '2px', background: '#ff6b00',
                borderRadius: '99px', width: `${progress}%`,
                boxShadow: '0 0 10px #ff6b00'
              }} />
          </div>

          {/* Progress number */}
          <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#444', letterSpacing: '2px' }}>
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}