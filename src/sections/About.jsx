import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { personalInfo } from '../data/personal'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background subtle decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering Scalable Systems with Purpose"
          subtitle="A passionate full-stack developer bridging modern frontend ecosystems with robust backend architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl relative border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Full-Stack Developer with Real Production Impact
              </h3>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {personalInfo.about.lead}
                </p>
                {personalInfo.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Core Strengths Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-layer-group text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Multi-Tenant Engineering</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Tenant-scoped validation, data isolation, and operations dashboard management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-bolt text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Performance Optimization</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Streamlining complex database queries and APIs, achieving 90% latency cuts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-code-compare text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Frontend &amp; Backend Balance</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Seamless integration between Vue 3 / Nuxt 3 / React and Laravel / Spring Boot.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-brain text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">AI &amp; LLM Integration</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      Prompt engineering with Google Gemini API for multilingual automated generation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-panel p-4 rounded-xl text-center border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-emerald-500 dark:from-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-400 mt-1 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <i className="fa-solid fa-graduation-cap text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Education</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Academic Background</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {personalInfo.education.degree}
                  </h4>
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    CGPA: {personalInfo.education.cgpa}
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-700 dark:text-slate-400 mt-1">
                  {personalInfo.education.institution}
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
                  <span>
                    <i className="fa-solid fa-calendar-days mr-1.5 text-purple-600 dark:text-purple-400"></i>
                    {personalInfo.education.period}
                  </span>
                  <span>
                    <i className="fa-solid fa-location-dot mr-1.5 text-emerald-600 dark:text-emerald-400"></i>
                    {personalInfo.education.location}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <i className="fa-solid fa-certificate text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Certifications</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Professional Credentials</p>
                </div>
              </div>

              <div className="space-y-3">
                {personalInfo.certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                      <i className={`${cert.icon} text-sm`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {cert.name}
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 shrink-0 font-medium">
                      {cert.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
