import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/animations'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'} max-w-2xl ${isCenter ? 'mx-auto' : ''}`}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed text-balance">
          {description}
        </p>
      )}
    </motion.div>
  )
}
