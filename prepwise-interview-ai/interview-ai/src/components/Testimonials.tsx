import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import GlassCard from './ui/GlassCard'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce, hoverLift } from '../lib/animations'

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  gradient: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The skill gap report was more specific than anything a career coach gave me. I knew exactly which two topics to fix before my onsite.',
    name: 'Priya Nair',
    role: 'Backend Engineer, hired at a fintech startup',
    initials: 'PN',
    gradient: 'from-accent-blue to-accent-indigo',
  },
  {
    quote:
      'I did four mock interviews in one weekend and walked into the real one feeling like I had already done it before. The follow-up questions were eerily realistic.',
    name: 'Marcus Chen',
    role: 'Frontend Developer, hired at a Series B company',
    initials: 'MC',
    gradient: 'from-accent-indigo to-accent-purple',
  },
  {
    quote:
      'The weekly progress chart kept me honest. Watching my interview score climb every week made the whole job search feel a lot less random.',
    name: 'Sofia Alvarez',
    role: 'Data Scientist, hired at a healthtech company',
    initials: 'SA',
    gradient: 'from-accent-purple to-accent-blue',
  },
]

export default function Testimonials() {
  return (
    <section className="relative px-4 sm:px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">
        <SectionHeading
          eyebrow="Success stories"
          title="Candidates who prepped smarter"
          description="Real outcomes from people who used Prepwise before their last interview loop."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeUp} {...hoverLift}>
              <GlassCard className="h-full p-7 flex flex-col gap-6">
                <Quote className="h-7 w-7 text-accent-indigo/50" strokeWidth={1.5} />
                <p className="text-sm sm:text-base text-ink leading-relaxed flex-1">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-semibold text-white`}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-ink-faint">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
