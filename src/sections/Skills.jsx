import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/skills'

const filterTabs = [
  { id: 'all', label: 'All Technologies', icon: 'fa-solid fa-shapes' },
  { id: 'frontend', label: 'Frontend', icon: 'fa-solid fa-code' },
  { id: 'backend', label: 'Backend', icon: 'fa-solid fa-server' },
  { id: 'database', label: 'Database', icon: 'fa-solid fa-database' },
  { id: 'ai-tools', label: 'AI & Tools', icon: 'fa-solid fa-wand-magic-sparkles' }
]

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredCategories = selectedFilter === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedFilter)

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-1/4 top-1/2 w-96 h-96 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Battle-Tested Engineering Stack"
          subtitle="Specialized competencies in building reactive frontends, resilient backend systems, and high-concurrency databases."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 text-xl">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Engineering Philosophy: Reusable, Tested &amp; Scalable
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Every technology is chosen to deliver measurable business outcomes, zero security loopholes, and seamless maintainability.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 shrink-0 transition-colors"
          >
            <span>See Them in Action</span>
            <i className="fa-solid fa-arrow-down text-xs"></i>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
