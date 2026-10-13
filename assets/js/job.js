
"use strict";

/* =========================================
   AFGHAN WORK — JOBS PAGE
   English / Dari / Pashto
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const LANGUAGE_KEY = "afghanWorkLanguage";

  /* =========================================
     TRANSLATIONS
     ========================================= */

  const translations = {
    en: {
      pageTitle: "Jobs | Afghan Work",
      home: "Home",
      jobs: "Jobs",
      companies: "Companies",
      candidates: "Candidates",
      about: "About",
      login: "Login",
      register: "Register",
      eyebrow: "Job opportunities",
      heroTitle: "Find your next opportunity",
      heroDescription:
        "Search professional jobs from trusted employers across Afghanistan.",
      keywordPlaceholder: "Job title, skill or keyword",
      locationPlaceholder: "Location",
      allCategories: "All Categories",
      technology: "Technology",
      design: "Design",
      business: "Business",
      marketing: "Marketing",
      support: "Customer Support",
      search: "Search",
      fullTime: "Full Time",
      partTime: "Part Time",
      remote: "Remote",
      viewDetails: "View Details",
      noResults: "No jobs match your search. Try another keyword.",
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

      job1Title: "Frontend Developer",
      job1Company: "Afghan Tech Solutions",
      job2Title: "Graphic Designer",
      job2Company: "Creative Afghanistan",
      job3Title: "Accountant",
      job3Company: "Kabul Business Group",
      job4Title: "Digital Marketing Specialist",
      job4Company: "Herat Media House",
      job5Title: "Project Coordinator",
      job5Company: "Afghan Development Network",
      job6Title: "Customer Support Officer",
      job6Company: "National Services Co.",

      kabul: "Kabul",
      parwan: "Parwan",
      herat: "Herat",
      balkh: "Balkh",

      salary1: "$600–900",
      salary2: "$400–700",
      salary3: "$400–700",
      salary4: "$500–850",
      salary5: "$650–950",
      salary6: "$350–550"
    },

    fa: {
      pageTitle: "وظایف | افغان ورک",
      home: "صفحهٔ اصلی",
      jobs: "وظایف",
      companies: "شرکت‌ها",
      candidates: "کاندیدان",
      about: "دربارهٔ ما",
      login: "ورود",
      register: "ثبت‌نام",
      eyebrow: "فرصت‌های کاری",
      heroTitle: "فرصت کاری بعدی خود را پیدا کنید",
      heroDescription:
        "وظایف حرفه‌ای را از کارفرمایان معتبر در سراسر افغانستان جست‌وجو کنید.",
      keywordPlaceholder: "عنوان وظیفه، مهارت یا کلمهٔ کلیدی",
      locationPlaceholder: "موقعیت",
      allCategories: "تمام دسته‌بندی‌ها",
      technology: "تکنالوژی",
      design: "طراحی",
      business: "تجارت",
      marketing: "بازاریابی",
      support: "خدمات مشتریان",
      search: "جست‌وجو",
      fullTime: "تمام‌وقت",
      partTime: "نیمه‌وقت",
      remote: "دورکاری",
      viewDetails: "مشاهدهٔ جزئیات",
      noResults:
        "وظیفه‌ای مطابق جست‌وجوی شما پیدا نشد. لطفاً کلمهٔ دیگری را امتحان کنید.",
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

      job1Title: "توسعه‌دهندهٔ فرانت‌اند",
      job1Company: "شرکت راهکارهای فناوری افغانستان",
      job2Title: "طراح گرافیک",
      job2Company: "افغانستان خلاق",
      job3Title: "حسابدار",
      job3Company: "گروه تجاری کابل",
      job4Title: "متخصص بازاریابی دیجیتال",
      job4Company: "خانهٔ رسانه‌ای هرات",
      job5Title: "هماهنگ‌کنندهٔ پروژه",
      job5Company: "شبکهٔ انکشاف افغانستان",
      job6Title: "مسئول خدمات مشتریان",
      job6Company: "شرکت خدمات ملی",

      kabul: "کابل",
      parwan: "پروان",
      herat: "هرات",
      balkh: "بلخ",

      salary1: "۶۰۰ تا ۹۰۰ دالر",
      salary2: "۴۰۰ تا ۷۰۰ دالر",
      salary3: "۴۰۰ تا ۷۰۰ دالر",
      salary4: "۵۰۰ تا ۸۵۰ دالر",
      salary5: "۶۵۰ تا ۹۵۰ دالر",
      salary6: "۳۵۰ تا ۵۵۰ دالر"
    },

    ps: {
      pageTitle: "دندې | افغان ورک",
      home: "کور",
      jobs: "دندې",
      companies: "شرکتونه",
      candidates: "نوماندان",
      about: "زموږ په اړه",
      login: "ننوتل",
      register: "راجستر",
      eyebrow: "د کار فرصتونه",
      heroTitle: "خپل راتلونکی کاري فرصت ومومئ",
      heroDescription:
        "په ټول افغانستان کې د باوري کار ورکوونکو مسلکي دندې ولټوئ.",
      keywordPlaceholder: "د دندې نوم، مهارت یا کلیدي کلمه",
      locationPlaceholder: "ځای",
      allCategories: "ټولې کټګورۍ",
      technology: "ټکنالوژي",
      design: "ډیزاین",
      business: "سوداګري",
      marketing: "بازارموندنه",
      support: "د پېرودونکو ملاتړ",
      search: "لټون",
      fullTime: "بشپړ وخت",
      partTime: "نیمه ورځ",
      remote: "له لرې کار",
      viewDetails: "جزیات وګورئ",
      noResults:
        "ستاسو د لټون سره سم دنده ونه موندل شوه. بله کلمه وازمویئ.",
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

      job1Title: "فرنټ‌اېنډ پراختیاکوونکی",
      job1Company: "د افغانستان د ټکنالوژۍ حللارې",
      job2Title: "ګرافیک ډیزاینر",
      job2Company: "نوښتګر افغانستان",
      job3Title: "محاسب",
      job3Company: "د کابل سوداګریزه ډله",
      job4Title: "د ډیجیټل بازارموندنې متخصص",
      job4Company: "د هرات رسنیز مرکز",
      job5Title: "د پروژې همغږی کوونکی",
      job5Company: "د افغانستان د پراختیا شبکه",
      job6Title: "د پېرودونکو د ملاتړ مسؤل",
      job6Company: "د ملي خدمتونو شرکت",

      kabul: "کابل",
      parwan: "پروان",
      herat: "هرات",
      balkh: "بلخ",

      salary1: "$۶۰۰–۹۰۰",
      salary2: "$۴۰۰–۷۰۰",
      salary3: "$۴۰۰–۷۰۰",
      salary4: "$۵۰۰–۸۵۰",
      salary5: "$۶۵۰–۹۵۰",
      salary6: "$۳۵۰–۵۵۰"
    }
  };

  /* =========================================
     FIND HTML ELEMENTS
     ========================================= */

  const keywordInput = document.querySelector("#jobKeyword");
  const locationInput = document.querySelector("#jobLocation");
  const categorySelect = document.querySelector("#jobCategory");

  const noResults = document.querySelector("#noJobResults");

  // Support the expected button ID and common alternatives.
  const searchButton =
    document.querySelector("#jobSearchButton") ||
    document.querySelector("#searchJobsButton") ||
    document.querySelector("#searchButton") ||
    document.querySelector(".search-box button") ||
    document.querySelector(".search-form button");

  /* =========================================
     LANGUAGE
     ========================================= */

  function getLanguage() {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return translations[saved] ? saved : "en";
  }

  /* =========================================
     APPLY TRANSLATIONS
     ========================================= */

  function applyJobLanguage() {
    const language = getLanguage();
    const text = translations[language];

    document.documentElement.lang = language;
    document.documentElement.dir =
      language === "en" ? "ltr" : "rtl";

    document.title = text.pageTitle;

    document.querySelectorAll("[data-job-i18n]").forEach((element) => {
      const key = element.dataset.jobI18n;
      if (text[key] !== undefined) element.textContent = text[key];
    });

    document.querySelectorAll("[data-job-placeholder]").forEach((element) => {
      const key = element.dataset.jobPlaceholder;
      if (text[key] !== undefined) element.placeholder = text[key];
    });

    document.querySelectorAll("[data-job-alt]").forEach((element) => {
      const key = element.dataset.jobAlt;
      if (text[key] !== undefined) element.alt = text[key];
    });

    document.querySelectorAll("[data-job-type]").forEach((element) => {
      const key = element.dataset.jobType;
      if (text[key] !== undefined) element.textContent = text[key];
    });

    document.querySelectorAll("[data-job-category-option]").forEach((element) => {
      const key = element.dataset.jobCategoryOption;
      if (text[key] !== undefined) element.textContent = text[key];
    });

    document.querySelectorAll("[data-job-title]").forEach((element) => {
      const key = element.dataset.jobTitle;
      if (text[key] !== undefined) element.textContent = text[key];
    });

    document.querySelectorAll("[data-job-company]").forEach((element) => {
      const key = element.dataset.jobCompany;
      if (text[key] !== undefined) element.textContent = text[key];
    });

    document.querySelectorAll("[data-job-location]").forEach((element) => {
      const key = element.dataset.jobLocation;
      if (text[key] !== undefined) element.textContent = text[key];
    });

    document.querySelectorAll("[data-job-salary]").forEach((element) => {
      const key = element.dataset.jobSalary;
      if (text[key] !== undefined) element.textContent = text[key];
    });

    if (keywordInput) {
      keywordInput.placeholder = text.keywordPlaceholder;
      keywordInput.setAttribute("aria-label", text.keywordPlaceholder);
    }

    if (locationInput) {
      locationInput.placeholder = text.locationPlaceholder;
      locationInput.setAttribute("aria-label", text.locationPlaceholder);
    }

    if (searchButton) {
      searchButton.textContent = text.search;
    }

    if (noResults) {
      noResults.textContent = text.noResults;
    }
  }

  /* =========================================
     NORMALIZE TEXT
     ========================================= */

  function normalize(value) {
    return String(value || "")
      .trim()
      .toLocaleLowerCase()
      .replace(/[يى]/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/[۰-۹]/g, (digit) =>
        String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
      );
  }

  /* =========================================
     SEARCH JOBS
     ========================================= */

  function searchJobs() {
    const keyword = normalize(keywordInput?.value);
    const location = normalize(locationInput?.value);
    const category = categorySelect?.value || "all";

    // Find cards each time instead of relying on an old list.
    const cards = Array.from(document.querySelectorAll(".job-card"));
    let visibleCount = 0;

    cards.forEach((card) => {
      const searchableText = normalize(card.textContent);

      const locationElement = card.querySelector("[data-job-location]");

      const jobLocation = normalize(
        locationElement?.textContent || card.dataset.location || ""
      );

      const jobCategory = card.dataset.category || "all";

      const matchesKeyword =
        !keyword || searchableText.includes(keyword);

      const matchesLocation =
        !location ||
        jobLocation.includes(location) ||
        searchableText.includes(location);

      const matchesCategory =
        category === "all" || jobCategory === category;

      const visible =
        matchesKeyword && matchesLocation && matchesCategory;

      card.hidden = !visible;
      card.style.display = visible ? "" : "none";

      if (visible) visibleCount++;
    });

    if (noResults) {
      const showMessage = visibleCount === 0;
      noResults.hidden = !showMessage;
      noResults.style.display = showMessage ? "" : "none";
    }
  }

  /* =========================================
     SEARCH BUTTON EVENTS
     ========================================= */

  function handleSearch(event) {
    if (event) event.preventDefault();

    keywordInput?.setCustomValidity("");
    locationInput?.setCustomValidity("");

    searchJobs();
  }

  if (searchButton) {
    searchButton.addEventListener("click", handleSearch);
  } else {
    console.error(
      "Afghan Work: Search button was not found. Check the button in jobs.html."
    );
  }

  // Enter key and form submission
  const searchForm =
    searchButton?.closest("form") ||
    keywordInput?.closest("form") ||
    locationInput?.closest("form") ||
    document.querySelector(".search-form");

  searchForm?.addEventListener("submit", handleSearch);

  [keywordInput, locationInput].forEach((input) => {
    if (!input) return;

    input.addEventListener("input", searchJobs);

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSearch(event);
      }
    });
  });

  categorySelect?.addEventListener("change", searchJobs);

  /* =========================================
     LANGUAGE CHANGE EVENTS
     ========================================= */

  function refreshJobsPage() {
    applyJobLanguage();
    searchJobs();
  }

  document.addEventListener("languageChanged", refreshJobsPage);

  window.addEventListener("languageChanged", refreshJobsPage);

  window.addEventListener("storage", (event) => {
    if (event.key === LANGUAGE_KEY) {
      refreshJobsPage();
    }
  });

  /* =========================================
     START PAGE
     ========================================= */

  applyJobLanguage();
  searchJobs();
});
