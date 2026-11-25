export type FeatureCategoryId =
  | 'all'
  | 'time-rituals'
  | 'finance-market'
  | 'productivity-iot'
  | 'wellness-play'
  | 'ai-assistants'
  | 'business-b2b';

export interface RaynaFeature {
  id: number;
  name: string;
  description: string;
  category: Exclude<FeatureCategoryId, 'all'>;
  categoryLabel: string;
  availability: {
    personal: boolean;
    retailB2B: boolean;
    enterpriseApi: boolean;
  };
}

export interface FeatureCategory {
  id: FeatureCategoryId;
  label: string;
}

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {id: 'all', label: 'همه قابلیت‌ها (۳۲)'},
  {id: 'time-rituals', label: 'زمان، آب‌وهوا و آیین‌ها'},
  {id: 'finance-market', label: 'نبض بازار و مالی'},
  {id: 'productivity-iot', label: 'بهره‌وری و خانه هوشمند'},
  {id: 'wellness-play', label: 'سلامت، آرامش و سرگرمی'},
  {id: 'ai-assistants', label: 'دستیارهای هوش مصنوعی'},
  {id: 'business-b2b', label: 'کسب‌وکار و نمایشگاهی'},
];

export const RAYNA_FEATURES: RaynaFeature[] = [
  {
    id: 1,
    name: 'ساعت و تاریخ',
    description: 'نمایش ساعت و تاریخ در یک ویجت اختصاصی یا بالای صفحه با خوانایی بالا از فاصله دور.',
    category: 'time-rituals',
    categoryLabel: 'زمان و آیین‌ها',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 2,
    name: 'ساعت جهانی',
    description: 'نمایش هم‌زمان ساعت دو شهر مختلف جهان در کنار هم برای هماهنگی جلسات و بازارهای بین‌المللی.',
    category: 'time-rituals',
    categoryLabel: 'زمان و آیین‌ها',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 3,
    name: 'آب و هوا',
    description: 'نمایش وضعیت آب و هوای روز، دما و پیش‌بینی لحظه‌ای شرایط جوی.',
    category: 'time-rituals',
    categoryLabel: 'زمان و آیین‌ها',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 4,
    name: 'هشدار بارش',
    description: 'اعلان و هشدار هوشمند بارش باران و برف پیش از شروع بارندگی.',
    category: 'time-rituals',
    categoryLabel: 'زمان و آیین‌ها',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 5,
    name: 'تقویم و مناسبت‌ها',
    description: 'ویجت تقویم با نمایش مناسبت‌های رسمی و قابلیت انتخاب تاریخ شمسی و میلادی.',
    category: 'time-rituals',
    categoryLabel: 'زمان و آیین‌ها',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 6,
    name: 'اوقات شرعی',
    description: 'نمایش دقیق اوقات شرعی روزانه به افق شهر انتخابی در یک ویجت اختصاصی.',
    category: 'time-rituals',
    categoryLabel: 'زمان و آیین‌ها',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 7,
    name: 'اذان‌گو',
    description: 'پخش اذان با کیفیت صوتی شفاف از بلندگوی داخلی دستگاه به‌صورت کاملاً اختیاری.',
    category: 'time-rituals',
    categoryLabel: 'زمان و آیین‌ها',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 8,
    name: 'نرخ ارز',
    description: 'نمایش لحظه‌ای نرخ ارزهای منتخب کاربر در یک ویجت همیشه روشن روی میز کار یا پیشخوان.',
    category: 'finance-market',
    categoryLabel: 'نبض بازار',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 9,
    name: 'قیمت طلا و سکه',
    description: 'نمایش نرخ لحظه‌ای طلا، انس جهانی و سکه همراه با درصد تغییرات مثبت و منفی.',
    category: 'finance-market',
    categoryLabel: 'نبض بازار',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 10,
    name: 'دستیار بورسی',
    description: 'نمایش اطلاعات بورس، نمودار روند و نمادهای منتخب کاربر با رنگ‌بندی گویای رشد و افت.',
    category: 'finance-market',
    categoryLabel: 'نبض بازار',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 11,
    name: 'نمایش اعلان B2B',
    description: 'نمایش اعلان‌ها، تخفیف‌ها و پیام‌های ارسال‌شده از سمت پنل مدیریتی مشتری B2B.',
    category: 'business-b2b',
    categoryLabel: 'کسب‌وکار B2B',
    availability: {personal: false, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 12,
    name: 'یادآور',
    description: 'یادآوری رویدادهای مهم و قرارهای کاری با قابلیت اتصال مستقیم به Outlook و گوگل کلندر.',
    category: 'productivity-iot',
    categoryLabel: 'بهره‌وری',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 13,
    name: 'تایمر',
    description: 'ویجت مدیریت زمان و تمرکز با امکان تنظیم سریع تایمر از طریق اپلیکیشن موبایل.',
    category: 'productivity-iot',
    categoryLabel: 'بهره‌وری',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 14,
    name: 'کرنومتر',
    description: 'کرنومتر دقیق با خوانایی بالا برای زمان‌سنجی فعالیت‌های روزمره و کاری.',
    category: 'productivity-iot',
    categoryLabel: 'بهره‌وری',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 15,
    name: 'شمارش معکوس',
    description: 'شمارش معکوس روزانه تا یک رویداد مهم، تاریخ تحویل پروژه یا جشنواره فروش.',
    category: 'productivity-iot',
    categoryLabel: 'بهره‌وری',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 16,
    name: 'ویجت سفارشی API',
    description: 'نمایش اطلاعات دلخواه مشتری یا آمار سیستم‌ها از هر سرویس که API آن در اپلیکیشن ثبت شود.',
    category: 'business-b2b',
    categoryLabel: 'کسب‌وکار B2B',
    availability: {personal: false, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 17,
    name: 'شخصیت دیجیتال متحرک',
    description: 'یک شخصیت دیجیتالی پویا روی صفحه نمایش برای تعامل احساسی و زنده با کاربر.',
    category: 'wellness-play',
    categoryLabel: 'تعامل و سرگرمی',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 18,
    name: 'مرکز اعلان موبایل',
    description: 'دریافت و مرور اعلان‌های برگزیده موبایل روی نمایشگر رومیزی بدون درگیر شدن با گوشی.',
    category: 'productivity-iot',
    categoryLabel: 'بهره‌وری',
    availability: {personal: true, retailB2B: false, enterpriseApi: true},
  },
  {
    id: 19,
    name: 'دستیار ریلکسینگ',
    description: 'دستیار تنفس منظم و هدایت‌شده برای بازیابی تمرکز و آرامش روحی و ذهنی.',
    category: 'wellness-play',
    categoryLabel: 'آرامش و سلامت',
    availability: {personal: true, retailB2B: false, enterpriseApi: true},
  },
  {
    id: 20,
    name: 'کنترل خانه هوشمند',
    description: 'کنترل مستقیم ابزارهای IoT خانه هوشمند، نورپردازی و دما از روی میز یا پاتختی.',
    category: 'productivity-iot',
    categoryLabel: 'خانه هوشمند',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 21,
    name: 'یادآور داروی سالمندان',
    description: 'تنظیم آلارم‌های منظم روزانه یا ساعتی با پیام صوتی و تصویری برای یادآوری مصرف دارو.',
    category: 'wellness-play',
    categoryLabel: 'سلامت خانواده',
    availability: {personal: true, retailB2B: false, enterpriseApi: true},
  },
  {
    id: 22,
    name: 'یادداشت‌برداری هوشمند',
    description: 'تبدیل دقیق گفتار به یادداشت مکتوب همراه با ویراستاری خودکار متن.',
    category: 'ai-assistants',
    categoryLabel: 'هوش مصنوعی',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 23,
    name: 'مترجم مکالمه',
    description: 'ترجمه زنده مکالمات میان زبان‌های مختلف برای جلسات و تعاملات با مشتریان بین‌المللی.',
    category: 'ai-assistants',
    categoryLabel: 'هوش مصنوعی',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 24,
    name: 'دستیار صوتی',
    description: 'دستیار صوتی عمومی به زبان فارسی برای پاسخ‌گویی سریع به پرسش‌های روزانه.',
    category: 'ai-assistants',
    categoryLabel: 'هوش مصنوعی',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 25,
    name: 'معلم کمک‌آموزشی',
    description: 'معلم همراه دانش‌آموزان برای حل تمرین، توضیح گام‌به‌گام و برطرف کردن اشکالات درسی.',
    category: 'ai-assistants',
    categoryLabel: 'هوش مصنوعی',
    availability: {personal: true, retailB2B: false, enterpriseApi: true},
  },
  {
    id: 26,
    name: 'منشی شخصی',
    description: 'مرور برنامه‌های روزانه هر صبح و کمک به هماهنگی وظایف اداری و کارهای شرکت.',
    category: 'ai-assistants',
    categoryLabel: 'هوش مصنوعی',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 27,
    name: 'متخصص اختصاصی',
    description: 'دستیاری که دانش حوزه کاری شما را می‌آموزد و به یک کارشناس اختصاصی در همان زمینه تبدیل می‌شود.',
    category: 'ai-assistants',
    categoryLabel: 'هوش مصنوعی',
    availability: {personal: false, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 28,
    name: 'پخش‌کننده هوشمند',
    description: 'پخش‌کننده هوشمند موسیقی، پادکست و کتاب صوتی با انتخاب محتوا توسط هوش مصنوعی.',
    category: 'wellness-play',
    categoryLabel: 'سرگرمی و صوت',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 29,
    name: 'اجرای وظایف و فرامین صوتی',
    description: 'دستیار ایجنتیک برای انجام خودکار کارها مانند تنظیم آلارم، یادآور و فرامین روزمره.',
    category: 'ai-assistants',
    categoryLabel: 'هوش مصنوعی',
    availability: {personal: true, retailB2B: true, enterpriseApi: true},
  },
  {
    id: 30,
    name: 'مشاور و کوچ شخصی',
    description: 'همراه و مشاور شخصی در امور رشد فردی و آرامش ذهنی برای گفت‌وگو و راهنمایی روزانه.',
    category: 'wellness-play',
    categoryLabel: 'رشد فردی',
    availability: {personal: true, retailB2B: false, enterpriseApi: true},
  },
  {
    id: 31,
    name: 'حیوان خانگی دیجیتال',
    description: 'یک حیوان خانگی تعاملی با صدا، نیاز به مراقبت و حرکات نمایشی جذاب روی میز کار.',
    category: 'wellness-play',
    categoryLabel: 'سرگرمی و تعامل',
    availability: {personal: true, retailB2B: false, enterpriseApi: true},
  },
  {
    id: 32,
    name: 'نماینده هوشمند کسب‌وکار',
    description: 'نماینده دیجیتال برای راهنمایی مشتریان و پاسخ‌گویی به مراجعان در نمایشگاه‌ها و فروشگاه‌ها.',
    category: 'business-b2b',
    categoryLabel: 'کسب‌وکار B2B',
    availability: {personal: false, retailB2B: true, enterpriseApi: true},
  },
];

export interface GalleryScenario {
  slotId: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  imagePath: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export const GALLERY_SCENARIOS: GalleryScenario[] = [
  {
    slotId: 1,
    imagePath: '/assets/images/1.jpg',
    tag: '۱. اکوالایزر صوتی و فضای ژاپندی',
    title: 'هم‌نشینی گرمای چوب و امواج صوتی مدرن',
    subtitle: 'نمایشگر یکپارچه روی میز کار در کنار لپ‌تاپ و قهوه صبحگاهی',
    description:
      'بدنه چوبی روشن از بلوط یا راش با گوشه‌های نرم و صیقلی، میزبان نمایشگری براق و بدون دکمه در نمایی کاملاً تمیز و عاری از سیم‌های مزاحم است.',
    highlights: ['قاب چوبی بلوط و راش طبیعی', 'اکوالایزر کروی و طیف صوتی پویا', 'طراحی جلویی بدون دکمه و پورت'],
  },
  {
    slotId: 2,
    imagePath: '/assets/images/2.jpg',
    tag: '۲. مهندسی پنل پشتی',
    title: 'وقتی پشت دستگاه به زیبایی جلوی آن است',
    subtitle: 'پنل مشکی مات با گریل‌های دوگانه و راه‌اندازی فوری QR',
    description:
      'قاب چوبی طبیعی به‌طور یکپارچه دور پنل مشکی مات را در بر می‌گیرد. دو الگوی گریل نقطه‌ای و شیاردار عمودی، خروجی صدای شفاف و تهویه حرارتی بهینه را تضمین می‌کنند.',
    highlights: ['گریل نقطه‌ای و شیاردار برای آکوستیک و تهویه', 'پورت مخفی USB-C در بخش پایینی', 'کد QR اتصال سریع و لوگوی نه بیتکس'],
  },
  {
    slotId: 3,
    imagePath: '/assets/images/3.jpg',
    tag: '۳. سرگرمی تعاملی روی میز',
    title: 'جفت شش! بازی و نشاط در زنگ تفریح',
    subtitle: 'تلاقی دنیای فیزیکی تاس چوبی و گرافیک زنده دیجیتال',
    description:
      'راینا تنها ابزار کار نیست؛ با نمایش گرافیک‌های بومی فارسی مانند «جفت شش!» و هماهنگی بصری با تاس‌های چوبی هم‌جنس بدنه، لحظات استراحت را دلنشین‌تر می‌کند.',
    highlights: ['رابط کاربری سرگرمی با فونت فارسی خوانا', 'هم‌نشینی با اکسسوری‌های چوبی روی میز', 'حیوان خانگی و شخصیت دیجیتال متحرک'],
  },
  {
    slotId: 4,
    imagePath: '/assets/images/4.jpg',
    tag: '۴. ردیاب لحظه‌ای بازار (ETH)',
    title: 'نبض بازار روی میز کار خانگی شما',
    subtitle: 'نمایش نمودار مساحتی سبز اتریوم ($3,210) و تغییرات لحظه‌ای',
    description:
      'بدون نیاز به باز کردن تب‌های متعدد مرورگر یا چک کردن مداوم موبایل، قیمت لحظه‌ای اتریوم و نوسانات (+1.5% / -1.05%) را در یک نگاه دنبال کنید.',
    highlights: ['نمودار روندی با کنتراست بالا', 'رنگ‌بندی شفاف رشد و افت قیمت', 'همیشه روشن بدون حواس‌پرتی گوشی'],
  },
  {
    slotId: 5,
    imagePath: '/assets/images/5.jpg',
    tag: '۵. فضای تجاری و کافه‌ها',
    title: 'نقطه گفت‌وگوی مدرن روی پیشخوان فروشگاه',
    subtitle: 'استقرار در کنار دستگاه کارت‌خوان (POS) برای نمایش BTC، ETH و طلا',
    description:
      'روی پیشخوان چوبی کافه یا فروشگاه، راینا با نمایش قیمت لحظه‌ای ارزهای دیجیتال و طلا و ارائه پیام‌های پنل B2B، تصویر برندی به‌روز و پیشرو به مشتریان می‌دهد.',
    highlights: ['خوانایی واضح برای مشتری و صندوقدار', 'ارسال اعلان و پیشنهاد ویژه از پنل B2B', 'هماهنگی طبیعی با دکور کافه و بوتیک'],
  },
  {
    slotId: 6,
    imagePath: '/assets/images/6.jpg',
    tag: '۶. میز کار سرمایه‌گذار',
    title: 'رصد هم‌زمان بیت‌کوین، اتریوم و طلا',
    subtitle: 'بهره‌وری متمرکز کنار دفترچه یادداشت و فنجان قهوه',
    description:
      'ترکیب قیمت لحظه‌ای دارایی‌ها با شاخص‌های تغییر (+1.51% / -1.95%) و ویجت ساعت و تقویم، راینا را به یک همراه ساکت و کارآمد در محیط کار تبدیل می‌کند.',
    highlights: ['پایش هم‌زمان چند دارایی کلیدی', 'تایمر پومودورو و یادآور جلسات Outlook', 'نمای مینیمال بدون شلوغی بصری'],
  },
  {
    slotId: 7,
    imagePath: '/assets/images/7.jpg',
    tag: '۷. ظرافت ساخت و بافت چوب',
    title: 'لمس چوب دست‌ساز با نمایشگر هم‌سطح',
    subtitle: 'رگه‌های طبیعی چوب بلوط و راش با لبه‌های نرم و خمیده',
    description:
      'هر بدنه با دقت تراش خورده تا شیشه براق نمایشگر کاملاً هم‌سطح با قاب چوبی قرار بگیرد. ابعاد فشرده آن برای شلوغ‌ترین میزها و پاتختی‌ها ایده‌آل است.',
    highlights: ['ابعاد جمع‌وجور و زاویه دید استاندارد', 'پرداخت دست‌ساز با حس لمس طبیعی', 'طراحی الهام‌گرفته از سبک اسکاندیناوی'],
  },
  {
    slotId: 8,
    imagePath: '/assets/images/8.jpg',
    tag: '۸. دستیار روزمره و هوش مصنوعی',
    title: 'منشی صبحگاهی، مترجم و همراه خانواده',
    subtitle: 'از اوقات شرعی و یادآور دارو تا مشاوره و دستیار صوتی فارسی',
    description:
      'هر صبح برنامه روزانه‌تان را مرور کنید، از هشدار بارش مطلع شوید، برای سالمندان یادآور دارو تنظیم کنید یا با دستیار صوتی هوشمند نه بیتکس گفت‌وگو نمایید.',
    highlights: ['منشی شخصی و یادداشت‌برداری صوتی', 'اوقات شرعی، تقویم شمسی و هشدار بارش', 'مترجم زنده و نماینده هوشمند کسب‌وکار'],
  },
];

export interface ComparisonRow {
  criterion: string;
  home: string;
  retailB2B: string;
  enterprise: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criterion: 'کاربری اصلی',
    home: 'میز کار شخصی، اتاق خواب و خانه',
    retailB2B: 'کافه‌ها، فروشگاه‌ها، صرافی و غرفه‌ها',
    enterprise: 'سازمان‌ها، نمایشگاه‌ها و سیستم‌های اختصاصی',
  },
  {
    criterion: 'دستیارهای زمان، تقویم و آیین‌ها',
    home: 'کامل (تقویم شمسی/میلادی، اوقات شرعی، اذان‌گو)',
    retailB2B: 'کامل (ساعت جهانی، آب‌وهوا و هشدار بارش)',
    enterprise: 'کامل + همگام‌سازی مرکزی شعب',
  },
  {
    criterion: 'نمایش نرخ ارز، طلا و دستیار بورسی',
    home: 'سبد شخصی ارز، طلا، سکه و نمادهای بورس',
    retailB2B: 'نمای پیشخوان با فونت درشت برای مشتریان',
    enterprise: 'منبع داده اختصاصی با نرخ بروزرسانی سریع',
  },
  {
    criterion: 'هوش مصنوعی و دستیار صوتی',
    home: 'منشی شخصی، معلم، کوچ، پخش‌کننده و یادداشت',
    retailB2B: 'مترجم مکالمه و نماینده راهنمای مشتری',
    enterprise: 'متخصص اختصاصی آموزش‌دیده با دانش شرکت',
  },
  {
    criterion: 'نمایش اعلان پنل B2B و کمپین‌ها',
    home: '—',
    retailB2B: 'ارسال پیام و اعلان از پنل مشتری B2B',
    enterprise: 'مدیریت متمرکز ناوگان نمایشگرها',
  },
  {
    criterion: 'ویجت سفارشی و اتصال API',
    home: 'اتصال به Outlook، گوگل کلندر و IoT خانه',
    retailB2B: 'نمایش منو، صف سفارش و نرخ با API',
    enterprise: 'API اختصاصی نامحدود و وب‌هوک سازمانی',
  },
  {
    criterion: 'سرگرمی و سلامت خانواده',
    home: 'یادآور داروی سالمندان، ریلکسینگ، بازی و حیوان دیجیتال',
    retailB2B: 'شخصیت دیجیتال خوش‌آمدگو به مراجعان',
    enterprise: 'شخصی‌سازی کامل کاراکتر برند',
  },
  {
    criterion: 'جنس بدنه و راه‌اندازی',
    home: 'چوب بلوط/راش، USB-C و راه‌اندازی QR',
    retailB2B: 'چوب بلوط/راش ضدلک + پایه ایمن پیشخوان',
    enterprise: 'سفارش‌سازی رنگ چوب و بسته‌بندی سازمانی',
  },
];
