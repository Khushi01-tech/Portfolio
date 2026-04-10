import { motion } from 'framer-motion'

export function FadeUp({ children, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={style}>
      {children}
    </motion.div>
  )
}

export function SlideIn({ children, direction = 'left', delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={style}>
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, style = {} }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
      }}
      style={style}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, style = {} }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
      }}
      style={style}>
      {children}
    </motion.div>
  )
}