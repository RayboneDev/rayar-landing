export function Footer() {
  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-surface)] py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 px-6 md:flex-row md:items-center">
        <div className="space-y-2">
          <p className="text-lg font-extrabold text-[var(--text-primary)]">راینا · نه بیتکس (NeBitx)</p>
          <p className="text-xs leading-6 text-[var(--text-secondary)]">
            نمایشگر هوشمند رومیزی با بدنه چوب طبیعی بلوط و راش، همراه همیشگی میز کار و پیشخوان کسب‌وکارها.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[var(--text-secondary)]">
          <a href="#craft" className="hover:text-[var(--text-primary)]">
            طراحی و بدنه
          </a>
          <a href="#gallery" className="hover:text-[var(--text-primary)]">
            گالری ۸ سناریو
          </a>
          <a href="#features" className="hover:text-[var(--text-primary)]">
            ۳۲ قابلیت
          </a>
          <a href="#comparison" className="hover:text-[var(--text-primary)]">
            مقایسه نسخه‌ها
          </a>
          <a href="#inquiry" className="hover:text-[var(--text-primary)]">
            پیش‌خرید و B2B
          </a>
        </div>
      </div>
    </footer>
  );
}
