import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import GlassCard from './ui/GlassCard'
import GlassButton from './ui/GlassButton'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'

interface Plan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Get a feel for AI-driven prep before you commit.',
    features: [
      '1 resume analysis / month',
      '2 mock interviews / month',
      'Basic skill gap report',
      'Community question bank',
    ],
    cta: 'Start for Free',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For active job seekers running a serious prep cycle.',
    features: [
      'Unlimited resume analysis',
      'Unlimited mock interviews',
      'Full multi-agent skill gap detection',
      'Personalized study roadmap',
      'Performance analytics dashboard',
      'Priority AI response speed',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'billed annually',
    description: 'For bootcamps, universities, and career teams at scale.',
    features: [
      'Everything in Pro, per seat',
      'Cohort-wide analytics dashboard',
      'Custom question banks per track',
      'SSO & dedicated onboarding',
      'Priority support & SLA',
    ],
    cta: 'Talk to Sales',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 sm:px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Prep at the pace you need"
          description="Start free, upgrade when you're serious about the offer. Cancel anytime."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={plan.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}
            >
              <GlassCard
                hover={!plan.highlighted}
                glow={plan.highlighted ? 'purple' : 'none'}
                className={`relative h-full p-7 sm:p-8 flex flex-col gap-7 ${
                  plan.highlighted
                    ? 'border-accent-indigo/40 bg-gradient-to-b from-accent-indigo/[0.08] to-transparent shadow-glow-purple'
                    : ''
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-aurora px-3.5 py-1 text-[11px] font-semibold text-white shadow-glow-blue">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink">{plan.name}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex items-end gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-semibold text-ink">
                    {plan.price}
                  </span>
                  <span className="text-sm text-ink-faint pb-1.5">{plan.period}</span>
                </div>

                <GlassButton
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {plan.cta}
                </GlassButton>

                <div className="h-px bg-white/10" />

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                          plan.highlighted
                            ? 'bg-accent-indigo/20 text-accent-indigo'
                            : 'bg-white/[0.06] text-ink-faint'
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
