import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EMSNedir from '@/components/EMSNedir';
import Hizmetler from '@/components/Hizmetler';
import Galeri from '@/components/Galeri';
import Yorumlar from '@/components/Yorumlar';
import Stats from '@/components/Stats';
import Iletisim from '@/components/Iletisim';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EMSNedir />
        <Hizmetler />
        <Galeri />
        <Yorumlar />
        <Stats />
        <Iletisim />
      </main>
      <Footer />
    </>
  );
}
