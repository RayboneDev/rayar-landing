import {useState} from 'react';
import {Sun, Moon, ArrowDownLeft} from 'lucide-react';
import {RaynaVisualSlot} from './RaynaVisualSlot';

interface HeroSectionProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOrderClick: (mode?: 'personal' | 'b2b') => void;
}

const HERO_PREVIEW_MODES: Array<{slotId: 1 | 4 | 3; label: string}> = [
  {slotId: 1, label: 'اکوالایزر صوتی'},
  {slotId: 4, label: 'داشبورد اتریوم'},
  {slotId: 3, label: 'بازی جفت شش'},
];

export function HeroSection({theme, onToggleTheme, onOrderClick}: HeroSectionProps) {
  const [previewSlot, setPreviewSlot] = useState<1 | 4 | 3>(1);

  return (
    <section id="hero" className="border-b border-[var(--border-hairline)] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Hero Toolbar: Maker Note & Light/Dark Theme Switch */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-hairline)] pb-5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
            <span>محصولی از نه بیتکس (NeBitx)</span>
            <span aria-hidden="true">·</span>
            <span>نمایشگر هوشمند رومیزی با بدنه چوب طبیعی</span>
          </div>

          <div
            role="group"
            aria-label="تغییر حالت روشنایی صفحه"
            className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-1"
          >
            <button
              type="button"
              onClick={() => theme !== 'light' && onToggleTheme()}
              className={`inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                theme === 'light'
                  ? 'bg-[var(--accent-primary)] text-[var(--accent-primary-fg)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sun className="h-3.5 w-3.5" />
              <span>کرم کتان</span>
            </button>
            <button
              type="button"
              onClick={() => theme !== 'dark' && onToggleTheme()}
              className={`inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                theme === 'dark'
                  ? 'bg-[var(--accent-primary)] text-[var(--accent-primary-fg)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Moon className="h-3.5 w-3.5" />
              <span>سبز جنگلی</span>
            </button>
          </div>
        </div>

        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div className="space-y-6">
              <h1
                className="text-balance-title font-extrabold leading-[1.2] tracking-tight text-[var(--text-primary)]"
                style={{fontSize: 'clamp(2.25rem, 4vw, 3.75rem)'}}
              >
                طراحی مینیمال، بیشترین تاثیر.
              </h1>

              <p className="max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                راینا یک نمایشگر هوشمند جمع‌وجور در قابی از چوب طبیعی بلوط و راش است؛ جایی که گرمای لمس‌شدنی طبیعت در سبک ژاپندی با شفافیت فناوری مدرن، نبض لحظه‌ای بازار و دستیار صوتی فارسی هم‌نشین می‌شود.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOrderClick('personal')}
                  className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-[var(--accent-primary-fg)] transition-colors duration-150 hover:bg-[var(--accent-primary-hover)]"
                >
                  <span>پیش‌خرید و استعلام همکاری</span>
                  <ArrowDownLeft className="h-4 w-4" />
                </button>
                <a
                  href="#features"
                  className="inline-flex items-center whitespace-nowrap rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors duration-150 hover:bg-[var(--bg-surface-elevated)]"
                >
                  بررسی ۳۲ قابلیت هوشمند
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-[var(--border-hairline)] pt-6 text-sm text-[var(--text-muted)]">
              مناسب میز کار شخصی، پاتختی اتاق خواب و پیشخوان کافه‌ها و فروشگاه‌های مدرن
            </div>
          </div>

          {/* Visual Focal Carrier */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] lg:col-span-6">
            <RaynaVisualSlot
              slotId={previewSlot}
              alt="نمایشگر هوشمند چوبی راینا روی میز کار مینیمال"
              className="aspect-[16/10] w-full flex-1 lg:min-h-[340px]"
            />

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-hairline)] px-5 py-3.5">
              <span className="text-xs font-medium text-[var(--text-muted)]">پیش‌نمایش حالت نمایشگر:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {HERO_PREVIEW_MODES.map((mode) => (
                  <button
                    key={mode.slotId}
                    type="button"
                    onClick={() => setPreviewSlot(mode.slotId)}
                    className={`cursor-pointer whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                      previewSlot === mode.slotId
                        ? 'bg-[var(--accent-primary)] text-[var(--accent-primary-fg)]'
                        : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Hardware Highlights Strip below Hero Split */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--border-hairline)] sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[var(--bg-surface)] p-6">
            <p className="text-xs font-medium text-[var(--text-muted)]">۰۱ · متریال بدنه</p>
            <p className="mt-2 text-base font-bold text-[var(--text-primary)]">چوب بلوط و راش طبیعی</p>
            <p className="mt-1.5 text-sm leading-6 text-[var(--text-secondary)]">
              لبه‌های نرم و گرد با رگه‌های دست‌ساز، الهام‌گرفته از طراحی اسکاندیناوی.
            </p>
          </div>
          <div className="bg-[var(--bg-surface)] p-6">
            <p className="text-xs font-medium text-[var(--text-muted)]">۰۲ · نمای جلویی</p>
            <p className="mt-2 text-base font-bold text-[var(--text-primary)]">نمایشگر هم‌سطح بدون دکمه</p>
            <p className="mt-1.5 text-sm leading-6 text-[var(--text-secondary)]">
              شیشه مشکی براق سرتاسری با کنتراست بالا و ظاهر کاملاً بدون سیم در نما.
            </p>
          </div>
          <div className="bg-[var(--bg-surface)] p-6">
            <p className="text-xs font-medium text-[var(--text-muted)]">۰۳ · راه‌اندازی و برق</p>
            <p className="mt-2 text-base font-bold text-[var(--text-primary)]">کد QR فوری و پورت USB-C</p>
            <p className="mt-1.5 text-sm leading-6 text-[var(--text-secondary)]">
              جفت‌سازی سریع با موبایل از طریق اسکن QR و اتصال تمیز کابل در بخش پایینی.
            </p>
          </div>
          <div className="bg-[var(--bg-surface)] p-6">
            <p className="text-xs font-medium text-[var(--text-muted)]">۰۴ · کاربری دوگانه</p>
            <p className="mt-2 text-base font-bold text-[var(--text-primary)]">شخصی و تجاری (B2B)</p>
            <p className="mt-1.5 text-sm leading-6 text-[var(--text-secondary)]">
              ۳۲ قابلیت نرم‌افزاری از نبض بیت‌کوین و طلا تا منشی صوتی و پنل فروشگاهی.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
