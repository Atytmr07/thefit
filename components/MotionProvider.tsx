'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * App-wide Framer Motion configuration.
 *
 * `reducedMotion="user"` makes Framer Motion automatically skip transform /
 * layout animations (translate, scale) for visitors who request reduced
 * motion, animating only opacity. CSS-driven motion (marquee, scroll cue) is
 * disabled separately in globals.css.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
