/** Single source of truth for The Fit's real contact details. */
export const SITE = {
  name: 'The Fit EMS & Pilates',
  founder: 'Sinan Kal',
  // ⚠️ Update this to the real production domain before deploy.
  url: 'https://thefit-antalya.com',
  geo: { lat: 36.8841, lng: 30.7056 }, // Muratpaşa, Antalya — refine to exact studio pin
  priceRange: '₺₺',
  whatsapp: 'https://wa.me/905545911555',
  phoneDisplay: '0554 591 15 55',
  phoneHref: 'tel:+905545911555',
  instagramHandle: '@thefitstudio_',
  instagramUrl: 'https://www.instagram.com/thefitstudio_/',
  address:
    'Fener Mah. 1968 Sk. No:43 Yolgider İş Merkezi Kat:2, Muratpaşa/Antalya',
  rating: '4.9',
  reviewCount: '103',
} as const;

/** Anchor navigation links shared by the navbar and footer. */
export const NAV_LINKS = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'EMS Nedir?', href: '#ems' },
  { label: 'Stüdyo', href: '#galeri' },
  { label: 'Yorumlar', href: '#yorumlar' },
  { label: 'İletişim', href: '#iletisim' },
] as const;
