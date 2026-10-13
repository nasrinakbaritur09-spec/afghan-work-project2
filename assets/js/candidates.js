"use strict";

/* =========================================
   AFGHAN WORK — CANDIDATES PAGE
   English / Dari / Pashto
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const LANGUAGE_KEY = "afghanWorkLanguage";

  const translations = {
    en: {
      pageTitle: "Candidates | Afghan Work",
      home: "Home",
      jobs: "Jobs",
      companies: "Companies",
      candidates: "Candidates",
      about: "About",
      login: "Login",
      register: "Register",

      eyebrow: "Afghan Work",
      heroTitle: "Candidates",
      heroDescription:
        "Discover talented professionals and connect with the right candidates for your company.",

      role1: "Frontend Developer",
      role2: "UI/UX Designer",
      role3: "Accountant",

      location1: "Kabul",
      location2: "Parwan",
      location3: "Herat",

      available: "Available",
      viewProfile: "View Profile",

      footerDescription:
        "Connecting talented people with meaningful opportunities across Afghanistan.",

      jobSeekers: "Job Seekers",
      findJobs: "Find Jobs",
      resumeBuilder: "Resume Builder",

      employers: "Employers",
      postJob: "Post a Job",

      account: "Account",
      copyright: "© 2026 Afghan Work. All rights reserved.",

      logoAlt: "Afghan Work Logo",
      candidate1Alt: "Maya Rahimi",
      candidate2Alt: "Ahmad Noor",
      candidate3Alt: "Sara Omari"
    },

    fa: {
      pageTitle: "کاندیدان | افغان ورک",
      home: "صفحهٔ اصلی",
      jobs: "وظایف",
      companies: "شرکت‌ها",
      candidates: "کاندیدان",
      about: "دربارهٔ ما",
      login: "ورود",
      register: "ثبت‌نام",

      eyebrow: "افغان ورک",
      heroTitle: "کاندیدان",
      heroDescription:
        "متخصصان بااستعداد را پیدا کنید و با کاندیدان مناسب برای شرکت خود ارتباط برقرار نمایید.",

      role1: "توسعه‌دهنده فرانت‌اند",
      role2: "طراح رابط کاربری و تجربه کاربری",
      role3: "حسابدار",

      location1: "کابل",
      location2: "پروان",
      location3: "هرات",

      available: "آماده به کار",
      viewProfile: "مشاهدهٔ پروفایل",

      footerDescription:
        "ایجاد ارتباط میان افراد بااستعداد و فرصت‌های کاری مناسب در سراسر افغانستان.",

      jobSeekers: "جویندگان کار",
      findJobs: "پیدا کردن وظایف",
      resumeBuilder: "ساخت رزومه",

      employers: "کارفرمایان",
      postJob: "ثبت وظیفه",

      account: "حساب کاربری",
      copyright: "© ۲۰۲۶ افغان ورک. تمام حقوق محفوظ است.",

      logoAlt: "لوگوی افغان ورک",
      candidate1Alt: "مایا رحیمی",
      candidate2Alt: "احمد نور",
      candidate3Alt: "سارا عمری"
    },

    ps: {
      pageTitle: "نوماندان | افغان ورک",
      home: "کور",
      jobs: "دندې",
      companies: "شرکتونه",
      candidates: "نوماندان",
      about: "زموږ په اړه",
      login: "ننوتل",
      register: "راجستر",

      eyebrow: "افغان ورک",
      heroTitle: "نوماندان",
      heroDescription:
        "تکړه مسلکي کسان ومومئ او د خپلې کمپنۍ لپاره له مناسبو نوماندانو سره اړیکه ونیسئ.",

      role1: "فرنټ‌اېنډ پراختیاکوونکی",
      role2: "د کارن د رابطې او تجربې ډیزاینر",
      role3: "محاسب",

      location1: "کابل",
      location2: "پروان",
      location3: "هرات",

      available: "کار ته چمتو",
      viewProfile: "پروفایل وګورئ",

      footerDescription:
        "په ټول افغانستان کې د وړ کسانو او مناسبو کاري فرصتونو نښلول.",

      jobSeekers: "د کار غوښتونکي",
      findJobs: "دندې ومومئ",
      resumeBuilder: "رزومه جوړه کړئ",

      employers: "کار ورکوونکي",
      postJob: "دنده خپره کړئ",

      account: "حساب",
      copyright: "© ۲۰۲۶ افغان ورک. ټول حقونه خوندي دي.",

      logoAlt: "د افغان ورک لوګو",
      candidate1Alt: "مایا رحیمي",
      candidate2Alt: "احمد نور",
      candidate3Alt: "سارا عمري"
    }
  };

  /* Get the saved language */
  function getLanguage() {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    return translations[savedLanguage] ? savedLanguage : "en";
  }

  /* Change text without removing icons inside an element */
  function setText(element, value) {
    if (!element) return;

    const textNode = Array.from(element.childNodes).find(
      node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );

    if (textNode) {
      textNode.textContent = " " + value + " ";
    } else {
      element.textContent = value;
    }
  }

  /* Apply the selected language */
  function applyTranslations() {
    const language = getLanguage();
    const text = translations[language];

    document.documentElement.lang = language;
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";
    document.title = text.pageTitle;

    /* Header navigation */
    const navLinks = document.querySelectorAll(".nav-links a");
    const navLabels = [
      text.home,
      text.jobs,
      text.companies,
      text.candidates,
      text.about
    ];

    navLinks.forEach((link, index) => {
      if (navLabels[index]) link.textContent = navLabels[index];
    });

    const accountButtons = document.querySelectorAll(".nav-actions a");
    setText(accountButtons[0], text.login);
    setText(accountButtons[1], text.register);

    /* Logo alternative text */
    document.querySelectorAll(".brand-mark img").forEach(img => {
      img.alt = text.logoAlt;
    });

    /* Hero section */
    setText(document.querySelector(".page-hero .eyebrow"), text.eyebrow);
    setText(document.querySelector(".page-hero h1"), text.heroTitle);
    setText(
      document.querySelector(".page-hero p"),
      text.heroDescription
    );

    /* Candidate cards */
    const cards = document.querySelectorAll(".candidate-card");

    const roles = [text.role1, text.role2, text.role3];
    const locations = [text.location1, text.location2, text.location3];
    const imageAlts = [
      text.candidate1Alt,
      text.candidate2Alt,
      text.candidate3Alt
    ];

    cards.forEach((card, index) => {
      setText(card.querySelector(".candidate-info .muted"), roles[index]);

      const metaItems = card.querySelectorAll(".candidate-meta > span");

      /* Translate location while preserving its icon */
      setText(metaItems[0], locations[index]);

      /* Translate availability while preserving the status dot */
      setText(metaItems[1], text.available);

      setText(card.querySelector(".candidate-btn"), text.viewProfile);

      const image = card.querySelector(".avatar img");
      if (image && imageAlts[index]) {
        image.alt = imageAlts[index];
      }
    });

    /* Footer */
    const footer = document.querySelector(".footer");

    if (footer) {
      const footerDescription = footer.querySelector(
        ".footer-grid > div:first-child > p"
      );

      setText(footerDescription, text.footerDescription);

      const footerHeadings = footer.querySelectorAll(".footer-grid h4");
      const headingLabels = [
        text.jobSeekers,
        text.employers,
        text.account
      ];

      footerHeadings.forEach((heading, index) => {
        if (headingLabels[index]) {
          heading.textContent = headingLabels[index];
        }
      });

      const footerLinks = footer.querySelectorAll(".footer-grid > div a:not(.brand)");
      const footerLabels = [
        text.findJobs,
        text.resumeBuilder,
        text.postJob,
        text.companies,
        text.login,
        text.register
      ];

      footerLinks.forEach((link, index) => {
        if (footerLabels[index]) {
          link.textContent = footerLabels[index];
        }
      });

      setText(
        footer.querySelector(".footer-bottom"),
        text.copyright
      );
    }
  }

  /* Update when the site's language changes */
  document.addEventListener("languageChanged", applyTranslations);
  window.addEventListener("languageChanged", applyTranslations);

  window.addEventListener("storage", event => {
    if (event.key === LANGUAGE_KEY) {
      applyTranslations();
    }
  });

  /* Initial translation */
  applyTranslations();
});