import LogoMark from './LogoMark';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.05] bg-[#0E0E10]">
      {/* Ghost display type */}
      <span
        aria-hidden="true"
        className="pointer-events-none block select-none text-center font-display font-extrabold uppercase leading-none text-transparent"
        style={{
          fontSize: '15vw',
          WebkitTextStroke: '1px rgba(200,240,0,0.06)',
        }}
      >
        THEFIT
      </span>

      <div className="mx-auto max-w-[1400px] px-6 pb-12 md:px-10">
        <div className="grid grid-cols-1 gap-10 border-t border-white/[0.05] pt-12 md:grid-cols-3">
          {/* Left — brand */}
          <div>
            <LogoMark />
            <p className="mt-4 max-w-xs font-body text-sm font-light text-[#666666]">
              Antalya&apos;nın Premium EMS &amp; Pilates Stüdyosu
            </p>
          </div>

          {/* Center — nav */}
          <nav aria-label="Alt menü" className="md:justify-self-center">
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[#666666] transition-colors hover:text-[#C8F000]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — social / phone */}
          <div className="space-y-3 md:justify-self-end md:text-right">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-body text-sm text-[#666666] transition-colors hover:text-[#C8F000]"
            >
              {SITE.instagramHandle}
            </a>
            <a
              href={SITE.phoneHref}
              className="block font-body text-sm text-[#666666] transition-colors hover:text-[#C8F000]"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/[0.05] pt-6">
          <p className="font-body text-xs font-light text-[#444444]">
            © {year} The Fit EMS &amp; Pilates. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
