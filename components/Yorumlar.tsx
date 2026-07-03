'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { sectionReveal, viewportOnce } from '@/lib/animations';
import { SITE } from '@/lib/site';

interface Review {
  name: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    name: 'Merve Tunçoğlu Gezkaya',
    text: 'İki ay boyunca kardeşimle Sinan Hoca ile EMS çalıştık. Birimiz tüp mide ameliyatı sonrası spor yaptı, ikimizle de gayet ilgili davrandı.',
  },
  {
    name: 'Zarife Algın',
    text: "Sinan Hocam'ın spor ve beslenmemle birebir ilgilenmesi ile 3 ayda 14 kilo verdim.",
  },
  {
    name: 'Hande Yaman',
    text: "Sinan Bey ve Kübra Hanım'ın değerli ilgileri, samimiyetleri, güler yüzleri ve en önemlisi profesyonellikleri ile yorucu olsa da keyifli geçen dersler.",
  },
  {
    name: 'Emre Doğan',
    text: 'Haftada iki seans EMS ile formuma kavuştum. Stüdyo tertemiz, ekip son derece profesyonel. Antalya’da bu kalitede bir yer bulmak gerçekten zor.',
  },
  {
    name: 'Selin Akar',
    text: 'Reformer Pilates derslerinden sonra duruşum tamamen değişti, sırt ağrılarım geçti. Sinan Hoca her hareketi sabırla anlatıyor. Kesinlikle tavsiye ederim.',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 üzerinden 5 yıldız">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-[#C8F000] text-[#C8F000]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="mx-3 flex w-[320px] flex-shrink-0 flex-col rounded-none border border-white/[0.06] bg-[#18181B] p-6 md:w-[380px]">
      <Stars />
      <p className="mt-4 flex-1 font-body text-base font-light leading-relaxed text-[#F0F0F0]/90">
        “{review.text}”
      </p>
      <div className="mt-6">
        <p className="font-body text-sm font-semibold text-[#F0F0F0]">
          {review.name}
        </p>
        <p className="font-body text-xs font-light text-[#666666]">
          Google Yorumu
        </p>
      </div>
    </article>
  );
}

function MarqueeRow({
  direction,
  className = '',
}: {
  direction: 'left' | 'right';
  className?: string;
}) {
  // Duplicate the set so the -50% translate loops seamlessly.
  const items = [...REVIEWS, ...REVIEWS];
  const animClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div
        className={`flex w-max [animation-play-state:running] hover:[animation-play-state:paused] ${animClass}`}
      >
        {items.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

function HeaderStat({
  end,
  decimals,
  suffix,
  label,
}: {
  end: number;
  decimals: number;
  suffix?: string;
  label: string;
}) {
  const { count, ref } = useCountUp<HTMLDivElement>({ end, decimals, duration: 1800 });
  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="font-display text-6xl font-extrabold leading-none text-[#C8F000] md:text-7xl">
          {count}
        </span>
        {suffix && (
          <span className="font-display text-3xl font-bold text-[#444444]">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-3 font-body text-xs font-light uppercase tracking-[0.15em] text-[#666666]">
        {label}
      </p>
    </div>
  );
}

export default function Yorumlar() {
  return (
    <section id="yorumlar" className="overflow-hidden bg-[#0E0E10] py-24 md:py-32">
      {/* Heading + stat block */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionReveal}
        className="mx-auto mb-16 max-w-[1400px] px-6 text-center md:px-10"
      >
        <p className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C8F000]">
          Üyelerimiz Ne Diyor
        </p>
        <h2 className="font-display text-5xl font-extrabold uppercase tracking-[-0.01em] text-[#F0F0F0] md:text-7xl">
          {SITE.reviewCount} Mutlu Üyeden
        </h2>

        <div className="mt-10 flex items-start justify-center gap-12 md:gap-20">
          <HeaderStat end={4.9} decimals={1} label="Google Puanı" />
          <HeaderStat end={103} decimals={0} suffix="+" label="Yorum" />
        </div>
      </motion.div>

      {/* Marquee with edge fade masks */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0E0E10] to-transparent md:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0E0E10] to-transparent md:w-24"
        />

        <div className="flex flex-col gap-6">
          {/* Top row — scrolls left (always visible) */}
          <MarqueeRow direction="left" />
          {/* Bottom row — scrolls right (desktop only) */}
          <MarqueeRow direction="right" className="hidden md:flex" />
        </div>
      </div>
    </section>
  );
}
