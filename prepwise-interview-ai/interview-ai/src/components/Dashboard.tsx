import { motion } from 'framer-motion'
import {
  FileCheck2,
  Gauge,
  Layers,
  AlertTriangle,
  Mic,
  CalendarDays,
  ArrowUpRight,
} from 'lucide-react'
import GlassCard from './ui/GlassCard'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'

const SKILLS = [
  { label: 'System Design', value: 82 },
  { label: 'Data Structures', value: 91 },
  { label: 'Behavioral', value: 74 },
  { label: 'SQL & Databases', value: 63 },
]

const WEAK_AREAS = ['Concurrency', 'Distributed Caching', 'Big-O Edge Cases']

const WEEKLY = [38, 52, 44, 68, 61, 79, 87]

export default function Dashboard() {
  return (
    <section className="relative px-4 sm:px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">
        <SectionHeading
          eyebrow="Live inside the app"
          title="Your entire prep, on one screen"
          description="A single dashboard tracks readiness, skills, and weak spots so you always know what to work on next."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {/* Resume Score */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <GlassCard className="p-6 h-full flex flex-col gap-5" glow="blue">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10">
                  <FileCheck2 className="h-5 w-5 text-accent-blue" strokeWidth={1.8} />
                </span>
                <span className="text-xs font-mono text-emerald-400/90 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" /> +12
                </span>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-ink-faint mb-1">
                  Resume Score
                </p>
                <p className="font-display text-4xl font-semibold text-ink">88<span className="text-lg text-ink-faint">/100</span></p>
              </div>
              <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '88%' }}
                  viewport={viewportOnce}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-aurora"
                />
              </div>
            </GlassCard>
          </motion.div>

          {/* Job Readiness */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <GlassCard className="p-6 h-full flex flex-col items-center justify-center gap-3 text-center" glow="purple">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10">
                <Gauge className="h-5 w-5 text-accent-purple" strokeWidth={1.8} />
              </span>
              <p className="text-xs font-mono uppercase tracking-widest text-ink-faint">
                Job Readiness
              </p>
              <div className="relative flex items-center justify-center h-28 w-28">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.08)" strokeWidth="7" fill="none" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#a855f7"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 42}
                    initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - 0.79) }}
                    viewport={viewportOnce}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
                <span className="font-display text-2xl font-semibold text-ink">79%</span>
              </div>
              <p className="text-xs text-ink-muted">Ready for Senior Frontend roles</p>
            </GlassCard>
          </motion.div>

          {/* Interview Score */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <GlassCard className="p-6 h-full flex flex-col gap-5" glow="blue">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10">
                  <Mic className="h-5 w-5 text-accent-blue" strokeWidth={1.8} />
                </span>
                <span className="text-xs font-mono text-ink-faint">Last session</span>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-ink-faint mb-1">
                  Interview Score
                </p>
                <p className="font-display text-4xl font-semibold text-ink">8.4<span className="text-lg text-ink-faint">/10</span></p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  ['Clarity', '9.1'],
                  ['Depth', '7.8'],
                  ['Pace', '8.3'],
                ].map(([label, val]) => (
                  <div key={label} className="rounded-lg bg-white/[0.04] border border-white/5 py-2">
                    <p className="font-mono text-sm text-ink">{val}</p>
                    <p className="text-[10px] text-ink-faint">{label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <GlassCard className="p-6 h-full flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10">
                  <Layers className="h-5 w-5 text-accent-indigo" strokeWidth={1.8} />
                </span>
                <p className="text-xs font-mono uppercase tracking-widest text-ink-faint">Skills</p>
              </div>
              <div className="flex flex-col gap-4">
                {SKILLS.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-ink">{skill.label}</span>
                      <span className="text-xs font-mono text-ink-faint">{skill.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={viewportOnce}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-aurora"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Weak Areas */}
          <motion.div variants={fadeUp} className="md:col-span-1">
            <GlassCard className="p-6 h-full flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10">
                  <AlertTriangle className="h-5 w-5 text-amber-400" strokeWidth={1.8} />
                </span>
                <p className="text-xs font-mono uppercase tracking-widest text-ink-faint">
                  Weak Areas
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {WEAK_AREAS.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 text-sm text-ink-muted rounded-lg bg-white/[0.04] border border-white/5 px-3 py-2.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          {/* Weekly Progress */}
          <motion.div variants={fadeUp} className="md:col-span-3">
            <GlassCard className="p-6 h-full flex flex-col gap-5">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10">
                    <CalendarDays className="h-5 w-5 text-accent-purple" strokeWidth={1.8} />
                  </span>
                  <p className="text-xs font-mono uppercase tracking-widest text-ink-faint">
                    Weekly Progress
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400/90">+29% vs last week</span>
              </div>
              <div className="flex items-end gap-3 sm:gap-5 h-32 px-1">
                {WEEKLY.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${val}%` }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full rounded-t-md bg-aurora opacity-90"
                      style={{ maxHeight: '100%' }}
                    />
                    <span className="text-[10px] font-mono text-ink-faint">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
