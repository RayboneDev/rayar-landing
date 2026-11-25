import {useState} from 'react';
import {GALLERY_SCENARIOS} from '../data/raynaData';
import {RaynaVisualSlot} from './RaynaVisualSlot';

interface GalleryShowcaseProps {
  onOrderClick: (mode?: 'personal' | 'b2b') => void;
}

export function GalleryShowcase({onOrderClick}: GalleryShowcaseProps) {
  const [activeSlot, setActiveSlot] = useState<number>(0);
  const current = GALLERY_SCENARIOS[activeSlot];

  return (
    <section id="gallery" className="border-b border-[var(--border-hairline)] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold text-[var(--accent-wood)]">
              گالری ۸ سناریوی کاربردی · از میز کار خانگی تا پیشخوان کافه
            </p>
            <h2 className="text-balance-title text-2xl font-extrabold leading-snug text-[var(--text-primary)] md:text-4xl">
              راینا در محیط کار و فضای تجاری شما
            </h2>
          </div>

        </div>

        {/* Interactive Featured Gallery Split */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] lg:col-span-7">
            <RaynaVisualSlot
              slotId={current.slotId}
              alt={current.title}
              className="aspect-[16/10] w-full lg:h-full lg:min-h-[380px]"
            />
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 lg:col-span-5">
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>{current.tag}</span>
                <span className="font-mono-tabular">{current.slotId} / 8</span>
              </div>

              <h3 className="text-xl font-bold leading-snug text-[var(--text-primary)] md:text-2xl">
                {current.title}
              </h3>

              <p className="text-sm font-medium text-[var(--accent-primary)]">{current.subtitle}</p>

              <p className="text-sm leading-7 text-[var(--text-secondary)]">{current.description}</p>

              <ul className="space-y-2 border-t border-[var(--border-hairline)] pt-4 text-sm text-[var(--text-secondary)]">
                {current.highlights.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-[var(--border-hairline)] pt-5">
              <button
                type="button"
                onClick={() => onOrderClick(current.slotId === 5 ? 'b2b' : 'personal')}
                className="cursor-pointer whitespace-nowrap rounded-lg bg-[var(--accent-primary)] px-4 py-2 text-xs font-semibold text-[var(--accent-primary-fg)] transition-colors duration-150 hover:bg-[var(--accent-primary-hover)]"
              >
                {current.slotId === 5 ? 'درخواست نسخه کافه و فروشگاه' : 'پیش‌خرید این مدل'}
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlot((prev) => (prev - 1 + GALLERY_SCENARIOS.length) % GALLERY_SCENARIOS.length)
                  }
                  className="cursor-pointer whitespace-nowrap rounded-lg border border-[var(--border-hairline)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-elevated)] hover:text-[var(--text-primary)]"
                >
                  قبلی
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlot((prev) => (prev + 1) % GALLERY_SCENARIOS.length)}
                  className="cursor-pointer whitespace-nowrap rounded-lg border border-[var(--border-hairline)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-elevated)] hover:text-[var(--text-primary)]"
                >
                  بعدی
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Adjacent Commercial B2B vs Personal Workspace Context */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8">
            <div className="space-y-3">
              <p className="text-xs font-medium text-[var(--text-muted)]">محیط تجاری و کافه‌ها · اسلات ۵</p>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                کسب‌وکار خود را متمایز کنید؛ نقطه‌ای برای گفت‌وگو روی پیشخوان
              </h3>
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                استقرار راینا در کنار دستگاه کارت‌خوان (POS) با نمایش قیمت لحظه‌ای بیت‌کوین، اتریوم و طلا، به مشتریان پیام می‌دهد که فروشگاه یا کافه شما مدرن، پیشرو و همگام با اقتصاد دیجیتال است.
              </p>
            </div>
            <div className="mt-6 pt-4">
              <button
                type="button"
                onClick={() => onOrderClick('b2b')}
                className="cursor-pointer whitespace-nowrap text-sm font-semibold text-[var(--accent-primary)] underline underline-offset-8 hover:text-[var(--accent-primary-hover)]"
              >
                ثبت درخواست همکاری تجاری و شعب
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8">
            <div className="space-y-3">
              <p className="text-xs font-medium text-[var(--text-muted)]">فضای کار شخصی · اسلات ۴ و ۶</p>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                نبض روزانه بازار روی میز شما، بدون حواس‌پرتی موبایل
              </h3>
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                با نمایش نمودار اتریوم و نرخ دارایی‌ها با تغییرات سبز (+۱.۵۱٪) و قرمز (-۱.۹۵٪) در کنار لپ‌تاپ و دفترچه یادداشت، همیشه مطلع بمانید بی‌آنکه درگیر شبکه‌های اجتماعی گوشی شوید.
              </p>
            </div>
            <div className="mt-6 pt-4">
              <button
                type="button"
                onClick={() => onOrderClick('personal')}
                className="cursor-pointer whitespace-nowrap text-sm font-semibold text-[var(--accent-primary)] underline underline-offset-8 hover:text-[var(--accent-primary-hover)]"
              >
                سفارش نسخه شخصی میز کار
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
