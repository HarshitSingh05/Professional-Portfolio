import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden bg-slate-900/30 dark:bg-slate-950/40">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work Experience"
          title="Professional Journey & Engineering Impact"
          subtitle="Real-world experience delivering mission-critical multi-tenant SaaS features, robust APIs, and high-performance database architectures."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting gradient line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 via-purple-600 to-emerald-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start"
              >
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex shrink-0 items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-purple-500/30 text-purple-400 shadow-lg shadow-purple-900/20 z-10">
                  <i className={`fa-solid ${exp.id === 'appfoster' ? 'fa-building-user' : 'fa-server'} text-xl`}></i>
                </div>

                {/* Experience Content Card */}
                <div className="flex-1 w-full glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative group hover:border-purple-500/30 transition-all duration-300">
                  
                  {/* Top Bar: Role, Company & Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                          {exp.badge}
                        </span>
                      </div>
                      <div className="text-base font-semibold text-purple-600 dark:text-purple-400 mt-1 flex items-center gap-2">
                        <span>{exp.company}</span>
                        <span className="text-slate-400 text-xs">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                          <i className="fa-solid fa-location-dot mr-1"></i>
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 self-start sm:self-auto">
                      <i className="fa-regular fa-calendar-check text-emerald-500"></i>
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {exp.summary}
                  </p>

                  {/* Key Contributions & Achievements */}
                  <div className="mt-5 space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Contributions &amp; Engineering Scope:
                    </h4>
                    <ul className="space-y-2">
                      {exp.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Stack Pills */}
                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1">
                      Tech:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
