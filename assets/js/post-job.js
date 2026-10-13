
"use strict";

/* =========================================================
   AFGHAN WORK — PROFESSIONAL POST JOB SYSTEM
   Languages: English / Dari / Pashto
   Frontend-only demo with localStorage
   ========================================================= */

(() => {
  const CONFIG = {
    storageKey: "afghanWorkPostedJobs",
    languageKey: "afghanWorkLanguage",
    maxTitle: 100,
    maxCompany: 100,
    maxLocation: 100,
    maxDescription: 5000,
    minDescription: 30
  };

  const TEXT = {
    en: {
      pageTitle: "Post a Job | Afghan Work",
      home: "Home",
      jobs: "Jobs",
      companies: "Companies",
      candidates: "Candidates",
      about: "About",
      login: "Login",
      register: "Register",
      eyebrow: "Afghan Work",
      title: "Post a Job",
      intro: "Professional tools and opportunities for job seekers and employers.",
      jobTitle: "Job Title",
      jobTitlePlaceholder: "e.g. Frontend Developer",
      company: "Company",
      companyPlaceholder: "Company name",
      location: "Location",
      locationPlaceholder: "e.g. Kabul, Afghanistan",
      jobType: "Job Type",
      selectType: "Select job type",
      fullTime: "Full Time",
      partTime: "Part Time",
      remote: "Remote",
      contract: "Contract",
      internship: "Internship",
      description: "Description",
      descriptionPlaceholder: "Describe the role, responsibilities, and requirements...",
      publish: "Publish Job",
      publishing: "Publishing...",
      footerDescription: "Connecting talented people with meaningful opportunities across Afghanistan.",
      jobSeekers: "Job Seekers",
      findJobs: "Find Jobs",
      resumeBuilder: "Resume Builder",
      employers: "Employers",
      postJob: "Post a Job",
      account: "Account",
      rights: "All rights reserved.",
      characters: "characters",
      required: "Please complete all required fields.",
      titleError: "Enter a job title (maximum 100 characters).",
      companyError: "Enter a valid company name.",
      locationError: "Enter a valid job location.",
      typeError: "Please select a job type.",
      descriptionError: "Description must contain at least 30 characters and no more than 5,000.",
      success: "Job saved in this browser successfully.",
      storageError: "Unable to save the job. Please check browser storage.",
      typeLabel: "Job type",
      postedLabel: "Saved locally",
      localNotice: "Demo mode: this job is saved only in this browser. It is not published to other users.",
      dismiss: "Dismiss message"
    },

    fa: {
      pageTitle: "ثبت وظیفه | افغان ورک",
      home: "صفحه اصلی",
      jobs: "وظایف",
      companies: "شرکت‌ها",
      candidates: "کاندیداها",
      about: "درباره ما",
      login: "ورود",
      register: "ثبت‌نام",
      eyebrow: "افغان ورک",
      title: "ثبت وظیفه",
      intro: "ابزارهای حرفه‌ای و فرصت‌های کاری برای جویندگان کار و کارفرمایان.",
      jobTitle: "عنوان وظیفه",
      jobTitlePlaceholder: "مثلاً توسعه‌دهنده فرانت‌اند",
      company: "نام شرکت",
      companyPlaceholder: "نام شرکت را وارد کنید",
      location: "محل وظیفه",
      locationPlaceholder: "مثلاً کابل، افغانستان",
      jobType: "نوع وظیفه",
      selectType: "نوع وظیفه را انتخاب کنید",
      fullTime: "تمام‌وقت",
      partTime: "نیمه‌وقت",
      remote: "دورکاری",
      contract: "قراردادی",
      internship: "کارآموزی",
      description: "شرح وظیفه",
      descriptionPlaceholder: "مسئولیت‌ها، شرایط و جزئیات وظیفه را بنویسید...",
      publish: "ثبت وظیفه",
      publishing: "در حال ثبت...",
      footerDescription: "پیوند دادن افراد بااستعداد به فرصت‌های کاری مناسب در سراسر افغانستان.",
      jobSeekers: "جویندگان کار",
      findJobs: "جستجوی وظایف",
      resumeBuilder: "رزومه‌ساز",
      employers: "کارفرمایان",
      postJob: "ثبت وظیفه",
      account: "حساب کاربری",
      rights: "تمامی حقوق محفوظ است.",
      characters: "حرف",
      required: "لطفاً تمام فیلدهای ضروری را تکمیل کنید.",
      titleError: "عنوان وظیفه را وارد کنید؛ حداکثر ۱۰۰ حرف.",
      companyError: "نام معتبر شرکت را وارد کنید.",
      locationError: "محل معتبر وظیفه را وارد کنید.",
      typeError: "لطفاً نوع وظیفه را انتخاب کنید.",
      descriptionError: "شرح وظیفه باید حداقل ۳۰ و حداکثر ۵۰۰۰ حرف داشته باشد.",
      success: "وظیفه با موفقیت در همین مرورگر ذخیره شد.",
      storageError: "ذخیره وظیفه ممکن نشد؛ فضای ذخیره‌سازی مرورگر را بررسی کنید.",
      typeLabel: "نوع وظیفه",
      postedLabel: "ذخیره‌شده در مرورگر",
      localNotice: "نسخه آزمایشی: این وظیفه فقط در همین مرورگر ذخیره می‌شود و برای کاربران دیگر منتشر نمی‌شود.",
      dismiss: "بستن پیام"
    },

    ps: {
      pageTitle: "دنده خپرول | افغان ورک",
      home: "کور",
      jobs: "دندې",
      companies: "شرکتونه",
      candidates: "نوماندان",
      about: "زموږ په اړه",
      login: "ننوتل",
      register: "نوم‌لیکنه",
      eyebrow: "افغان ورک",
      title: "دنده خپره کړئ",
      intro: "د کار غوښتونکو او کار ورکوونکو لپاره مسلکي وسایل او کاري فرصتونه.",
      jobTitle: "د دندې عنوان",
      jobTitlePlaceholder: "لکه د فرنټ اېنډ پراختیاکوونکی",
      company: "د شرکت نوم",
      companyPlaceholder: "د شرکت نوم ولیکئ",
      location: "د دندې ځای",
      locationPlaceholder: "لکه کابل، افغانستان",
      jobType: "د دندې ډول",
      selectType: "د دندې ډول وټاکئ",
      fullTime: "بشپړ وخت",
      partTime: "نیمه وخت",
      remote: "له لرې کار",
      contract: "قراردادي",
      internship: "کار زده کړه",
      description: "د دندې تشریح",
      descriptionPlaceholder: "مسؤلیتونه، شرایط او دندې جزئیات ولیکئ...",
      publish: "دنده خپره کړئ",
      publishing: "خپرېږي...",
      footerDescription: "په افغانستان کې بااستعداده خلک له مناسبو کاري فرصتونو سره نښلوو.",
      jobSeekers: "د کار غوښتونکي",
      findJobs: "دندې ولټوئ",
      resumeBuilder: "ژوندلیک جوړوونکی",
      employers: "کار ورکوونکي",
      postJob: "دنده خپره کړئ",
      account: "حساب",
      rights: "ټول حقوق خوندي دي.",
      characters: "توري",
      required: "مهرباني وکړئ ټول اړین ځایونه ډک کړئ.",
      titleError: "د دندې عنوان ولیکئ؛ تر ۱۰۰ تورو پورې.",
      companyError: "د شرکت سم نوم ولیکئ.",
      locationError: "د دندې سم ځای ولیکئ.",
      typeError: "مهرباني وکړئ د دندې ډول وټاکئ.",
      descriptionError: "د دندې تشریح باید لږ تر لږه ۳۰ او تر ۵۰۰۰ تورو زیاته نه وي.",
      success: "دنده په همدې براوزر کې په بریالیتوب خوندي شوه.",
      storageError: "دنده خوندي نه شوه. د براوزر ذخیره وګورئ.",
      typeLabel: "د دندې ډول",
      postedLabel: "په براوزر کې خوندي شوې",
      localNotice: "ازمایښتي بڼه: دا دنده یوازې په همدې براوزر کې خوندي کېږي او نورو کاروونکو ته نه خپرېږي.",
      dismiss: "پیغام بند کړئ"
    }
  };

  let elements = {};
  let isSaving = false;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    const card = document.querySelector(".section .card");
    if (!card) return;

    const fields = card.querySelectorAll(".field");
    const button = card.querySelector("button");

    if (fields.length < 5 || !button) {
      console.error("Post Job: The expected form fields were not found.");
      return;
    }

    elements = {
      card,
      fields,
      title: fields[0].querySelector("input"),
      company: fields[1].querySelector("input"),
      location: fields[2].querySelector("input"),
      type: fields[3].querySelector("select"),
      description: fields[4].querySelector("textarea"),
      button
    };

    if (
      !elements.title ||
      !elements.company ||
      !elements.location ||
      !elements.type ||
      !elements.description
    ) {
      console.error("Post Job: One or more fields are missing.");
      return;
    }

    prepareForm();
    initValidation();
    initCharacterCounter();
    initPublishing();
    applyLanguage();

    window.addEventListener("languageChanged", applyLanguage);
  }

  function prepareForm() {
    const labels = [
      "jobTitle",
      "company",
      "location",
      "jobType",
      "description"
    ];

    const placeholders = [
      "jobTitlePlaceholder",
      "companyPlaceholder",
      "locationPlaceholder",
      null,
      "descriptionPlaceholder"
    ];

    elements.fields.forEach((field, index) => {
      const label = field.querySelector("label");
      if (label) {
        label.htmlFor = [
          "postJobTitle",
          "postJobCompany",
          "postJobLocation",
          "postJobType",
          "postJobDescription"
        ][index];
        label.dataset.postJobKey = labels[index];
      }

      const control = field.querySelector("input, select, textarea");
      if (!control) return;

      control.id = [
        "postJobTitle",
        "postJobCompany",
        "postJobLocation",
        "postJobType",
        "postJobDescription"
      ][index];

      control.dataset.postJobIndex = String(index);

      if (placeholders[index]) {
        control.dataset.postJobPlaceholder = placeholders[index];
      }

      if (index === 0) control.maxLength = CONFIG.maxTitle;
      if (index === 1) control.maxLength = CONFIG.maxCompany;
      if (index === 2) control.maxLength = CONFIG.maxLocation;
      if (index === 4) control.maxLength = CONFIG.maxDescription;

      if (index === 3) {
        control.required = true;
        control.innerHTML = `
          <option value="">Select job type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="remote">Remote</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        `;
      } else {
        control.required = true;
      }
    });

    elements.button.type = "button";
    elements.button.id = "publishJobButton";

    elements.notice = document.createElement("p");
    elements.notice.className = "post-job-local-notice muted";
    elements.notice.setAttribute("role", "note");
    elements.notice.style.marginTop = "14px";
    elements.card.appendChild(elements.notice);

    elements.status = document.createElement("div");
    elements.status.className = "post-job-status";
    elements.status.setAttribute("role", "status");
    elements.status.setAttribute("aria-live", "polite");
    elements.status.style.marginTop = "12px";
    elements.card.appendChild(elements.status);

    elements.counter = document.createElement("p");
    elements.counter.className = "post-job-character-count muted";
    elements.counter.style.fontSize = "13px";
    elements.description.insertAdjacentElement(
      "afterend",
      elements.counter
    );

    elements.button.setAttribute("aria-busy", "false");
  }

  function getLanguage() {
    let lang = "en";

    try {
      lang = localStorage.getItem(CONFIG.languageKey) || "en";
    } catch (_) {
      lang = "en";
    }

    return TEXT[lang] ? lang : "en";
  }

  function applyLanguage() {
    const lang = getLanguage();
    const t = TEXT[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir =
      lang === "fa" || lang === "ps" ? "rtl" : "ltr";

    document.title = t.pageTitle;

    const navKeys = [
      "home",
      "jobs",
      "companies",
      "candidates",
      "about"
    ];

    document.querySelectorAll(".nav-links > a").forEach((link, index) => {
      if (t[navKeys[index]]) link.textContent = t[navKeys[index]];
    });

    const navActions = document.querySelectorAll(".nav-actions > a");
    if (navActions[0]) navActions[0].textContent = t.login;
    if (navActions[1]) navActions[1].textContent = t.register;

    const hero = document.querySelector(".page-hero");
    if (hero) {
      const eyebrow = hero.querySelector(".eyebrow");
      const heading = hero.querySelector("h1");
      const description = hero.querySelector("p");

      if (eyebrow) eyebrow.textContent = t.eyebrow;
      if (heading) heading.textContent = t.title;
      if (description) description.textContent = t.intro;
    }

    elements.fields.forEach((field) => {
      const label = field.querySelector("label");
      const control = field.querySelector("input, select, textarea");

      if (label && label.dataset.postJobKey) {
        label.textContent = t[label.dataset.postJobKey];
      }

      if (control && control.dataset.postJobPlaceholder) {
        control.placeholder = t[control.dataset.postJobPlaceholder];
      }
    });

    const options = elements.type.options;
    const optionKeys = [
      "selectType",
      "fullTime",
      "partTime",
      "remote",
      "contract",
      "internship"
    ];

    Array.from(options).forEach((option, index) => {
      if (t[optionKeys[index]]) {
        option.textContent = t[optionKeys[index]];
      }
    });

    elements.button.textContent = isSaving ? t.publishing : t.publish;
    elements.notice.textContent = t.localNotice;
    updateCounter();

    const footer = document.querySelector(".footer");
    if (footer) {
      const description = footer.querySelector(
        ".footer-grid > div:first-child p"
      );
      if (description) description.textContent = t.footerDescription;

      const headings = footer.querySelectorAll(".footer-grid > div h4");
      ["jobSeekers", "employers", "account"].forEach((key, index) => {
        if (headings[index]) headings[index].textContent = t[key];
      });

      const footerLinks = footer.querySelectorAll(
        ".footer-grid > div a:not(.brand)"
      );
      const linkKeys = [
        "findJobs",
        "resumeBuilder",
        "postJob",
        "companies",
        "login",
        "register"
      ];

      footerLinks.forEach((link, index) => {
        if (t[linkKeys[index]]) link.textContent = t[linkKeys[index]];
      });

      const bottom = footer.querySelector(".footer-bottom");
      if (bottom) bottom.textContent = `© 2026 Afghan Work. ${t.rights}`;
    }
  }

  function initValidation() {
    Object.values({
      title: elements.title,
      company: elements.company,
      location: elements.location,
      type: elements.type,
      description: elements.description
    }).forEach((control) => {
      control.addEventListener("input", clearFieldError);
      control.addEventListener("change", clearFieldError);
    });
  }

  function clearFieldError(event) {
    const control = event.currentTarget;
    control.removeAttribute("aria-invalid");

    const message = control.parentElement.querySelector(
      ".post-job-field-error"
    );

    if (message) message.remove();
  }

  function validate() {
    const lang = getLanguage();
    const t = TEXT[lang];

    const checks = [
      [elements.title, () =>
        elements.title.value.trim().length > 0 &&
        elements.title.value.trim().length <= CONFIG.maxTitle,
      t.titleError],

      [elements.company, () =>
        elements.company.value.trim().length > 0 &&
        elements.company.value.trim().length <= CONFIG.maxCompany,
      t.companyError],

      [elements.location, () =>
        elements.location.value.trim().length > 0 &&
        elements.location.value.trim().length <= CONFIG.maxLocation,
      t.locationError],

      [elements.type, () =>
        ["full-time", "part-time", "remote", "contract", "internship"]
          .includes(elements.type.value),
      t.typeError],

      [elements.description, () =>
        elements.description.value.trim().length >= CONFIG.minDescription &&
        elements.description.value.trim().length <= CONFIG.maxDescription,
      t.descriptionError]
    ];

    let firstInvalid = null;

    checks.forEach(([control, test, message]) => {
      if (test()) return;

      control.setAttribute("aria-invalid", "true");

      const error = document.createElement("p");
      error.className = "post-job-field-error";
      error.textContent = message;
      error.style.color = "#dc2626";
      error.style.fontSize = "13px";
      error.style.marginTop = "6px";

      control.insertAdjacentElement("afterend", error);

      if (!firstInvalid) firstInvalid = control;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return false;
    }

    return true;
  }

  function initCharacterCounter() {
    elements.description.addEventListener("input", updateCounter);
    updateCounter();
  }

  function updateCounter() {
    if (!elements.counter) return;

    const t = TEXT[getLanguage()];
    const count = elements.description.value.length;

    elements.counter.textContent =
      `${count} / ${CONFIG.maxDescription} ${t.characters}`;
  }

  function initPublishing() {
    elements.button.addEventListener("click", saveJob);
  }

  function saveJob() {
    if (isSaving) return;

    elements.status.textContent = "";

    elements.card
      .querySelectorAll(".post-job-field-error")
      .forEach((error) => error.remove());

    if (!validate()) {
      const t = TEXT[getLanguage()];
      showMessage(t.required, "error");
      return;
    }

    const job = {
      id: createJobId(),
      title: elements.title.value.trim(),
      company: elements.company.value.trim(),
      location: elements.location.value.trim(),
      type: elements.type.value,
      description: elements.description.value.trim(),
      createdAt: new Date().toISOString(),
      status: "draft-local"
    };

    isSaving = true;
    elements.button.disabled = true;
    elements.button.setAttribute("aria-busy", "true");
    applyLanguage();

    try {
      const stored = localStorage.getItem(CONFIG.storageKey);
      const jobs = stored ? JSON.parse(stored) : [];

      if (!Array.isArray(jobs)) {
        throw new Error("Stored jobs data is not a valid list.");
      }

      jobs.push(job);

      localStorage.setItem(
        CONFIG.storageKey,
        JSON.stringify(jobs)
      );

      showMessage(TEXT[getLanguage()].success, "success");
      elements.card.reset?.();

      elements.title.value = "";
      elements.company.value = "";
      elements.location.value = "";
      elements.type.value = "";
      elements.description.value = "";

      updateCounter();
    } catch (error) {
      console.error("Post Job save failed:", error);
      showMessage(TEXT[getLanguage()].storageError, "error");
    } finally {
      isSaving = false;
      elements.button.disabled = false;
      elements.button.setAttribute("aria-busy", "false");
      applyLanguage();
    }
  }

  function showMessage(message, type) {
    elements.status.textContent = message;
    elements.status.style.color =
      type === "success" ? "#16a34a" : "#dc2626";
    elements.status.style.fontSize = "14px";
  }

  function createJobId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }

    return `job-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }
})();
