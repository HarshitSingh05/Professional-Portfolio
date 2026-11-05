import React from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle({ theme, toggleTheme, className = '' }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
        isDark
          ? 'bg-slate-800/80 text-yellow-400 hover:bg-slate-700/80 hover:text-yellow-300 border border-slate-700/60'
          : 'bg-slate-100 text-purple-700 hover:bg-slate-200 hover:text-purple-900 border border-slate-300/80 shadow-sm'
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-5 h-5 flex items-center justify-center text-sm"
      >
        {isDark ? (
          <i className="fa-solid fa-sun text-amber-400 text-base"></i>
        ) : (
          <i className="fa-solid fa-moon text-purple-600 text-base"></i>
        )}
      </motion.div>
    </button>
  )
}
