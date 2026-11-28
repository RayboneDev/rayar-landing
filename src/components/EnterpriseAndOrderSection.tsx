import { useState } from 'react';
import {
  ArrowUpLeft,
  Check,
  Copy,
  Globe,
  Mail,
  Phone,
  Send,
} from 'lucide-react';
import {
  ENTERPRISE_SOLUTIONS,
  RAYNA_CONTACT_CONFIG,
  RAYNA_MODELS,
  USE_CASE_PROFILES,
} from '../data/raynaContent';
import { RaynaMediaFrame } from './RaynaMediaFrame';
import { RaynaScreenBezel } from './RaynaScreenBezel';

export function EnterpriseAndOrderSection() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(USE_CASE_PROFILES[0].id);
  const activeScenario =
    USE_CASE_PROFILES.find((item) => item.id === activeScenarioId) ?? USE_CASE_PROFILES[0];

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === key ? null : current));
      }, 2000);
    } catch {
      setCopiedKey(null);
    }
  };

  return (
    <>
      {/* 08 | Business & Enterprise Solutions */}
      <section
        id="business"
        className="border-b border-linen-border py-20 sm:py-24 dark:border-forest-border"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-semibold tabular-nums text-brass-subtle dark:text-sage-accent">
                  ۰۸ · راهکارهای تجاری و سازمانی
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-primary sm:text-4xl dark:text-cream-ink">
                  راینا برای کسب‌وکارها
                </h2>
                <p className="mt-4 text-base leading-[1.85] text-ink-secondary dark:text-cream-muted">
                  راینا در محیط‌های تجاری و سازمانی نیز متناسب با هویت و نیاز هر کسب‌وکار
                  شخصی‌سازی می‌شود؛ از راهنمایی مراجعان در فروشگاه و نمایشگاه گرفته تا نمایش
                  شاخص‌های اختصاصی روی میز مدیران و کارمندان.
                </p>

                <div className="mt-8 divide-y divide-linen-border rounded-2xl border border-linen-border bg-linen-surface dark:divide-forest-border dark:border-forest-border dark:bg-forest-surface">
                  {ENTERPRISE_SOLUTIONS.map((solution, idx) => (
                    <div key={solution.id} className="p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-base font-bold text-ink-primary sm:text-lg dark:text-cream-ink">
                          <span className="ml-2 font-mono text-xs tabular-nums text-brass-subtle dark:text-sage-accent">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          {solution.name}
                        </h3>
                        <span className="text-xs text-ink-secondary dark:text-cream-muted">
                          {solution.deliverable}
                        </span>
                      </div>
                      <p className="mt-2.5 text-sm leading-[1.85] text-ink-secondary dark:text-cream-muted">
                        {solution.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <RaynaMediaFrame
                imageName="img8.png"
                alt="کاربرد گجت هوشمند رومیزی راینا در محیط‌های تجاری، پذیرش و میز مدیران"
                caption="راهکار اختصاصی برای پذیرش، نمایشگاه و تیم‌های سازمانی"
                chapterCode="۰۸ · ENTERPRISE"
                aspectClass="aspect-[4/3] lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 09 | Practical Use Cases & Interactive Environment Explorer */}
      <section className="border-b border-linen-border py-20 sm:py-24 dark:border-forest-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tabular-nums text-brass-subtle dark:text-sage-accent">
              ۰۹ · نمونه‌های کاربردی
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-primary sm:text-4xl dark:text-cream-ink">
              راینا متناسب با نیاز شما
            </h2>
            <p className="mt-4 text-base leading-[1.85] text-ink-secondary dark:text-cream-muted">
              راینا یک محصول با کاربرد ثابت و محدود نیست. شما می‌توانید متناسب با نیاز خود،
              از میان اندازه‌های مختلف نمایشگر و قابلیت‌های قابل ارائه، ترکیب دلخواهتان را
              انتخاب کنید. موارد زیر تنها نمونه‌هایی از نحوه استفاده از راینا هستند و به‌عنوان
              بسته‌های قطعی و از پیش تعیین‌شده محدود نمی‌شوند.
            </p>
          </div>

          {/* Interactive Environment Selector */}
          <div className="mt-10 rounded-2xl border border-linen-border bg-linen-surface p-6 sm:p-8 dark:border-forest-border dark:bg-forest-surface">
            <div
              role="tablist"
              aria-label="محیط و سبک استفاده از راینا"
              className="flex flex-wrap gap-1.5 border-b border-linen-border pb-5 dark:border-forest-border"
            >
              {USE_CASE_PROFILES.map((profile) => {
                const isSelected = profile.id === activeScenarioId;
                return (
                  <button
                    key={profile.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveScenarioId(profile.id)}
                    className={`min-h-[40px] rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                      isSelected
                        ? 'bg-forest-accent text-linen-canvas dark:bg-linen-cta dark:text-forest-canvas'
                        : 'bg-linen-canvas text-ink-secondary hover:bg-linen-muted hover:text-ink-primary dark:bg-forest-canvas dark:text-cream-muted dark:hover:bg-forest-elevated dark:hover:text-cream-ink'
                    }`}
                  >
                    {profile.environment}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold text-brass-subtle dark:text-sage-accent">
                  {activeScenario.recommendedEdition}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-ink-primary dark:text-cream-ink">
                  {activeScenario.environment}
                </h3>
                <p className="mt-3 text-sm leading-[1.85] text-ink-secondary sm:text-base dark:text-cream-muted">
                  {activeScenario.summary}
                </p>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {activeScenario.suggestedFeatures.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-ink-primary dark:text-cream-ink"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-accent dark:bg-sage-accent"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <RaynaScreenBezel editionLabel={activeScenario.screenPreviewTitle} compact>
                  <p className="text-lg font-bold text-[#F5F0E6]">
                    {activeScenario.environment}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed tabular-nums text-[#CFE0D5]">
                    {activeScenario.screenPreviewLine}
                  </p>
                  <p className="mt-4 border-t border-white/10 pt-3 text-xs text-[#9BB0A3]">
                    قابل ترکیب و شخصی‌سازی کامل از طریق اپلیکیشن
                  </p>
                </RaynaScreenBezel>
              </div>
            </div>
          </div>

          {/* Complete 5-Environment Structured Table */}
          <div className="mt-8 overflow-x-auto rounded-2xl border border-linen-border bg-linen-surface dark:border-forest-border dark:bg-forest-surface">
            <table className="w-full min-w-[600px] border-collapse text-right text-sm">
              <thead>
                <tr className="border-b border-linen-border bg-linen-muted/60 text-xs font-semibold text-ink-secondary dark:border-forest-border dark:bg-forest-elevated/60 dark:text-cream-muted">
                  <th className="px-6 py-4">محیط و سبک استفاده</th>
                  <th className="px-6 py-4">نمونه قابلیت‌های پیشنهادی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linen-border dark:divide-forest-border">
                {USE_CASE_PROFILES.map((profile) => {
                  const isActive = profile.id === activeScenarioId;
                  return (
                    <tr
                      key={profile.id}
                      onClick={() => setActiveScenarioId(profile.id)}
                      className={`cursor-pointer transition-colors duration-150 ${
                        isActive
                          ? 'bg-forest-accent/[0.07] dark:bg-sage-accent/10'
                          : 'hover:bg-linen-muted/40 dark:hover:bg-forest-elevated/40'
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-ink-primary whitespace-nowrap dark:text-cream-ink">
                        {profile.environment}
                      </td>
                      <td className="px-6 py-4 text-ink-secondary dark:text-cream-muted">
                        {profile.summary}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10 | Summary, Model Recap & Direct Contact Channels */}
      <section id="order" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tabular-nums text-brass-subtle dark:text-sage-accent">
              ۱۰ · جمع‌بندی و سفارش
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-primary sm:text-4xl dark:text-cream-ink">
              راینا را متناسب با نیاز خود انتخاب کنید
            </h2>
            <p className="mt-4 text-base leading-[1.85] text-ink-secondary dark:text-cream-muted">
              خانواده راینا با سه اندازه نمایشگر طراحی شده است تا دقیقاً همان چیزی را انتخاب
              کنید که با فضای میز و نیاز روزمره یا سازمانی شما هماهنگ است.
            </p>
          </div>

          {/* 3-Edition Side-by-Side Recap */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {RAYNA_MODELS.map((model) => (
              <article
                key={model.id}
                className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 ${
                  model.hasVoiceAi
                    ? 'border-forest-accent bg-forest-accent text-linen-canvas dark:border-sage-accent/60 dark:bg-forest-elevated dark:text-cream-ink'
                    : 'border-linen-border bg-linen-surface text-ink-primary dark:border-forest-border dark:bg-forest-surface dark:text-cream-ink'
                }`}
              >
                <div>
                  <p
                    className={`text-xs font-medium ${
                      model.hasVoiceAi
                        ? 'text-linen-canvas/80 dark:text-sage-accent'
                        : 'text-ink-secondary dark:text-cream-muted'
                    }`}
                  >
                    {model.position}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tabular-nums">{model.title}</h3>
                  <p
                    className={`mt-3 text-sm leading-[1.85] ${
                      model.hasVoiceAi
                        ? 'text-linen-canvas/90 dark:text-cream-muted'
                        : 'text-ink-secondary dark:text-cream-muted'
                    }`}
                  >
                    {model.shortSummary}
                  </p>
                </div>

                <div
                  className={`mt-6 border-t pt-4 text-xs font-medium ${
                    model.hasVoiceAi
                      ? 'border-white/15 text-linen-canvas/85 dark:border-forest-border dark:text-cream-ink'
                      : 'border-linen-border text-ink-secondary dark:border-forest-border dark:text-cream-muted'
                  }`}
                >
                  {model.hasVoiceAi
                    ? 'میکروفون و بلندگوی داخلی · هوش مصنوعی کامل'
                    : 'نمایشگر شفاف · ویجت‌های روزمره و شخصی‌سازی'}
                </div>
              </article>
            ))}
          </div>

          {/* Direct Contact & Order Channels */}
          <div className="mt-14 rounded-2xl border border-linen-border bg-linen-surface p-6 sm:p-10 dark:border-forest-border dark:bg-forest-surface">
            <div className="flex flex-col justify-between gap-4 border-b border-linen-border pb-6 md:flex-row md:items-end dark:border-forest-border">
              <div>
                <h3 className="text-xl font-bold text-ink-primary sm:text-2xl dark:text-cream-ink">
                  اطلاعات تماس، مشاوره و ثبت سفارش
                </h3>
                <p className="mt-2 text-sm text-ink-secondary dark:text-cream-muted">
                  برای دریافت مشاوره انتخاب مدل یا سفارش سازمانی، مستقیماً از طریق راه‌های ارتباطی زیر با تیم راینا در تماس باشید.
                </p>
              </div>
              <a
                href={RAYNA_CONTACT_CONFIG.phoneHref}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-forest-accent px-5 py-2.5 text-sm font-semibold text-linen-canvas whitespace-nowrap transition-colors hover:bg-forest-accent-hover dark:bg-linen-cta dark:text-forest-canvas dark:hover:bg-linen-cta-hover"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>تماس مستقیم با واحد فروش</span>
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Official Website */}
              <div className="flex flex-col justify-between rounded-xl border border-linen-border bg-linen-canvas/70 p-5 dark:border-forest-border dark:bg-forest-canvas/70">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink-secondary dark:text-cream-muted">
                    <Globe className="h-4 w-4 shrink-0 text-forest-accent dark:text-sage-accent" aria-hidden="true" />
                    <span>وب‌سایت رسمی</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy('website', RAYNA_CONTACT_CONFIG.websiteUrl)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-ink-secondary transition-colors hover:text-ink-primary dark:text-cream-muted dark:hover:text-cream-ink"
                  >
                    {copiedKey === 'website' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-forest-accent dark:text-sage-accent" aria-hidden="true" />
                        <span>کپی شد</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>کپی</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={RAYNA_CONTACT_CONFIG.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center justify-between gap-2 text-base font-bold text-ink-primary hover:underline dark:text-cream-ink"
                >
                  <span dir="ltr" className="truncate font-mono text-sm">
                    {RAYNA_CONTACT_CONFIG.websiteUrl.replace(/^https?:\/\//, '')}
                  </span>
                  <ArrowUpLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>

              {/* Sales & Consultation Phone */}
              <div className="flex flex-col justify-between rounded-xl border border-linen-border bg-linen-canvas/70 p-5 dark:border-forest-border dark:bg-forest-canvas/70">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink-secondary dark:text-cream-muted">
                    <Phone className="h-4 w-4 shrink-0 text-forest-accent dark:text-sage-accent" aria-hidden="true" />
                    <span>واحد فروش و مشاوره</span>
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        'phone',
                        RAYNA_CONTACT_CONFIG.phoneHref.replace(/^tel:/, '')
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-medium text-ink-secondary transition-colors hover:text-ink-primary dark:text-cream-muted dark:hover:text-cream-ink"
                  >
                    {copiedKey === 'phone' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-forest-accent dark:text-sage-accent" aria-hidden="true" />
                        <span>کپی شد</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>کپی</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={RAYNA_CONTACT_CONFIG.phoneHref}
                  className="mt-3 inline-flex items-center justify-between gap-2 text-base font-bold text-ink-primary hover:underline dark:text-cream-ink"
                >
                  <span className="tabular-nums">{RAYNA_CONTACT_CONFIG.phoneDisplay}</span>
                  <ArrowUpLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex flex-col justify-between rounded-xl border border-linen-border bg-linen-canvas/70 p-5 dark:border-forest-border dark:bg-forest-canvas/70">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink-secondary dark:text-cream-muted">
                  <Send className="h-4 w-4 shrink-0 text-forest-accent dark:text-sage-accent" aria-hidden="true" />
                  <span>شبکه‌های اجتماعی</span>
                </span>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-ink-primary dark:text-cream-ink">
                  <a
                    href={RAYNA_CONTACT_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-forest-accent hover:underline dark:hover:text-sage-accent"
                  >
                    <span>اینستاگرام</span>
                    <ArrowUpLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={RAYNA_CONTACT_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-forest-accent hover:underline dark:hover:text-sage-accent"
                  >
                    <span>تلگرام</span>
                    <ArrowUpLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={RAYNA_CONTACT_CONFIG.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-forest-accent hover:underline dark:hover:text-sage-accent"
                  >
                    <span>لینکدین</span>
                    <ArrowUpLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Support & Sales Email */}
              <div className="flex flex-col justify-between rounded-xl border border-linen-border bg-linen-canvas/70 p-5 dark:border-forest-border dark:bg-forest-canvas/70">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink-secondary dark:text-cream-muted">
                    <Mail className="h-4 w-4 shrink-0 text-forest-accent dark:text-sage-accent" aria-hidden="true" />
                    <span>پست الکترونیک فروش و پشتیبانی</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy('email', RAYNA_CONTACT_CONFIG.emailDisplay)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-ink-secondary transition-colors hover:text-ink-primary dark:text-cream-muted dark:hover:text-cream-ink"
                  >
                    {copiedKey === 'email' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-forest-accent dark:text-sage-accent" aria-hidden="true" />
                        <span>کپی شد</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>کپی</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={RAYNA_CONTACT_CONFIG.emailHref}
                  className="mt-3 inline-flex items-center justify-between gap-2 text-base font-bold text-ink-primary hover:underline dark:text-cream-ink"
                >
                  <span dir="ltr" className="truncate font-mono text-sm">
                    {RAYNA_CONTACT_CONFIG.emailDisplay}
                  </span>
                  <ArrowUpLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="border-t border-linen-border py-10 dark:border-forest-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="font-[var(--font-brand)] text-base font-bold tracking-wider text-ink-primary dark:text-cream-ink">
              RAYNA <span className="font-sans font-semibold text-ink-secondary dark:text-cream-muted">· راینا</span>
            </p>
            <p className="mt-1 text-xs text-ink-secondary dark:text-cream-muted">
              خانواده محصولات هوشمند رومیزی — یک همراه هوشمند، برای هر لحظه
            </p>
          </div>

          <nav
            aria-label="پیوندهای پاورقی"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-ink-secondary dark:text-cream-muted"
          >
            <a href="#family" className="hover:text-ink-primary dark:hover:text-cream-ink">
              معرفی مدل‌ها
            </a>
            <a href="#widgets" className="hover:text-ink-primary dark:hover:text-cream-ink">
              قابلیت‌های اطلاعاتی
            </a>
            <a href="#productivity" className="hover:text-ink-primary dark:hover:text-cream-ink">
              بهره‌وری
            </a>
            <a href="#ai" className="hover:text-ink-primary dark:hover:text-cream-ink">
              هوش مصنوعی ۴ اینچی
            </a>
            <a href="#business" className="hover:text-ink-primary dark:hover:text-cream-ink">
              کسب‌وکارها
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
