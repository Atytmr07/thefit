'use client';

import { motion } from 'framer-motion';
import ImageFrame from './ImageFrame';
import { sectionReveal, staggerItem, viewportOnce } from '@/lib/animations';

interface GalleryItem {
  alt: string;
  label: string;
  /** Tailwind span classes for the desktop bento grid. */
  span: string;
}

const ITEMS: GalleryItem[] = [
  {
    alt: 'EMS antrenman alanı',
    label: 'EMS Antrenman Alanı',
    span: 'md:col-span-7 md:row-span-2',
  },
  {
    alt: 'Reformer Pilates stüdyosu',
    label: 'Reformer Pilates',
    span: 'md:col-span-5',
  },
  {
    alt: 'Fonksiyonel antrenman bölgesi',
    label: 'Fonksiyonel Bölge',
    span: 'md:col-span-5',
  },
  {
    alt: 'Stüdyo iç mekan',
    label: 'Stüdyo',
    span: 'md:col-span-4',
  },
  {
    alt: 'AQ8 kablosuz EMS ekipmanı',
    label: 'Ekipman',
    span: 'md:col-span-4',
  },
  {
    alt: 'Kurucu Sinan Kal',
    label: 'Sinan Kal',
    span: 'md:col-span-4',
  },
];

export default function Galeri() {
  return (
    <section id="galeri" className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-12 md:mb-16"
        >
          <p className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C8F000]">
            Mekanı Keşfet
          </p>
          <h2 className="font-display text-6xl font-extrabold uppercase tracking-[-0.01em] text-[#F0F0F0] md:text-7xl">
            Stüdyomuz
          </h2>
        </motion.div>

        {/* Bento image grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[210px]"
        >
          {ITEMS.map((item) => (
            <motion.div key={item.label} variants={staggerItem} className={item.span}>
              <ImageFrame
                alt={item.alt}
                label={item.label}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-64 w-full md:h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
