import React from 'react'
import { motion } from 'framer-motion'

export default function SkillCard({ category, index }) {
  const isPurple = category.accent === 'purple'

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800/80 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110 ${
              isPurple
                ? 'bg-purple-500/10 text-purple-500 dark:text-purple-400 border border-purple-500/20'
                : 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20'
            }`}
          >
            <i className={category.icon}></i>
          </div>

          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
              {category.title}
            </h3>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              {category.skills.length} core technologies
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          {category.description}
        </p>

        {/* Skill Pills Grid */}
        <div className="flex flex-wrap gap-2.5">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-200"
            >
              <i className={`${skill.icon} text-sm`} style={{ color: skill.color }}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Bottom Accent Indicator */}
      <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Production Verified</span>
        <i className="fa-solid fa-circle-check text-emerald-400"></i>
      </div>
    </motion.div>
  )
}
