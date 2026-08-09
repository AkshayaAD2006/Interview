import { motion } from 'framer-motion'
import { Sparkles, Twitter, Linkedin, Github, Youtube } from 'lucide-react'
import { fadeUp, viewportOnce } from '../lib/animations'

const FOOTER_LINKS = {
  Product: ['Features', 'Workflow', 'Pricing', 'Dashboard'],
  Company: ['About', 'Careers', 'Blog', 'Contact'],
  Resources: ['Question Bank', 'Interview Guides', 'Help Center', 'API'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security'],
}

const SOCIALS = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'GitHub' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 pt-20 pb-10 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-6xl flex flex-col gap-14"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-aurora shadow-glow-blue">
                <Sparkles className="h-4 w-4 text-white" strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                Prepwise
              </span>
            </a>
            <p className="text-sm text-ink-faint leading-relaxed max-w-xs">
              AI-powered interview preparation that turns your resume into a personalized path to
              the offer.
            </p>
            <div className="flex items-center gap-2 mt-1">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass text-ink-muted hover:text-ink hover:bg-white/[0.08] transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-ink-faint">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Prepwise. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint font-mono">Built for people who prep on purpose.</p>
        </div>
      </motion.div>
    </footer>
  )
}
