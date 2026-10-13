"use strict";

/* =========================================================
   AFGHAN WORK - FORGOT PASSWORD
   English / Dari / Pashto
   Frontend validation + Multilingual support
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initForgotPassword();
});

function initForgotPassword() {
  const form = document.querySelector("#forgotPasswordForm");
  const emailInput = document.querySelector("#resetEmail");
  const messageBox = document.querySelector("#resetMessage");

  if (!form || !emailInput || !messageBox) {
    console.error("Forgot password elements were not found.");
    return;
  }

  /* =======================================================
     TRANSLATIONS
     ======================================================= */

  const translations = {
    en: {
      brandName: "AFGHAN WERK",
      pageTitle: "Forgot Password | Afghan Work",
      home: "Home",
      jobs: "Jobs",
      companies: "Companies",
      candidates: "Candidates",
      about: "About",
      login: "Login",
      register: "Register",

      forgotPassword: "FORGOT PASSWORD",
      resetTitle: "Reset your password",
      resetDescription:
        "Enter your email address to begin the password recovery process.",

      emailAddress: "Email Address",
      emailPlaceholder: "you@example.com",
      sendResetLink: "Send Reset Link",
      backToLogin: "← Back to Login",

      footerDescription:
        "Connecting talent with opportunities across Afghanistan.",
      jobSeekers: "Job Seekers",
      findJobs: "Find Jobs",
      resumeBuilder: "Resume Builder",
      employers: "Employers",
      postJob: "Post a Job",
      account: "Account",
      copyright: "All rights reserved.",

      required: "Please enter your email address.",
      invalid: "Please enter a valid email address.",
      success:
        "If an account exists with this email, password reset instructions can be sent.",
      sending: "Checking your email...",
      logoutConfirm: "Are you sure you want to logout?",
    },

    fa: {
        brandName:"افغان ورک",
      pageTitle: "بازیابی رمز عبور | افغان ورک",
      home: "صفحه اصلی",
      jobs: "فرصت‌های شغلی",
      companies: "شرکت‌ها",
      candidates: "کاندیداها",
      about: "درباره ما",
      login: "ورود",
      register: "ثبت‌نام",

      forgotPassword: "بازیابی رمز عبور",
      resetTitle: "بازیابی رمز عبور",
      resetDescription:
        "برای آغاز روند بازیابی رمز عبور، آدرس ایمیل خود را وارد کنید.",

      emailAddress: "آدرس ایمیل",
      emailPlaceholder: "you@example.com",
      sendResetLink: "ارسال لینک بازیابی",
      backToLogin: "← بازگشت به ورود",

      footerDescription:
        "پیونددهنده استعدادها با فرصت‌های شغلی در سراسر افغانستان.",
      jobSeekers: "کارجویان",
      findJobs: "جست‌وجوی شغل",
      resumeBuilder: "ساخت رزومه",
      employers: "کارفرمایان",
      postJob: "ثبت فرصت شغلی",
      account: "حساب کاربری",
      copyright: "تمام حقوق محفوظ است.",

      required: "لطفاً آدرس ایمیل خود را وارد کنید.",
      invalid: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
      success:
        "اگر حسابی با این ایمیل وجود داشته باشد، دستورالعمل بازیابی رمز عبور قابل ارسال است.",
      sending: "ایمیل شما در حال بررسی است...",
      logoutConfirm: "آیا مطمئن هستید که می‌خواهید خارج شوید؟",
    },

    ps: {
      brandName: "افغان ورک",
      pageTitle: "د پټنوم بېرته ترلاسه کول | افغان ورک",
      home: "کور",
      jobs: "دندې",
      companies: "شرکتونه",
      candidates: "نوماندان",
      about: "زموږ په اړه",
      login: "ننوتل",
      register: "راجستر",

      forgotPassword: "د پټنوم بېرته ترلاسه کول",
      resetTitle: "خپل پټنوم بېرته تنظیم کړئ",
      resetDescription:
        "د پټنوم د بېرته ترلاسه کولو لپاره خپل برېښنالیک ولیکئ.",

      emailAddress: "برېښنالیک",
      emailPlaceholder: "you@example.com",
      sendResetLink: "د بیا تنظیم لینک لېږل",
      backToLogin: "← بېرته ننوتلو ته",

      footerDescription:
        "په ټول افغانستان کې استعدادونه له کاري فرصتونو سره نښلوو.",
      jobSeekers: "د کار غوښتونکي",
      findJobs: "د دندو لټون",
      resumeBuilder: "د کاري ژوندلیک جوړول",
      employers: "کار ورکوونکي",
      postJob: "دندې خپرول",
      account: "حساب",
      copyright: "ټول حقونه خوندي دي.",

      required: "مهرباني وکړئ خپل برېښنالیک ولیکئ.",
      invalid: "مهرباني وکړئ یو معتبر برېښنالیک ولیکئ.",
      success:
        "که له دې برېښنالیک سره حساب موجود وي، د پټنوم د بیا تنظیم لارښوونې لېږل کېدای شي.",
      sending: "ستاسو برېښنالیک کتل کېږي...",
      logoutConfirm: "ایا ډاډه یاست چې غواړئ ووځئ؟",
    },
  };

  /* =======================================================
     LANGUAGE
     ======================================================= */

  function getLanguage() {
    const language = localStorage.getItem("afghanWorkLanguage") || "en";

    return translations[language] ? language : "en";
  }

  function getText(key) {
    return translations[getLanguage()][key] || key;
  }

  /* =======================================================
     INLINE MESSAGE
     ======================================================= */

  let currentMessageKey = "";
  let currentMessageType = "";

  function showMessage(key, type) {
    currentMessageKey = key;
    currentMessageType = type;

    messageBox.textContent = getText(key);
    messageBox.className = "register-message";

    if (type === "error") {
      messageBox.classList.add("error-message-box");
    }

    if (type === "success") {
      messageBox.classList.add("success-message-box");
    }

    messageBox.hidden = false;
  }

  function clearError() {
    currentMessageKey = "";
    currentMessageType = "";

    emailInput.classList.remove("input-error");
    emailInput.removeAttribute("aria-invalid");

    messageBox.textContent = "";
    messageBox.hidden = true;
    messageBox.className = "register-message";
  }

  /* =======================================================
     EMAIL VALIDATION
     ======================================================= */

  function validateEmail() {
    const email = emailInput.value.trim();

    if (!email) {
      emailInput.classList.add("input-error");
      emailInput.setAttribute("aria-invalid", "true");

      showMessage("required", "error");
      return false;
    }

    // Correct email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailPattern.test(email)) {
      emailInput.classList.add("input-error");
      emailInput.setAttribute("aria-invalid", "true");

      showMessage("invalid", "error");
      return false;
    }

    emailInput.classList.remove("input-error");
    emailInput.removeAttribute("aria-invalid");

    return true;
  }

  emailInput.addEventListener("input", clearError);

  emailInput.addEventListener("blur", () => {
    if (emailInput.value.trim()) {
      validateEmail();
    }
  });

  /* =======================================================
     FORM SUBMISSION
     ======================================================= */

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateEmail()) {
      return;
    }

    /*
      Frontend only:
      No email is actually sent without a backend service.
    */

    showMessage("success", "success");
  });

  /* =======================================================
     TRANSLATE ALL data-i18n ELEMENTS
     ======================================================= */

  function translatePage() {
    const language = getLanguage();

    // Translate all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translatedText = getText(key);

      if (translations[language][key]) {
        element.textContent = translatedText;
      }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");

      if (translations[language][key]) {
        element.setAttribute("placeholder", getText(key));
      }
    });

    // Translate email label
    const emailLabel = document.querySelector('label[for="resetEmail"]');

    if (emailLabel) {
      emailLabel.textContent = getText("emailAddress");
    }

    // Translate title
    const pageTitle = document.querySelector("#resetPageTitle");

    if (pageTitle) {
      pageTitle.textContent = getText("resetTitle");
    }

    // Translate email placeholder
    emailInput.placeholder = getText("emailPlaceholder");

    // Translate submit button
    const submitButton = document.querySelector("#resetSubmit");

    if (submitButton) {
      submitButton.textContent = getText("sendResetLink");
    }

    // Translate back link
    const backLink = document.querySelector("#backToLogin");

    if (backLink) {
      backLink.textContent = getText("backToLogin");
    }

    // Update document language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";

    // Translate browser tab title
    document.title = getText("pageTitle");

    // Keep existing validation message in the selected language
    if (currentMessageKey) {
      messageBox.textContent = getText(currentMessageKey);

      messageBox.className = "register-message";

      if (currentMessageType === "error") {
        messageBox.classList.add("error-message-box");
      }

      if (currentMessageType === "success") {
        messageBox.classList.add("success-message-box");
      }

      messageBox.hidden = false;
    }
  }

  /* =======================================================
     LANGUAGE CHANGE EVENT
     ======================================================= */

  document.addEventListener("languageChanged", () => {
    translatePage();
  });

  // Apply the saved language when the page opens
  translatePage();
}
