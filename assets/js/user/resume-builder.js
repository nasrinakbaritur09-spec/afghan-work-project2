
"use strict";

/* =====================================================
   AFGHAN WORK - RESUME BUILDER
   English / Dari / Pashto
   Live Preview + Local Storage
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initResumeBuilder();
});

const RESUME_STORAGE_KEY = "afghanWorkResume";

const RESUME_TRANSLATIONS = {
  en: {
    pageTitle: "Resume Builder",
    eyebrow: "Afghan Work",
    description:
      "Professional tools and opportunities for job seekers and employers.",
    fullName: "Full Name",
    namePlaceholder: "Your name",
    professionalTitle: "Professional Title",
    titlePlaceholder: "Frontend Developer",
    summary: "Summary",
    summaryPlaceholder: "Professional summary",
    save: "Save Resume",
    saved: "Resume saved successfully!",
    preview: "Live Preview",
    yourName: "Your Name",
    profile: "Profile",
    home: "Home",
    jobs: "Jobs",
    companies: "Companies",
    candidates: "Candidates",
    about: "About",
    login: "Login",
    register: "Register",
    connecting:
      "Connecting talented people with meaningful opportunities across Afghanistan.",
    jobSeekers: "Job Seekers",
    findJobs: "Find Jobs",
    employers: "Employers",
    postJob: "Post a Job",
    account: "Account",
    rights: "All rights reserved."
  },

  fa: {
    pageTitle: "رزومه‌ساز",
    eyebrow: "افغان ورک",
    description:
      "ابزارهای حرفه‌ای و فرصت‌های کاری برای جویندگان کار و کارفرمایان.",
    fullName: "نام کامل",
    namePlaceholder: "نام خود را وارد کنید",
    professionalTitle: "عنوان حرفه‌ای",
    titlePlaceholder: "توسعه‌دهنده فرانت‌اند",
    summary: "خلاصه حرفه‌ای",
    summaryPlaceholder: "خلاصه‌ای درباره تجربه و مهارت‌های خود بنویسید",
    save: "ذخیره رزومه",
    saved: "رزومه با موفقیت ذخیره شد!",
    preview: "پیش‌نمایش زنده",
    yourName: "نام شما",
    profile: "معرفی حرفه‌ای",
    home: "صفحه اصلی",
    jobs: "وظایف",
    companies: "شرکت‌ها",
    candidates: "کاندیداها",
    about: "درباره ما",
    login: "ورود",
    register: "ثبت‌نام",
    connecting:
      "پیوند دادن افراد بااستعداد به فرصت‌های کاری مناسب در سراسر افغانستان.",
    jobSeekers: "جویندگان کار",
    findJobs: "جستجوی وظایف",
    employers: "کارفرمایان",
    postJob: "ثبت وظیفه",
    account: "حساب کاربری",
    rights: "تمامی حقوق محفوظ است."
  },

  ps: {
    pageTitle: "د دندې غوښتنلیک جوړوونکی",
    eyebrow: "افغان ورک",
    description:
      "د کار غوښتونکو او کار ورکوونکو لپاره مسلکي وسایل او کاري فرصتونه.",
    fullName: "بشپړ نوم",
    namePlaceholder: "خپل نوم ولیکئ",
    professionalTitle: "مسلکي عنوان",
    titlePlaceholder: "فرنټ اېنډ پراختیاکوونکی",
    summary: "مسلکي لنډیز",
    summaryPlaceholder: "د خپلو مهارتونو او تجربو لنډیز ولیکئ",
    save: "غوښتنلیک خوندي کړئ",
    saved: "غوښتنلیک په بریالیتوب خوندي شو!",
    preview: "ژوندۍ مخکتنه",
    yourName: "ستاسو نوم",
    profile: "مسلکي پېژندنه",
    home: "کور",
    jobs: "دندې",
    companies: "شرکتونه",
    candidates: "نوماندان",
    about: "زموږ په اړه",
    login: "ننوتل",
    register: "نوم‌لیکنه",
    connecting:
      "په افغانستان کې بااستعداده خلک له مناسبو کاري فرصتونو سره نښلوو.",
    jobSeekers: "د کار غوښتونکي",
    findJobs: "دندې ولټوئ",
    employers: "کار ورکوونکي",
    postJob: "دنده خپره کړئ",
    account: "حساب",
    rights: "ټول حقوق خوندي دي."
  }
};

/* =====================================================
   MAIN INITIALIZATION
   ===================================================== */

function initResumeBuilder() {
  const cards = document.querySelectorAll(
    ".grid-2 > .card"
  );

  if (cards.length < 2) return;

  const formCard = cards[0];
  const previewCard = cards[1];

  const fields = formCard.querySelectorAll(".field");

  if (fields.length < 3) return;

  const nameInput = fields[0].querySelector("input");
  const titleInput = fields[1].querySelector("input");
  const summaryInput = fields[2].querySelector("textarea");
  const saveButton = formCard.querySelector("button");

  const previewName = previewCard.querySelector("h2");
  const previewTitle = previewCard.querySelector("p");
  const previewProfile = previewCard.querySelector("h3");

  if (
    !nameInput ||
    !titleInput ||
    !summaryInput ||
    !saveButton ||
    !previewName ||
    !previewTitle ||
    !previewProfile
  ) {
    console.error("Resume Builder: Required elements were not found.");
    return;
  }

  const elements = {
    formCard,
    previewCard,
    fields,
    nameInput,
    titleInput,
    summaryInput,
    saveButton,
    previewName,
    previewTitle,
    previewProfile
  };

  initLivePreview(elements);
  initResumeSave(elements);
  loadSavedResume(elements);
  initResumeTranslations(elements);

  window.addEventListener("languageChanged", () => {
    applyResumeLanguage(elements);
  });
}

/* =====================================================
   LIVE PREVIEW
   ===================================================== */

function initLivePreview(elements) {
  const updatePreview = () => {
    const language = getResumeLanguage();
    const text = RESUME_TRANSLATIONS[language];

    elements.previewName.textContent =
      elements.nameInput.value.trim() || text.yourName;

    elements.previewTitle.textContent =
      elements.titleInput.value.trim() || text.professionalTitle;

    const summary = elements.summaryInput.value.trim();

    elements.previewProfile.textContent =
      summary || text.profile;
  };

  elements.nameInput.addEventListener("input", updatePreview);
  elements.titleInput.addEventListener("input", updatePreview);
  elements.summaryInput.addEventListener("input", updatePreview);

  elements.updatePreview = updatePreview;

  updatePreview();
}

/* =====================================================
   SAVE RESUME
   ===================================================== */

function initResumeSave(elements) {
  elements.saveButton.addEventListener("click", () => {
    const resume = {
      fullName: elements.nameInput.value.trim(),
      professionalTitle: elements.titleInput.value.trim(),
      summary: elements.summaryInput.value.trim(),
      updatedAt: new Date().toISOString()
    };

    try {
      localStorage.setItem(
        RESUME_STORAGE_KEY,
        JSON.stringify(resume)
      );

      const language = getResumeLanguage();
      const text = RESUME_TRANSLATIONS[language];

      showResumeMessage(text.saved, "success", elements);
    } catch (error) {
      console.error("Unable to save resume:", error);

      const language = getResumeLanguage();

      const errorMessages = {
        en: "Unable to save your resume in this browser.",
        fa: "رزومه در این مرورگر ذخیره نشد.",
        ps: "ستاسو غوښتنلیک په دې براوزر کې خوندي نه شو."
      };

      showResumeMessage(
        errorMessages[language],
        "error",
        elements
      );
    }
  });
}

/* =====================================================
   LOAD SAVED RESUME
   ===================================================== */

function loadSavedResume(elements) {
  try {
    const savedResume = localStorage.getItem(
      RESUME_STORAGE_KEY
    );

    if (!savedResume) return;

    const resume = JSON.parse(savedResume);

    elements.nameInput.value = resume.fullName || "";
    elements.titleInput.value =
      resume.professionalTitle || "";
    elements.summaryInput.value = resume.summary || "";

    elements.updatePreview();
  } catch (error) {
    console.error("Unable to load saved resume:", error);
  }
}

/* =====================================================
   PAGE TRANSLATIONS
   ===================================================== */

function initResumeTranslations(elements) {
  applyResumeLanguage(elements);
}

function getResumeLanguage() {
  const savedLanguage = localStorage.getItem(
    "afghanWorkLanguage"
  );

  return RESUME_TRANSLATIONS[savedLanguage]
    ? savedLanguage
    : "en";
}

function applyResumeLanguage(elements) {
  const language = getResumeLanguage();
  const text = RESUME_TRANSLATIONS[language];

  const isRTL = language === "fa" || language === "ps";

  document.documentElement.lang = language;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";

  document.title = `${text.pageTitle} | Afghan Work`;

  /* Main navigation */

  const navLinks = document.querySelectorAll(
    ".nav-links > a"
  );

  const navKeys = [
    "home",
    "jobs",
    "companies",
    "candidates",
    "about"
  ];

  navLinks.forEach((link, index) => {
    if (text[navKeys[index]]) {
      link.textContent = text[navKeys[index]];
    }
  });

  /* Login and Register buttons */

  const navActions = document.querySelectorAll(
    ".nav-actions > a"
  );

  if (navActions[0]) {
    navActions[0].textContent = text.login;
  }

  if (navActions[1]) {
    navActions[1].textContent = text.register;
  }

  /* Hero section */

  const eyebrow = document.querySelector(
    ".page-hero .eyebrow"
  );

  const heroTitle = document.querySelector(
    ".page-hero h1"
  );

  const heroDescription = document.querySelector(
    ".page-hero p"
  );

  if (eyebrow) eyebrow.textContent = text.eyebrow;
  if (heroTitle) heroTitle.textContent = text.pageTitle;

  if (heroDescription) {
    heroDescription.textContent = text.description;
  }

  /* Resume form */

  const labels = elements.formCard.querySelectorAll(
    ".field label"
  );

  const labelKeys = [
    "fullName",
    "professionalTitle",
    "summary"
  ];

  labels.forEach((label, index) => {
    if (text[labelKeys[index]]) {
      label.textContent = text[labelKeys[index]];
    }
  });

  elements.nameInput.placeholder = text.namePlaceholder;
  elements.titleInput.placeholder = text.titlePlaceholder;
  elements.summaryInput.placeholder = text.summaryPlaceholder;
  elements.saveButton.textContent = text.save;

  /* Live preview */

  const previewEyebrow = elements.previewCard.querySelector(
    ".eyebrow"
  );

  if (previewEyebrow) {
    previewEyebrow.textContent = text.preview;
  }

  /* Update defaults without replacing the user's input */

  elements.updatePreview();

  /* Footer */

  const footer = document.querySelector(".footer");

  if (footer) {
    const footerBrand = footer.querySelector(".brand");
    const footerDescription = footer.querySelector(
      ".footer-grid > div:first-child p"
    );

    const footerHeadings = footer.querySelectorAll(
      ".footer-grid > div h4"
    );

    const footerLinks = footer.querySelectorAll(
      ".footer-grid > div a:not(.brand)"
    );

    const footerBottom = footer.querySelector(
      ".footer-bottom"
    );

    if (footerBrand) {
      const brandName = footerBrand.querySelector("span:last-child");

      if (brandName) brandName.textContent = "AFGHAN WORK";
    }

    if (footerDescription) {
      footerDescription.textContent = text.connecting;
    }

    const footerHeadingKeys = [
      "jobSeekers",
      "employers",
      "account"
    ];

    footerHeadings.forEach((heading, index) => {
      if (text[footerHeadingKeys[index]]) {
        heading.textContent = text[footerHeadingKeys[index]];
      }
    });

    const footerLinkKeys = [
      "findJobs",
      "pageTitle",
      "postJob",
      "companies",
      "login",
      "register"
    ];

    footerLinks.forEach((link, index) => {
      if (text[footerLinkKeys[index]]) {
        link.textContent = text[footerLinkKeys[index]];
      }
    });

    if (footerBottom) {
      footerBottom.textContent =
        `© 2026 Afghan Work. ${text.rights}`;
    }
  }
}

/* =====================================================
   STATUS MESSAGE
   ===================================================== */

function showResumeMessage(message, type, elements) {
  let messageElement = elements.formCard.querySelector(
    ".resume-status-message"
  );

  if (!messageElement) {
    messageElement = document.createElement("p");
    messageElement.className = "resume-status-message";

    messageElement.setAttribute("role", "status");
    messageElement.setAttribute("aria-live", "polite");

    elements.saveButton.insertAdjacentElement(
      "afterend",
      messageElement
    );
  }

  messageElement.textContent = message;

  messageElement.style.marginTop = "12px";
  messageElement.style.fontSize = "14px";
  messageElement.style.color =
    type === "success" ? "#16a34a" : "#dc2626";
}
