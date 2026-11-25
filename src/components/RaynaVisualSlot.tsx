import {useState} from 'react';
import {QrCode, Volume2, TrendingUp, Dices, Coffee, Cpu, Sparkles, Layers} from 'lucide-react';

interface RaynaVisualSlotProps {
  slotId: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  alt: string;
  className?: string;
}

export function RaynaVisualSlot({slotId, alt, className = ''}: RaynaVisualSlotProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const src = `/assets/images/${slotId}.jpg`;

  return (
    <div className={`relative overflow-hidden bg-[var(--bg-surface-elevated)] ${className}`}>
      {!imgFailed && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
      {imgFailed && <RaynaFallbackScene slotId={slotId} />}
    </div>
  );
}

function RaynaFallbackScene({slotId}: {slotId: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}) {
  if (slotId === 2) {
    // Rear Matte-Black Panel with dot-matrix grille, vertical slotted grille, USB-C, QR code, and NeBitx logo
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#DFD3BE] via-[#D2C3A9] to-[#C2B093] p-6 dark:from-[#162C23] dark:via-[#11231B] dark:to-[#0C1913]">
        <div className="relative w-full max-w-[380px] rounded-[26px] bg-gradient-to-br from-[#CFA576] via-[#B88754] to-[#986A3C] p-3.5 shadow-xl ring-1 ring-black/10">
          <div className="relative flex aspect-[16/10] w-full flex-col justify-between rounded-[16px] bg-[#181B19] p-5 text-[#F3EDE2]">
            <div className="flex items-start justify-between gap-4">
              {/* Circular dot-matrix grille */}
              <div className="grid grid-cols-6 gap-1.5 opacity-75">
                {Array.from({length: 24}).map((_, idx) => (
                  <span key={idx} className="h-1.5 w-1.5 rounded-full bg-[#4F5A52]" />
                ))}
              </div>

              {/* Vertical slotted acoustic grille */}
              <div className="flex items-center gap-1.5 opacity-80">
                {Array.from({length: 8}).map((_, idx) => (
                  <span key={idx} className="h-9 w-1 rounded-full bg-[#444E47]" />
                ))}
              </div>
            </div>

            {/* Bottom row: QR setup, recessed USB-C, NeBitx Persian branding */}
            <div className="flex items-end justify-between gap-3 pt-4">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-[#F3EDE2] p-1 text-[#181B19]">
                  <QrCode className="h-6 w-6" />
                </div>
                <span className="text-[10px] text-[#B7C0B9]">اتصال سریع</span>
              </div>

              {/* Recessed USB-C port */}
              <div className="flex flex-col items-center gap-1">
                <div className="h-2.5 w-8 rounded-full border border-[#4D5750] bg-[#0B0D0C]" />
                <span className="font-mono-tabular text-[9px] tracking-wider text-[#8C968F]">USB-C</span>
              </div>

              {/* Subtle NeBitx branding */}
              <div className="text-left">
                <p className="text-xs font-semibold text-[#F3EDE2]">نه بیتکس</p>
                <p className="font-mono-tabular text-[9px] text-[#9EA8A1]">NeBitx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#E5DBC9] via-[#DDD0BC] to-[#D0C0A6] p-6 dark:from-[#193227] dark:via-[#142920] dark:to-[#0F2019]">
      {/* Desk / Counter surface texture hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent dark:from-black/25" />

      {/* Wooden Rayna Casing */}
      <div className="relative z-10 w-full max-w-[380px] rounded-[26px] bg-gradient-to-br from-[#D7AE80] via-[#BC8B58] to-[#9A6A3C] p-3.5 shadow-xl ring-1 ring-black/10">
        {/* Flush Glossy Dark Display */}
        <div className="relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-[16px] bg-[#141715] p-4 text-[#F3EDE2]">
          {slotId === 1 && (
            <>
              <div className="flex items-center justify-between text-[11px] text-[#9EB0A6]">
                <span>پخش زنده صوتی</span>
                <span className="font-mono-tabular">۰۹:۴۲</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-2">
                <div className="flex items-end gap-1">
                  {[18, 30, 44, 26, 38].map((h, i) => (
                    <span
                      key={i}
                      style={{height: `${h}px`}}
                      className="w-1.5 rounded-full bg-gradient-to-t from-[#38BDF8] to-[#A78BFA]"
                    />
                  ))}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#22D3EE]/35 via-[#818CF8]/40 to-[#C084FC]/30 ring-2 ring-[#38BDF8]/60">
                  <Volume2 className="h-6 w-6 text-[#67E8F9]" />
                </div>
                <div className="flex items-end gap-1">
                  {[36, 22, 42, 28, 16].map((h, i) => (
                    <span
                      key={i}
                      style={{height: `${h}px`}}
                      className="w-1.5 rounded-full bg-gradient-to-t from-[#A78BFA] to-[#38BDF8]"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#9EB0A6]">
                <span>طراحی مینیمال ژاپندی</span>
                <span className="font-mono-tabular">Rayna Audio</span>
              </div>
            </>
          )}

          {slotId === 3 && (
            <>
              <div className="flex items-center justify-between text-[11px] text-[#9EB0A6]">
                <span>حالت بازی رومیزی</span>
                <Dices className="h-4 w-4 text-[#6EE7B7]" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 py-1">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 grid-cols-2 place-items-center rounded-xl bg-[#222824] p-2 ring-1 ring-[#3A473E]">
                    <span className="h-2 w-2 rounded-full bg-[#F3EDE2]" />
                    <span className="h-2 w-2 rounded-full bg-[#F3EDE2]" />
                    <span className="h-2 w-2 rounded-full bg-[#F3EDE2]" />
                    <span className="h-2 w-2 rounded-full bg-[#F3EDE2]" />
                  </div>
                  <div className="grid h-12 w-12 grid-cols-2 place-items-center rounded-xl bg-[#222824] p-2 ring-1 ring-[#3A473E]">
                    <span className="h-2 w-2 rounded-full bg-[#F3EDE2]" />
                    <span className="h-2 w-2 rounded-full bg-[#F3EDE2]" />
                    <span className="h-2 w-2 rounded-full bg-[#F3EDE2]" />
                    <span className="h-2 w-2 rounded-full bg-[#F3EDE2]" />
                  </div>
                </div>
                <p className="text-xl font-bold text-[#4ADE80]">جفت شش!</p>
              </div>
              <div className="text-center text-[10px] text-[#9EB0A6]">هماهنگ با تاس چوبی طبیعی</div>
            </>
          )}

          {slotId === 4 && (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono-tabular text-xs text-[#9EB0A6]">Ethereum · ETH</p>
                  <p className="font-mono-tabular text-xl font-semibold text-[#F3EDE2]">$3,210</p>
                </div>
                <div className="text-left font-mono-tabular text-xs">
                  <p className="text-[#4ADE80]">+1.50%</p>
                  <p className="text-[#F87171]">-1.05%</p>
                </div>
              </div>
              <svg viewBox="0 0 240 60" className="h-14 w-full overflow-visible">
                <defs>
                  <linearGradient id="ethArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#4ADE80" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 48 L35 42 L68 45 L100 30 L132 34 L165 18 L200 22 L240 8 L240 60 L0 60 Z"
                  fill="url(#ethArea)"
                />
                <path
                  d="M0 48 L35 42 L68 45 L100 30 L132 34 L165 18 L200 22 L240 8"
                  fill="none"
                  stroke="#4ADE80"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="flex items-center justify-between text-[10px] text-[#9EB0A6]">
                <span>داشبورد همیشه روشن دفتر کار</span>
                <TrendingUp className="h-3.5 w-3.5 text-[#4ADE80]" />
              </div>
            </>
          )}

          {slotId === 5 && (
            <>
              <div className="flex items-center justify-between text-[11px] text-[#9EB0A6]">
                <span>پیشخوان کافه و فروشگاه</span>
                <Coffee className="h-4 w-4 text-[#D59A62]" />
              </div>
              <div className="grid grid-cols-3 gap-2 py-1 font-mono-tabular">
                <div className="rounded-lg bg-[#1E2320] p-2">
                  <p className="text-[10px] text-[#D59A62]">BTC</p>
                  <p className="text-xs font-semibold">$94,280</p>
                  <p className="text-[10px] text-[#4ADE80]">+2.14%</p>
                </div>
                <div className="rounded-lg bg-[#1E2320] p-2">
                  <p className="text-[10px] text-[#60A5FA]">ETH</p>
                  <p className="text-xs font-semibold">$3,210</p>
                  <p className="text-[10px] text-[#4ADE80]">+1.51%</p>
                </div>
                <div className="rounded-lg bg-[#1E2320] p-2">
                  <p className="text-[10px] text-[#FBBF24]">GOLD</p>
                  <p className="text-xs font-semibold">$2,685</p>
                  <p className="text-[10px] text-[#F87171]">-0.42%</p>
                </div>
              </div>
              <div className="text-[10px] text-[#9EB0A6]">استقرار در کنار دستگاه کارت‌خوان (POS)</div>
            </>
          )}

          {slotId === 6 && (
            <>
              <div className="flex items-center justify-between text-[11px] text-[#9EB0A6]">
                <span>نبض روزانه سرمایه</span>
                <span className="font-mono-tabular">BTC · ETH · GOLD</span>
              </div>
              <div className="space-y-1.5 font-mono-tabular text-xs">
                <div className="flex items-center justify-between rounded-md bg-[#1D221F] px-2.5 py-1.5">
                  <span>Bitcoin</span>
                  <span>$94,280</span>
                  <span className="text-[#4ADE80]">+1.51%</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-[#1D221F] px-2.5 py-1.5">
                  <span>Gold 18K</span>
                  <span>۴,۶۲۰,۰۰۰ ت</span>
                  <span className="text-[#F87171]">-1.95%</span>
                </div>
              </div>
              <div className="text-[10px] text-[#9EB0A6]">پایش بدون حواس‌پرتی روی میز کار شخصی</div>
            </>
          )}

          {slotId === 7 && (
            <>
              <div className="flex items-center justify-between text-[11px] text-[#9EB0A6]">
                <span>چوب بلوط و راش طبیعی</span>
                <Layers className="h-4 w-4 text-[#D59A62]" />
              </div>
              <div className="flex flex-col items-center justify-center gap-1 py-2 text-center">
                <p className="text-base font-bold text-[#EFE9DC]">نمایشگر هم‌سطح بدون دکمه</p>
                <p className="text-xs text-[#9EB0A6]">لبه‌های گرد دست‌ساز با بافت طبیعی چوب</p>
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#9EB0A6]">
                <span>سبک اسکاندیناوی و ژاپندی</span>
                <span>کابل مخفی</span>
              </div>
            </>
          )}

          {slotId === 8 && (
            <>
              <div className="flex items-center justify-between text-[11px] text-[#9EB0A6]">
                <span>دستیار هوشمند و تقویم</span>
                <Sparkles className="h-4 w-4 text-[#4EB385]" />
              </div>
              <div className="flex items-center justify-between gap-3 py-1">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#EFE9DC]">صبح بخیر، جلسه ۱۰:۳۰</p>
                  <p className="text-[11px] text-[#9EB0A6]">اذان ظهر ۱۲:۰۴ · احتمال بارش ۴۰٪</p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1E352B] text-[#4EB385]">
                  <Cpu className="h-5 w-5" />
                </div>
              </div>
              <div className="text-[10px] text-[#9EB0A6]">منشی شخصی · مترجم · نماینده کسب‌وکار</div>
            </>
          )}
        </div>
      </div>

    </div>
  );
}
