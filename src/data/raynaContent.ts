export type RaynaModelId = '2.4' | '2.8' | '4';

export interface RaynaContactConfig {
  websiteLabel: string;
  websiteUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  instagramHandle: string;
  instagramUrl: string;
  telegramHandle: string;
  telegramUrl: string;
  linkedinHandle: string;
  linkedinUrl: string;
  emailDisplay: string;
  emailHref: string;
}

/**
 * اطلاعات تماس رسمی راینا
 * پیش از انتشار نهایی روی GitHub Pages، مقادیر زیر را با آدرس‌ها و شماره‌های واقعی خود جایگزین کنید.
 */
export const RAYNA_CONTACT_CONFIG: RaynaContactConfig = {
  websiteLabel: 'آدرس وب‌سایت رسمی راینا',
  websiteUrl: 'https://rayna-smart.ir',
  phoneDisplay: 'شماره تماس واحد فروش و مشاوره',
  phoneHref: 'tel:+982100000000',
  instagramHandle: '@rayna.smart',
  instagramUrl: 'https://instagram.com/rayna.smart',
  telegramHandle: '@rayna_support',
  telegramUrl: 'https://t.me/rayna_support',
  linkedinHandle: 'rayna-smart',
  linkedinUrl: 'https://linkedin.com/company/rayna-smart',
  emailDisplay: 'sales@rayna-smart.ir',
  emailHref: 'mailto:sales@rayna-smart.ir',
};

export interface RaynaModel {
  id: RaynaModelId;
  sizeLabel: string;
  title: string;
  position: string;
  shortSummary: string;
  features: string;
  hasVoiceAi: boolean;
  screenScale: {
    widthPx: number;
    heightPx: number;
  };
  highlights: string[];
}

export const RAYNA_MODELS: RaynaModel[] = [
  {
    id: '2.4',
    sizeLabel: '۲.۴ اینچ',
    title: 'نسخه ۲.۴ اینچی',
    position: 'جمع‌وجور و مینیمال',
    shortSummary: 'جمع‌وجور برای نمایش اطلاعات روزمره، مدیریت زمان و ویجت‌های منتخب.',
    features:
      'مناسب برای فضاهای کوچک و میزهای خلوت؛ نمایش اطلاعات روزمره، ابزارهای زمان و ویجت‌های انتخابی.',
    hasVoiceAi: false,
    screenScale: { widthPx: 176, heightPx: 132 },
    highlights: [
      'اشغال کمترین فضا روی میزهای خلوت و کنار تخت',
      'نمایش شفاف ساعت، آب‌وهوا، اوقات شرعی و نرخ‌های روز',
      'تایمر تمرکز، کرنومتر و شمارش معکوس روزانه',
    ],
  },
  {
    id: '2.8',
    sizeLabel: '۲.۸ اینچ',
    title: 'نسخه ۲.۸ اینچی',
    position: 'متعادل و کاربردی',
    shortSummary: 'نمایشگر بزرگ‌تر برای خوانایی بیشتر اطلاعات، اعلان‌ها و قابلیت‌های تعاملی.',
    features:
      'فضای نمایش بیشتر برای خوانایی بهتر اطلاعات روزانه، تقویم، اعلان‌ها و قابلیت‌های تعاملی.',
    hasVoiceAi: false,
    screenScale: { widthPx: 212, heightPx: 158 },
    highlights: [
      'خوانایی بالاتر برای تقویم، مناسبت‌ها و یادآورهای کاری',
      'مرکز اعلان موبایل، اطلاعیه سازمانی و ویجت سفارشی API',
      'شخصیت دیجیتال متحرک، حیوان خانگی مجازی و دستیار ریلکسینگ',
    ],
  },
  {
    id: '4',
    sizeLabel: '۴ اینچ',
    title: 'نسخه ۴ اینچی (پیشرفته)',
    position: 'نسخه پیشرفته خانواده راینا',
    shortSummary: 'بیشترین فضای نمایش به همراه قابلیت‌های هوش مصنوعی و تعامل صوتی.',
    features:
      'بیشترین فضای نمایش به همراه قابلیت‌های هوش مصنوعی و تعامل صوتی (میکروفون و بلندگو منحصراً در این نسخه ارائه می‌شوند).',
    hasVoiceAi: false,
    screenScale: { widthPx: 272, heightPx: 196 },
    highlights: [
      'مجهز به میکروفون و بلندگوی اختصاصی (منحصراً در نسخه ۴ اینچی)',
      'دستیار صوتی، یادداشت‌برداری هوشمند، مترجم مکالمه و معلم هوشمند',
      'مناسب برای میز مدیران، مطالعه حرفه‌ای و نماینده هوشمند کسب‌وکار',
    ],
  },
];

export interface InfoWidgetItem {
  id: string;
  name: string;
  usage: string;
  sampleText: string;
  screenKicker: string;
  screenPrimary: string;
  screenSecondary: string;
  screenDetail: string;
}

export const INFO_WIDGETS: InfoWidgetItem[] = [
  {
    id: 'clock-date',
    name: 'ساعت و تاریخ',
    usage: 'نمایش دقیق و خوانای ساعت و تاریخ روز روی میز.',
    sampleText: '۱۰:۲۴ | سه‌شنبه ۴ آذر',
    screenKicker: 'ساعت محلی تهران',
    screenPrimary: '۱۰:۲۴',
    screenSecondary: 'سه‌شنبه ۴ آذر ۱۴۰۵',
    screenDetail: 'تنظیم خودکار شبکه',
  },
  {
    id: 'world-clock',
    name: 'ساعت جهانی',
    usage: 'نمایش همزمان ساعت دو شهر مختلف برای ارتباطات بین‌المللی.',
    sampleText: 'تهران ۱۴:۳۰ | لندن ۱۱:۰۰',
    screenKicker: 'ساعت جهانی همزمان',
    screenPrimary: '۱۴:۳۰ / ۱۱:۰۰',
    screenSecondary: 'تهران — لندن',
    screenDetail: 'اختلاف زمانی ۳:۳۰+ ساعت',
  },
  {
    id: 'weather',
    name: 'آب‌وهوا',
    usage: 'مشاهده وضعیت آب‌وهوای روز پیش از خروج از منزل یا محل کار.',
    sampleText: '۱۸° | نیمه‌ابری — کمینه ۹° / بیشینه ۲۱°',
    screenKicker: 'وضعیت جوی امروز',
    screenPrimary: '۱۸°C',
    screenSecondary: 'نیمه‌ابری · هوای مطبوع',
    screenDetail: 'کمینه ۹° / بیشینه ۲۱°',
  },
  {
    id: 'rain-alert',
    name: 'هشدار بارش',
    usage: 'اطلاع‌رسانی پیش از شروع بارندگی یا بارش برف.',
    sampleText: 'هشدار بارش: احتمال بارندگی تا ۳۰ دقیقه آینده',
    screenKicker: 'هشدار جوی نزدیک',
    screenPrimary: '۳۰ دقیقه دیگر',
    screenSecondary: 'احتمال بارندگی در منطقه شما',
    screenDetail: 'شدت پیش‌بینی‌شده: ملایم تا متوسط',
  },
  {
    id: 'calendar',
    name: 'تقویم و مناسبت‌ها',
    usage: 'مشاهده تقویم، مناسبت‌های روز و انتخاب تاریخ شمسی یا میلادی.',
    sampleText: 'آذر ۱۴۰۵ | ۲۵ Nov — مناسبت روز',
    screenKicker: 'تقویم شمسی و میلادی',
    screenPrimary: '۴ آذر ۱۴۰۵',
    screenSecondary: '25 Nov · مناسبت روز ثبت شده',
    screenDetail: 'نمایش دوگانه شمسی / میلادی',
  },
  {
    id: 'prayer-times',
    name: 'اوقات شرعی',
    usage: 'نمایش دقیق اوقات شرعی روزانه متناسب با شهر شما.',
    sampleText: 'اذان ظهر ۱۱:۵۲ | مغرب ۱۷:۱۱',
    screenKicker: 'اوقات شرعی به افق شهر شما',
    screenPrimary: '۱۱:۵۲ · ۱۷:۱۱',
    screenSecondary: 'اذان ظهر و اذان مغرب',
    screenDetail: 'صبح ۰۵:۲۱ · طلوع ۰۶:۴۹',
  },
  {
    id: 'azan',
    name: 'اذان‌گو (آپشنال)',
    usage: 'پخش اذان در زمان اوقات شرعی به‌صورت اختیاری.',
    sampleText: 'اذان مغرب — حالت پخش فعال',
    screenKicker: 'پخش خودکار اذان',
    screenPrimary: 'اذان مغرب',
    screenSecondary: 'حالت پخش فعال · ۱۷:۱۱',
    screenDetail: 'قابل تنظیم و خاموش‌سازی از اپلیکیشن',
  },
  {
    id: 'currency',
    name: 'نرخ ارز',
    usage: 'مشاهده نرخ ارزهای منتخب به‌صورت یکجا و خوانا.',
    sampleText: 'دلار / یورو — به‌روزرسانی لحظه‌ای',
    screenKicker: 'نرخ ارزهای منتخب',
    screenPrimary: 'دلار · یورو',
    screenSecondary: 'به‌روزرسانی لحظه‌ای و خودکار',
    screenDetail: 'انتخاب جفت‌ارزهای دلخواه',
  },
  {
    id: 'gold-coin',
    name: 'قیمت طلا و سکه',
    usage: 'نمایش قیمت روز طلا و سکه روی نمایشگر رومیزی.',
    sampleText: 'طلای ۱۸ عیار | سکه امامی — نرخ روز',
    screenKicker: 'بازار طلا و سکه',
    screenPrimary: 'طلای ۱۸ عیار',
    screenSecondary: 'سکه امامی — نرخ روز',
    screenDetail: 'پایش مداوم بدون نیاز به گوشی',
  },
  {
    id: 'stock-assistant',
    name: 'دستیار بورسی',
    usage: 'مشاهده اطلاعات بورس و وضعیت نمادهای منتخب کاربر.',
    sampleText: 'نماد منتخب +۲.۴٪ | وضعیت بازار',
    screenKicker: 'پایش نمادهای منتخب',
    screenPrimary: '+۲.۴٪',
    screenSecondary: 'نماد منتخب در روند مثبت',
    screenDetail: 'وضعیت کلی بازار سرمایه',
  },
];

export type ProductivityToolId = 'reminder' | 'timer' | 'stopwatch' | 'countdown';

export interface ProductivityTool {
  id: ProductivityToolId;
  name: string;
  description: string;
  scenario: string;
  screenLabel: string;
  screenHeadline: string;
  screenSubtext: string;
}

export const PRODUCTIVITY_TOOLS: ProductivityTool[] = [
  {
    id: 'reminder',
    name: 'یادآور هوشمند',
    description:
      'یادآوری رویدادهای مهم و قرارهای کاری، با امکان اتصال مستقیم به Outlook و Google Calendar.',
    scenario: 'یادآور جلسه (۱۵ دقیقه دیگر) — بررسی گزارش فروش، اتاق جلسات ۲',
    screenLabel: 'Google Calendar · Outlook',
    screenHeadline: '۱۵ دقیقه تا جلسه',
    screenSubtext: 'بررسی گزارش فروش — اتاق جلسات ۲',
  },
  {
    id: 'timer',
    name: 'تایمر',
    description:
      'مدیریت دقیق زمان کار و استراحت با امکان تنظیم سریع تایمر از طریق اپلیکیشن گوشی.',
    scenario: '۲۴:۵۹ — زمان تمرکز (پومودورو) یا زمان استراحت کوتاه میان کار',
    screenLabel: 'زمان تمرکز پومودورو',
    screenHeadline: '۲۴:۵۹',
    screenSubtext: 'زمان تمرکز عمیق یا استراحت کوتاه',
  },
  {
    id: 'stopwatch',
    name: 'کرنومتر',
    description:
      'اندازه‌گیری دقیق مدت‌زمان فعالیت‌های روزانه، مطالعه، تمرین یا کارهای اجرایی.',
    scenario: '۰۰:۱۸:۴۲ — ثبت زمان فعالیت',
    screenLabel: 'کرنومتر دقیق',
    screenHeadline: '۰۰:۱۸:۴۲',
    screenSubtext: 'ثبت زمان فعالیت و مطالعه',
  },
  {
    id: 'countdown',
    name: 'شمارش معکوس',
    description:
      'شمارش معکوس روزانه تا یک رویداد مهم، تاریخ تحویل پروژه یا یک مناسبت شخصی.',
    scenario: '۱۲ روز مانده تا رونمایی محصول جدید',
    screenLabel: 'رویداد پیش‌رو',
    screenHeadline: '۱۲ روز مانده',
    screenSubtext: 'تا رونمایی محصول جدید',
  },
];

export interface ConnectivityFeature {
  id: string;
  name: string;
  usage: string;
  sampleTitle: string;
  sampleBody: string;
  meta: string;
  apiPreview?: string;
}

export const CONNECTIVITY_FEATURES: ConnectivityFeature[] = [
  {
    id: 'notifications',
    name: 'مرکز اعلان',
    usage: 'دریافت اعلان‌های موبایل به‌طور مستقیم روی نمایشگر راینا، بدون نیاز به برداشتن گوشی.',
    sampleTitle: 'پیام جدید',
    sampleBody: 'هماهنگی ارسال بسته ساعت ۱۶',
    meta: 'همگام‌سازی مستقیم با موبایل',
  },
  {
    id: 'org-alerts',
    name: 'اعلان‌های سازمانی',
    usage: 'دریافت اطلاعیه‌ها و پیام‌های ارسال‌شده از پنل مشتریان تجاری روی دستگاه‌های تیم.',
    sampleTitle: 'اطلاعیه داخلی',
    sampleBody: 'جلسه عمومی ساعت ۱۱ در سالن اصلی',
    meta: 'ارسال متمرکز از پنل مدیریتی',
  },
  {
    id: 'custom-api',
    name: 'ویجت سفارشی',
    usage: 'نمایش اطلاعات دلخواه مشتری یا سازمان از طریق API و تنظیمات اپلیکیشن.',
    sampleTitle: 'سفارش‌های امروز: ۴۸',
    sampleBody: 'وضعیت سرویس: فعال',
    meta: 'اتصال مستقیم REST API',
    apiPreview: `POST /api/v1/rayna/widget
{
  "title": "سفارش‌های امروز",
  "value": "48",
  "status": "فعال"
}`,
  },
];

export interface ExperientialFeature {
  id: string;
  name: string;
  description: string;
  contextTag: string;
  interactiveType?: 'breathing';
}

export const EXPERIENTIAL_FEATURES: ExperientialFeature[] = [
  {
    id: 'digital-character',
    name: 'شخصیت دیجیتال متحرک',
    description:
      'یک شخصیت دیجیتالی پویا برای ایجاد تعامل روزمره و ارتباط احساسی گرم‌تر با کاربر در طول روز.',
    contextTag: 'تعامل روزمره',
  },
  {
    id: 'virtual-pet',
    name: 'حیوان خانگی دیجیتال',
    description:
      'یک حیوان خانگی مجازی با صدا، حرکات نمایشی و نیاز به مراقبت که فضای میز شما را سرزنده می‌کند.',
    contextTag: 'فضای زنده میز',
  },
  {
    id: 'relax-assistant',
    name: 'دستیار ریلکسینگ',
    description:
      'راهنمای تنفس منظم روی صفحه برای کاهش تنش، تجدید تمرکز و آرامش ذهنی میان کارهای روزانه.',
    contextTag: 'آرامش و تمرکز',
    interactiveType: 'breathing',
  },
  {
    id: 'smart-home',
    name: 'کنترل خانه هوشمند',
    description:
      'کنترل سریع و در دسترس تجهیزات و ابزارهای خانه هوشمند از روی میز یا کنار تخت.',
    contextTag: 'مدیریت منزل',
  },
  {
    id: 'senior-meds',
    name: 'یادآور داروی سالمندان',
    description:
      'تنظیم یادآورهای روزانه یا ساعتی برای مصرف به‌موقع دارو با نمایش واضح و خوانا.',
    contextTag: 'مراقبت خانوادگی',
  },
];

export interface AiCapability {
  id: string;
  name: string;
  description: string;
  samplePrompt: string;
  sampleReply: string;
}

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: 'voice-assistant',
    name: 'دستیار صوتی',
    description: 'پاسخ‌گویی سریع به پرسش‌های روزمره از طریق گفت‌وگوی صوتی بدون نیاز به تایپ.',
    samplePrompt: '«راینا، وضعیت هوای فردا صبح تهران چطوره؟»',
    sampleReply: 'فردا صبح هوای تهران صاف با دمای ۱۴ درجه پیش‌بینی شده و نیازی به چتر نیست.',
  },
  {
    id: 'smart-notes',
    name: 'یادداشت‌برداری هوشمند',
    description: 'تبدیل گفتار به متن برای ثبت سریع ایده‌ها و جلسات، با امکان ویرایش یادداشت‌ها.',
    samplePrompt: '«یادداشت کن: جمع‌بندی پیشنهاد طراحی تا چهارشنبه ارسال بشه.»',
    sampleReply: 'یادداشت جدید با عنوان «ارسال پیشنهاد طراحی — چهارشنبه» ثبت و در اپلیکیشن ذخیره شد.',
  },
  {
    id: 'translator',
    name: 'مترجم مکالمه',
    description: 'ترجمه زنده مکالمات برای ارتباط روان‌تر در جلسات یا گفت‌وگوهای دوزبانه.',
    samplePrompt: '«ترجمه زنده فارسی به انگلیسی را برای جلسه فعال کن.»',
    sampleReply: 'حالت مترجم دوزبانه فعال است؛ آماده ترجمه همزمان گفت‌وگوی شما.',
  },
  {
    id: 'smart-tutor',
    name: 'معلم هوشمند',
    description: 'همراهی با دانش‌آموزان روی میز مطالعه برای حل تمرین و رفع اشکال‌های درسی.',
    samplePrompt: '«قانون دوم نیوتن را با یک مثال ساده توضیح بده.»',
    sampleReply: 'شتاب هر جسم متناسب با نیروی وارد بر آن و برعکس جرم آن است؛ مثلاً هل دادن یک چرخ خالی ساده‌تر از چرخ پر است.',
  },
  {
    id: 'personal-secretary',
    name: 'منشی شخصی',
    description: 'مرور برنامه‌های روزانه و کمک به هماهنگی و پیگیری امور کاری.',
    samplePrompt: '«برنامه جلسات امروز من چیه؟»',
    sampleReply: 'امروز دو جلسه دارید: ساعت ۱۱ جلسه تیم طراحی و ساعت ۱۵:۳۰ بررسی گزارش فروش.',
  },
  {
    id: 'domain-expert',
    name: 'متخصص اختصاصی',
    description: 'یادگیری دانش حوزه کاری شما و تبدیل شدن به دستیار متخصص همان حوزه.',
    samplePrompt: '«مفاد استاندارد گارانتی محصولات ما را خلاصه کن.»',
    sampleReply: 'بر اساس پایگاه دانش ثبت‌شده، تمام دستگاه‌ها شامل ۱۸ ماه گارانتی تعویض قطعات و پشتیبانی فنی هستند.',
  },
  {
    id: 'smart-player',
    name: 'پخش‌کننده هوشمند',
    description: 'پخش موسیقی، پادکست و کتاب صوتی با بهره‌گیری از قابلیت‌های هوش مصنوعی.',
    samplePrompt: '«یک موسیقی بی‌کلام آرام برای تمرکز پخش کن.»',
    sampleReply: 'در حال پخش فهرست تمرکز عمیق روی بلندگوی اختصاصی راینا ۴ اینچی.',
  },
  {
    id: 'voice-commands',
    name: 'اجرای فرامین صوتی',
    description: 'انجام کارهای روزمره مانند تنظیم آلارم تنها با یک فرمان صوتی.',
    samplePrompt: '«تایمر ۲۵ دقیقه‌ای برای مطالعه تنظیم کن.»',
    sampleReply: 'تایمر ۲۵ دقیقه‌ای آغاز شد؛ پایان زمان را با هشدار صوتی اعلام می‌کنم.',
  },
  {
    id: 'personal-coach',
    name: 'مشاور و کوچ شخصی',
    description: 'گفت‌وگو و راهنمایی ساختاریافته در زمینه رشد فردی و مسائل روزمره.',
    samplePrompt: '«چطور روتین صبحگاهی منظم‌تری بسازم؟»',
    sampleReply: 'با یک گام کوچک ۱۵ دقیقه‌ای شروع کنیم: زمان بیداری ثابت، ۱۰ دقیقه بدون موبایل و مرور اولویت اول روز.',
  },
];

export interface EnterpriseSolution {
  id: string;
  name: string;
  description: string;
  deliverable: string;
}

export const ENTERPRISE_SOLUTIONS: EnterpriseSolution[] = [
  {
    id: 'business-rep',
    name: 'نماینده هوشمند کسب‌وکار',
    description:
      'راهنمایی مشتریان و مراجعان در فروشگاه‌ها، نمایشگاه‌ها، غرفه‌ها و میز پذیرش برای پاسخ به سؤالات پرتکرار و معرفی خدمات.',
    deliverable: 'میز پذیرش · فروشگاه · غرفه نمایشگاهی',
  },
  {
    id: 'org-announcements',
    name: 'نمایش اعلان‌های سازمانی',
    description:
      'ارسال پیام‌ها، اطلاعیه‌های داخلی و یادآوری‌های تیمی از طریق پنل مدیریتی روی دستگاه‌های سازمان.',
    deliverable: 'پنل مدیریتی متمرکز تیمی',
  },
  {
    id: 'enterprise-api',
    name: 'ویجت سفارشی (API)',
    description:
      'نمایش اطلاعات اختصاصی هر کسب‌وکار مانند وضعیت سفارش‌ها، صف پذیرش یا شاخص‌های کلیدی از طریق اتصال API.',
    deliverable: 'شاخص‌های کلیدی · صف پذیرش · وضعیت سفارش',
  },
];

export interface UseCaseProfile {
  id: string;
  environment: string;
  recommendedEdition: string;
  summary: string;
  suggestedFeatures: string[];
  screenPreviewTitle: string;
  screenPreviewLine: string;
}

export const USE_CASE_PROFILES: UseCaseProfile[] = [
  {
    id: 'home',
    environment: 'راینا برای خانه',
    recommendedEdition: 'پیشنهادی: نسخه ۲.۴ یا ۲.۸ اینچی',
    summary: 'ساعت و تاریخ، آب‌وهوا، تقویم و مناسبت‌ها، اوقات شرعی و کنترل خانه هوشمند.',
    suggestedFeatures: [
      'ساعت و تاریخ شفاف',
      'وضعیت آب‌وهوا و هشدار بارش',
      'تقویم و مناسبت‌ها',
      'اوقات شرعی و اذان‌گو',
      'کنترل خانه هوشمند',
    ],
    screenPreviewTitle: 'میز نشیمن · خانه',
    screenPreviewLine: '۱۸° نیمه‌ابری · اذان مغرب ۱۷:۱۱',
  },
  {
    id: 'desk',
    environment: 'راینا برای میز کار',
    recommendedEdition: 'پیشنهادی: نسخه ۲.۸ یا ۴ اینچی',
    summary: 'ساعت جهانی، یادآور متصل به تقویم، تایمر، اعلان‌های کاری و ویجت سفارشی.',
    suggestedFeatures: [
      'ساعت جهانی دو شهر',
      'یادآور متصل به Outlook و Google Calendar',
      'تایمر پومودورو و کرنومتر',
      'مرکز اعلان‌های کاری',
      'ویجت سفارشی اختصاصی',
    ],
    screenPreviewTitle: 'میز کار حرفه‌ای',
    screenPreviewLine: 'تهران ۱۴:۳۰ · جلسه ۱۵ دقیقه دیگر',
  },
  {
    id: 'personal',
    environment: 'راینا برای استفاده شخصی',
    recommendedEdition: 'پیشنهادی: نسخه ۲.۸ اینچی',
    summary: 'شخصیت دیجیتال متحرک، حیوان خانگی دیجیتال، دستیار ریلکسینگ و قابلیت‌های تعاملی.',
    suggestedFeatures: [
      'شخصیت دیجیتال متحرک',
      'حیوان خانگی دیجیتال',
      'دستیار ریلکسینگ و تنفس',
      'شمارش معکوس مناسبت‌ها',
      'قابلیت‌های تعاملی روزانه',
    ],
    screenPreviewTitle: 'همراه شخصی روزمره',
    screenPreviewLine: 'تنفس آرام · ۴ ثانیه دم / ۴ ثانیه بازدم',
  },
  {
    id: 'ai-users',
    environment: 'راینا برای کاربران هوش مصنوعی',
    recommendedEdition: 'منحصراً نسخه ۴ اینچی (پیشرفته)',
    summary: 'دستیار صوتی، منشی شخصی، مترجم مکالمه و معلم هوشمند (ویژه نسخه ۴ اینچی).',
    suggestedFeatures: [
      'دستیار صوتی بی‌نیاز از تایپ',
      'منشی شخصی و پیگیری کارها',
      'مترجم زنده مکالمه',
      'معلم هوشمند برای مطالعه',
      'یادداشت‌برداری هوشمند و کوچ شخصی',
    ],
    screenPreviewTitle: 'نسخه ۴ اینچی هوشمند',
    screenPreviewLine: 'میکروفون و بلندگو فعال · آماده گفت‌وگو',
  },
  {
    id: 'business',
    environment: 'راینا برای کسب‌وکارها',
    recommendedEdition: 'پیشنهادی: نسخه ۲.۸ و ۴ اینچی سازمانی',
    summary: 'اعلان سازمانی، ویجت اختصاصی متصل به API و نماینده هوشمند کسب‌وکار.',
    suggestedFeatures: [
      'نماینده هوشمند در پذیرش و نمایشگاه',
      'ارسال اعلان‌های سازمانی از پنل',
      'ویجت اختصاصی متصل به API',
      'نمایش وضعیت سفارش‌ها و صف پذیرش',
      'سفارشی‌سازی متناسب با هویت برند',
    ],
    screenPreviewTitle: 'پنل تجاری و پذیرش',
    screenPreviewLine: 'سفارش‌های امروز: ۴۸ · سرویس فعال',
  },
];
