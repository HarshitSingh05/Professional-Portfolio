import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'featured'
      ? projects.filter((p) => p.featured)
      : filter === 'enterprise'
        ? projects.filter((p) => p.isConfidential)
        : projects.filter((p) => !p.isConfidential)

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-slate-900/30 dark:bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute left-1/3 top-1/4 w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Engineered for Scalability & Precision"
          subtitle="Explore selected SaaS products, enterprise audit platforms, and high-performance backend systems built with modern engineering standards."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects', icon: 'fa-solid fa-layer-group' },
            { id: 'featured', label: 'Featured Highlights', icon: 'fa-solid fa-star' },
            { id: 'enterprise', label: 'Enterprise SaaS', icon: 'fa-solid fa-building-user' },
            { id: 'opensource', label: 'Open Source / Full-Stack', icon: 'fa-solid fa-code-branch' }
          ].map((tab) => {
            const isActive = filter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-md shadow-purple-600/20 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <i className={`${tab.icon} text-xs`}></i>
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              index={index}
            />
          ))}
        </div>

        {/* Disclaimer / Note about enterprise confidentiality */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center text-xs text-slate-500 dark:text-slate-500 max-w-2xl mx-auto flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-shield-halved text-emerald-400"></i>
          <span>
            Enterprise systems reflect architecture delivered in production at Appfoster. Proprietary source code is kept confidential in adherence with company agreements.
          </span>
        </motion.div>

      </div>

      {/* Deep-Dive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-300 dark:border-slate-700 max-h-[90vh] overflow-y-auto z-10"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 transition-colors"
                aria-label="Close project modal"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {selectedProject.category}
                </span>
                {selectedProject.isConfidential ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    <i className="fa-solid fa-lock text-[10px]"></i>
                    Enterprise Production
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <i className="fa-solid fa-code-branch text-[10px]"></i>
                    Public Code
                  </span>
                )}
              </div>

              <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white pr-10">
                {selectedProject.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base font-medium text-purple-600 dark:text-purple-400">
                {selectedProject.tagline}
              </p>

              {/* Description */}
              <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{selectedProject.description}</p>
                {selectedProject.confidentialNotice && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-600 dark:text-amber-400 flex items-start gap-2.5">
                    <i className="fa-solid fa-circle-info text-sm mt-0.5 shrink-0"></i>
                    <span>{selectedProject.confidentialNotice}</span>
                  </div>
                )}
              </div>

              {/* Architecture & Engineering Scope */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Architecture &amp; Key Deliverables
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <i className="fa-solid fa-check text-[10px]"></i>
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Highlights */}
              {selectedProject.metrics && (
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                    Impact Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedProject.metrics.map((m) => (
                      <div key={m.label} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                        <div className="text-base sm:text-lg font-bold text-purple-600 dark:text-emerald-400">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  Close
                </button>

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-md shadow-purple-600/20"
                  >
                    <i className="fa-brands fa-github text-sm"></i>
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
