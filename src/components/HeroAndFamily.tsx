import { useState } from 'react';
import { ArrowDownLeft, Mic, Volume2 } from 'lucide-react';
import { RAYNA_MODELS, type RaynaModelId } from '../data/raynaContent';
import { RaynaMediaFrame } from './RaynaMediaFrame';
import { ThemeToggle } from './ThemeToggle';

interface HeroAndFamilyProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function HeroAndFamily({ theme, onToggleTheme }: HeroAndFamilyProps) {
  const [selectedModelId, setSelectedModelId] = useState<RaynaModelId>('4');
  const activeModel =
    RAYNA_MODELS.find((model) => model.id === selectedModelId) ?? RAYNA_MODELS[2];

  return (
    <>
      {/* 01 | Hero */}
      <section className="border-b border-linen-border py-14 sm:py-20 lg:py-24 dark:border-forest-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Editorial Copy Column */}
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="text-xs font-medium text-ink-secondary dark:text-cream-muted">
                  <span>خانواده محصولات هوشمند راینا</span>
                  <span className="mx-2" aria-hidden="true">
                    ·
                  </span>
                  <span className="font-[var(--font-brand)] tracking-wider">RAYNA</span>
                </p>

                <h1 className="mt-5 text-[clamp(2.2rem,4.2vw,3.5rem)] font-extrabold leading-[1.2] tracking-tight text-ink-primary dark:text-cream-ink">
                  یک همراه هوشمند، برای هر لحظه
                </h1>

                <p className="mt-5 max-w-xl text-base leading-[1.85] text-ink-secondary sm:text-lg dark:text-cream-muted">
                  گجت‌های هوشمند رومیزی با نمایشگر اختصاصی برای خانه، میز کار و کسب‌وکار.
                  طراحی مینیمال رومیزی با نمایشگر شفاف و قابل شخصی‌سازی برای اطلاعات روزمره،
                  مدیریت زمان و تعامل هوشمند.
                </p>

                <p className="mt-5 text-sm font-medium text-ink-primary dark:text-cream-ink">
                  <span className="text-ink-secondary dark:text-cream-muted">
                    عرضه‌شده در سه اندازه نمایشگر:
                  </span>{' '}
                  <span className="tabular-nums">نسخه ۲.۴ اینچی</span>
                  <span className="mx-2 text-ink-secondary/60 dark:text-cream-muted/60" aria-hidden="true">
                    /
                  </span>
                  <span className="tabular-nums">نسخه ۲.۸ اینچی</span>
                  <span className="mx-2 text-ink-secondary/60 dark:text-cream-muted/60" aria-hidden="true">
                    /
                  </span>
                  <span className="tabular-nums">نسخه پیشرفته ۴ اینچی</span>
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#order"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-forest-accent px-6 py-3 text-sm font-semibold text-linen-canvas whitespace-nowrap transition-colors duration-200 hover:bg-forest-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-accent dark:bg-linen-cta dark:text-forest-canvas dark:hover:bg-linen-cta-hover dark:focus-visible:outline-sage-accent"
                  >
                    <span>انتخاب مدل و سفارش</span>
                    <ArrowDownLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    href="#widgets"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-linen-border px-5 py-3 text-sm font-medium text-ink-primary whitespace-nowrap transition-colors duration-200 hover:bg-linen-muted dark:border-forest-border dark:text-cream-ink dark:hover:bg-forest-surface"
                  >
                    پیش‌نمایش زنده ویجت‌ها
                  </a>
                </div>
              </div>

              {/* Hero Utility Bar: Theme switcher cleanly kept outside the 3-zone top bar */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-linen-border pt-6 dark:border-forest-border">
                <span className="text-xs text-ink-secondary dark:text-cream-muted">
                  نمای صفحه را متناسب با نور محیط امتحان کنید
                </span>
                <ThemeToggle theme={theme} onToggle={onToggleTheme} variant="inline" />
              </div>
            </div>

            {/* Dominant Visual Focal Carrier (img1.png) */}
            <div className="flex flex-col lg:col-span-6">
              <div className="h-full">
                <RaynaMediaFrame
                  imageName="img1.png"
                  alt="خانواده محصولات هوشمند رومیزی راینا با طراحی مینیمال در سه اندازه ۲.۴، ۲.۸ و ۴ اینچی"
                  caption="نمای اصلی خانواده محصولات هوشمند راینا"
                  chapterCode="۰۱ · RAYNA"
                  aspectClass="aspect-[4/3] lg:h-full lg:min-h-[430px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 | Family Introduction & Interactive Model Selector */}
      <section
        id="family"
        className="border-b border-linen-border py-20 sm:py-24 dark:border-forest-border"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tabular-nums text-brass-subtle dark:text-sage-accent">
                ۰۲ · معرفی خانواده راینا
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-primary sm:text-4xl dark:text-cream-ink">
                راینا چیست؟
              </h2>
              <p className="mt-5 text-base leading-[1.9] text-ink-secondary dark:text-cream-muted">
                راینا خانواده‌ای از گجت‌های هوشمند رومیزی با نمایشگر است که اطلاعات روزمره،
                ابزارهای مدیریت زمان، اعلان‌ها، قابلیت‌های تعاملی و امکانات هوشمند را در یک
                دستگاه یکپارچه گرد هم می‌آورد. راینا صرفاً یک ساعت رومیزی یا نمایشگر ثابت
                نیست؛ بلکه همراهی کاربردی است که روی میز کار، در فضای خانه یا در محیط‌های
                تجاری در کنار شما قرار می‌گیرد.
              </p>

              {/* Editorial Pull-Quote (hairline border, no thick left/right bar) */}
              <blockquote className="mt-7 rounded-2xl border border-linen-border bg-linen-surface p-6 text-base font-medium leading-[1.85] text-ink-primary dark:border-forest-border dark:bg-forest-surface dark:text-cream-ink">
                «راینا با توجه به نیاز شما شخصی‌سازی می‌شود؛ از نمایش اطلاعات روزمره تا مدیریت
                کارها و تعامل هوشمند.»
              </blockquote>
            </div>

            <div className="lg:col-span-5">
              <RaynaMediaFrame
                imageName="img2.png"
                alt="مقایسه سه اندازه نمایشگر خانواده راینا در محیط میز کار"
                caption="سه اندازه نمایشگر متناسب با فضای میز شما"
                chapterCode="۰۲ · MODELS"
                aspectClass="aspect-[4/3]"
              />
            </div>
          </div>

          {/* Interactive Model Selector */}
          <div className="mt-14 rounded-2xl border border-linen-border bg-linen-surface p-6 sm:p-8 dark:border-forest-border dark:bg-forest-surface">
            <div className="flex flex-col justify-between gap-5 border-b border-linen-border pb-6 md:flex-row md:items-center dark:border-forest-border">
              <div>
                <h3 className="text-lg font-bold text-ink-primary sm:text-xl dark:text-cream-ink">
                  سه اندازه نمایشگر برای انتخاب متناسب با نیاز شما
                </h3>
                <p className="mt-1 text-sm text-ink-secondary dark:text-cream-muted">
                  روی هر نسخه کلیک کنید تا تناسب ابعاد و قابلیت‌های اختصاصی آن را مقایسه کنید.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="انتخاب اندازه نمایشگر راینا"
                className="inline-flex w-full items-center gap-1 rounded-xl border border-linen-border bg-linen-canvas p-1 sm:w-auto dark:border-forest-border dark:bg-forest-canvas"
              >
                {RAYNA_MODELS.map((model) => {
                  const isSelected = model.id === selectedModelId;
                  return (
                    <button
                      key={model.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSelectedModelId(model.id)}
                      className={`min-h-[40px] flex-1 rounded-lg px-4 py-2 text-xs font-semibold tabular-nums whitespace-nowrap transition-colors duration-150 sm:flex-none ${
                        isSelected
                          ? 'bg-forest-accent text-linen-canvas dark:bg-linen-cta dark:text-forest-canvas'
                          : 'text-ink-secondary hover:text-ink-primary dark:text-cream-muted dark:hover:text-cream-ink'
                      }`}
                    >
                      {model.sizeLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Visual Proportion & Model Details */}
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-12">
              <div className="flex flex-col items-center justify-center rounded-xl border border-linen-border bg-linen-canvas/70 px-6 py-10 lg:col-span-5 dark:border-forest-border dark:bg-forest-canvas/80">
                <div
                  style={{
                    width: `${activeModel.screenScale.widthPx}px`,
                    height: `${activeModel.screenScale.heightPx}px`,
                  }}
                  className="flex max-w-full flex-col justify-between rounded-2xl border border-ink-primary/25 bg-[#122019] p-4 text-[#F3EDE1] transition-all duration-300 dark:border-sage-accent/35"
                >
                  <div className="flex items-center justify-between text-[11px] text-[#A4B5AA]">
                    <span className="tabular-nums">{activeModel.sizeLabel}</span>
                    <span className="font-[var(--font-brand)] tracking-widest">RAYNA</span>
                  </div>
                  <div className="my-auto text-center">
                    <p className="text-2xl font-bold tabular-nums tracking-tight sm:text-3xl">
                      ۱۰:۲۴
                    </p>
                    <p className="mt-1 text-xs text-[#C6D2C9]">{activeModel.position}</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#A4B5AA]">
                    <span>۱۸° نیمه‌ابری</span>
                    {activeModel.hasVoiceAi ? (
                      <span className="inline-flex items-center gap-1 text-sage-accent">
                        <Mic className="h-3 w-3" aria-hidden="true" />
                        <span>صوتی + AI</span>
                      </span>
                    ) : (
                      <span>ویجت‌های هوشمند</span>
                    )}
                  </div>
                </div>
                <p className="mt-5 text-xs text-ink-secondary tabular-nums dark:text-cream-muted">
                  تناسب تقریبی نمایشگر {activeModel.sizeLabel} در خانواده راینا
                </p>
              </div>

              <div className="lg:col-span-7">
                <p className="text-xs font-medium text-brass-subtle dark:text-sage-accent">
                  {activeModel.position}
                </p>
                <h4 className="mt-1.5 text-2xl font-bold text-ink-primary tabular-nums dark:text-cream-ink">
                  {activeModel.title}
                </h4>
                <p className="mt-3 text-sm leading-[1.85] text-ink-secondary sm:text-base dark:text-cream-muted">
                  {activeModel.features}
                </p>

                <ul className="mt-6 space-y-3 border-t border-linen-border pt-5 dark:border-forest-border">
                  {activeModel.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink-primary dark:text-cream-ink"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-accent dark:bg-sage-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {activeModel.hasVoiceAi && (
                  <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-linen-border pt-5 text-xs font-medium text-forest-accent dark:border-forest-border dark:text-sage-accent">
                    <span className="inline-flex items-center gap-1.5">
                      <Mic className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>میکروفون اختصاصی داخلی</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Volume2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>بلندگوی اختصاصی (منحصراً در نسخه ۴ اینچی)</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Complete Model Comparison Table */}
          <div className="mt-10 overflow-x-auto rounded-2xl border border-linen-border bg-linen-surface dark:border-forest-border dark:bg-forest-surface">
            <table className="w-full min-w-[640px] border-collapse text-right text-sm">
              <thead>
                <tr className="border-b border-linen-border bg-linen-muted/60 text-xs font-semibold text-ink-secondary dark:border-forest-border dark:bg-forest-elevated/60 dark:text-cream-muted">
                  <th className="px-6 py-4">نسخه محصول</th>
                  <th className="px-6 py-4">جایگاه در خانواده راینا</th>
                  <th className="px-6 py-4">ویژگی‌های اصلی و کاربرد</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linen-border dark:divide-forest-border">
                {RAYNA_MODELS.map((model) => {
                  const isActive = model.id === selectedModelId;
                  return (
                    <tr
                      key={model.id}
                      onClick={() => setSelectedModelId(model.id)}
                      className={`cursor-pointer transition-colors duration-150 ${
                        isActive
                          ? 'bg-forest-accent/[0.07] dark:bg-sage-accent/10'
                          : 'hover:bg-linen-muted/40 dark:hover:bg-forest-elevated/40'
                      }`}
                    >
                      <td className="px-6 py-4 font-bold tabular-nums text-ink-primary whitespace-nowrap dark:text-cream-ink">
                        {model.title}
                      </td>
                      <td className="px-6 py-4 text-ink-secondary whitespace-nowrap dark:text-cream-muted">
                        {model.position}
                      </td>
                      <td className="px-6 py-4 leading-relaxed text-ink-primary dark:text-cream-ink">
                        {model.features}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
