import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/personal'

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    const target = document.querySelector('#projects')
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
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.contact.availability}</span>
            </motion.div>

            {/* Name & Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {personalInfo.role}
              </p>
            </motion.div>

            {/* Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              "{personalInfo.tagline}"
            </motion.p>

            {/* Key Value Pill Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700/60">
                <i className="fa-solid fa-layer-group text-purple-400 mr-1.5"></i>
                Multi-Tenant HRMS
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700/60">
                <i className="fa-solid fa-bolt text-emerald-400 mr-1.5"></i>
                90% Query Optimization
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700/60">
                <i className="fa-solid fa-brain text-purple-400 mr-1.5"></i>
                Gemini LLM Integration
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>

              <a
                href="/resume.pdf"
                download="Harshit_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700/80 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto"
              >
                <i className="fa-solid fa-file-arrow-down text-purple-500 dark:text-purple-400"></i>
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Icons & Email Quick Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github text-base"></i>
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-base"></i>
                </a>

                <a
                  href={personalInfo.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 transition-all"
                  aria-label="LeetCode Profile"
                  title="LeetCode"
                >
                  <i className="fa-solid fa-code text-sm"></i>
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 transition-all"
                  aria-label="Send Email"
                  title="Email Harshit"
                >
                  <i className="fa-solid fa-envelope text-sm"></i>
                </a>
              </div>

              <span className="hidden sm:inline-block text-xs text-slate-400 dark:text-slate-500 font-mono ml-2">
                {personalInfo.contact.email}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code & Architecture Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-emerald-500 opacity-20 blur-xl"></div>

              {/* Terminal Card */}
              <div className="relative rounded-2xl glass-panel p-5 sm:p-6 shadow-2xl border border-slate-300/70 dark:border-slate-800/90 overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500">
                    <i className="fa-solid fa-terminal text-[10px]"></i>
                    <span>harshit.dev.config.js</span>
                  </div>
                  <div className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">
                    Active
                  </div>
                </div>

                {/* Code Body */}
                <div className="pt-4 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 dark:text-slate-300 overflow-x-auto">
                  <div className="text-slate-400 dark:text-slate-500 italic">// Full-Stack Architecture Profile</div>
                  
                  <div className="mt-2">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-emerald-400">developer</span>{' '}
                    <span className="text-slate-400">=</span> {'{'}
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-amber-300">'{personalInfo.name}'</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-amber-300">'Full Stack Developer'</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">frontend:</span> [
                    <span className="text-emerald-300">'Vue 3'</span>,{' '}
                    <span className="text-emerald-300">'Nuxt 3'</span>,{' '}
                    <span className="text-emerald-300">'React'</span>],
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">backend:</span> [
                    <span className="text-purple-300">'Laravel'</span>,{' '}
                    <span className="text-purple-300">'JSON:API'</span>,{' '}
                    <span className="text-purple-300">'Spring Boot'</span>],
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">databases:</span> [
                    <span className="text-sky-300">'MySQL'</span>,{' '}
                    <span className="text-sky-300">'MariaDB'</span>],
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">aiIntegration:</span>{' '}
                    <span className="text-emerald-300">'Gemini API &amp; LLM Templating'</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">impact:</span> {'{'}
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">queryOptimization:</span>{' '}
                    <span className="text-emerald-400 font-bold">'90% faster'</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">dataCompleteness:</span>{' '}
                    <span className="text-emerald-400 font-bold">'Org-wide automated'</span>
                  </div>
                  <div className="pl-4">{'}'}</div>

                  <div>{'}'};</div>
                </div>

                {/* Floating Interactive Badges inside the card */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm">
                      <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Multi-Tenant</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Data Scoped</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm">
                      <i className="fa-solid fa-gauge-high"></i>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Performance</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Sub-second APIs</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
