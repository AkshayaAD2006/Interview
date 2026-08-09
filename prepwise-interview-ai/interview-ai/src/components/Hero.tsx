import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, FileText, Brain, TrendingUp, Mic } from 'lucide-react'
import GlassButton from './ui/GlassButton'
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from '../lib/animations'

const STATS = [
  { value: '48K+', label: 'Mock interviews run' },
  { value: '92%', label: 'Offer rate lift' },
  { value: '3.4x', label: 'Faster prep cycle' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 px-4 sm:px-6 overflow-hidden"
    >
      {/* ambient grid + glow background */}
      <div className="absolute inset-0 bg-grid mask-fade-b pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-accent-indigo/20 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center gap-7"
        >
          <motion.span variants={fadeUp} className="section-eyebrow">
            <Brain className="h-3.5 w-3.5" />
            Multi-agent interview intelligence
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl text-balance"
          >
            Ace Your Next{' '}
            <span className="text-gradient-animated">Technical Interview</span>{' '}
            with AI
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-ink-muted text-base sm:text-lg max-w-2xl leading-relaxed text-balance"
          >
            Prepwise reads your resume, finds the gaps between you and the role, and drops you
            into realistic mock interviews with an AI panel that scores you like a real hiring
            team — so the real interview feels like a rerun.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <GlassButton size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Start Free Practice
            </GlassButton>
            <GlassButton size="lg" variant="secondary" icon={<PlayCircle className="h-4 w-4" />}>
              Watch Demo
            </GlassButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display text-2xl font-semibold text-ink">{stat.value}</span>
                <span className="text-xs text-ink-faint font-mono uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* AI dashboard illustration */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="relative mt-20 sm:mt-24"
        >
          <ReadinessConsole />
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Signature hero visual: a "Neural Readiness Console" — a central live
 * readiness dial orbited by AI agent nodes, with floating glass cards
 * reporting live metrics. Built entirely with HTML/CSS/SVG.
 */
function ReadinessConsole() {
  return (
    <div className="relative mx-auto max-w-3xl aspect-[16/11] sm:aspect-[16/9]">
      {/* connecting orbit lines */}
      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 h-full w-full pointer-events-none"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4d7bff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M400 250 L120 110"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
        />
        <motion.path
          d="M400 250 L680 110"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8, ease: 'easeOut' }}
        />
        <motion.path
          d="M400 250 L130 380"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1, ease: 'easeOut' }}
        />
        <motion.path
          d="M400 250 L670 390"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: 'easeOut' }}
        />
      </svg>

      {/* central readiness dial */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative flex h-40 w-40 sm:h-52 sm:w-52 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-accent-indigo/25 blur-3xl animate-pulse-soft" />
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
            <circle cx="100" cy="100" r="88" stroke="rgba(255,255,255,0.08)" strokeWidth="10" fill="none" />
            <motion.circle
              cx="100"
              cy="100"
              r="88"
              stroke="url(#lineGrad)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 88}
              initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - 0.87) }}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
          <div className="glass-panel h-28 w-28 sm:h-36 sm:w-36 rounded-full flex flex-col items-center justify-center gap-0.5">
            <span className="font-display text-3xl sm:text-4xl font-semibold text-ink">87</span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-ink-faint">
              Ready score
            </span>
          </div>
        </div>
      </div>

      {/* orbiting agent nodes */}
      <OrbitNode
        className="left-[8%] top-[16%]"
        delay={0.1}
        anim="animate-float-slow"
        icon={<FileText className="h-3.5 w-3.5 text-accent-blue" />}
        label="Resume Agent"
      />
      <OrbitNode
        className="right-[6%] top-[14%]"
        delay={0.25}
        anim="animate-float"
        icon={<Brain className="h-3.5 w-3.5 text-accent-indigo" />}
        label="Analyst Agent"
      />
      <OrbitNode
        className="left-[10%] bottom-[10%]"
        delay={0.4}
        anim="animate-float-delayed"
        icon={<Mic className="h-3.5 w-3.5 text-accent-purple" />}
        label="Interviewer Agent"
      />
      <OrbitNode
        className="right-[8%] bottom-[8%]"
        delay={0.55}
        anim="animate-float-slow"
        icon={<TrendingUp className="h-3.5 w-3.5 text-accent-blue" />}
        label="Coach Agent"
      />
    </div>
  )
}

function OrbitNode({
  className,
  delay,
  anim,
  icon,
  label,
}: {
  className: string
  delay: number
  anim: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={viewportOnce}
      className={`absolute ${className} ${anim} z-10`}
    >
      <div className="glass-panel flex items-center gap-2 px-3 py-2 rounded-xl shadow-glow-blue/50">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.06]">
          {icon}
        </span>
        <span className="text-[11px] sm:text-xs font-medium text-ink whitespace-nowrap">
          {label}
        </span>
      </div>
    </motion.div>
  )
}
