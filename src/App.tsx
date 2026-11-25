import {useEffect, useState} from 'react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {DesignCraftSection} from './components/DesignCraftSection';
import {GalleryShowcase} from './components/GalleryShowcase';
import {FeaturesExplorer} from './components/FeaturesExplorer';
import {InquirySection} from './components/InquirySection';
import {Footer} from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('rayna-theme');
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    }
    return 'light';
  });

  const [inquiryMode, setInquiryMode] = useState<'personal' | 'b2b'>('personal');
  const [selectedEdition, setSelectedEdition] = useState<string>('نسخه خانگی و شخصی');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('rayna-theme', theme);
  }, [theme]);

  const scrollToInquiry = (mode: 'personal' | 'b2b' = 'personal', edition?: string) => {
    setInquiryMode(mode);
    if (edition) {
      setSelectedEdition(edition);
    } else {
      setSelectedEdition(
        mode === 'b2b' ? 'نسخه تجاری و فروشگاهی (B2B)' : 'نسخه خانگی و شخصی'
      );
    }
    const target = document.getElementById('inquiry');
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <Navbar onOrderClick={() => scrollToInquiry('personal')} />
      <main>
        <HeroSection
          theme={theme}
          onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
          onOrderClick={(mode) => scrollToInquiry(mode)}
        />
        <DesignCraftSection />
        <GalleryShowcase onOrderClick={(mode) => scrollToInquiry(mode)} />
        <FeaturesExplorer
          onSelectEdition={(mode, editionLabel) => scrollToInquiry(mode, editionLabel)}
        />
        <InquirySection initialMode={inquiryMode} selectedEdition={selectedEdition} />
      </main>
      <Footer />
    </div>
  );
}
