import type { ReactNode } from 'react';

interface RaynaScreenBezelProps {
  editionLabel?: string;
  children: ReactNode;
  compact?: boolean;
}

export function RaynaScreenBezel({
  editionLabel = 'نمایشگر اختصاصی راینا',
  children,
  compact = false,
}: RaynaScreenBezelProps) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md rounded-[26px] border border-ink-primary/20 bg-[#131C17] p-3.5 shadow-sm dark:border-forest-border dark:bg-[#07110C]">
        <div
          className={`relative overflow-hidden rounded-[18px] border border-white/10 bg-[#0F2119] text-[#F4EFE4] ${
            compact ? 'p-5' : 'p-6 sm:p-7'
          }`}
        >
          <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-[11px] text-[#A8B9AE]">
            <span className="truncate">{editionLabel}</span>
            <span className="font-[var(--font-brand)] tracking-[0.18em] text-[#DFD3BC]/90 whitespace-nowrap shrink-0">
              RAYNA
            </span>
          </div>
          <div>{children}</div>
        </div>
        {/* Subtle anodized base stand reflection */}
        <div className="mx-auto mt-2.5 h-1.5 w-20 rounded-full bg-white/12" aria-hidden="true" />
      </div>
    </div>
  );
}
