import { type HTMLAttributes, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
  glow?: 'blue' | 'purple' | 'none'
  hover?: boolean
}

/**
 * Base glass-morphism surface used across the app: feature cards, pricing
 * cards, testimonials, dashboard widgets, etc.
 */
export default function GlassCard({
  children,
  className = '',
  glow = 'none',
  hover = true,
  ...motionProps
}: GlassCardProps) {
  const glowClass =
    glow === 'blue' ? 'hover:shadow-glow-blue' : glow === 'purple' ? 'hover:shadow-glow-purple' : ''

  return (
    <motion.div
      className={`glass-panel relative overflow-hidden ${
        hover ? `transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] ${glowClass}` : ''
      } ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

export function GlassCardStatic({
  children,
  className = '',
  ...rest
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={`glass-panel ${className}`} {...rest}>
      {children}
    </div>
  )
}
