
"use strict";

/* =========================================
   AFGHAN WORK - APPLICATIONS PAGE
   English, Dari and Pashto
   ========================================= */

/* Translations */
const translations = {
  en: {
    home: "Home",
    jobs: "Jobs",
    companies: "Companies",
    candidates: "Candidates",
    about: "About",
    login: "Login",
    register: "Register",

    pageTitle: "Applications",
    pageDescription: "Review the status of your job applications.",
    myApplications: "My Applications",
    total: "Total",

    job: "Job",
    company: "Company",
    status: "Status",

    underReview: "Under Review",
    submitted: "Submitted",

    statusNote: "Application statuses are shown above.",

    footerDescription:
      "Connecting talented people with meaningful opportunities across Afghanistan.",

    jobSeekers: "Job Seekers",
    findJobs: "Find Jobs",
    resumeBuilder: "Resume Builder",

    employers: "Employers",
    postJob: "Post a Job",
    account: "Account",

    copyright: "© 2026 Afghan Work. All rights reserved.",

    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu"
  },

  fa: {
    home: "خانه",
    jobs: "شغل‌ها",
    companies: "شرکت‌ها",
    candidates: "کارجویان",
    about: "درباره ما",
    login: "ورود",
    register: "ثبت‌نام",

    pageTitle: "درخواست‌های کاری",
    pageDescription: "وضعیت درخواست‌های کاری خود را بررسی کنید.",
    myApplications: "درخواست‌های من",
    total: "مجموع",

    job: "عنوان شغل",
    company: "شرکت",
    status: "وضعیت",

    underReview: "در حال بررسی",
    submitted: "ارسال‌شده",

    statusNote: "وضعیت درخواست‌های کاری شما در جدول بالا نمایش داده شده است.",

    footerDescription:
      "ما افراد بااستعداد را با فرصت‌های شغلی مناسب در سراسر افغانستان پیوند می‌دهیم.",

    jobSeekers: "کارجویان",
    findJobs: "جست‌وجوی شغل",
    resumeBuilder: "ساخت رزومه",

    employers: "کارفرمایان",
    postJob: "ثبت شغل",
    account: "حساب کاربری",

    copyright: "© ۲۰۲۶ افغان کار. تمام حقوق محفوظ است.",

    menuOpen: "باز کردن منوی سایت",
    menuClose: "بستن منوی سایت"
  },

  ps: {
    home: "کور",
    jobs: "دندې",
    companies: "شرکتونه",
    candidates: "د کار غوښتونکي",
    about: "زموږ په اړه",
    login: "ننوتل",
    register: "نوم‌لیکنه",

    pageTitle: "د دندو غوښتنلیکونه",
    pageDescription: "د خپلو کاري غوښتنلیکونو حالت وګورئ.",
    myApplications: "زما غوښتنلیکونه",
    total: "ټول",

    job: "د دندې نوم",
    company: "شرکت",
    status: "حالت",

    underReview: "تر ارزونې لاندې",
    submitted: "لېږل شوی",

    statusNote: "ستاسو د کاري غوښتنلیکونو حالت په پورته جدول کې ښودل شوی دی.",

    footerDescription:
      "موږ تکړه کسان په ټول افغانستان کې له مناسبو کاري فرصتونو سره نښلوو.",

    jobSeekers: "د کار غوښتونکي",
    findJobs: "د دندې لټون",
    resumeBuilder: "د رزومې جوړول",

    employers: "کارګمارونکي",
    postJob: "دندې خپرول",
    account: "حساب",

    copyright: "© ۲۰۲۶ افغان ورک. ټول حقونه خوندي دي.",

    menuOpen: "د وېبپاڼې مینو پرانیستل",
    menuClose: "د وېبپاڼې مینو تړل"
  }
};


/* =========================================
   Change language
   ========================================= */

function setLanguage(language) {
  const selectedLanguage = translations[language]
    ? language
    : "en";

  const dictionary = translations[selectedLanguage];

  /* Set page language and direction */
  document.documentElement.lang = selectedLanguage;
  document.documentElement.dir =
    selectedLanguage === "en" ? "ltr" : "rtl";

  /* Translate elements with data-i18n */
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    }
  });

  /* Mark the selected language button */
  document.querySelectorAll(".language-btn").forEach((button) => {
    const isActive = button.dataset.lang === selectedLanguage;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  /* Update mobile menu accessibility label */
  const menuToggle = document.querySelector(".menu-toggle");

  if (menuToggle) {
    const menuIsOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-label",
      menuIsOpen ? dictionary.menuClose : dictionary.menuOpen
    );
  }

  /* Save selected language for this browser */
  try {
    localStorage.setItem("afghanWorkLanguage", selectedLanguage);
  } catch (error) {
    console.warn("Language preference could not be saved.");
  }
}


/* =========================================
   Language buttons
   ========================================= */

document.querySelectorAll(".language-btn").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});


/* =========================================
   Mobile navigation
   ========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("mobile-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    const language = document.documentElement.lang;
    const dictionary = translations[language] || translations.en;

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? dictionary.menuClose : dictionary.menuOpen
    );
  });

  /* Close menu after selecting a navigation link */
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
      menuToggle.setAttribute("aria-expanded", "false");

      const language = document.documentElement.lang;
      const dictionary = translations[language] || translations.en;

      menuToggle.setAttribute("aria-label", dictionary.menuOpen);
    });
  });

  /* Close menu when clicking outside the header */
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) {
      navLinks.classList.remove("mobile-open");
      menuToggle.setAttribute("aria-expanded", "false");

      const language = document.documentElement.lang;
      const dictionary = translations[language] || translations.en;

      menuToggle.setAttribute("aria-label", dictionary.menuOpen);
    }
  });
}


/* =========================================
   Initialize saved language
   ========================================= */

function initializeLanguage() {
  let savedLanguage = "en";

  try {
    savedLanguage =
      localStorage.getItem("afghanWorkLanguage") || "en";
  } catch (error) {
    savedLanguage = "en";
  }

  setLanguage(savedLanguage);
}

initializeLanguage();
