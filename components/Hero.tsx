'use client';

import { Fragment } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/site';
import HeroBackdrop from '@/components/HeroBackdrop';

// Headline split into words; the lime phrase carries `lime: true`.
const HEADLINE_WORDS: { text: string; lime: boolean }[] = [
  { text: 'VÜCUDUNU', lime: false },
  { text: '20', lime: true },
  { text: 'DAKİKADA', lime: true },
  { text: 'DÖNÜŞTÜR.', lime: false },
];

const MINI_STATS = [
  { value: '4.9', label: 'Google Puanı' },
  { value: '103+', label: 'Yorum' },
  { value: '20dk', label: 'Seans Süresi' },
];

export default function Hero() {
  const { scrollY } = useScroll();
  // Content gently drifts up and fades as the user scrolls away.
  const contentY = useTransform(scrollY, [0, 600], [0, 140]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-24 pt-32"
      style={{
        // Soft graphite spotlight — lifts the centre so the hero reads as a lit
        // room rather than a flat OLED void, then falls back to the page canvas.
        background:
          'radial-gradient(ellipse 92% 78% at 50% 30%, #23232B 0%, #16161C 45%, #0E0E10 100%)',
      }}
    >
      {/* ---- Background layers (no photo) ---- */}

      {/* Faint structural grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 42%, #000 35%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 42%, #000 35%, transparent 100%)',
        }}
      />

      {/* Animated EMS "signal field" — pulses, emitter rings, live nodes */}
      <HeroBackdrop />

      {/* Fine film grain — breaks up the gradient so the dark tones never band */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Breathing lime glow behind the headline */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[46%] -z-10 h-[115vmin] w-[115vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(200,240,0,0.12) 0%, rgba(200,240,0,0.045) 36%, transparent 68%)',
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.65, 0.95, 0.65] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Soft top sheen lifts the crown of the hero */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-white/[0.035] to-transparent"
      />

      {/* Bottom vignette blends seamlessly into the next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#0E0E10] to-transparent"
      />

      {/* ---- Centered content ---- */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        {/* Kinetic word-split headline */}
        <h1 className="flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 font-display text-[clamp(3.25rem,11vw,11rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.02em] text-[#F0F0F0]">
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={`${word.text}-${i}`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 60, scale: word.lime ? 1.05 : 1 },
                visible: (idx: number) => ({
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.65,
                    delay: 0.15 + idx * 0.07 + (word.lime ? 0.1 : 0),
                    ease: [0.22, 1, 0.36, 1],
                  },
                }),
              }}
              className={`inline-block ${
                word.lime
                  ? 'text-[#C8F000] [text-shadow:0_0_40px_rgba(200,240,0,0.35)]'
                  : 'text-[#F0F0F0]'
              }`}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl font-body text-base font-light text-[#888888] md:text-lg"
        >
          EMS Antrenmanı <span className="text-[#C8F000]">·</span> Reformer
          Pilates <span className="text-[#C8F000]">·</span> Beslenme Danışmanlığı
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <motion.a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="inline-flex items-center justify-center gap-2 rounded-none bg-[#C8F000] px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-[#0E0E10] transition-[background-color,box-shadow] duration-300 hover:bg-[#D4FF00] hover:shadow-[0_0_24px_rgba(200,240,0,0.35)]"
          >
            <MessageCircle size={18} strokeWidth={2.25} aria-hidden="true" />
            WhatsApp&apos;tan Randevu Al
          </motion.a>

          <motion.a
            href="#ems"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="inline-flex items-center justify-center rounded-none border border-[#C8F000] bg-transparent px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-[#C8F000] transition-colors duration-300 hover:bg-[#C8F000]/[0.08]"
          >
            EMS Nedir?
          </motion.a>
        </motion.div>

        {/* Inline mini-stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex items-center gap-7 md:gap-12"
        >
          {MINI_STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="h-10 w-[1px] bg-white/[0.08]"
                />
              )}
              <div className="text-center">
                <div className="font-display text-3xl font-extrabold leading-none text-[#F0F0F0] md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 font-body text-[10px] font-medium uppercase tracking-[0.15em] text-[#666666]">
                  {stat.label}
                </div>
              </div>
            </Fragment>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#ems"
        aria-label="Aşağı kaydır"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block text-[#C8F000]"
          aria-hidden="true"
        >
          <ChevronDown size={26} />
        </motion.span>
      </motion.a>
    </header>
  );
}
