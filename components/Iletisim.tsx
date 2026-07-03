'use client';

import { motion } from 'framer-motion';
import { Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { sectionReveal, viewportOnce } from '@/lib/animations';
import { SITE } from '@/lib/site';

const MAP_SRC =
  'https://maps.google.com/maps?q=' +
  encodeURIComponent('Fener Mah. 1968 Sk. No:43 Muratpaşa Antalya') +
  '&t=&z=15&ie=UTF8&iwloc=&output=embed';

export default function Iletisim() {
  return (
    <section id="iletisim" className="bg-[#0E0E10] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Left — contact details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
        >
          <p className="mb-6 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C8F000]">
            Bize Ulaşın
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin
                size={22}
                className="mt-1 shrink-0 text-[#C8F000]"
                aria-hidden="true"
              />
              <span className="font-body text-base font-light leading-relaxed text-[#F0F0F0]">
                {SITE.address}
              </span>
            </li>

            <li className="flex items-center gap-4">
              <Phone
                size={22}
                className="shrink-0 text-[#C8F000]"
                aria-hidden="true"
              />
              <a
                href={SITE.phoneHref}
                className="font-body text-base font-light text-[#F0F0F0] transition-colors hover:text-[#C8F000]"
              >
                {SITE.phoneDisplay}
              </a>
            </li>

            <li className="flex items-start gap-4">
              <Clock
                size={22}
                className="mt-1 shrink-0 text-[#C8F000]"
                aria-hidden="true"
              />
              <span className="font-body text-base font-light leading-relaxed text-[#F0F0F0]">
                Pazartesi–Cumartesi: 08:00–20:00
                <br />
                <span className="text-[#CC3333]">Pazar: Kapalı</span>
              </span>
            </li>

            <li className="flex items-center gap-4">
              <Instagram
                size={22}
                className="shrink-0 text-[#C8F000]"
                aria-hidden="true"
              />
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base font-light text-[#F0F0F0] transition-colors hover:text-[#C8F000]"
              >
                {SITE.instagramHandle}
              </a>
            </li>
          </ul>

          {/* Inverted dark Google Maps embed */}
          <div className="mt-10 border border-white/[0.06]">
            <iframe
              title="The Fit stüdyo konumu — Muratpaşa, Antalya"
              src={MAP_SRC}
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-invert block h-[280px] w-full"
            />
          </div>
        </motion.div>

        {/* Right — CTA statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="flex flex-col justify-center"
        >
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-[-0.01em] text-[#F0F0F0] md:text-7xl">
            Başlamaya <span className="text-[#C8F000]">Hazır</span> Mısın?
          </h2>
          <p className="mt-6 max-w-md font-body text-lg font-light leading-relaxed text-[#666666]">
            İlk seansını WhatsApp üzerinden kolayca planla.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="inline-flex items-center justify-center rounded-none bg-[#C8F000] px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-[#0E0E10] transition-[background-color,box-shadow] duration-300 hover:bg-[#D4FF00] hover:shadow-[0_0_24px_rgba(200,240,0,0.35)] max-sm:w-full"
            >
              WhatsApp&apos;tan Randevu Al
            </motion.a>

            <motion.a
              href={SITE.phoneHref}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="inline-flex items-center justify-center gap-2 rounded-none border border-[#C8F000] bg-transparent px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.1em] text-[#C8F000] transition-colors duration-300 hover:bg-[#C8F000]/[0.08] max-sm:w-full"
            >
              <Phone size={18} strokeWidth={2.25} aria-hidden="true" />
              Bizi Ara
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
