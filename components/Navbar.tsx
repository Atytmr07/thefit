'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, X } from 'lucide-react';
import LogoMark from './LogoMark';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle solid navbar after 80px of scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Ana navigasyon"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-[400ms] ${
          scrolled
            ? 'border-b border-white/[0.05] bg-[#0E0E10]/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <a href="#top" aria-label="The Fit ana sayfa" className="shrink-0">
            <LogoMark />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-block py-1 font-body text-sm font-medium uppercase tracking-[0.12em] text-[#F0F0F0] transition-colors hover:text-[#C8F000]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[#C8F000] transition-transform duration-[250ms] ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-none bg-[#C8F000] px-6 py-3 font-body text-sm font-bold uppercase tracking-[0.1em] text-[#0E0E10] transition-all duration-300 hover:bg-[#D4FF00] hover:shadow-[0_0_24px_rgba(200,240,0,0.35)] lg:inline-flex"
          >
            <MessageCircle size={18} strokeWidth={2.25} aria-hidden="true" />
            Randevu Al
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Menüyü aç"
            aria-expanded={menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center text-[#F0F0F0] lg:hidden"
          >
            <Menu size={28} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#0E0E10] lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <LogoMark />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Menüyü kapat"
                className="inline-flex h-11 w-11 items-center justify-center text-[#F0F0F0]"
              >
                <X size={28} aria-hidden="true" />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-1 flex-col justify-center gap-2 px-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: 60 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 font-display text-5xl font-bold uppercase tracking-tight text-[#F0F0F0] transition-colors hover:text-[#C8F000]"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <div className="px-6 pb-12">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-none bg-[#C8F000] px-6 py-4 font-body text-base font-bold uppercase tracking-[0.1em] text-[#0E0E10]"
              >
                <MessageCircle size={20} strokeWidth={2.25} aria-hidden="true" />
                WhatsApp&apos;tan Randevu Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
