import { useState } from 'react';

interface RaynaMediaFrameProps {
  imageName: string;
  alt: string;
  caption: string;
  chapterCode: string;
  aspectClass?: string;
  priority?: boolean;
  darkSurface?: boolean;
}

export function RaynaMediaFrame({
  imageName,
  alt,
  caption,
  chapterCode,
  aspectClass = 'aspect-[16/10]',
  priority = false,
  darkSurface = false,
}: RaynaMediaFrameProps) {
  const [hasError, setHasError] = useState(false);
  const imageSrc = `./images/${imageName}`;

  const frameStyle = darkSurface
    ? 'bg-forest-elevated border-forest-border text-cream-ink'
    : 'bg-linen-muted/70 border-linen-border text-ink-primary dark:bg-forest-surface dark:border-forest-border dark:text-cream-ink';

  return (
    <figure className={`group relative overflow-hidden rounded-2xl border ${frameStyle}`}>
      <div className={`relative w-full ${aspectClass} overflow-hidden`}>
        {!hasError ? (
          <img
            src={imageSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setHasError(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center p-8 text-center">
            {/* Subtle architectural hardware silhouette fallback when user image is not yet placed */}
            <div
              className={`pointer-events-none absolute inset-0 opacity-60 ${
                darkSurface
                  ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(107,191,147,0.16),transparent_60%)]'
                  : 'bg-[radial-gradient(circle_at_30%_20%,rgba(27,67,50,0.09),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(107,191,147,0.14),transparent_60%)]'
              }`}
            />
            <div
              className={`relative z-10 flex w-full max-w-[240px] flex-col items-center rounded-2xl border px-6 py-7 ${
                darkSurface
                  ? 'border-forest-border bg-forest-canvas/85'
                  : 'border-linen-border bg-linen-surface/90 dark:border-forest-border dark:bg-forest-canvas/85'
              }`}
            >
              <div
                className={`mb-4 h-20 w-28 rounded-xl border ${
                  darkSurface
                    ? 'border-forest-border bg-forest-surface'
                    : 'border-ink-primary/15 bg-ink-primary dark:border-forest-border dark:bg-forest-elevated'
                } flex flex-col items-center justify-center px-3`}
              >
                <span className="font-[var(--font-brand)] text-[11px] font-semibold tracking-[0.22em] text-linen-canvas/85">
                  RAYNA
                </span>
                <span className="mt-1 text-lg font-semibold tabular-nums text-linen-canvas">
                  ۱۰:۲۴
                </span>
              </div>
              <p className="text-sm font-semibold leading-relaxed">{caption}</p>
              <p
                dir="ltr"
                className={`mt-2 font-mono text-xs ${
                  darkSurface
                    ? 'text-cream-muted'
                    : 'text-ink-secondary dark:text-cream-muted'
                }`}
              >
                public/images/{imageName}
              </p>
            </div>
            <span
              className={`absolute bottom-4 left-5 font-mono text-xs tabular-nums ${
                darkSurface
                  ? 'text-cream-muted/80'
                  : 'text-ink-secondary/75 dark:text-cream-muted/80'
              }`}
            >
              {chapterCode}
            </span>
          </div>
        )}
      </div>
    </figure>
  );
}
