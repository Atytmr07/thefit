'use client';

import { motion } from 'framer-motion';
import { sectionReveal, viewportOnce } from '@/lib/animations';

interface Service {
  number: string;
  name: string;
  tag: string;
  description: string;
  /** Base surface; rows alternate canvas / charcoal. */
  base: 'canvas' | 'surface';
}

const SERVICES: Service[] = [
  {
    number: '01',
    name: 'EMS Antrenmanı',
    tag: 'Kablosuz · AQ8',
    description:
      'AQ8 Wireless EMS kıyafeti ile 20 dakikalık tam vücut antrenmanı. Kas gruplarınızın %90’ına kadarını aynı anda çalıştırır — ağırlığa gerek yok.',
    base: 'surface',
  },
  {
    number: '02',
    name: 'Reformer Pilates',
    tag: 'Eklem Dostu',
    description:
      'Postür düzeltme, kor gücü ve mobilite için makineli Pilates. Her fitness seviyesine ve rehabilitasyon sonrası antrenmana uygundur.',
    base: 'canvas',
  },
  {
    number: '03',
    name: 'Fonksiyonel Antrenman',
    tag: 'Güç & Dayanıklılık',
    description:
      'Gerçek hayattaki güç kalıplarını hedefleyen bileşik hareket antrenmanı. Sinan Kal tarafından her bireyin hedefine göre programlanır.',
    base: 'surface',
  },
  {
    number: '04',
    name: 'Beslenme Danışmanlığı',
    tag: 'Kişiye Özel',
    description:
      'Antrenman hedeflerinizle uyumlu, kişiye özel beslenme programları. Makro takibi, öğün planlaması ve Sinan Kal ile sürekli ilerleme kontrolü.',
    base: 'canvas',
  },
];

function ServiceRow({ service }: { service: Service }) {
  const baseBg = service.base === 'surface' ? 'bg-[#18181B]' : 'bg-[#0E0E10]';
  const hoverBg =
    service.base === 'surface'
      ? 'hover:bg-[#202024]'
      : 'hover:bg-[#18181B]';

  return (
    <motion.article
      variants={sectionReveal}
      className={`group relative overflow-hidden border-t border-white/[0.06] transition-colors duration-300 ${baseBg} ${hoverBg}`}
    >
      {/* Ghost number watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 right-4 select-none font-display text-[7rem] font-extrabold leading-none text-[#202024] md:right-10 md:text-[10rem]"
      >
        {service.number}
      </span>

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-5 px-6 py-12 md:flex-row md:items-center md:gap-10 md:px-10 md:py-16">
        {/* Name + tag (40%) */}
        <div className="md:w-2/5">
          <h3 className="font-display text-4xl font-bold uppercase tracking-tight text-[#F0F0F0] md:text-5xl">
            {service.name}
          </h3>
          <span className="mt-4 inline-block border border-[#C8F000]/40 px-3 py-1 font-body text-xs font-medium uppercase tracking-[0.12em] text-[#C8F000]">
            {service.tag}
          </span>
        </div>

        {/* Description (60%) */}
        <p className="font-body text-base font-light leading-relaxed text-[#666666] md:w-3/5 md:text-lg">
          {service.description}
        </p>
      </div>

      {/* Lime hairline expands on row hover */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C8F000] transition-all duration-[400ms] ease-out group-hover:w-full"
      />
    </motion.article>
  );
}

export default function Hizmetler() {
  return (
    <section id="hizmetler" className="bg-[#0E0E10] pt-24 md:pt-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionReveal}
        className="mx-auto mb-12 max-w-[1400px] px-6 md:mb-16 md:px-10"
      >
        <p className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C8F000]">
          Neler Sunuyoruz
        </p>
        <h2 className="font-display text-6xl font-extrabold uppercase tracking-[-0.01em] text-[#F0F0F0] md:text-7xl">
          Hizmetler
        </h2>
      </motion.div>

      {/* Full-width alternating rows */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="border-b border-white/[0.06]"
      >
        {SERVICES.map((service) => (
          <ServiceRow key={service.number} service={service} />
        ))}
      </motion.div>
    </section>
  );
}
