interface NavbarProps {
  onOrderClick: () => void;
}

export function Navbar({onOrderClick}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-hairline)] bg-[var(--bg-canvas)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="shrink-0 whitespace-nowrap text-xl font-extrabold tracking-tight text-[var(--text-primary)]"
        >
          راینا
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="ناوبری اصلی"
          className="hidden items-center gap-7 text-sm font-medium text-[var(--text-secondary)] md:flex"
        >
          <a
            href="#craft"
            className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline hover:underline-offset-8"
          >
            طراحی و بدنه
          </a>
          <a
            href="#gallery"
            className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline hover:underline-offset-8"
          >
            گالری فضاها
          </a>
          <a
            href="#features"
            className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline hover:underline-offset-8"
          >
            قابلیت‌ها
          </a>
          <a
            href="#comparison"
            className="shrink-0 whitespace-nowrap transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline hover:underline-offset-8"
          >
            مقایسه نسخه‌ها
          </a>
        </nav>

        {/* Zone 3: 1 primary CTA */}
        <button
          type="button"
          onClick={onOrderClick}
          className="shrink-0 cursor-pointer whitespace-nowrap rounded-lg bg-[var(--accent-primary)] px-4 py-2 text-xs font-semibold text-[var(--accent-primary-fg)] transition-colors duration-150 hover:bg-[var(--accent-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
        >
          پیش‌خرید و همکاری
        </button>
      </div>
    </header>
  );
}
