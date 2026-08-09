import type { Variants, Transition } from 'framer-motion'

export const easeOut: Transition['ease'] = [0.16, 1, 0.3, 1]

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

/** Wrap a section with this and pass `custom` stagger children */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.25, ease: easeOut } },
  whileTap: { scale: 0.98 },
}

export const hoverScale = {
  whileHover: { scale: 1.03, transition: { duration: 0.25, ease: easeOut } },
  whileTap: { scale: 0.97 },
}

/** Default viewport settings so scroll animations only fire once */
export const viewportOnce = { once: true, amount: 0.25 }
