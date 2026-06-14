'use client';

import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  /** Target value to count up to. */
  end: number;
  /** Animation duration in milliseconds. Defaults to 2000ms. */
  duration?: number;
  /** Number of decimal places to render. Defaults to 0. */
  decimals?: number;
}

interface UseCountUpReturn<T extends HTMLElement> {
  /** Formatted, ready-to-render count string (respects `decimals`). */
  count: string;
  /** Attach to the element whose viewport entry should trigger the count. */
  ref: React.RefObject<T>;
}

/**
 * Scratch-built count-up animation — no external library.
 *
 * Uses `IntersectionObserver` to fire exactly once when the target element
 * enters the viewport, then drives the value with `requestAnimationFrame`
 * on an ease-out curve: t => 1 - (1 - t)^3.
 *
 * Honours `prefers-reduced-motion` by snapping straight to the final value.
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>({
  end,
  duration = 2000,
  decimals = 0,
}: UseCountUpOptions): UseCountUpReturn<T> {
  const ref = useRef<T>(null);
  const [count, setCount] = useState<string>((0).toFixed(decimals));
  const hasRunRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    let rafId = 0;

    const run = () => {
      if (hasRunRef.current) return;
      hasRunRef.current = true;

      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReduced) {
        setCount(end.toFixed(decimals));
        return;
      }

      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = end * easeOut(progress);
        setCount(value.toFixed(decimals));

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          // Guarantee an exact final value (no float drift).
          setCount(end.toFixed(decimals));
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [end, duration, decimals]);

  return { count, ref };
}
