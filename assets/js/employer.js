"use strict";

/* =========================================
   AFGHAN WORK — COMPANIES PAGE
   English / Dari / Pashto
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const LANGUAGE_KEY = "afghanWorkLanguage";

  const translations = {
    en: {
      pageTitle: "Companies | Afghan Work",
      home: "Home",
      jobs: "Jobs",
      companies: "Companies",
      candidates: "Candidates",
      about: "About",
      login: "Login",
      register: "Register",
      eyebrow: "Afghan Work",
      heroTitle: "Companies",
      heroDescription:
        "Professional tools and opportunities for job seekers and employers.",
      companyDescription: "Professional services · Afghanistan",
      viewCompany: "View Company",
      jobSeekers: "Job Seekers",
      findJobs: "Find Jobs",
      resumeBuilder: "Resume Builder",
      employers: "Employers",
      postJob: "Post a Job",
      account: "Account",
      footerDescription:
        "Connecting talented people with meaningful opportunities across Afghanistan.",
      copyright: "All rights reserved.",
      logoAlt: "Afghan Work logo",

      company1: "Afghan Tech Solutions",
      company2: "Creative Afghanistan",
      company3: "Kabul Business Group"
    },

    fa: {
      pageTitle: "شرکت‌ها | افغان ورک",
      home: "صفحهٔ اصلی",
      jobs: "وظایف",
      companies: "شرکت‌ها",
      candidates: "کاندیدان",
      about: "دربارهٔ ما",
      login: "ورود",
      register: "ثبت‌نام",
      eyebrow: "افغان ورک",
      heroTitle: "شرکت‌ها",
      heroDescription:
        "ابزارها و فرصت‌های حرفه‌ای برای جویندگان کار و کارفرمایان.",
      companyDescription: "خدمات حرفه‌ای · افغانستان",
      viewCompany: "مشاهدهٔ شرکت",
      jobSeekers: "جویندگان کار",
      findJobs: "پیدا کردن وظایف",
      resumeBuilder: "ساخت رزومه",
      employers: "کارفرمایان",
      postJob: "ثبت وظیفه",
      account: "حساب کاربری",
      footerDescription:
        "ایجاد ارتباط میان افراد بااستعداد و فرصت‌های کاری مناسب در سراسر افغانستان.",
      copyright: "تمام حقوق محفوظ است.",
      logoAlt: "لوگوی افغان ورک",

      company1: "شرکت راهکارهای فناوری افغانستان",
      company2: "افغانستان خلاق",
      company3: "گروه تجاری کابل"
    },

    ps: {
      pageTitle: "شرکتونه | افغان ورک",
      home: "کور",
      jobs: "دندې",
      companies: "شرکتونه",
      candidates: "نوماندان",
      about: "زموږ په اړه",
      login: "ننوتل",
      register: "راجستر",
      eyebrow: "افغان ورک",
      heroTitle: "شرکتونه",
      heroDescription:
        "د کار غوښتونکو او کار ورکوونکو لپاره مسلکي وسایل او فرصتونه.",
      companyDescription: "مسلکي خدمتونه · افغانستان",
      viewCompany: "شرکت وګورئ",
      jobSeekers: "د کار غوښتونکي",
      findJobs: "دندې ومومئ",
      resumeBuilder: "رزومه جوړه کړئ",
      employers: "کار ورکوونکي",
      postJob: "دنده خپره کړئ",
      account: "حساب",
      footerDescription:
        "په ټول افغانستان کې د وړ کسانو او مناسبو کاري فرصتونو نښلول.",
      copyright: "ټول حقونه خوندي دي.",
      logoAlt: "د افغان ورک لوګو",

      company1: "د افغانستان د ټکنالوژۍ حللارې",
      company2: "نوښتګر افغانستان",
      company3: "د کابل سوداګریزه ډله"
    }
  };

  function getLanguage() {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    return translations[savedLanguage] ? savedLanguage : "en";
  }

  function applyTranslations() {
    const language = getLanguage();
    const text = translations[language];

    document.documentElement.lang = language;
    document.documentElement.dir =
      language === "en" ? "ltr" : "rtl";

    document.title = text.pageTitle;

    document.querySelectorAll("[data-company-i18n]").forEach((element) => {
      const key = element.dataset.companyI18n;

      if (text[key] !== undefined) {
        element.textContent = text[key];
      }
    });

    document.querySelectorAll("[data-company-alt]").forEach((element) => {
      const key = element.dataset.companyAlt;

      if (text[key] !== undefined) {
        element.alt = text[key];
      }
    });
  }

  function refreshPage() {
    applyTranslations();
  }

  /* پشتیبانی از تغییر زبان سایت */
  document.addEventListener("languageChanged", refreshPage);
  window.addEventListener("languageChanged", refreshPage);

  /* اگر زبان در تب دیگری تغییر کرد */
  window.addEventListener("storage", (event) => {
    if (event.key === LANGUAGE_KEY) {
      refreshPage();
    }
  });

  /* ترجمهٔ اولیه هنگام بازشدن صفحه */
  applyTranslations();
});