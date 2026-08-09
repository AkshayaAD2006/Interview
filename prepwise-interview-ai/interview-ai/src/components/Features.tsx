import { motion } from 'framer-motion'
import {
  FileSearch,
  Target,
  MessagesSquare,
  Map,
  LineChart,
  Bot,
  type LucideIcon,
} from 'lucide-react'
import GlassCard from './ui/GlassCard'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce, hoverLift } from '../lib/animations'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  accent: string
}

const FEATURES: Feature[] = [
  {
    icon: FileSearch,
    title: 'Resume Analysis',
    description:
      'Upload your resume and get an instant breakdown of strengths, red flags, and how it reads against the exact role you\u2019re targeting.',
    accent: 'from-accent-blue/25 to-accent-blue/0',
  },
  {
    icon: Target,
    title: 'Skill Gap Detection',
    description:
      'Prepwise compares your current skill set against the job description and surfaces precisely what to learn before you apply.',
    accent: 'from-accent-indigo/25 to-accent-indigo/0',
  },
  {
    icon: MessagesSquare,
    title: 'AI Mock Interview',
    description:
      'Practice with a conversational AI interviewer that adapts follow-up questions in real time, just like a real technical round.',
    accent: 'from-accent-purple/25 to-accent-purple/0',
  },
  {
    icon: Map,
    title: 'Personalized Roadmap',
    description:
      'Get a day-by-day study plan generated from your gaps and timeline, so every hour of prep goes toward the right thing.',
    accent: 'from-accent-blue/25 to-accent-blue/0',
  },
  {
    icon: LineChart,
    title: 'Performance Analytics',
    description:
      'Track confidence, clarity, and correctness across every mock session with charts that show exactly where you\u2019re improving.',
    accent: 'from-accent-indigo/25 to-accent-indigo/0',
  },
  {
    icon: Bot,
    title: 'Multi-Agent AI',
    description:
      'Specialized agents for resume review, question generation, interviewing, and coaching work together behind one seamless experience.',
    accent: 'from-accent-purple/25 to-accent-purple/0',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative px-4 sm:px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">
        <SectionHeading
          eyebrow="Platform"
          title="Everything you need to walk in ready"
          description="Six focused tools, one continuous workflow — from the first resume upload to the offer call."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp} {...hoverLift}>
              <GlassCard glow="blue" className="h-full p-6 sm:p-7 group">
                <div
                  className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${feature.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative flex flex-col gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 group-hover:border-white/20 group-hover:bg-white/[0.09] transition-colors duration-300">
                    <feature.icon className="h-5 w-5 text-accent-indigo" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{feature.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{feature.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
