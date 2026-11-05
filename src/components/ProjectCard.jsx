import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, onSelect, index }) {
  const isPurple = project.accent === 'purple'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800/80 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group relative"
    >
      <div>
        {/* Top Header: Category & Privacy/Featured Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                isPurple
                  ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                  : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
              }`}
            >
              {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <i className="fa-solid fa-star text-[10px]"></i>
                Featured
              </span>
            )}
          </div>

          {project.isConfidential ? (
            <span
              title="Enterprise Production Codebase (Proprietary)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60"
            >
              <i className="fa-solid fa-lock text-[10px] text-amber-400"></i>
              <span>Enterprise</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <i className="fa-solid fa-code-branch text-[10px]"></i>
              <span>Open Source</span>
            </span>
          )}
        </div>

        {/* Project Title & Icon */}
        <div className="flex items-start gap-3.5 mb-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0 mt-0.5 ${
              isPurple
                ? 'bg-purple-500/10 text-purple-500 dark:text-purple-400'
                : 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400'
            }`}
          >
            <i className={project.icon}></i>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors leading-snug">
            {project.title}
          </h3>
        </div>

        {/* Tagline / Subtitle */}
        <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlight Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-5 p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-xs sm:text-sm font-bold text-purple-600 dark:text-emerald-400">
                  {metric.value}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Key Features Bullet List */}
        <div className="space-y-1.5 mb-5">
          {project.features.slice(0, 3).map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
              <i className="fa-solid fa-check text-emerald-400 text-[10px] mt-1 shrink-0"></i>
              <span className="line-clamp-2">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800/80 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-sm hover:shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            <span>View Architecture</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </button>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors shrink-0"
              title="View Repository"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <i className="fa-brands fa-github text-sm"></i>
            </a>
          ) : (
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100/60 dark:bg-slate-900/40 text-slate-400 border border-slate-200/60 dark:border-slate-800/60 shrink-0 cursor-not-allowed"
              title="Enterprise Production Codebase (Proprietary - Not Publicly Hosted)"
            >
              <i className="fa-solid fa-lock text-xs text-amber-400"></i>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
