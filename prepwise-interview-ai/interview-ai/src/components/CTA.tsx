import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GlassButton from './ui/GlassButton'
import { scaleIn, viewportOnce } from '../lib/animations'

export default function CTA() {
  return (
    <section className="relative px-4 sm:px-6 py-6">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl glass-panel px-6 sm:px-16 py-16 sm:py-20 text-center flex flex-col items-center gap-6"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[520px] bg-radial-fade pointer-events-none" />
        <h2 className="relative font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink max-w-2xl text-balance">
          Your next interview doesn&rsquo;t have to feel like the first one
        </h2>
        <p className="relative text-ink-muted text-base sm:text-lg max-w-xl text-balance">
          Upload your resume and run your first AI mock interview in under five minutes. No credit
          card required.
        </p>
        <div className="relative mt-2">
          <GlassButton size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Start Free Practice
          </GlassButton>
        </div>
      </motion.div>
    </section>
  )
}
