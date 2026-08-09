import { motion } from 'framer-motion'
import {
  Upload,
  ScanSearch,
  Target,
  ListChecks,
  Mic2,
  BarChart3,
  Route,
  type LucideIcon,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { viewportOnce } from '../lib/animations'

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    icon: Upload,
    title: 'Upload Resume',
    description: 'Drop in your resume and the role you\u2019re targeting — PDF, DOCX, or plain text.',
  },
  {
    icon: ScanSearch,
    title: 'AI Analysis',
    description: 'Our Resume Agent parses experience, projects, and keywords against the job.',
  },
  {
    icon: Target,
    title: 'Skill Gap Detection',
    description: 'The Analyst Agent maps what you have against what the role actually needs.',
  },
  {
    icon: ListChecks,
    title: 'Interview Questions',
    description: 'A tailored question set is generated from your gaps, stack, and seniority.',
  },
  {
    icon: Mic2,
    title: 'Mock Interview',
    description: 'Talk through the questions live with the AI Interviewer Agent, no scheduling needed.',
  },
  {
    icon: BarChart3,
    title: 'Performance Report',
    description: 'Get scored on correctness, clarity, and confidence with specific examples.',
  },
  {
    icon: Route,
    title: 'Study Roadmap',
    description: 'A day-by-day plan is generated to close remaining gaps before your real interview.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="relative px-4 sm:px-6 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/3 h-[420px] bg-radial-fade pointer-events-none" />

      <div className="relative mx-auto max-w-4xl flex flex-col gap-16">
        <SectionHeading
          eyebrow="How it works"
          title="Seven steps from resume to ready"
          description="Each stage hands off to the next agent automatically — you just show up and talk."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[27px] sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue/60 via-accent-indigo/40 to-transparent" />

          <div className="flex flex-col gap-3">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-5 sm:gap-6 group"
              >
                {/* node */}
                <div className="relative shrink-0 z-10 mt-1">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.4, delay: index * 0.06 + 0.1 }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl glass-panel group-hover:border-accent-indigo/50 group-hover:shadow-glow-blue transition-all duration-300"
                  >
                    <step.icon className="h-6 w-6 text-accent-indigo" strokeWidth={1.8} />
                  </motion.div>
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-surface-3 border border-white/10 text-[10px] font-mono text-ink-faint">
                    {index + 1}
                  </span>
                </div>

                {/* content */}
                <div className="glass-panel flex-1 px-5 py-4 sm:px-6 sm:py-5 mb-3 group-hover:border-white/20 group-hover:bg-white/[0.06] transition-all duration-300">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-ink mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
