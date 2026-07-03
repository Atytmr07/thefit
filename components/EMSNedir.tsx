'use client';

import { motion } from 'framer-motion';
import ImageFrame from './ImageFrame';
import { useCountUp } from '@/hooks/useCountUp';
import { sectionReveal, viewportOnce } from '@/lib/animations';

interface StatCell {
  value: number | null; // null => static (no count-up)
  staticLabel?: string; // shown when value is null
  suffix: string;
  label: string;
}

const CELLS: StatCell[] = [
  { value: 20, suffix: 'dk', label: '1 seansın süresi' },
  { value: 4.5, suffix: 'sa', label: 'Geleneksel antrenman eşdeğeri' },
  { value: 98, suffix: '%', label: 'Kas aktivasyon oranı' },
  { value: null, staticLabel: 'AQ8', suffix: '', label: 'Kablosuz EMS sistemi' },
];

function CountUpCell({ cell }: { cell: StatCell }) {
  // Hooks must run unconditionally; for the static cell we simply ignore the count.
  const decimals = cell.value !== null && !Number.isInteger(cell.value) ? 1 : 0;
  const { count, ref } = useCountUp<HTMLDivElement>({
    end: cell.value ?? 0,
    duration: 1800,
    decimals,
  });

  return (
    <div ref={ref} className="border border-white/[0.06] bg-[#18181B] p-7 md:p-8">
      <div className="flex items-baseline gap-1">
        <span className="font-display text-5xl font-extrabold leading-none text-[#C8F000] md:text-6xl">
          {cell.value !== null ? count : cell.staticLabel}
        </span>
        {cell.suffix && (
          <span className="font-display text-2xl font-bold text-[#444444]">
            {cell.suffix}
          </span>
        )}
      </div>
      <p className="mt-4 font-body text-sm font-light uppercase tracking-[0.12em] text-[#666666]">
        {cell.label}
      </p>
    </div>
  );
}

export default function EMSNedir() {
  return (
    <section id="ems" className="bg-[#0E0E10] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Top — editorial text + image */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — editorial */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={sectionReveal}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C8F000]">
              Teknoloji
            </p>
            <h2 className="font-display text-6xl font-bold uppercase tracking-[-0.01em] text-[#F0F0F0] md:text-8xl">
              EMS Nedir?
            </h2>

            <div className="mt-8 space-y-6 font-body text-base font-light leading-relaxed text-[#666666] md:text-lg">
              <p>
                EMS (Electro Muscular Stimulation), kaslarınızı düşük frekanslı
                elektrik impulsları ile doğrudan uyaran bir antrenman
                teknolojisidir. Yalnızca{' '}
                <span className="text-[#F0F0F0]">20 dakikalık bir seans</span>,
                geleneksel antrenmanda 4–5 saatlik çalışmaya eşdeğer bir kas
                aktivasyonu sağlar.
              </p>
              <p>
                <span className="text-[#F0F0F0]">AQ8 Wireless</span> sistemi
                tamamen kablosuzdur — tam hareket özgürlüğü ile çalışırsınız.
                Profesyonel sporcular ve fizyoterapi kliniklerinde tercih edilen
                bu teknoloji, ameliyat sonrası toparlanma süreçleri için de
                uygundur. Üyemiz Merve Tunçoğlu&apos;nun tüp mide ameliyatı
                sonrası süreci buna iyi bir örnektir.
              </p>
            </div>

            <div className="mt-10 h-[1px] w-16 bg-[#C8F000]" aria-hidden="true" />
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={sectionReveal}
          >
            <ImageFrame
              alt="AQ8 Wireless EMS antrenmanı yapan üye"
              label="AQ8 EMS Antrenman Görseli"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[360px] w-full md:h-full md:min-h-[480px]"
            />
          </motion.div>
        </div>

        {/* Bottom — stat strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4"
        >
          {CELLS.map((cell) => (
            <CountUpCell key={cell.label} cell={cell} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
