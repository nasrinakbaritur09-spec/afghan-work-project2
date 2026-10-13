"use strict";

/* =========================================================
   AFGHAN WORK — MULTILINGUAL SYSTEM
   English / Dari / Pashto
   ========================================================= */

const LANGUAGE_STORAGE_KEY = "afghanWorkLanguage";
const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["en", "fa", "ps"];

/* =========================================================
   TRANSLATIONS
   General + About page
   ========================================================= */

const translations = {
  en: {
    /* General */
    pageTitle: "Home | Afghan Work",
    brandName: "AFGHAN WORK",
    logoAlt: "Afghan Work logo",

    home: "Home",
    jobs: "Jobs",
    companies: "Companies",
    candidates: "Candidates",
    about: "About",
    login: "Login",
    register: "Register",
    logout: "Logout",
    profile: "My Profile",
    dashboard: "Dashboard",
    createAccount: "Create Account",

    careerPlatform: "PROFESSIONAL CAREER PLATFORM",
    heroTitle: "Find Your Dream Job",
    heroText:
      "Discover trusted career opportunities across Afghanistan and connect with companies that value your skills and experience.",

    keywordPlaceholder: "Job title, skill or keyword",
    locationPlaceholder: "Location",
    jobType: "Job category",
    allCategories: "All Categories",
    technology: "Technology",
    design: "Design",
    finance: "Finance",
    marketing: "Marketing",
    education: "Education",
    search: "Search Jobs",

    popular: "Popular:",
    webDeveloper: "Web Developer",
    graphicDesigner: "Graphic Designer",
    accountant: "Accountant",

    jobOpportunities: "Job Opportunities",
    verifiedEmployers: "Verified Employers",
    trustedCompanies: "Trusted companies",
    activeCandidates: "Active Candidates",

    latestOpportunities: "LATEST OPPORTUNITIES",
    latestJobs: "Latest Jobs",
    latestJobsText:
      "Explore the latest career opportunities from trusted employers.",
    allJobs: "View All Jobs",

    fullTime: "Full Time",
    frontendDeveloper: "Frontend Developer",
    graphicDesignerJob: "Graphic Designer",
    accountantJob: "Accountant",
    kabul: "Kabul",
    parwan: "Parwan",
    viewJob: "View Job",
    successfulHires: "Successful Hires",

    footerText:
      "Connecting talented people with meaningful career opportunities across Afghanistan.",
    jobSeekers: "Job Seekers",
    findJobs: "Find Jobs",
    resumeBuilder: "Resume Builder",
    exploreCandidates: "Explore Candidates",
    employers: "Employers",
    postJob: "Post a Job",
    applications: "Applications",
    account: "Account",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    copyright: "© 2026 Afghan Work. All rights reserved.",

    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",

    email: "Email Address",
    password: "Password",
    fullName: "Full Name",
    phone: "Phone Number",
    confirmPassword: "Confirm Password",
    jobSeeker: "Job Seeker",
    employer: "Employer",

    save: "Save",
    cancel: "Cancel",
    submit: "Submit",
    loading: "Loading...",
    noJobs: "No jobs found.",

    /* About page */
    aboutPageTitle: "About | Afghan Work",
    aboutEyebrow: "ABOUT AFGHAN WORK",
    aboutHeroTitle: "Building better careers across Afghanistan",
    aboutHeroText:
      "Professional tools and meaningful opportunities for job seekers and employers across Afghanistan — built on trust, transparency, and efficiency.",
    missionEyebrow: "OUR MISSION",
    missionTitle: "Connecting Afghanistan's talent with real opportunity",
    missionText:
      "Afghan Work connects skilled professionals with employers who value their talent and experience. Our goal is to make hiring simple, transparent, and accessible.",
    activeJobs: "Active Jobs",
    aboutCompanies: "Companies",
    aboutCandidates: "Candidates",
    featureVerified: "Verified employers and real listings",
    featureResume: "Free resume builder for candidates",
    featureApplications: "Fast and simple application process",
    teamImageAlt: "Afghan Work team",
    aboutImage: "About Image",
    valuesEyebrow: "OUR VALUES",
    valuesTitle: "Built on trust and transparency",
    valuesText:
      "We aim to create a better experience for job seekers and employers.",
    verifiedJobsTitle: "Verified Jobs",
    verifiedJobsText:
      "Job listings are reviewed carefully to provide reliable opportunities.",
    fastApplicationsTitle: "Fast Applications",
    fastApplicationsText:
      "Apply using your saved profile, resume, and professional information.",
    privacyTitle: "Privacy First",
    privacyText:
      "Your professional information remains under your control, with clear privacy options.",
    howEyebrow: "HOW IT WORKS",
    howTitle: "Start your career journey",
    stepOneTitle: "Create Your Profile",
    stepOneText:
      "Add your education, experience, skills, resume, and professional information.",
    stepTwoTitle: "Browse & Apply",
    stepTwoText:
      "Search for jobs by location, category, salary, and other criteria.",
    stepThreeTitle: "Get Hired",
    stepThreeText:
      "Connect with employers and take the next step toward your career.",
    startToday: "START TODAY",
    ctaTitle: "Ready to find your next role?",
    ctaText: "Create your professional profile and discover new opportunities.",
    getStarted: "Get Started",
    registerPageTitle: "Register | Afghan Work",
    loginPageTitle: "Login | Afghan Work",
    welcomeBack: "Welcome back",
    forgotPassword: "Forgot password?",
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",
    firstName: "First Name",
    lastName: "Last Name",
    firstNamePlaceholder: "First name",
    lastNamePlaceholder: "Last name",
    emailPlaceholder: "you@example.com",
    passwordPlaceholder: "Create a strong password",
    confirmPasswordPlaceholder: "Confirm your password",
    accountType: "Account Type",
  },

  fa: {
    /* عمومی */
    pageTitle: "خانه | افغان کار",
    brandName: "افغان کار",
    logoAlt: "لوگوی افغان کار",

    home: "خانه",
    jobs: "وظایف",
    companies: "شرکت‌ها",
    candidates: "کاندیداها",
    about: "درباره ما",
    login: "ورود",
    register: "ثبت‌نام",
    logout: "خروج",
    profile: "پروفایل من",
    dashboard: "داشبورد",
    createAccount: "ایجاد حساب",

    careerPlatform: "پلتفرم حرفه‌ای کاریابی",
    heroTitle: "وظیفه دلخواه خود را پیدا کنید",
    heroText:
      "فرصت‌های شغلی معتبر در سراسر افغانستان را پیدا کنید و با شرکت‌هایی ارتباط بگیرید که برای مهارت‌ها و تجربه شما ارزش قائل‌اند.",

    keywordPlaceholder: "عنوان وظیفه، مهارت یا کلمه کلیدی",
    locationPlaceholder: "موقعیت",
    jobType: "دسته‌بندی وظایف",
    allCategories: "تمام دسته‌بندی‌ها",
    technology: "تکنالوژی",
    design: "طراحی",
    finance: "مالی",
    marketing: "بازاریابی",
    education: "آموزش",
    search: "جستجوی وظایف",

    popular: "پرطرفدار:",
    webDeveloper: "توسعه‌دهنده وب",
    graphicDesigner: "طراح گرافیک",
    accountant: "حسابدار",

    jobOpportunities: "فرصت‌های شغلی",
    verifiedEmployers: "کارفرمایان تأییدشده",
    trustedCompanies: "شرکت‌های معتبر",
    activeCandidates: "جویندگان کار فعال",

    latestOpportunities: "آخرین فرصت‌های شغلی",
    latestJobs: "آخرین وظایف",
    latestJobsText: "آخرین فرصت‌های شغلی را از کارفرمایان معتبر بررسی کنید.",
    allJobs: "مشاهده تمام وظایف",

    fullTime: "تمام‌وقت",
    frontendDeveloper: "توسعه‌دهنده فرانت‌اند",
    graphicDesignerJob: "طراح گرافیک",
    accountantJob: "حسابدار",
    kabul: "کابل",
    parwan: "پروان",
    viewJob: "مشاهده وظیفه",
    successfulHires: "استخدام‌های موفق",

    footerText:
      "ایجاد ارتباط میان افراد بااستعداد و فرصت‌های شغلی ارزشمند در سراسر افغانستان.",
    jobSeekers: "جویندگان کار",
    findJobs: "پیدا کردن وظیفه",
    resumeBuilder: "ساخت رزومه",
    exploreCandidates: "مشاهده کاندیداها",
    employers: "کارفرمایان",
    postJob: "ثبت وظیفه",
    applications: "درخواست‌های کاری",
    account: "حساب کاربری",
    privacyPolicy: "سیاست حفظ حریم خصوصی",
    termsOfService: "شرایط استفاده از خدمات",
    copyright: "© ۲۰۲۶ افغان ورک. تمام حقوق محفوظ است.",

    darkMode: "حالت تاریک",
    lightMode: "حالت روشن",
    openMenu: "باز کردن منو",
    closeMenu: "بستن منو",

    email: "آدرس ایمیل",
    password: "رمز عبور",
    fullName: "نام کامل",
    phone: "شماره تلفن",
    confirmPassword: "تأیید رمز عبور",
    jobSeeker: "جوینده کار",
    employer: "کارفرما",

    save: "ذخیره",
    cancel: "لغو",
    submit: "ارسال",
    loading: "در حال بارگذاری...",
    noJobs: "هیچ وظیفه‌ای پیدا نشد.",

    /* صفحه درباره ما */
    aboutPageTitle: "درباره ما | افغان کار",
    aboutEyebrow: "درباره افغان کار",
    aboutHeroTitle: "ساختن آینده شغلی بهتر در سراسر افغانستان",
    aboutHeroText:
      "ابزارهای حرفه‌ای و فرصت‌های ارزشمند برای جویندگان کار و کارفرمایان در سراسر افغانستان؛ بر پایه اعتماد، شفافیت و کارایی.",
    missionEyebrow: "مأموریت ما",
    missionTitle: "پیوند استعدادهای افغانستان با فرصت‌های واقعی",
    missionText:
      "افغان ورک متخصصان ماهر را با کارفرمایانی پیوند می‌دهد که برای استعداد و تجربه آنان ارزش قائل‌اند. هدف ما ساده و شفاف ساختن روند استخدام است.",
    aboutCompanies: "شرکت‌ها",
    aboutCandidates: "کاندیداها",
    featureVerified: "کارفرمایان تأییدشده و آگهی‌های واقعی",
    featureResume: "رزومه‌ساز رایگان برای جویندگان کار",
    featureApplications: "روند سریع و ساده درخواست وظیفه",
    teamImageAlt: "تیم افغان ورک",
    aboutImage: "تصویر درباره ما",
    valuesEyebrow: "ارزش‌های ما",
    valuesTitle: "بنیان‌گذاری‌شده بر اعتماد و شفافیت",
    valuesText: "هدف ما ایجاد تجربه بهتر برای جویندگان کار و کارفرمایان است.",
    verifiedJobsTitle: "وظایف تأییدشده",
    verifiedJobsText:
      "آگهی‌های وظایف با دقت بررسی می‌شوند تا فرصت‌های قابل اعتماد ارائه شوند.",
    fastApplicationsTitle: "درخواست‌های سریع",
    fastApplicationsText:
      "با استفاده از پروفایل ذخیره‌شده، رزومه و معلومات حرفه‌ای خود درخواست بدهید.",
    privacyTitle: "اولویت با حریم خصوصی",
    privacyText:
      "معلومات حرفه‌ای شما تحت کنترول خودتان باقی می‌ماند و گزینه‌های روشن حریم خصوصی در اختیار دارید.",
    howEyebrow: "روش کار",
    howTitle: "سفر شغلی خود را آغاز کنید",
    stepOneTitle: "پروفایل خود را بسازید",
    stepOneText:
      "تحصیلات، تجربه، مهارت‌ها، رزومه و معلومات حرفه‌ای خود را اضافه کنید.",
    stepTwoTitle: "وظایف را جستجو و درخواست کنید",
    stepTwoText:
      "بر اساس موقعیت، دسته‌بندی، معاش و معیارهای دیگر وظایف را جستجو کنید.",
    stepThreeTitle: "استخدام شوید",
    stepThreeText:
      "با کارفرمایان ارتباط بگیرید و گام بعدی را به‌سوی آینده شغلی خود بردارید.",
    startToday: "امروز آغاز کنید",
    ctaTitle: "آماده‌اید وظیفه بعدی خود را پیدا کنید؟",
    ctaText: "پروفایل حرفه‌ای خود را بسازید و فرصت‌های تازه را کشف کنید.",
    getStarted: "شروع کنید",
    registerPageTitle: "ثبت‌نام | افغان کار",
    loginPageTitle: "ورود | افغان کار",
    welcomeBack: "خوش آمدید",
    forgotPassword: "رمز عبور خود را فراموش کرده‌اید؟",
    dontHaveAccount: "حساب کاربری ندارید؟",
    alreadyHaveAccount: "از قبل حساب کاربری دارید؟",
    firstName: "نام",
    lastName: "تخلص",
    firstNamePlaceholder: "نام خود را وارد کنید",
    lastNamePlaceholder: "تخلص خود را وارد کنید",
    emailPlaceholder: "ایمیل خود را وارد کنید",
    passwordPlaceholder: "یک رمز عبور قوی بسازید",
    confirmPasswordPlaceholder: "رمز عبور خود را دوباره وارد کنید",
    accountType: "نوع حساب",
    activeJobs: "وظایف فعال",
  },

  ps: {
    /* عمومي */
    pageTitle: "کور | افغان کار",
    brandName: "افغان کار",
    logoAlt: "د افغان کار لوګو",

    home: "کور",
    jobs: "دندې",
    companies: "شرکتونه",
    candidates: "نوماندان",
    about: "زموږ په اړه",
    login: "ننوتل",
    register: "نوم‌لیکنه",
    logout: "وتل",
    profile: "زما پروفایل",
    dashboard: "ډشبورډ",
    createAccount: "حساب جوړول",

    careerPlatform: "مسلکي د کار موندنې پلیټفارم",
    heroTitle: "خپله خوښه دنده ومومئ",
    heroText:
      "په ټول افغانستان کې د باور وړ کاري فرصتونه ومومئ او له هغو شرکتونو سره اړیکه ونیسئ چې ستاسو مهارتونو او تجربې ته ارزښت ورکوي.",

    keywordPlaceholder: "د دندې نوم، مهارت یا کلیدي کلمه",
    locationPlaceholder: "ځای",
    jobType: "د دندې کټګوري",
    allCategories: "ټولې کټګورۍ",
    technology: "ټکنالوژي",
    design: "ډیزاین",
    finance: "مالي چارې",
    marketing: "بازارموندنه",
    education: "زده‌کړه",
    search: "د دندو لټون",

    popular: "مشهور:",
    webDeveloper: "د وېب پراختیاکوونکی",
    graphicDesigner: "ګرافیک ډیزاینر",
    accountant: "محاسب",

    jobOpportunities: "کاري فرصتونه",
    verifiedEmployers: "تأیید شوي کار ورکوونکي",
    trustedCompanies: "باوري شرکتونه",
    activeCandidates: "فعال د کار غوښتونکي",

    latestOpportunities: "وروستي کاري فرصتونه",
    latestJobs: "وروستۍ دندې",
    latestJobsText: "د باوري کار ورکوونکو وروستي کاري فرصتونه وګورئ.",
    allJobs: "ټولې دندې وګورئ",

    fullTime: "بشپړ وخت",
    frontendDeveloper: "د فرانت‌اېنډ پراختیاکوونکی",
    graphicDesignerJob: "ګرافیک ډیزاینر",
    accountantJob: "محاسب",
    kabul: "کابل",
    parwan: "پروان",
    viewJob: "دنده وګورئ",
    successfulHires: "بریالي استخدامونه",

    footerText:
      "په ټول افغانستان کې د وړ کسانو او ارزښتناکو کاري فرصتونو ترمنځ اړیکې جوړول.",
    jobSeekers: "د کار غوښتونکي",
    findJobs: "دندې پیدا کړئ",
    resumeBuilder: "رزومه جوړول",
    exploreCandidates: "نوماندان وګورئ",
    employers: "کار ورکوونکي",
    postJob: "دنده خپرول",
    applications: "د کار غوښتنلیکونه",
    account: "حساب",
    privacyPolicy: "د محرمیت تګلاره",
    termsOfService: "د خدمتونو شرایط",
    copyright: "© ۲۰۲۶ افغان ورک. ټول حقونه خوندي دي.",

    darkMode: "تیاره بڼه",
    lightMode: "روښانه بڼه",
    openMenu: "مینو پرانیستل",
    closeMenu: "مینو تړل",

    email: "برېښنالیک",
    password: "پټ نوم",
    fullName: "بشپړ نوم",
    phone: "د تلیفون شمېره",
    confirmPassword: "د پټ نوم تایید",
    jobSeeker: "د کار غوښتونکی",
    employer: "کار ورکوونکی",

    save: "ساتل",
    cancel: "لغوه کول",
    submit: "لېږل",
    loading: "بار کېږي...",
    noJobs: "کومه دنده ونه موندل شوه.",

    /* زموږ په اړه */
    aboutPageTitle: "زموږ په اړه | افغان ورک",
    aboutEyebrow: "د افغان ورک په اړه",
    aboutHeroTitle: "په ټول افغانستان کې د غوره مسلکي راتلونکي جوړول",
    aboutHeroText:
      "د کار غوښتونکو او کار ورکوونکو لپاره مسلکي وسایل او ارزښتناک فرصتونه؛ د باور، روڼتیا او اغېزمنتیا پر بنسټ.",
    missionEyebrow: "زموږ ماموریت",
    missionTitle: "د افغانستان استعدادونه له واقعي فرصتونو سره نښلول",
    missionText:
      "افغان ورک ماهر کسان له هغو کار ورکوونکو سره نښلوي چې د دوی استعداد او تجربې ته ارزښت ورکوي. زموږ موخه د استخدام بهیر ساده او روڼ کول دي.",
    aboutCompanies: "شرکتونه",
    aboutCandidates: "نوماندان",
    featureVerified: "تأیید شوي کار ورکوونکي او واقعي اعلانونه",
    featureResume: "د کار غوښتونکو لپاره وړیا رزومه جوړوونکی",
    featureApplications: "د غوښتنلیک چټک او ساده بهیر",
    teamImageAlt: "د افغان ورک ټیم",
    aboutImage: "زموږ په اړه انځور",
    valuesEyebrow: "زموږ ارزښتونه",
    valuesTitle: "د باور او روڼتیا پر بنسټ",
    valuesText:
      "زموږ موخه د کار غوښتونکو او کار ورکوونکو لپاره غوره تجربه رامنځته کول دي.",
    verifiedJobsTitle: "تأیید شوې دندې",
    verifiedJobsText:
      "د دندو اعلانونه په دقت ارزول کېږي، څو باوري فرصتونه وړاندې شي.",
    fastApplicationsTitle: "چټک غوښتنلیکونه",
    fastApplicationsText:
      "د خپل پروفایل، رزومې او مسلکي معلوماتو په کارولو غوښتنلیک وسپارئ.",
    privacyTitle: "محرمیت لومړیتوب لري",
    privacyText:
      "ستاسو مسلکي معلومات ستاسو تر کنټرول لاندې پاتې کېږي او د محرمیت روښانه اختیارونه لرئ.",
    howEyebrow: "د کار طریقه",
    howTitle: "خپل مسلکي سفر پیل کړئ",
    stepOneTitle: "خپل پروفایل جوړ کړئ",
    stepOneText:
      "خپلې زده‌کړې، تجربې، مهارتونه، رزومه او مسلکي معلومات اضافه کړئ.",
    stepTwoTitle: "دندې ولټوئ او غوښتنلیک وسپارئ",
    stepTwoText: "د ځای، کټګورۍ، معاش او نورو معیارونو له مخې دندې ولټوئ.",
    stepThreeTitle: "استخدام شئ",
    stepThreeText:
      "له کار ورکوونکو سره اړیکه ونیسئ او خپل مسلکي راتلونکي ته بل ګام واخلئ.",
    startToday: "نن یې پیل کړئ",
    ctaTitle: "د خپلې بلې دندې موندلو ته چمتو یاست؟",
    ctaText: "خپل مسلکي پروفایل جوړ کړئ او نوي فرصتونه ومومئ.",
    getStarted: "پیل وکړئ",
    registerPageTitle: "نوم‌لیکنه | افغان ورک",
    loginPageTitle: "ننوتل | افغان ورک",
    welcomeBack: "بېرته ښه راغلاست",
    forgotPassword: "خپل پټ نوم مو هېر کړی؟",
    dontHaveAccount: "حساب نه لرئ؟",
    alreadyHaveAccount: "مخکې مو حساب جوړ کړی؟",
    firstName: "لومړی نوم",
    lastName: "تخلص",
    firstNamePlaceholder: "خپل لومړی نوم ولیکئ",
    lastNamePlaceholder: "خپل تخلص ولیکئ",
    emailPlaceholder: "خپل برېښنالیک ولیکئ",
    passwordPlaceholder: "قوي پټ نوم جوړ کړئ",
    confirmPasswordPlaceholder: "خپل پټ نوم بیا ولیکئ",
    accountType: "د حساب ډول",
    activeJobs: "فعالې دندې",
  },
};

/* =========================================================
   GET CURRENT LANGUAGE
   ========================================================= */

function getCurrentLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      return savedLanguage;
    }
  } catch (error) {
    console.warn("Could not read saved language.", error);
  }

  return DEFAULT_LANGUAGE;
}

/* =========================================================
   GET TRANSLATION
   ========================================================= */

function getTranslation(key, language = getCurrentLanguage()) {
  return translations[language]?.[key] ?? translations.en?.[key] ?? key;
}

/* =========================================================
   APPLY TRANSLATIONS
   ========================================================= */

function applyLanguage(language = getCurrentLanguage()) {
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    language = DEFAULT_LANGUAGE;
  }

  const isRTL = language === "fa" || language === "ps";

  document.documentElement.lang = language;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";

  /* Page title */
  const pageTitleKey = document.documentElement.getAttribute("data-i18n-title");

  if (pageTitleKey) {
    document.title = getTranslation(pageTitleKey, language);
  }

  /* Text content */
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (key) {
      element.textContent = getTranslation(key, language);
    }
  });

  /* Placeholders */
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (key) {
      element.setAttribute("placeholder", getTranslation(key, language));
    }
  });

  /* Image alternative text */
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.getAttribute("data-i18n-alt");

    if (key) {
      element.alt = getTranslation(key, language);
    }
  });

  /* Accessible labels */
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");

    if (key) {
      element.setAttribute("aria-label", getTranslation(key, language));
    }
  });

  /* Tooltip titles */
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    if (element === document.documentElement) return;

    const key = element.getAttribute("data-i18n-title");

    if (key) {
      element.setAttribute("title", getTranslation(key, language));
    }
  });

  /* Input values — only for elements explicitly configured */
  document.querySelectorAll("[data-i18n-value]").forEach((element) => {
    const key = element.getAttribute("data-i18n-value");

    if (key) {
      element.value = getTranslation(key, language);
    }
  });

  updateLanguageButtons(language);
  updateBrandLogos(language);

  /* Notify other scripts once */
  document.dispatchEvent(
    new CustomEvent("languageChanged", {
      detail: { language },
    }),
  );
}

/* =========================================================
   CHANGE LANGUAGE
   ========================================================= */

function changeLanguage(language) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.warn("Could not save language preference.", error);
  }

  applyLanguage(language);
}

/* =========================================================
   UPDATE LANGUAGE BUTTONS
   ========================================================= */

function updateLanguageButtons(language) {
  document
    .querySelectorAll("[data-language], [data-lang]")
    .forEach((button) => {
      const buttonLanguage =
        button.getAttribute("data-language") ||
        button.getAttribute("data-lang");

      const isActive = buttonLanguage === language;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
}

/* =========================================================
   INITIALIZE LANGUAGE SYSTEM
   ========================================================= */

function initLanguageSystem() {
  document
    .querySelectorAll("[data-language], [data-lang]")
    .forEach((button) => {
      if (button.dataset.languageReady === "true") return;

      const language =
        button.getAttribute("data-language") ||
        button.getAttribute("data-lang");

      if (!SUPPORTED_LANGUAGES.includes(language)) return;

      button.addEventListener("click", () => {
        changeLanguage(language);
      });

      button.dataset.languageReady = "true";
    });

  applyLanguage(getCurrentLanguage());
}

/* =========================================================
   BRAND LOGOS
   Change only Afghan Work logos, not company logos.
   ========================================================= */

function updateBrandLogos(language) {
  const scriptElement = Array.from(document.scripts).find((script) =>
    /(^|\/)language\.js(?:[?#].*)?$/.test(script.src),
  );

  if (!scriptElement) return;

  const imagesDirectory = new URL("../images/", scriptElement.src);

  const englishLogo = new URL("english-logo.png", imagesDirectory).href;

  const dariLogo = new URL("persian%20logo%20(1).jpeg", imagesDirectory).href;

  const logoSource = language === "en" ? englishLogo : dariLogo;

  document
    .querySelectorAll("a.brand .brand-mark img, img[data-brand-logo]")
    .forEach((image) => {
      image.src = logoSource;
      image.alt = getTranslation("logoAlt", language);
    });
}

/* =========================================================
   EXPOSE PUBLIC FUNCTIONS
   ========================================================= */

window.translations = translations;
window.getCurrentLanguage = getCurrentLanguage;
window.getTranslation = getTranslation;
window.applyLanguage = applyLanguage;
window.changeLanguage = changeLanguage;
window.initLanguageSystem = initLanguageSystem;

/* =========================================================
   START
   ========================================================= */

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageSystem, {
    once: true,
  });
} else {
  initLanguageSystem();
}
