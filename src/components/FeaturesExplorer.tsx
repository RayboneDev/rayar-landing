import {useMemo, useState} from 'react';
import {Search, Check, Minus} from 'lucide-react';
import {
  COMPARISON_ROWS,
  FEATURE_CATEGORIES,
  RAYNA_FEATURES,
  type FeatureCategoryId,
} from '../data/raynaData';

interface FeaturesExplorerProps {
  onSelectEdition: (mode: 'personal' | 'b2b', editionLabel: string) => void;
}

export function FeaturesExplorer({onSelectEdition}: FeaturesExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<FeatureCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFeatures = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return RAYNA_FEATURES.filter((feature) => {
      const matchesCat = selectedCategory === 'all' || feature.category === selectedCategory;
      const matchesQuery =
        !q ||
        feature.name.toLowerCase().includes(q) ||
        feature.description.toLowerCase().includes(q) ||
        feature.categoryLabel.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* 32 Features Explorer */}
      <section id="features" className="border-b border-[var(--border-hairline)] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold text-[var(--accent-wood)]">
                اکوسیستم نرم‌افزاری نه بیتکس · ۳۲ قابلیت یکپارچه
              </p>
              <h2 className="text-balance-title text-2xl font-extrabold leading-snug text-[var(--text-primary)] md:text-4xl">
                همه ابزارهای روزمره، مالی و هوش مصنوعی در یک قاب چوبی
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در ۳۲ قابلیت..."
                aria-label="جستجو در قابلیت‌های راینا"
                className="w-full rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] py-2.5 pr-10 pl-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
              />
            </div>
          </div>

          {/* Interactive Category Tabs */}
          <div
            role="tablist"
            aria-label="دسته‌بندی قابلیت‌های راینا"
            className="mt-8 flex flex-wrap items-center gap-2 border-b border-[var(--border-hairline)] pb-5"
          >
            {FEATURE_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 ${
                    active
                      ? 'bg-[var(--accent-primary)] text-[var(--accent-primary-fg)]'
                      : 'border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-elevated)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Feature Cards Grid */}
          {filteredFeatures.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-10 text-center">
              <p className="text-base font-semibold text-[var(--text-primary)]">
                قابلیتی با عبارت «{searchQuery}» یافت نشد.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 cursor-pointer rounded-lg border border-[var(--border-hairline)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]"
              >
                نمایش همه ۳۲ قابلیت
              </button>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredFeatures.map((feature) => (
                <article
                  key={feature.id}
                  className="flex flex-col justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 transition-colors duration-150 hover:bg-[var(--bg-surface-elevated)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
                      <span>{feature.categoryLabel}</span>
                      <span className="font-mono-tabular">
                        {String(feature.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-[var(--text-primary)]">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2 border-t border-[var(--border-hairline)] pt-3 text-[11px] text-[var(--text-muted)]">
                    <span>
                      {feature.availability.personal ? 'خانگی' : 'اختصاصی کسب‌وکار'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{feature.availability.retailB2B ? 'پشتیبانی B2B' : 'نسخه شخصی'}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Edition Comparison Table */}
      <section id="comparison" className="border-b border-[var(--border-hairline)] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold text-[var(--accent-wood)]">
              مقایسه شفاف نسخه‌ها · انتخاب متناسب با نیاز شما
            </p>
            <h2 className="text-balance-title text-2xl font-extrabold leading-snug text-[var(--text-primary)] md:text-4xl">
              مقایسه نسخه شخصی، فروشگاهی (B2B) و سازمانی
            </h2>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              سخت‌افزار اصیل چوبی در هر سه نسخه یکسان است و بسته نرم‌افزاری متناسب با میز کار خانگی، پیشخوان کافه یا سازمان شما فعال می‌شود.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
            <table className="w-full min-w-[760px] border-collapse text-right text-sm">
              <thead>
                <tr className="border-b border-[var(--border-hairline)] bg-[var(--bg-surface-elevated)]">
                  <th className="w-1/4 px-6 py-5 font-bold text-[var(--text-primary)]">شاخص مقایسه</th>
                  <th className="w-1/4 px-6 py-5 font-bold text-[var(--text-primary)]">
                    <div>نسخه خانگی و شخصی</div>
                    <div className="mt-1 text-xs font-normal text-[var(--text-muted)]">میز کار و اتاق خواب</div>
                  </th>
                  <th className="w-1/4 px-6 py-5 font-bold text-[var(--accent-primary)]">
                    <div>نسخه تجاری و فروشگاهی (B2B)</div>
                    <div className="mt-1 text-xs font-normal text-[var(--text-muted)]">کافه، فروشگاه و صرافی</div>
                  </th>
                  <th className="w-1/4 px-6 py-5 font-bold text-[var(--text-primary)]">
                    <div>نسخه سازمانی و API</div>
                    <div className="mt-1 text-xs font-normal text-[var(--text-muted)]">نمایشگاه و شعب متعدد</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-hairline)]">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.criterion} className="transition-colors hover:bg-[var(--bg-surface-elevated)]/50">
                    <td className="px-6 py-4 font-semibold text-[var(--text-primary)]">{row.criterion}</td>
                    <td className="px-6 py-4 leading-6 text-[var(--text-secondary)]">
                      {row.home === '—' ? (
                        <Minus className="h-4 w-4 text-[var(--text-muted)]" aria-label="ندارد" />
                      ) : (
                        row.home
                      )}
                    </td>
                    <td className="px-6 py-4 leading-6 text-[var(--text-primary)]">
                      <span className="inline-flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                        <span>{row.retailB2B}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 leading-6 text-[var(--text-secondary)]">{row.enterprise}</td>
                  </tr>
                ))}
                <tr className="bg-[var(--bg-surface-elevated)]/40">
                  <td className="px-6 py-5 font-semibold text-[var(--text-primary)]">اقدام سریع</td>
                  <td className="px-6 py-5">
                    <button
                      type="button"
                      onClick={() => onSelectEdition('personal', 'نسخه خانگی و شخصی')}
                      className="cursor-pointer whitespace-nowrap rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
                    >
                      پیش‌خرید نسخه خانگی
                    </button>
                  </td>
                  <td className="px-6 py-5">
                    <button
                      type="button"
                      onClick={() => onSelectEdition('b2b', 'نسخه تجاری و فروشگاهی (B2B)')}
                      className="cursor-pointer whitespace-nowrap rounded-lg bg-[var(--accent-primary)] px-4 py-2 text-xs font-semibold text-[var(--accent-primary-fg)] transition-colors hover:bg-[var(--accent-primary-hover)]"
                    >
                      استعلام نسخه فروشگاهی
                    </button>
                  </td>
                  <td className="px-6 py-5">
                    <button
                      type="button"
                      onClick={() => onSelectEdition('b2b', 'نسخه سازمانی و API اختصاصی')}
                      className="cursor-pointer whitespace-nowrap rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
                    >
                      درخواست دمو سازمانی
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
