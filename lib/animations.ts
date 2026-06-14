import type { Variants } from 'framer-motion';

/**
 * Default section reveal. Framer Motion's <MotionConfig reducedMotion="user">
 * strips the `y` translate for reduced-motion users, leaving a clean fade.
 */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Stagger parent for grids / lists of revealed children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/** Child item used inside `staggerContainer`. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Shared `whileInView` viewport config — reveal once, slightly early. */
export const viewportOnce = { once: true, margin: '-80px' } as const;
