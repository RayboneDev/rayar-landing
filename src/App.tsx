import { useEffect, useState } from 'react';
import { EnterpriseAndOrderSection } from './components/EnterpriseAndOrderSection';
import { ExperienceAndAiSection } from './components/ExperienceAndAiSection';
import { HeroAndFamily } from './components/HeroAndFamily';
import { SmartWidgetsSection } from './components/SmartWidgetsSection';
import { ThemeToggle } from './components/ThemeToggle';

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'rayna-theme';

function readInitialTheme(): ThemeMode {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions
  }
  // Confirmed default: Warm Linen Light Mode (گرم کتان)
  return 'light';
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage access restrictions
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-linen-canvas text-ink-primary transition-colors duration-200 dark:bg-forest-canvas dark:text-cream-ink">
      {/* Strict 3-Zone Top Bar Contract: [Brand wordmark] — [5 single-line links] — [1 primary CTA] */}
      <header className="sticky top-0 z-30 border-b border-linen-border bg-linen-canvas/90 backdrop-blur-md dark:border-forest-border dark:bg-forest-canvas/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-5 py-3.5 sm:px-8">
          {/* Zone 1: Single-element brand wordmark */}
          <a
            href="#"
            className="font-[var(--font-brand)] text-lg font-bold tracking-wider text-ink-primary whitespace-nowrap shrink-0 dark:text-cream-ink"
          >
            RAYNA
          </a>

          {/* Zone 2: 5 concise single-line text navigation links */}
          <nav
            aria-label="ناوبری اصلی"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-secondary dark:text-cream-muted"
          >
            <a
              href="#family"
              className="whitespace-nowrap shrink-0 transition-colors hover:text-ink-primary hover:underline underline-offset-4 dark:hover:text-cream-ink"
            >
              مدل‌ها
            </a>
            <a
              href="#widgets"
              className="whitespace-nowrap shrink-0 transition-colors hover:text-ink-primary hover:underline underline-offset-4 dark:hover:text-cream-ink"
            >
              ویجت‌ها
            </a>
            <a
              href="#productivity"
              className="whitespace-nowrap shrink-0 transition-colors hover:text-ink-primary hover:underline underline-offset-4 dark:hover:text-cream-ink"
            >
              بهره‌وری
            </a>
            <a
              href="#ai"
              className="whitespace-nowrap shrink-0 transition-colors hover:text-ink-primary hover:underline underline-offset-4 dark:hover:text-cream-ink"
            >
              هوش مصنوعی
            </a>
            <a
              href="#business"
              className="whitespace-nowrap shrink-0 transition-colors hover:text-ink-primary hover:underline underline-offset-4 dark:hover:text-cream-ink"
            >
              کسب‌وکارها
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <a
            href="#order"
            className="inline-flex min-h-[40px] items-center justify-center rounded-xl bg-forest-accent px-4 py-2 text-xs font-semibold text-linen-canvas whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-forest-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-accent dark:bg-linen-cta dark:text-forest-canvas dark:hover:bg-linen-cta-hover dark:focus-visible:outline-sage-accent"
          >
            تماس و سفارش
          </a>
        </div>
      </header>

      <main>
        <HeroAndFamily theme={theme} onToggleTheme={toggleTheme} />
        <SmartWidgetsSection />
        <ExperienceAndAiSection />
        <EnterpriseAndOrderSection />
      </main>

      {/* Always-reachable floating theme switch (Warm Linen <-> Deep Forest Green) */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} variant="floating" />
    </div>
  );
}
