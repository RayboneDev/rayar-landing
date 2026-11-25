import {RaynaVisualSlot} from './RaynaVisualSlot';

export function DesignCraftSection() {
  return (
    <section id="craft" className="border-b border-[var(--border-hairline)] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold text-[var(--accent-wood)]">
            مهندسی فرم و عملکرد · ساخته‌شده برای دیده شدن از هر زاویه
          </p>
          <h2 className="text-balance-title text-2xl font-extrabold leading-snug text-[var(--text-primary)] md:text-4xl">
            هم‌نشینی چوب طبیعی با پنل پشتی دقیق و نمایشگر تعاملی
          </h2>
          <p className="text-base leading-8 text-[var(--text-secondary)]">
            نمای پشت دستگاه به‌اندازه جلوی آن با وسواس طراحی شده است. قاب چوبی روشن به‌طور یکپارچه پنل مشکی مات را در بر می‌گیرد تا در پیشخوان کافه یا وسط میز کار، از هر زاویه تمیز و حرفه‌ای دیده شود.
          </p>
        </div>

        {/* Rear Panel Engineering (Slot 2) */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] lg:col-span-7">
            <RaynaVisualSlot
              slotId={2}
              alt="نمای پشتی راینا شامل گریل نقطه‌ای و شیاردار، پورت USB-C، کد QR و لوگوی نه بیتکس"
              className="aspect-[16/10] w-full lg:h-full"
            />
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 lg:col-span-5">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium text-[var(--text-muted)]">۰۱ · پنل پشتی مشکی مات</p>
                <h3 className="mt-2 text-xl font-bold text-[var(--text-primary)]">
                  طراحی بدون شلوغی، مهندسی آکوستیک دقیق
                </h3>
              </div>

              <div className="space-y-4 border-t border-[var(--border-hairline)] pt-5 text-sm leading-7 text-[var(--text-secondary)]">
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">دو الگوی گریل صوتی و تهویه</p>
                  <p>ماتریس نقطه‌ای دایره‌ای در سمت چپ و شیارهای عمودی در سمت راست برای کیفیت صدای شفاف و دفع حرارت پایدار.</p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">اتصال تمیز و بدون درهم‌ریختگی</p>
                  <p>پورت مخفی و فرورفته USB-C در مرکز لبه پایینی برای مدیریت مرتب کابل روی میز یا پیشخوان.</p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">راه‌اندازی آنی با کد QR و نشان نه بیتکس</p>
                  <p>اسکن سریع کد QR چاپ‌شده روی بدنه برای اتصال مستقیم به اپلیکیشن، در کنار امضای سفید «نه بیتکس / NeBitx».</p>
                </div>
              </div>
            </div>

            <p className="mt-6 border-t border-[var(--border-hairline)] pt-4 text-xs leading-6 text-[var(--text-muted)]">
              «بدون سیم‌های درهم‌تنیده و بدون راه‌اندازی پیچیده؛ صرفاً کارایی خالص و مرتب در زندگی حرفه‌ای شما.»
            </p>
          </div>
        </div>

        {/* Interactive Play & Lifestyle (Slot 3) */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="order-2 flex flex-col justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 lg:order-1 lg:col-span-5">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium text-[var(--text-muted)]">۰۲ · فراتر از یک صفحه نمایش</p>
                <h3 className="mt-2 text-xl font-bold text-[var(--text-primary)]">
                  جفت شش! همراه پویا در لحظه‌های استراحت
                </h3>
              </div>

              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                راینا فقط برای نمودارها و اعداد نیست؛ در زنگ تفریح کنار فنجان قهوه، نمایشگر به یک همراه بازی و سرگرمی با گرافیک بومی فارسی تبدیل می‌شود و با تاس‌های چوبی هم‌رنگ بدنه، مرز دنیای فیزیکی و دیجیتال را محو می‌کند.
              </p>

              <div className="space-y-3 border-t border-[var(--border-hairline)] pt-5 text-sm text-[var(--text-secondary)]">
                <p>· نمایش گرافیک‌های خوانا و زنده فارسی مانند «جفت شش!»</p>
                <p>· شخصیت دیجیتال متحرک و حیوان خانگی تعاملی با صدا</p>
                <p>· دستیار تنفس و ریلکسینگ برای بازیابی تمرکز روزانه</p>
              </div>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] lg:order-2 lg:col-span-7">
            <RaynaVisualSlot
              slotId={3}
              alt="حالت سرگرمی راینا با نمایش جفت شش در کنار تاس چوبی"
              className="aspect-[16/10] w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
