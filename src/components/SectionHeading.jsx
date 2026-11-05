import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/30"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {badge}
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-emerald-400 ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  )
}
