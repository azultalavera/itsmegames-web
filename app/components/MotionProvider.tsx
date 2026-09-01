'use client';

import { MotionConfig } from 'motion/react';

// Global reduced-motion respect for every motion.* component in the tree,
// instead of remembering to handle it per-component.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
