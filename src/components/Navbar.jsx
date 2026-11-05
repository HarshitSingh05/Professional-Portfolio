import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '#home', icon: 'fa-solid fa-house' },
  { name: 'About', href: '#about', icon: 'fa-solid fa-user' },
  { name: 'Experience', href: '#experience', icon: 'fa-solid fa-briefcase' },
  { name: 'Skills', href: '#skills', icon: 'fa-solid fa-code' },
  { name: 'Projects', href: '#projects', icon: 'fa-solid fa-diagram-project' },
  { name: 'Contact', href: '#contact', icon: 'fa-solid fa-envelope' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll detection and active section spying
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const topOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Harshit Kumar Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-emerald-500 p-[2px] shadow-md shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 dark:bg-slate-950 light:bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-base tracking-tighter bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  HK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                Harshit Kumar
              </span>
              <span className="text-[11px] tracking-wide text-slate-500 dark:text-slate-400 -mt-1 font-mono">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-200/50 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-300/60 dark:border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-emerald-500 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              )
            })}
          </nav>

          {/* Actions: Theme Toggle & Resume / Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-md shadow-purple-600/20 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Let's Talk</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          {/* Mobile Menu Hamburger & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 glass-panel border-b border-slate-200 dark:border-slate-800 p-6 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '')
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold border border-purple-500/20'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <i className={`${link.icon} w-5 text-center text-slate-400 dark:text-slate-500`}></i>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      )}
                    </a>
                  )
                })}

                <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-md shadow-purple-600/30"
                  >
                    <span>Get in Touch</span>
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Harshit_Kumar_Resume.pdf"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-medium text-sm border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  >
                    <i className="fa-solid fa-file-arrow-down text-purple-400"></i>
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
