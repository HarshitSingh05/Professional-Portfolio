import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionHeading from '../components/SectionHeading'
import { personalInfo } from '../data/personal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    usedFallback: false
  })

  const validate = () => {
    const errs = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (min 2 characters)'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address'
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please provide a subject (min 3 characters)'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message (min 10 characters)'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hi Harshit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    )}`

    window.location.href = mailtoUrl
    setStatus({
      submitting: false,
      success: true,
      error: null,
      usedFallback: true
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus({ submitting: true, success: false, error: null, usedFallback: false })

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
      setTimeout(() => {
        triggerMailtoFallback()
      }, 400)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.contact.email
        },
        publicKey
      )

      setStatus({
        submitting: false,
        success: true,
        error: null,
        usedFallback: false
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.warn('EmailJS error, falling back to mailto:', err)
      triggerMailtoFallback()
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Impactful Together"
          subtitle="Whether you have an engineering role, a software project, or a technical discussion in mind, I'd love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Reach out via the form, email me directly, or connect on professional networks. I typically respond within 24 hours.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-envelope text-base"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Email Address</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-200 truncate">
                      {personalInfo.contact.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-phone text-base"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Direct Phone</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-200 truncate">
                      {personalInfo.contact.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot text-base"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-200">
                      {personalInfo.contact.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Channels */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                  Professional Channels:
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                  >
                    <i className="fa-brands fa-github text-sm"></i>
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                  >
                    <i className="fa-brands fa-linkedin-in text-sm text-blue-600 dark:text-blue-400"></i>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.contact.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                  >
                    <i className="fa-solid fa-code text-xs text-amber-500"></i>
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the details below. If mail server credentials are in demo mode, your message will safely launch in your default email client.
              </p>

              {/* Success Notification */}
              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-base mt-0.5 shrink-0"></i>
                  <div>
                    <div className="font-bold">
                      {status.usedFallback ? 'Mail Client Opened!' : 'Message Dispatched Successfully!'}
                    </div>
                    <div className="mt-0.5 opacity-90 font-medium">
                      {status.usedFallback
                        ? 'Your message was pre-filled in your default email client for instant dispatch.'
                        : 'Thank you for reaching out, Harshit will get back to you shortly.'}
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white placeholder-slate-400 border focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-300 dark:border-slate-800 focus:border-purple-500 focus:ring-purple-500/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <i className="fa-solid fa-circle-exclamation text-[10px]"></i>
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white placeholder-slate-400 border focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-slate-300 dark:border-slate-800 focus:border-purple-500 focus:ring-purple-500/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <i className="fa-solid fa-circle-exclamation text-[10px]"></i>
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full Stack Opportunity / Technical Inquiry"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white placeholder-slate-400 border focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-slate-300 dark:border-slate-800 focus:border-purple-500 focus:ring-purple-500/30'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <i className="fa-solid fa-circle-exclamation text-[10px]"></i>
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Harshit, I came across your portfolio and would like to discuss..."
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white placeholder-slate-400 border focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-slate-300 dark:border-slate-800 focus:border-purple-500 focus:ring-purple-500/30'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <i className="fa-solid fa-circle-exclamation text-[10px]"></i>
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {status.submitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin text-sm"></i>
                        <span>Dispatching Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="fa-solid fa-paper-plane text-xs"></i>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
