import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 to-emerald-500 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 border border-white/20"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <i className="fa-solid fa-arrow-up text-sm"></i>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
