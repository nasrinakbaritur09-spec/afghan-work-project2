
"use strict";

/* =========================================
   AFGHAN WORK — JOB DETAILS
   English / Dari / Pashto
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const LANGUAGE_KEY = "afghanWorkLanguage";

  const translations = {
    en: {
      pageTitle: "Job Details | Afghan Work",
      home: "Home",
      jobs: "Jobs",
      companies: "Companies",
      candidates: "Candidates",
      about: "About",
      login: "Login",
      register: "Register",

      technology: "Technology",
      jobTitle: "Frontend Developer",
      companyName: "Afghan Tech Solutions",
      kabul: "Kabul",

      descriptionTitle: "Job Description",
      description:
        "We are looking for a creative Frontend Developer to build responsive, accessible and modern web experiences.",

      requirementsTitle: "Requirements",
      requirement1: "Strong HTML and CSS skills",
      requirement2: "JavaScript fundamentals",
      requirement3: "Responsive design experience",
      requirement4: "Good communication",

      overviewTitle: "Job Overview",
      fullTime: "Full Time",
      salary: "$600–900 / month",
      posted: "Posted 2 days ago",
      applyButton: "Apply for this job",

      aboutCompanyTitle: "About the Company",
      aboutCompany:
        "A growing technology company creating digital products for Afghanistan.",
      viewCompany: "View Company",

      footerDescription:
        "Connecting talented people with meaningful opportunities across Afghanistan.",
      jobSeekers: "Job Seekers",
      findJobs: "Find Jobs",
      resumeBuilder: "Resume Builder",
      employers: "Employers",
      postJob: "Post a Job",
      account: "Account",
      copyright: "© 2026 Afghan Work. All rights reserved."
    },

    fa: {
      pageTitle: "جزئیات وظیفه | افغان ورک",
      home: "صفحهٔ اصلی",
      jobs: "وظایف",
      companies: "شرکت‌ها",
      candidates: "کاندیدان",
      about: "دربارهٔ ما",
      login: "ورود",
      register: "ثبت‌نام",

      technology: "فناوری",
      jobTitle: "توسعه‌دهنده فرانت‌اند",
      companyName: "شرکت راهکارهای فناوری افغانستان",
      kabul: "کابل",

      descriptionTitle: "شرح وظیفه",
      description:
        "ما به دنبال یک توسعه‌دهنده خلاق فرانت‌اند هستیم تا تجربه‌های مدرن، واکنش‌گرا و قابل دسترس برای کاربران بسازد.",

      requirementsTitle: "شرایط لازم",
      requirement1: "مهارت قوی در HTML و CSS",
      requirement2: "آشنایی با اصول JavaScript",
      requirement3: "تجربه در طراحی واکنش‌گرا",
      requirement4: "توانایی ارتباطی خوب",

      overviewTitle: "خلاصهٔ وظیفه",
      fullTime: "تمام‌وقت",
      salary: "۶۰۰ تا ۹۰۰ دالر در ماه",
      posted: "۲ روز پیش نشر شده",
      applyButton: "درخواست برای این وظیفه",

      aboutCompanyTitle: "دربارهٔ شرکت",
      aboutCompany:
        "یک شرکت فناوری در حال رشد که محصولات دیجیتالی برای افغانستان ایجاد می‌کند.",
      viewCompany: "مشاهدهٔ شرکت",

      footerDescription:
        "ایجاد ارتباط میان افراد بااستعداد و فرصت‌های کاری مناسب در سراسر افغانستان.",
      jobSeekers: "جویندگان کار",
      findJobs: "پیدا کردن وظایف",
      resumeBuilder: "ساخت رزومه",
      employers: "کارفرمایان",
      postJob: "ثبت وظیفه",
      account: "حساب کاربری",
      copyright: "© ۲۰۲۶ افغان ورک. تمام حقوق محفوظ است."
    },

    ps: {
      pageTitle: "د دندې معلومات | افغان ورک",
      home: "کور",
      jobs: "دندې",
      companies: "شرکتونه",
      candidates: "نوماندان",
      about: "زموږ په اړه",
      login: "ننوتل",
      register: "راجستر",

      technology: "ټکنالوژي",
      jobTitle: "فرنټ‌اېنډ پراختیاکوونکی",
      companyName: "د افغانستان د ټکنالوژۍ حللارې شرکت",
      kabul: "کابل",

      descriptionTitle: "د دندې تشریح",
      description:
        "موږ د یوه نوښتګر فرنټ‌اېنډ پراختیاکوونکي په لټه کې یو چې عصري، ځواب ویونکي او د کاروونکو لپاره د لاسرسي وړ وېب‌پاڼې جوړې کړي.",

      requirementsTitle: "اړینې وړتیاوې",
      requirement1: "په HTML او CSS کې پیاوړې وړتیا",
      requirement2: "د JavaScript له بنسټونو سره بلدتیا",
      requirement3: "د ځواب ویونکي ډیزاین تجربه",
      requirement4: "د اړیکو ښه وړتیا",

      overviewTitle: "د دندې لنډیز",
      fullTime: "بشپړ وخت",
      salary: "په میاشت کې ۶۰۰ تر ۹۰۰ ډالره",
      posted: "۲ ورځې مخکې خپره شوې",
      applyButton: "د دې دندې لپاره غوښتنلیک ورکړئ",

      aboutCompanyTitle: "د شرکت په اړه",
      aboutCompany:
        "یو مخ پر ودې ټکنالوژۍ شرکت چې د افغانستان لپاره ډیجیټلي محصولات جوړوي.",
      viewCompany: "شرکت وګورئ",

      footerDescription:
        "په ټول افغانستان کې د وړ کسانو او مناسبو کاري فرصتونو نښلول.",
      jobSeekers: "د کار غوښتونکي",
      findJobs: "دندې ومومئ",
      resumeBuilder: "رزومه جوړه کړئ",
      employers: "کار ورکوونکي",
      postJob: "دنده خپره کړئ",
      account: "حساب",
      copyright: "© ۲۰۲۶ افغان ورک. ټول حقونه خوندي دي."
    }
  };

  /* Get the selected language */
  function getLanguage() {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    return translations[savedLanguage] ? savedLanguage : "en";
  }

  /* Translate all marked elements */
  function applyTranslations() {
    const language = getLanguage();
    const text = translations[language];

    document.documentElement.lang = language;
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";
    document.title = text.pageTitle;

    document.querySelectorAll("[data-jd-i18n]").forEach(element => {
      const key = element.dataset.jdI18n;

      if (Object.prototype.hasOwnProperty.call(text, key)) {
        element.textContent = text[key];
      }
    });
  }

  /* Listen for language changes from the main site */
  document.addEventListener("languageChanged", applyTranslations);
  window.addEventListener("languageChanged", applyTranslations);

  /* Update if the language changes in another browser tab */
  window.addEventListener("storage", event => {
    if (event.key === LANGUAGE_KEY) {
      applyTranslations();
    }
  });

  /* Initial translation */
  applyTranslations();
});
