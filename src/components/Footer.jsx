import React from 'react'
import { personalInfo } from '../data/personal'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-950/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Logo & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-emerald-500 p-[2px] shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-sm tracking-tighter bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                    HK
                  </span>
                </div>
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Full-Stack Developer crafting high-scale multi-tenant SaaS products, reactive interfaces, and sub-second APIs.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-200/70 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-300/60 dark:border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-sm"></i>
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-200/70 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-300/60 dark:border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-sm"></i>
            </a>

            <a
              href={personalInfo.contact.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-200/70 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 border border-slate-300/60 dark:border-slate-800 transition-colors"
              aria-label="LeetCode"
            >
              <i className="fa-solid fa-code text-xs"></i>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="ml-2 w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-sm hover:scale-105 active:scale-95 transition-all"
              aria-label="Back to top"
              title="Back to top"
            >
              <i className="fa-solid fa-arrow-up text-xs"></i>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Stack */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500 text-center sm:text-left">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <span>Engineered with React 19, Tailwind 4 &amp; Motion</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
