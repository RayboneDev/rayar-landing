import { useEffect, useState } from 'react';
import { Mic, Volume2 } from 'lucide-react';
import { AI_CAPABILITIES, EXPERIENTIAL_FEATURES } from '../data/raynaContent';
import { RaynaMediaFrame } from './RaynaMediaFrame';

export function ExperienceAndAiSection() {
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'دم عمیق (۴ ثانیه)' | 'بازدم آرام (۴ ثانیه)'>(
    'دم عمیق (۴ ثانیه)'
  );
  const [activeAiId, setActiveAiId] = useState<string>(AI_CAPABILITIES[0].id);
  const activeAi =
    AI_CAPABILITIES.find((item) => item.id === activeAiId) ?? AI_CAPABILITIES[0];

  useEffect(() => {
    if (!breathingActive) return;
    setBreathPhase('دم عمیق (۴ ثانیه)');
    const interval = window.setInterval(() => {
      setBreathPhase((prev) =>
        prev === 'دم عمیق (۴ ثانیه)' ? 'بازدم آرام (۴ ثانیه)' : 'دم عمیق (۴ ثانیه)'
      );
    }, 4000);
    return () => window.clearInterval(interval);
  }, [breathingActive]);

  return (
    <>
      {/* 06 | Beyond a Display */}
      <section className="border-b border-linen-border py-20 sm:py-24 dark:border-forest-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tabular-nums text-brass-subtle dark:text-sage-accent">
                ۰۶ · فراتر از یک نمایشگر
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-primary sm:text-4xl dark:text-cream-ink">
                تجربه تعاملی و کاربردهای روزمره
              </h2>
              <p className="mt-4 text-base leading-[1.85] text-ink-secondary dark:text-cream-muted">
                راینا تنها برای نمایش عدد و متن نیست؛ قابلیت‌های تعاملی و مراقبتی آن حس زنده
                بودن را به فضای میز کار و خانه می‌آورند و در لحظات مختلف روز همراه شما هستند.
              </p>

              <div className="mt-8">
                <RaynaMediaFrame
                  imageName="img6.png"
                  alt="شخصیت دیجیتال متحرک، دستیار ریلکسینگ و کنترل خانه هوشمند روی راینا"
                  caption="حس زنده، مراقبت روزمره و آرامش روی میز"
                  chapterCode="۰۶ · COMPANION"
                  aspectClass="aspect-[4/3]"
                />
              </div>
            </div>

            {/* Asymmetric 5-Feature Editorial Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {EXPERIENTIAL_FEATURES.map((feature, index) => {
                const isWide = index === 2;
                return (
                  <article
                    key={feature.id}
                    className={`rounded-2xl border border-linen-border bg-linen-surface p-6 dark:border-forest-border dark:bg-forest-surface ${
                      isWide ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <p className="text-xs font-medium text-ink-secondary dark:text-cream-muted">
                      {feature.contextTag}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-ink-primary dark:text-cream-ink">
                      {feature.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.8] text-ink-secondary dark:text-cream-muted">
                      {feature.description}
                    </p>

                    {feature.interactiveType === 'breathing' && (
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-linen-border pt-4 dark:border-forest-border">
                        <div className="flex items-center gap-3">
                          <div
                            aria-hidden="true"
                            className={`h-9 w-9 rounded-full border border-forest-accent/40 bg-forest-accent/15 dark:border-sage-accent/50 dark:bg-sage-accent/20 ${
                              breathingActive ? 'animate-rayna-breathe' : ''
                            }`}
                          />
                          <div>
                            <p className="text-xs font-semibold text-ink-primary dark:text-cream-ink">
                              {breathingActive ? breathPhase : 'تمرین ریتم تنفس آرام'}
                            </p>
                            <p className="text-xs text-ink-secondary dark:text-cream-muted">
                              ریتم منظم ۴ ثانیه دم / ۴ ثانیه بازدم
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setBreathingActive((prev) => !prev)}
                          className="min-h-[38px] rounded-lg border border-linen-border bg-linen-canvas px-4 py-1.5 text-xs font-semibold text-ink-primary whitespace-nowrap transition-colors hover:bg-linen-muted dark:border-forest-border dark:bg-forest-canvas dark:text-cream-ink dark:hover:bg-forest-elevated"
                        >
                          {breathingActive ? 'توقف تمرین' : 'آغاز تمرین تنفس'}
                        </button>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 07 | AI & Voice Interaction — Dedicated Deep Forest Green Architectural Spotlight */}
      <section
        id="ai"
        className="border-b border-forest-border bg-forest-canvas py-20 text-cream-ink sm:py-24 dark:bg-forest-surface"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tabular-nums text-sage-accent">
                ۰۷ · هوش مصنوعی و تعامل صوتی
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-cream-ink sm:text-4xl">
                راینا، همراه هوشمند شما
              </h2>
              <p className="mt-4 text-base leading-[1.85] text-cream-muted">
                در نسخه ۴ اینچی، راینا از یک نمایشگر هوشمند فراتر می‌رود و به یک دستیار
                تعاملی تبدیل می‌شود که می‌توانید با آن صحبت کنید، کارهایتان را بسپارید و در
                یادگیری یا برنامه‌ریزی از آن کمک بگیرید.
              </p>

              {/* Explicit Exclusivity Notice */}
              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-forest-border bg-forest-elevated/70 px-5 py-4 text-sm text-cream-ink">
                <div className="flex items-center gap-2 text-sage-accent">
                  <Mic className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <Volume2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                </div>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-linen-cta">توجه:</strong> تمام
                  قابلیت‌های هوش مصنوعی و تعامل صوتی این بخش منحصراً در{' '}
                  <strong className="font-semibold text-linen-cta">
                    نسخه پیشرفته ۴ اینچی راینا
                  </strong>{' '}
                  ارائه می‌شوند.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <RaynaMediaFrame
                imageName="img1.png"
                alt="نسخه پیشرفته ۴ اینچی راینا مجهز به هوش مصنوعی، میکروفون و بلندگوی اختصاصی"
                caption="نسخه ۴ اینچی با میکروفون، بلندگو و هوش مصنوعی"
                chapterCode="۰۷ · 4-INCH AI"
                aspectClass="aspect-[4/3]"
                darkSurface
              />
            </div>
          </div>

          {/* Interactive Voice Prompt / Response Preview */}
          <div className="mt-10 rounded-2xl border border-forest-border bg-forest-elevated/60 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-forest-border pb-4">
              <span className="text-xs font-medium text-cream-muted">
                نمونه تعامل صوتی — برای مشاهده سناریوی هر قابلیت، روی یکی از موارد زیر کلیک کنید
              </span>
              <span className="text-xs font-semibold text-sage-accent">{activeAi.name}</span>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-forest-border bg-forest-canvas/80 p-5">
                <p className="text-xs text-cream-muted">فرمان صوتی کاربر</p>
                <p className="mt-2 text-base font-semibold leading-relaxed text-linen-cta">
                  {activeAi.samplePrompt}
                </p>
              </div>
              <div className="rounded-xl border border-sage-accent/30 bg-forest-surface p-5">
                <p className="text-xs text-sage-accent">پاسخ هوشمند راینا ۴ اینچی</p>
                <p className="mt-2 text-sm leading-[1.85] text-cream-ink">
                  {activeAi.sampleReply}
                </p>
              </div>
            </div>
          </div>

          {/* Complete 9 AI Capabilities Interactive Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AI_CAPABILITIES.map((capability, idx) => {
              const isSelected = capability.id === activeAiId;
              return (
                <button
                  key={capability.id}
                  type="button"
                  onClick={() => setActiveAiId(capability.id)}
                  className={`flex flex-col justify-between rounded-2xl border p-5 text-right transition-colors duration-150 ${
                    isSelected
                      ? 'border-linen-cta bg-forest-elevated text-cream-ink'
                      : 'border-forest-border bg-forest-canvas/55 text-cream-ink hover:bg-forest-elevated/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-cream-ink">{capability.name}</h3>
                      <span className="font-mono text-xs tabular-nums text-cream-muted">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm leading-[1.8] text-cream-muted">
                      {capability.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
