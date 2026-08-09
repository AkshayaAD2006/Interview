import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import GlassCard from './ui/GlassCard'
import SectionHeading from './ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'How does the AI actually analyze my resume?',
    answer:
      'You upload your resume and paste the job description. The Resume Agent parses your experience, skills, and projects, then compares them against the role\u2019s requirements to score fit and flag missing keywords or under-explained sections.',
  },
  {
    question: 'What happens during a mock interview?',
    answer:
      'The Interviewer Agent asks you role-specific technical and behavioral questions through text or voice, listens to your answer, and asks realistic follow-ups based on what you said — the same way a human interviewer would probe deeper.',
  },
  {
    question: 'Is my resume and interview data kept private?',
    answer:
      'Yes. Your resume, transcripts, and scores are only used to generate your personal reports and roadmap. You can delete your data from your account at any time.',
  },
  {
    question: 'Can I use Prepwise for non-technical roles?',
    answer:
      'Prepwise is tuned for technical interviews first — software, data, and infrastructure roles — but the resume analysis and behavioral question bank work well for adjacent roles like product and technical program management too.',
  },
  {
    question: 'What\u2019s the difference between Free and Pro?',
    answer:
      'Free gives you one resume analysis and two mock interviews a month to try the platform. Pro unlocks unlimited analyses and mock interviews, the full personalized roadmap, and the performance analytics dashboard.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, Pro is billed monthly with no lock-in. You can cancel from your account settings at any time and keep access until the end of your current billing period.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative px-4 sm:px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl flex flex-col gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you might want to know before your first session."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-3"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div key={faq.question} variants={fadeUp}>
                <GlassCard hover={false} className="overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-sm sm:text-base text-ink">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] border border-white/10"
                    >
                      <Plus className="h-3.5 w-3.5 text-ink-muted" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 text-sm text-ink-muted leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
