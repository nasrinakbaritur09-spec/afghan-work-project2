
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("applicationForm");
  const message = document.getElementById("formMessage");
  const submitButton = document.getElementById("submitButton");

  const translations = {
    en: {
      title: "Apply | Afghan Work",
      brand: "AFGHAN WORK",
      home: "Home",
      jobs: "Jobs",
      companies: "Companies",
      candidates: "Candidates",
      about: "About",
      login: "Login",
      register: "Register",
      heroEyebrow: "Afghan Work",
      heroTitle: "Apply for this job",
      heroText: "Professional tools and opportunities for job seekers and employers.",
      formEyebrow: "Job application",
      formTitle: "Apply for this job",
      formDescription: "Complete the form below.",
      fullName: "Full Name",
      namePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "example@email.com",
      phone: "Phone Number",
      phonePlaceholder: "+93 700 000 000",
      resume: "Resume / CV",
      resumeHelp: "Accepted formats: PDF, DOC, DOCX. Maximum size: 5 MB.",
      resumeChoose: "Choose CV File",
      resumeNoFile: "No file chosen",
      coverLetter: "Cover Letter",
      coverPlaceholder: "Tell the employer why you are a good fit...",
      submit: "Submit Application",
      footerDescription: "Connecting talented people with meaningful opportunities across Afghanistan.",
      jobSeekers: "Job Seekers",
      findJobs: "Find Jobs",
      resumeBuilder: "Resume Builder",
      employers: "Employers",
      postJob: "Post a Job",
      account: "Account",
      copyright: "© 2026 Afghan Work. All rights reserved.",
      required: "Please complete all fields.",
      invalidEmail: "Please enter a valid email address.",
      invalidFile: "Please upload your CV as a PDF or Word document.",
      largeFile: "Your CV must be smaller than 5 MB.",
      success: "Your application form has been checked successfully!",
      loginRequired: "Please log in before applying for a job.",
      language: "Language"
    },

    fa: {
      title: "درخواست وظیفه | افغان کار",
      brand: "افغان کار",
      home: "صفحه اصلی",
      jobs: "وظایف",
      companies: "شرکت‌ها",
      candidates: "کاندیداها",
      about: "درباره ما",
      login: "ورود",
      register: "ثبت‌نام",
      heroEyebrow: "افغان کار",
      heroTitle: "برای این وظیفه درخواست بدهید",
      heroText: "امکانات حرفه‌ای و فرصت‌های کاری برای جویندگان کار و کارفرمایان.",
      formEyebrow: "درخواست وظیفه",
      formTitle: "برای این وظیفه درخواست بدهید",
      formDescription: "فورم زیر را تکمیل کنید.",
      fullName: "نام کامل",
      namePlaceholder: "نام کامل خود را وارد کنید",
      email: "آدرس ایمیل",
      emailPlaceholder: "example@email.com",
      phone: "شماره تماس",
      phonePlaceholder: "+93 700 000 000",
      resume: "سوانح کاری (CV)",
      resumeHelp: "فرمت‌های مجاز: PDF، DOC، DOCX. حداکثر حجم: ۵ مگابایت.",
      resumeChoose: "انتخاب فایل سی‌وی",
      resumeNoFile: "هیچ فایلی انتخاب نشده است",
      coverLetter: "نامه معرفی",
      coverPlaceholder: "توضیح دهید چرا برای این وظیفه مناسب هستید...",
      submit: "ارسال درخواست",
      footerDescription: "پیوند دادن افراد بااستعداد به فرصت‌های ارزشمند کاری در سراسر افغانستان.",
      jobSeekers: "جویندگان کار",
      findJobs: "جستجوی وظایف",
      resumeBuilder: "ساخت سوانح کاری",
      employers: "کارفرمایان",
      postJob: "ثبت وظیفه",
      account: "حساب کاربری",
      copyright: "© ۲۰۲۶ افغان کار. تمامی حقوق محفوظ است.",
      required: "لطفاً تمام بخش‌ها را تکمیل کنید.",
      invalidEmail: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
      invalidFile: "لطفاً فایل CV را به فرمت PDF یا Word بارگذاری کنید.",
      largeFile: "حجم فایل CV باید کمتر از ۵ مگابایت باشد.",
      success: "فورم درخواست شما با موفقیت بررسی شد!",
      loginRequired: "لطفاً پیش از درخواست وظیفه وارد حساب خود شوید.",
      language: "زبان"
    },

    ps: {
      title: "د دندې غوښتنه | افغان ورک",
      brand: "افغان ورک",
      home: "کور",
      jobs: "دندې",
      companies: "شرکتونه",
      candidates: "نوماندان",
      about: "زموږ په اړه",
      login: "ننوتل",
      register: "نوم‌لیکنه",
      heroEyebrow: "افغان ورک",
      heroTitle: "د دې دندې لپاره غوښتنه وکړئ",
      heroText: "د کار غوښتونکو او کار ورکوونکو لپاره مسلکي وسایل او کاري فرصتونه.",
      formEyebrow: "د دندې غوښتنلیک",
      formTitle: "د دې دندې لپاره غوښتنه وکړئ",
      formDescription: "لاندې فورمه بشپړه کړئ.",
      fullName: "بشپړ نوم",
      namePlaceholder: "خپل بشپړ نوم ولیکئ",
      email: "برېښنالیک",
      emailPlaceholder: "example@email.com",
      phone: "د ټیلیفون شمېره",
      phonePlaceholder: "+93 700 000 000",
      resume: "سي وي (CV)",
      resumeHelp: "منل شوي فایلونه: PDF، DOC، DOCX. تر ۵ مېګابایټه پورې.",
      resumeChoose: "د CV فایل وټاکئ",
      resumeNoFile: "کوم فایل نه دی ټاکل شوی",
      coverLetter: "د پېژندنې لیک",
      coverPlaceholder: "کار ورکوونکي ته ووایاست چې ولې دې دندې ته مناسب یاست...",
      submit: "غوښتنلیک واستوئ",
      footerDescription: "په ټول افغانستان کې بااستعداده خلک له ارزښتناکو کاري فرصتونو سره نښلوو.",
      jobSeekers: "د کار غوښتونکي",
      findJobs: "دندې ومومئ",
      resumeBuilder: "سي وي جوړول",
      employers: "کار ورکوونکي",
      postJob: "دنده خپره کړئ",
      account: "حساب",
      copyright: "© ۲۰۲۶ افغان ورک. ټول حقونه خوندي دي.",
      required: "مهرباني وکړئ ټولې برخې بشپړې کړئ.",
      invalidEmail: "مهرباني وکړئ سم برېښنالیک ولیکئ.",
      invalidFile: "مهرباني وکړئ سي وي په PDF یا Word بڼه پورته کړئ.",
      largeFile: "د سي وي فایل باید له ۵ مېګابایټه کوچنی وي.",
      success: "ستاسو د غوښتنلیک فورمه په بریالیتوب وکتل شوه!",
      loginRequired: "مهرباني وکړئ د دندې غوښتلو مخکې خپل حساب ته ننوځئ.",
      language: "ژبه"
    }
  };

  let currentLanguage =
    localStorage.getItem("afghanWorkLanguage") ||
    localStorage.getItem("aw-language") ||
    "en";

  let loginRedirecting = false;

  function isLoggedIn() {
    try {
      const currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "null"
      );

      const session = JSON.parse(
        localStorage.getItem("afghanWorkSession") || "null"
      );

      return Boolean(
        currentUser &&
        session &&
        currentUser.email &&
        session.email &&
        currentUser.email.toLowerCase() === session.email.toLowerCase()
      );
    } catch (error) {
      return false;
    }
  }

  function requireLogin() {
    if (isLoggedIn()) {
      return true;
    }

    if (loginRedirecting) {
      return false;
    }

    loginRedirecting = true;

    const language = translations[currentLanguage] || translations.en;

    if (message) {
      message.textContent = language.loginRequired;
    }

    const loginUrl = new URL("../auth/login.html", window.location.href);
    loginUrl.searchParams.set("redirect", window.location.href);

    window.location.replace(loginUrl.href);

    return false;
  }

  function changeLanguage(language) {
    currentLanguage = translations[language] ? language : "en";

    const t = translations[currentLanguage];
    const isRTL = currentLanguage !== "en";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.title = t.title;

    document.querySelectorAll(".brand").forEach(function (brand) {
      const brandText = brand.querySelector("span:last-child");
      if (brandText) brandText.textContent = t.brand;
    });

    const navLinks = document.querySelectorAll(".nav-links a");
    const navNames = [t.home, t.jobs, t.companies, t.candidates, t.about];

    navLinks.forEach(function (link, index) {
      if (navNames[index]) link.textContent = navNames[index];
    });

    const actionLinks = document.querySelectorAll(".nav-actions a");
    if (actionLinks[0]) actionLinks[0].textContent = t.login;
    if (actionLinks[1]) actionLinks[1].textContent = t.register;

    const hero = document.querySelector(".page-hero");

    if (hero) {
      const eyebrow = hero.querySelector(".eyebrow");
      const heading = hero.querySelector("h1");
      const paragraph = hero.querySelector("p");

      if (eyebrow) eyebrow.textContent = t.heroEyebrow;
      if (heading) heading.textContent = t.heroTitle;
      if (paragraph) paragraph.textContent = t.heroText;
    }

    const card = document.querySelector(".form-card");

    if (card) {
      const eyebrow = card.querySelector(".eyebrow");
      const heading = card.querySelector("h1");
      const description = card.querySelector(".muted");

      if (eyebrow) eyebrow.textContent = t.formEyebrow;
      if (heading) heading.textContent = t.formTitle;
      if (description) description.textContent = t.formDescription;

      const labelTexts = {
        fullName: t.fullName,
        email: t.email,
        phone: t.phone,
        resume: t.resume,
        coverLetter: t.coverLetter
      };

      Object.keys(labelTexts).forEach(function (id) {
        const label = card.querySelector('label[for="' + id + '"]');
        if (label) label.textContent = labelTexts[id];
      });

      const placeholders = {
        fullName: t.namePlaceholder,
        email: t.emailPlaceholder,
        phone: t.phonePlaceholder,
        coverLetter: t.coverPlaceholder
      };

      Object.keys(placeholders).forEach(function (id) {
        const input = document.getElementById(id);
        if (input) input.placeholder = placeholders[id];
      });

      const resumeHelp = document.getElementById("resumeHelp");
      if (resumeHelp) resumeHelp.textContent = t.resumeHelp;

      const resumeChoose = document.getElementById("resumeChoose");
      if (resumeChoose) resumeChoose.textContent = t.resumeChoose;

      const resumeFileName = document.getElementById("resumeFileName");
      const resumeInput = document.getElementById("resume");

      if (resumeFileName && resumeInput && resumeInput.files.length === 0) {
        resumeFileName.textContent = t.resumeNoFile;
      }

      if (submitButton) submitButton.textContent = t.submit;
    }

    const footer = document.querySelector(".footer");

    if (footer) {
      const columns = footer.querySelectorAll(".footer-grid > div");
      const headings = [null, t.jobSeekers, t.employers, t.account];

      columns.forEach(function (column, index) {
        const heading = column.querySelector("h4");
        if (heading && headings[index]) heading.textContent = headings[index];
      });

      const footerLinks = footer.querySelectorAll(".footer-grid a:not(.brand)");
      const footerNames = [
        t.findJobs,
        t.resumeBuilder,
        t.postJob,
        t.companies,
        t.login,
        t.register
      ];

      footerLinks.forEach(function (link, index) {
        if (footerNames[index]) link.textContent = footerNames[index];
      });

      const copyright = footer.querySelector(".footer-bottom");
      if (copyright) copyright.textContent = t.copyright;

      const descriptionBrand = footer.querySelector(".footer-grid .brand");

      if (descriptionBrand) {
        const paragraph = descriptionBrand.parentElement.querySelector("p");
        if (paragraph) paragraph.textContent = t.footerDescription;
      }
    }

    document.querySelectorAll("input, textarea").forEach(function (field) {
      if (field.type !== "file") {
        field.style.textAlign = isRTL ? "right" : "left";
      }
    });

    try {
      localStorage.setItem("afghanWorkLanguage", currentLanguage);
      localStorage.setItem("aw-language", currentLanguage);
    } catch (error) {
      console.warn("Could not save language preference.");
    }

    if (message && message.dataset.messageKey) {
      const key = message.dataset.messageKey;
      message.textContent = t[key] || "";
    }
  }

  document.addEventListener("languageChanged", function (event) {
    const language =
      event.detail?.language ||
      localStorage.getItem("afghanWorkLanguage") ||
      localStorage.getItem("aw-language") ||
      "en";

    changeLanguage(language);
  });

  const resumeInput = document.getElementById("resume");

  if (resumeInput) {
    resumeInput.addEventListener("change", function () {
      const t = translations[currentLanguage];
      const fileName = document.getElementById("resumeFileName");

      if (fileName) {
        fileName.textContent = resumeInput.files.length
          ? resumeInput.files[0].name
          : t.resumeNoFile;
      }

      if (message) {
        message.textContent = "";
        delete message.dataset.messageKey;
      }
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!requireLogin()) return;

      const t = translations[currentLanguage];
      const fullName = document.getElementById("fullName");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const resume = document.getElementById("resume");
      const coverLetter = document.getElementById("coverLetter");

      function showMessage(key) {
        if (!message) return;
        message.dataset.messageKey = key;
        message.textContent = t[key] || "";
      }

      if (message) {
        message.textContent = "";
        delete message.dataset.messageKey;
      }

      if (
        !fullName ||
        !email ||
        !phone ||
        !resume ||
        !coverLetter ||
        !fullName.value.trim() ||
        !email.value.trim() ||
        !phone.value.trim() ||
        !resume.files.length ||
        !coverLetter.value.trim()
      ) {
        showMessage("required");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email.value.trim())) {
        showMessage("invalidEmail");
        return;
      }

      const selectedFile = resume.files[0];
      const allowedExtensions = /\.(pdf|doc|docx)$/i;

      if (!allowedExtensions.test(selectedFile.name)) {
        showMessage("invalidFile");
        return;
      }

      if (selectedFile.size > 5 * 1024 * 1024) {
        showMessage("largeFile");
        return;
      }

      /*
       * This only validates the form.
       * Without a backend, it does not submit/store a real application.
       */
      showMessage("success");

      console.log("Application details:", {
        fullName: fullName.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        resumeName: selectedFile.name,
        coverLetter: coverLetter.value.trim()
      });
    });
  }

  changeLanguage(currentLanguage);

  /*
   * Protect the Apply page itself.
   * Visitors without a valid local session are sent to Login.
   */
  if (form && !isLoggedIn()) {
    requireLogin();
  }
});
