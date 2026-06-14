import type { Metadata, Viewport } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import MotionProvider from '@/components/MotionProvider';
import { SITE } from '@/lib/site';
import './globals.css';

// Body / UI typeface. `latin-ext` is required for Turkish glyphs (ş, ğ, İ, ı, ç, ö, ü).
const barlow = Barlow({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
});

// Display / heading typeface.
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const SITE_URL = SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Fit EMS & Pilates | Antalya'nın Premium EMS ve Reformer Pilates Stüdyosu",
  description:
    "Antalya Muratpaşa'da AQ8 Wireless EMS Antrenmanı, Reformer Pilates, Fonksiyonel Antrenman ve Beslenme Danışmanlığı. Sinan Kal ile randevu: 0554 591 15 55",
  applicationName: 'The Fit EMS & Pilates',
  authors: [{ name: 'Sinan Kal' }],
  creator: 'The Fit EMS & Pilates',
  keywords: [
    'EMS Antrenmanı Antalya',
    'AQ8 Wireless EMS',
    'Reformer Pilates Antalya',
    'Fonksiyonel Antrenman',
    'Beslenme Danışmanlığı',
    'Muratpaşa spor stüdyosu',
    'Sinan Kal',
    'The Fit',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: 'The Fit EMS & Pilates',
    title: "The Fit EMS & Pilates | Antalya'nın Premium EMS ve Reformer Pilates Stüdyosu",
    description:
      "Antalya Muratpaşa'da AQ8 Wireless EMS Antrenmanı, Reformer Pilates, Fonksiyonel Antrenman ve Beslenme Danışmanlığı. Sinan Kal ile randevu: 0554 591 15 55",
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Fit EMS & Pilates | Antalya'nın Premium EMS ve Reformer Pilates Stüdyosu",
    description:
      "Antalya Muratpaşa'da AQ8 Wireless EMS Antrenmanı, Reformer Pilates, Fonksiyonel Antrenman ve Beslenme Danışmanlığı.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'fitness',
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // LocalBusiness structured data — boosts Google local SEO / rich results.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: SITE.name,
    image: `${SITE.url}/og.jpg`,
    url: SITE.url,
    telephone: '+905545911555',
    priceRange: SITE.priceRange,
    founder: { '@type': 'Person', name: SITE.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fener Mah. 1968 Sk. No:43 Yolgider İş Merkezi Kat:2',
      addressLocality: 'Muratpaşa',
      addressRegion: 'Antalya',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    sameAs: [SITE.instagramUrl],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
  };

  return (
    <html lang="tr" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="bg-[#0A0A0A] font-body text-[#F0F0F0] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
