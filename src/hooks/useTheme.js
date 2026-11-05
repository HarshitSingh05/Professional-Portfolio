import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('hk_portfolio_theme')
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme
      }
      // System preference check; default to dark
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light'
      }
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('hk_portfolio_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  }
}
