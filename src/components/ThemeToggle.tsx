import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
  variant?: 'inline' | 'floating';
}

export function ThemeToggle({ theme, onToggle, variant = 'inline' }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  if (variant === 'floating') {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-label={isDark ? 'تغییر به حالت روشن گرم کتان' : 'تغییر به حالت تیره سبز جنگلی'}
        className="fixed bottom-5 left-5 z-40 inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-linen-border bg-linen-surface/95 px-3.5 py-2 text-xs font-medium text-ink-primary shadow-sm backdrop-blur-md transition-colors duration-200 hover:bg-linen-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-accent dark:border-forest-border dark:bg-forest-surface/95 dark:text-cream-ink dark:hover:bg-forest-elevated dark:focus-visible:outline-sage-accent"
      >
        {isDark ? (
          <>
            <Sun className="h-4 w-4 shrink-0 text-linen-cta" aria-hidden="true" />
            <span className="whitespace-nowrap">حالت گرم کتان</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4 shrink-0 text-forest-accent" aria-hidden="true" />
            <span className="whitespace-nowrap">حالت سبز تیره</span>
          </>
        )}
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label="انتخاب تم ظاهری صفحه"
      className="inline-flex items-center gap-1 rounded-xl border border-linen-border bg-linen-surface p-1 dark:border-forest-border dark:bg-forest-surface"
    >
      <button
        type="button"
        onClick={() => {
          if (isDark) onToggle();
        }}
        aria-pressed={!isDark}
        className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-150 ${
          !isDark
            ? 'bg-forest-accent text-linen-canvas'
            : 'text-cream-muted hover:text-cream-ink'
        }`}
      >
        <Sun className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>گرم کتان</span>
      </button>
      <button
        type="button"
        onClick={() => {
          if (!isDark) onToggle();
        }}
        aria-pressed={isDark}
        className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-150 ${
          isDark
            ? 'bg-linen-cta text-forest-canvas'
            : 'text-ink-secondary hover:text-ink-primary'
        }`}
      >
        <Moon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>سبز تیره</span>
      </button>
    </div>
  );
}
