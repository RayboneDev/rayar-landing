import { useEffect, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import {
  CONNECTIVITY_FEATURES,
  INFO_WIDGETS,
  PRODUCTIVITY_TOOLS,
  type ProductivityToolId,
} from '../data/raynaContent';
import { RaynaMediaFrame } from './RaynaMediaFrame';
import { RaynaScreenBezel } from './RaynaScreenBezel';

function formatTimerClock(totalSeconds: number): string {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function formatStopwatchClock(totalSeconds: number): string {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function SmartWidgetsSection() {
  const [activeWidgetId, setActiveWidgetId] = useState<string>(INFO_WIDGETS[0].id);
  const activeWidget =
    INFO_WIDGETS.find((w) => w.id === activeWidgetId) ?? INFO_WIDGETS[0];

  const [activeToolId, setActiveToolId] = useState<ProductivityToolId>('timer');
  const activeTool =
    PRODUCTIVITY_TOOLS.find((t) => t.id === activeToolId) ?? PRODUCTIVITY_TOOLS[1];

  // Interactive Pomodoro timer (starts at 24:59 as described in the brief)
  const [pomodoroSeconds, setPomodoroSeconds] = useState<number>(24 * 60 + 59);
  const [pomodoroRunning, setPomodoroRunning] = useState<boolean>(false);

  // Interactive Stopwatch (starts at 00:18:42 as described in the brief)
  const [stopwatchSeconds, setStopwatchSeconds] = useState<number>(18 * 60 + 42);
  const [stopwatchRunning, setStopwatchRunning] = useState<boolean>(false);

  const [activeConnectId, setActiveConnectId] = useState<string>(
    CONNECTIVITY_FEATURES[0].id
  );
  const activeConnect =
    CONNECTIVITY_FEATURES.find((c) => c.id === activeConnectId) ??
    CONNECTIVITY_FEATURES[0];

  useEffect(() => {
    if (!pomodoroRunning) return;
    const interval = window.setInterval(() => {
      setPomodoroSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [pomodoroRunning]);

  useEffect(() => {
    if (!stopwatchRunning) return;
    const interval = window.setInterval(() => {
      setStopwatchSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [stopwatchRunning]);

  return (
    <>
      {/* 03 | Informational Capabilities + Live RAYNA Screen Simulator */}
      <section
        id="widgets"
        className="border-b border-linen-border py-20 sm:py-24 dark:border-forest-border"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tabular-nums text-brass-subtle dark:text-sage-accent">
              ۰۳ · قابلیت‌های اطلاعاتی
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-primary sm:text-4xl dark:text-cream-ink">
              اطلاعات مهم، همیشه در دسترس
            </h2>
            <p className="mt-4 text-base leading-[1.85] text-ink-secondary dark:text-cream-muted">
              به‌جای بررسی مداوم گوشی، اطلاعاتی را که در طول روز به آن‌ها نیاز دارید به‌صورت
              ویجت‌های مجزا و شفاف روی نمایشگر راینا ببینید. هر ویجت متناسب با نیاز شما قابل
              انتخاب و تنظیم است.
            </p>
          </div>

          {/* Interactive Live Preview + img3.png */}
          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-12">
            <div className="flex flex-col justify-between rounded-2xl border border-linen-border bg-linen-surface p-6 sm:p-8 lg:col-span-6 dark:border-forest-border dark:bg-forest-surface">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium text-ink-secondary dark:text-cream-muted">
                    پیش‌نمایش زنده ویجت انتخاب‌شده روی نمایشگر راینا
                  </span>
                  <span className="text-xs font-semibold text-forest-accent dark:text-sage-accent">
                    {activeWidget.name}
                  </span>
                </div>

                <div className="mt-6">
                  <RaynaScreenBezel editionLabel={activeWidget.screenKicker}>
                    <p className="text-3xl font-bold tabular-nums tracking-tight text-[#F5F0E6] sm:text-4xl">
                      {activeWidget.screenPrimary}
                    </p>
                    <p className="mt-3 text-sm font-medium text-[#D6DFD8]">
                      {activeWidget.screenSecondary}
                    </p>
                    <p className="mt-4 border-t border-white/10 pt-3 text-xs text-[#9BB0A3]">
                      {activeWidget.screenDetail}
                    </p>
                  </RaynaScreenBezel>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-linen-border pt-5 dark:border-forest-border">
                {INFO_WIDGETS.map((widget) => {
                  const isSelected = widget.id === activeWidgetId;
                  return (
                    <button
                      key={widget.id}
                      type="button"
                      onClick={() => setActiveWidgetId(widget.id)}
                      className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-150 ${
                        isSelected
                          ? 'bg-forest-accent text-linen-canvas dark:bg-linen-cta dark:text-forest-canvas'
                          : 'bg-linen-canvas text-ink-secondary hover:bg-linen-muted hover:text-ink-primary dark:bg-forest-canvas dark:text-cream-muted dark:hover:bg-forest-elevated dark:hover:text-cream-ink'
                      }`}
                    >
                      {widget.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6">
              <RaynaMediaFrame
                imageName="img3.png"
                alt="نمایش ویجت‌های اطلاعاتی ساعت، آب‌وهوا، اوقات شرعی و نرخ ارز روی نمایشگر راینا"
                caption="ویجت‌های شفاف اطلاعات روزمره روی میز کار"
                chapterCode="۰۳ · WIDGETS"
                aspectClass="aspect-[4/3] lg:h-full"
              />
            </div>
          </div>

          {/* Structured 10-Widget Reference Table */}
          <div className="mt-10 overflow-x-auto rounded-2xl border border-linen-border bg-linen-surface dark:border-forest-border dark:bg-forest-surface">
            <table className="w-full min-w-[680px] border-collapse text-right text-sm">
              <thead>
                <tr className="border-b border-linen-border bg-linen-muted/60 text-xs font-semibold text-ink-secondary dark:border-forest-border dark:bg-forest-elevated/60 dark:text-cream-muted">
                  <th className="px-6 py-4">قابلیت</th>
                  <th className="px-6 py-4">کاربرد روزمره</th>
                  <th className="px-6 py-4">نمونه نمایش روی صفحه راینا</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linen-border dark:divide-forest-border">
                {INFO_WIDGETS.map((widget) => {
                  const isActive = widget.id === activeWidgetId;
                  return (
                    <tr
                      key={widget.id}
                      onClick={() => setActiveWidgetId(widget.id)}
                      className={`cursor-pointer transition-colors duration-150 ${
                        isActive
                          ? 'bg-forest-accent/[0.07] dark:bg-sage-accent/10'
                          : 'hover:bg-linen-muted/40 dark:hover:bg-forest-elevated/40'
                      }`}
                    >
                      <td className="px-6 py-3.5 font-semibold text-ink-primary whitespace-nowrap dark:text-cream-ink">
                        {widget.name}
                      </td>
                      <td className="px-6 py-3.5 text-ink-secondary dark:text-cream-muted">
                        {widget.usage}
                      </td>
                      <td className="px-6 py-3.5 font-medium tabular-nums text-ink-primary dark:text-cream-ink">
                        {widget.sampleText}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 04 | Productivity & Daily Order */}
      <section
        id="productivity"
        className="border-b border-linen-border py-20 sm:py-24 dark:border-forest-border"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tabular-nums text-brass-subtle dark:text-sage-accent">
                ۰۴ · بهره‌وری و نظم روزانه
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-primary sm:text-4xl dark:text-cream-ink">
                مدیریت زمان و برنامه‌های روزانه
              </h2>
              <p className="mt-4 text-base leading-[1.85] text-ink-secondary dark:text-cream-muted">
                راینا با ابزارهای دقیق مدیریت زمان، به نظم بیشتر در زندگی شخصی و کاری کمک
                می‌کند تا بدون حواس‌پرتی گوشی موبایل، روی کارها و قرارهای مهم خود متمرکز
                بمانید. با قرار گرفتن یادآورها و تایمر در میدان دید شما روی میز کار، گذر زمان
                ملموس‌تر می‌شود و هیچ قرار مهمی از قلم نمی‌افتد.
              </p>

              <div className="mt-8">
                <RaynaMediaFrame
                  imageName="img4.png"
                  alt="استفاده از تایمر پومودورو و یادآور تقویم راینا روی میز کار"
                  caption="تمرکز بدون حواس‌پرتی گوشی موبایل"
                  chapterCode="۰۴ · FOCUS"
                  aspectClass="aspect-[16/10]"
                />
              </div>
            </div>

            {/* Interactive Productivity Lab */}
            <div className="rounded-2xl border border-linen-border bg-linen-surface p-6 sm:p-8 lg:col-span-6 dark:border-forest-border dark:bg-forest-surface">
              <div
                role="tablist"
                aria-label="ابزارهای مدیریت زمان راینا"
                className="grid grid-cols-2 gap-1.5 rounded-xl border border-linen-border bg-linen-canvas p-1.5 sm:grid-cols-4 dark:border-forest-border dark:bg-forest-canvas"
              >
                {PRODUCTIVITY_TOOLS.map((tool) => {
                  const isSelected = tool.id === activeToolId;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveToolId(tool.id)}
                      className={`min-h-[40px] rounded-lg px-2.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                        isSelected
                          ? 'bg-forest-accent text-linen-canvas dark:bg-linen-cta dark:text-forest-canvas'
                          : 'text-ink-secondary hover:text-ink-primary dark:text-cream-muted dark:hover:text-cream-ink'
                      }`}
                    >
                      {tool.name}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6">
                <RaynaScreenBezel editionLabel={activeTool.screenLabel}>
                  {activeToolId === 'timer' ? (
                    <div>
                      <p dir="ltr" className="text-center font-mono text-4xl font-semibold tabular-nums text-[#F5F0E6] sm:text-5xl">
                        {formatTimerClock(pomodoroSeconds)}
                      </p>
                      <p className="mt-3 text-center text-xs text-[#C6D2C9]">
                        زمان تمرکز (پومودورو) یا استراحت کوتاه میان کار
                      </p>
                      <div className="mt-5 flex items-center justify-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => setPomodoroRunning((r) => !r)}
                          className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#E6DCC8] px-4 py-1.5 text-xs font-semibold text-[#0B1A13] transition-colors hover:bg-[#F5F0E6]"
                        >
                          {pomodoroRunning ? (
                            <>
                              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>توقف</span>
                            </>
                          ) : (
                            <>
                              <Play className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>شروع تایمر</span>
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setPomodoroRunning(false);
                            setPomodoroSeconds(24 * 60 + 59);
                          }}
                          className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-white/20 px-3.5 py-1.5 text-xs font-medium text-[#F5F0E6] transition-colors hover:bg-white/10"
                        >
                          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>بازنشانی</span>
                        </button>
                      </div>
                    </div>
                  ) : activeToolId === 'stopwatch' ? (
                    <div>
                      <p dir="ltr" className="text-center font-mono text-3xl font-semibold tabular-nums text-[#F5F0E6] sm:text-4xl">
                        {formatStopwatchClock(stopwatchSeconds)}
                      </p>
                      <p className="mt-3 text-center text-xs text-[#C6D2C9]">
                        ثبت زمان فعالیت، مطالعه یا تمرین روزانه
                      </p>
                      <div className="mt-5 flex items-center justify-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => setStopwatchRunning((r) => !r)}
                          className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#E6DCC8] px-4 py-1.5 text-xs font-semibold text-[#0B1A13] transition-colors hover:bg-[#F5F0E6]"
                        >
                          {stopwatchRunning ? (
                            <>
                              <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>توقف</span>
                            </>
                          ) : (
                            <>
                              <Play className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>شروع کرنومتر</span>
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setStopwatchRunning(false);
                            setStopwatchSeconds(18 * 60 + 42);
                          }}
                          className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-white/20 px-3.5 py-1.5 text-xs font-medium text-[#F5F0E6] transition-colors hover:bg-white/10"
                        >
                          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>بازنشانی</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-2xl font-bold tabular-nums text-[#F5F0E6] sm:text-3xl">
                        {activeTool.screenHeadline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#D6DFD8]">
                        {activeTool.screenSubtext}
                      </p>
                    </div>
                  )}
                </RaynaScreenBezel>
              </div>

              <div className="mt-6 border-t border-linen-border pt-5 dark:border-forest-border">
                <h3 className="text-base font-bold text-ink-primary dark:text-cream-ink">
                  {activeTool.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary dark:text-cream-muted">
                  {activeTool.description}
                </p>
              </div>
            </div>
          </div>

          {/* Complete 4-Tool Table */}
          <div className="mt-10 overflow-x-auto rounded-2xl border border-linen-border bg-linen-surface dark:border-forest-border dark:bg-forest-surface">
            <table className="w-full min-w-[660px] border-collapse text-right text-sm">
              <thead>
                <tr className="border-b border-linen-border bg-linen-muted/60 text-xs font-semibold text-ink-secondary dark:border-forest-border dark:bg-forest-elevated/60 dark:text-cream-muted">
                  <th className="px-6 py-4">ابزار</th>
                  <th className="px-6 py-4">توضیح و نحوه استفاده</th>
                  <th className="px-6 py-4">سناریوی واقعی و نمایش روی صفحه</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linen-border dark:divide-forest-border">
                {PRODUCTIVITY_TOOLS.map((tool) => {
                  const isActive = tool.id === activeToolId;
                  return (
                    <tr
                      key={tool.id}
                      onClick={() => setActiveToolId(tool.id)}
                      className={`cursor-pointer transition-colors duration-150 ${
                        isActive
                          ? 'bg-forest-accent/[0.07] dark:bg-sage-accent/10'
                          : 'hover:bg-linen-muted/40 dark:hover:bg-forest-elevated/40'
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-ink-primary whitespace-nowrap dark:text-cream-ink">
                        {tool.name}
                      </td>
                      <td className="px-6 py-4 text-ink-secondary dark:text-cream-muted">
                        {tool.description}
                      </td>
                      <td className="px-6 py-4 font-medium tabular-nums text-ink-primary dark:text-cream-ink">
                        {tool.scenario}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 05 | Connectivity & Flexibility */}
      <section className="border-b border-linen-border py-20 sm:py-24 dark:border-forest-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-semibold tabular-nums text-brass-subtle dark:text-sage-accent">
                  ۰۵ · ارتباط و انعطاف‌پذیری
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-primary sm:text-4xl dark:text-cream-ink">
                  اعلان‌ها و شخصی‌سازی
                </h2>
                <p className="mt-4 text-base leading-[1.85] text-ink-secondary dark:text-cream-muted">
                  هر کاربر و هر سازمان نیاز اطلاعاتی متفاوتی دارد. راینا به‌گونه‌ای طراحی شده
                  که نه‌تنها اعلان‌های مهم را به شما نمایش می‌دهد، بلکه می‌تواند دقیقاً داده‌هایی
                  را نشان دهد که برای شما اولویت دارند.
                </p>

                {/* Switchable 3 Capabilities List */}
                <div className="mt-8 space-y-3">
                  {CONNECTIVITY_FEATURES.map((item) => {
                    const isSelected = item.id === activeConnectId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveConnectId(item.id)}
                        className={`block w-full rounded-2xl border p-5 text-right transition-colors duration-150 ${
                          isSelected
                            ? 'border-forest-accent bg-linen-surface dark:border-sage-accent dark:bg-forest-surface'
                            : 'border-linen-border bg-transparent hover:bg-linen-surface/60 dark:border-forest-border dark:hover:bg-forest-surface/50'
                        }`}
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-base font-bold text-ink-primary dark:text-cream-ink">
                            {item.name}
                          </h3>
                          <span className="text-xs text-ink-secondary dark:text-cream-muted">
                            {item.meta}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-ink-secondary dark:text-cream-muted">
                          {item.usage}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              <RaynaMediaFrame
                imageName="img5.png"
                alt="نمایش اعلان‌های موبایل، پیام‌های سازمانی و ویجت سفارشی API روی راینا"
                caption="اعلان‌های فوری و ویجت اختصاصی API"
                chapterCode="۰۵ · API & ALERTS"
                aspectClass="aspect-[16/10]"
              />

              <div className="rounded-2xl border border-linen-border bg-linen-surface p-5 dark:border-forest-border dark:bg-forest-surface">
                <RaynaScreenBezel editionLabel={activeConnect.name} compact>
                  <p className="text-xs text-[#9BB0A3]">{activeConnect.meta}</p>
                  <p className="mt-2 text-xl font-bold tabular-nums text-[#F5F0E6]">
                    {activeConnect.sampleTitle}
                  </p>
                  <p className="mt-1.5 text-sm text-[#D6DFD8]">{activeConnect.sampleBody}</p>
                  {activeConnect.apiPreview && (
                    <pre
                      dir="ltr"
                      className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-black/35 p-3 font-mono text-[11px] leading-relaxed text-[#CFE5D8]"
                    >
                      {activeConnect.apiPreview}
                    </pre>
                  )}
                </RaynaScreenBezel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
