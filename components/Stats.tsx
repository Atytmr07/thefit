'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { sectionReveal, viewportOnce } from '@/lib/animations';

interface Stat {
  end: number;
  decimals: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { end: 103, decimals: 0, suffix: '+', label: 'Google Yorumu' },
  { end: 4.9, decimals: 1, suffix: '', label: 'Ortalama Puan' },
  { end: 20, decimals: 0, suffix: 'dk', label: 'Seans Süresi' },
];

function StatColumn({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp<HTMLDivElement>({
    end: stat.end,
    decimals: stat.decimals,
    duration: 2000,
  });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="flex items-baseline gap-1">
        <span className="font-display text-6xl font-extrabold leading-none text-[#C8F000] md:text-7xl">
          {count}
        </span>
        {stat.suffix && (
          <span className="font-display text-3xl font-bold text-[#444444]">
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="mt-4 font-body text-sm font-light uppercase tracking-[0.15em] text-[#666666]">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section aria-label="Rakamlarla The Fit" className="bg-[#18181B] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionReveal}
        className="mx-auto flex max-w-[1100px] flex-col items-center gap-12 px-6 md:flex-row md:justify-between md:gap-0 md:px-10"
      >
        {STATS.map((stat, i) => (
          <Fragment key={stat.label}>
            {i > 0 && (
              <span
                aria-hidden="true"
                className="hidden h-12 w-[1px] bg-white/[0.06] md:block"
              />
            )}
            <div className="md:flex-1">
              <StatColumn stat={stat} />
            </div>
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
