import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react'
import GlassButton from './ui/GlassButton'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4"
    >
      <div
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-glass'
            : 'bg-white/[0.02] backdrop-blur-md border border-white/5'
        }`}
      >
        <nav className="flex items-center justify-between px-4 sm:px-5 py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-aurora shadow-glow-blue">
              <Sparkles className="h-4 w-4 text-white" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              Prepwise
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-3.5 py-2 text-sm font-medium text-ink-muted rounded-full hover:text-ink hover:bg-white/[0.06] transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-ink-muted hover:text-ink transition-colors px-3 py-2">
              Log in
            </button>
            <GlassButton size="sm" icon={<ArrowRight className="h-3.5 w-3.5" />}>
              Get Started
            </GlassButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg glass text-ink"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-3 py-2.5 text-sm font-medium text-ink-muted rounded-lg hover:text-ink hover:bg-white/[0.06] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-white/10">
                  <button className="text-left px-3 py-2.5 text-sm font-medium text-ink-muted hover:text-ink transition-colors">
                    Log in
                  </button>
                  <GlassButton size="sm" className="w-full" icon={<ArrowRight className="h-3.5 w-3.5" />}>
                    Get Started
                  </GlassButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
