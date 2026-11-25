import {useEffect, useState, type FormEvent} from 'react';
import {CheckCircle2} from 'lucide-react';

interface InquirySectionProps {
  initialMode: 'personal' | 'b2b';
  selectedEdition: string;
}

interface SubmittedReceipt {
  trackingCode: string;
  mode: 'personal' | 'b2b';
  fullName: string;
  contact: string;
  woodFinish: string;
  edition: string;
  quantity: number;
  businessName: string;
}

export function InquirySection({initialMode, selectedEdition}: InquirySectionProps) {
  const [mode, setMode] = useState<'personal' | 'b2b'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [woodFinish, setWoodFinish] = useState<'بلوط روشن (Oak)' | 'راش طبیعی (Beech)'>('بلوط روشن (Oak)');
  const [edition, setEdition] = useState(selectedEdition);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [receipt, setReceipt] = useState<SubmittedReceipt | null>(null);

  useEffect(() => {
    setMode(initialMode);
    if (selectedEdition) {
      setEdition(selectedEdition);
    }
    setQuantity(initialMode === 'b2b' ? 5 : 1);
  }, [initialMode, selectedEdition]);

  const validateContact = (val: string) => {
    const trimmed = val.trim();
    const isIranMobile = /^(\+98|0)?9\d{9}$/.test(trimmed.replace(/[\s-]/g, ''));
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    return isIranMobile || isEmail;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (fullName.trim().length < 2) {
      setErrorMessage('لطفاً نام و نام خانوادگی خود را به‌صورت کامل وارد کنید.');
      return;
    }
    if (!validateContact(contact)) {
      setErrorMessage('لطفاً یک شماره موبایل معتبر (مانند 09123456789) یا ایمیل صحیح وارد کنید.');
      return;
    }
    if (mode === 'b2b' && businessName.trim().length < 2) {
      setErrorMessage('برای همکاری تجاری، وارد کردن نام فروشگاه، کافه یا شرکت الزامی است.');
      return;
    }

    const code = `RYN-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceipt({
      trackingCode: code,
      mode,
      fullName: fullName.trim(),
      contact: contact.trim(),
      woodFinish,
      edition,
      quantity,
      businessName: businessName.trim(),
    });
  };

  return (
    <section id="inquiry" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left Context Column */}
          <div className="space-y-6 lg:col-span-5">
            <p className="text-xs font-semibold text-[var(--accent-wood)]">
              پیش‌خرید سری اول و همکاری تجاری · نه بیتکس
            </p>
            <h2 className="text-balance-title text-2xl font-extrabold leading-snug text-[var(--text-primary)] md:text-4xl">
              راینا را برای میز کار یا پیشخوان کسب‌وکارتان رزرو کنید
            </h2>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              سفارش‌های شخصی با انتخاب بافت چوب بلوط یا راش ثبت می‌شوند. برای کافه‌ها، صرافی‌ها، بوتیک‌ها و غرفه‌های نمایشگاهی، تیم نه بیتکس پنل اعلان B2B و اتصال API اختصاصی را پیش از ارسال پیکربندی می‌کند.
            </p>

            <div className="space-y-4 border-t border-[var(--border-hairline)] pt-6 text-sm text-[var(--text-secondary)]">
              <div>
                <p className="font-semibold text-[var(--text-primary)]">پیش‌خرید شخصی</p>
                <p className="mt-1">اولویت ارسال سری نخست همراه با کابل بافته‌شده USB-C و فعال‌سازی ۳۲ قابلیت.</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-primary)]">همکاری تجاری و شعب (B2B)</p>
                <p className="mt-1">قیمت‌گذاری عمده، نمایشگرهای هم‌زمان روی پیشخوان و اتصال به سیستم فروشگاهی یا API اختصاصی.</p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 md:p-8 lg:col-span-7">
            {/* Mode Switcher */}
            <div className="mb-6 flex items-center gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-1.5">
              <button
                type="button"
                onClick={() => {
                  setMode('personal');
                  setQuantity(1);
                  setEdition('نسخه خانگی و شخصی');
                  setReceipt(null);
                  setErrorMessage('');
                }}
                className={`flex-1 cursor-pointer whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${
                  mode === 'personal'
                    ? 'bg-[var(--accent-primary)] text-[var(--accent-primary-fg)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                پیش‌خرید شخصی
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('b2b');
                  setQuantity(5);
                  setEdition('نسخه تجاری و فروشگاهی (B2B)');
                  setReceipt(null);
                  setErrorMessage('');
                }}
                className={`flex-1 cursor-pointer whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${
                  mode === 'b2b'
                    ? 'bg-[var(--accent-primary)] text-[var(--accent-primary-fg)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                همکاری تجاری و B2B
              </button>
            </div>

            {receipt ? (
              <div className="space-y-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-6">
                <div className="flex items-center gap-3 text-[var(--accent-primary)]">
                  <CheckCircle2 className="h-6 w-6 shrink-0" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {receipt.mode === 'personal'
                      ? 'درخواست پیش‌خرید شما ثبت شد'
                      : 'درخواست همکاری تجاری B2B ثبت شد'}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  کارشناسان فروش نه بیتکس برای هماهنگی نهایی و ارسال پیش‌فاکتور با شما تماس می‌گیرند.
                </p>

                <dl className="grid grid-cols-1 gap-3 border-t border-[var(--border-hairline)] pt-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs text-[var(--text-muted)]">کد پیگیری</dt>
                    <dd className="mt-0.5 font-mono-tabular font-semibold text-[var(--text-primary)]">
                      {receipt.trackingCode}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[var(--text-muted)]">نام متقاضی</dt>
                    <dd className="mt-0.5 font-medium text-[var(--text-primary)]">{receipt.fullName}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[var(--text-muted)]">نسخه و چوب انتخابی</dt>
                    <dd className="mt-0.5 font-medium text-[var(--text-primary)]">
                      {receipt.edition} · {receipt.woodFinish}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[var(--text-muted)]">تعداد دستگاه</dt>
                    <dd className="mt-0.5 font-mono-tabular font-medium text-[var(--text-primary)]">
                      {receipt.quantity} عدد
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => setReceipt(null)}
                  className="cursor-pointer rounded-lg border border-[var(--border-hairline)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                >
                  ثبت درخواست جدید
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="rayna-name" className="mb-1.5 block text-xs font-semibold text-[var(--text-primary)]">
                      نام و نام خانوادگی
                    </label>
                    <input
                      id="rayna-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثلاً: آرش محمدی"
                      className="w-full rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="rayna-contact" className="mb-1.5 block text-xs font-semibold text-[var(--text-primary)]">
                      شماره موبایل یا ایمیل
                    </label>
                    <input
                      id="rayna-contact"
                      type="text"
                      dir="ltr"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="09123456789"
                      className="w-full rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-2.5 text-left text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
                    />
                  </div>
                </div>

                {mode === 'b2b' && (
                  <div>
                    <label htmlFor="rayna-business" className="mb-1.5 block text-xs font-semibold text-[var(--text-primary)]">
                      نام کافه، فروشگاه یا مجموعه تجاری
                    </label>
                    <input
                      id="rayna-business"
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="مثلاً: کافه رُستری بامداد"
                      className="w-full rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="rayna-edition" className="mb-1.5 block text-xs font-semibold text-[var(--text-primary)]">
                      نسخه انتخابی
                    </label>
                    <select
                      id="rayna-edition"
                      value={edition}
                      onChange={(e) => setEdition(e.target.value)}
                      className="w-full rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
                    >
                      <option value="نسخه خانگی و شخصی">نسخه خانگی و شخصی</option>
                      <option value="نسخه تجاری و فروشگاهی (B2B)">نسخه تجاری و فروشگاهی (B2B)</option>
                      <option value="نسخه سازمانی و API اختصاصی">نسخه سازمانی و API اختصاصی</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rayna-qty" className="mb-1.5 block text-xs font-semibold text-[var(--text-primary)]">
                      تعداد درخواستی
                    </label>
                    <input
                      id="rayna-qty"
                      type="number"
                      min={1}
                      max={500}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                      className="font-mono-tabular w-full rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Wood Finish Selector */}
                <div>
                  <span className="mb-2 block text-xs font-semibold text-[var(--text-primary)]">
                    انتخاب نوع چوب بدنه
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {(['بلوط روشن (Oak)', 'راش طبیعی (Beech)'] as const).map((wood) => (
                      <button
                        key={wood}
                        type="button"
                        onClick={() => setWoodFinish(wood)}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-xs font-medium transition-colors ${
                          woodFinish === wood
                            ? 'border-[var(--accent-primary)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)]'
                            : 'border-[var(--border-hairline)] bg-[var(--bg-canvas)] text-[var(--text-secondary)]'
                        }`}
                      >
                        <span
                          className={`h-4 w-4 shrink-0 rounded-full ${
                            wood === 'بلوط روشن (Oak)' ? 'bg-[#C99B6B]' : 'bg-[#DFBE95]'
                          }`}
                        />
                        <span className="truncate">{wood}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="rayna-notes" className="mb-1.5 block text-xs font-semibold text-[var(--text-primary)]">
                    توضیحات تکمیلی (اختیاری)
                  </label>
                  <textarea
                    id="rayna-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={
                      mode === 'b2b'
                        ? 'تعداد شعب، نیاز به اتصال API یا نمایشگر منو را بنویسید...'
                        : 'سوال درباره قابلیت‌ها یا زمان ارسال دارید؟'
                    }
                    className="w-full rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
                  />
                </div>

                {errorMessage && (
                  <p role="alert" className="rounded-lg border border-[#B91C1C]/40 bg-[#B91C1C]/10 px-4 py-2.5 text-xs font-medium text-[#991B1B] dark:text-[#FCA5A5]">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-xl bg-[var(--accent-primary)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-primary-fg)] transition-colors duration-150 hover:bg-[var(--accent-primary-hover)]"
                >
                  {mode === 'personal' ? 'ثبت نهایی پیش‌خرید راینا' : 'ارسال درخواست همکاری تجاری B2B'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
