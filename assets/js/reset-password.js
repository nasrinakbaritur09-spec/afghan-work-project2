
"use strict";

/* =========================================
   RESET PASSWORD — ENGLISH / DARI / PASHTO
   ========================================= */

const RESET_PASSWORD_TRANSLATIONS = {
  en: {
    pageTitle: "Reset Password | Afghan Work",
    brandName: "AFGHAN WORK",
    home: "Home",
    jobs: "Jobs",
    companies: "Companies",
    candidates: "Candidates",
    about: "About",
    login: "Login",
    register: "Register",
    resetPassword: "Reset Password",
    createNewPassword: "Create a new password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    newPasswordPlaceholder: "New password",
    confirmPasswordPlaceholder: "Confirm password",
    updatePassword: "Update Password",
    footerDescription:
      "Connecting talented people with meaningful opportunities across Afghanistan.",
    jobSeekers: "Job Seekers",
    findJobs: "Find Jobs",
    resumeBuilder: "Resume Builder",
    employers: "Employers",
    postJob: "Post a Job",
    account: "Account",
    copyright: "© 2026 Afghan Work. All rights reserved.",
    passwordRequired: "Please enter a new password.",
    passwordLength: "Password must contain at least 8 characters.",
    passwordMismatch: "The passwords do not match.",
    resetUnavailable:
      "Password reset requires a verified reset link and a backend server."
  },

  fa: {
    pageTitle: "بازنشانی رمز عبور | افغان ورک",
    brandName: "افغان ورک",
    home: "صفحه اصلی",
    jobs: "وظایف",
    companies: "شرکت‌ها",
    candidates: "کاندیداها",
    about: "درباره ما",
    login: "ورود",
    register: "ثبت‌نام",
    resetPassword: "بازنشانی رمز عبور",
    createNewPassword: "رمز عبور جدید بسازید",
    newPassword: "رمز عبور جدید",
    confirmPassword: "تأیید رمز عبور",
    newPasswordPlaceholder: "رمز عبور جدید",
    confirmPasswordPlaceholder: "رمز عبور را دوباره وارد کنید",
    updatePassword: "تغییر رمز عبور",
    footerDescription:
      "ایجاد ارتباط میان افراد بااستعداد و فرصت‌های شغلی مناسب در سراسر افغانستان.",
    jobSeekers: "جویندگان کار",
    findJobs: "جستجوی وظایف",
    resumeBuilder: "ساخت رزومه",
    employers: "کارفرمایان",
    postJob: "ثبت وظیفه",
    account: "حساب کاربری",
    copyright: "© ۲۰۲۶ افغان ورک. تمام حقوق محفوظ است.",
    passwordRequired: "لطفاً رمز عبور جدید را وارد کنید.",
    passwordLength: "رمز عبور باید حداقل ۸ کاراکتر داشته باشد.",
    passwordMismatch: "رمزهای عبور با هم مطابقت ندارند.",
    resetUnavailable:
      "تغییر رمز عبور به لینک تأییدشده و سرور نیاز دارد."
  },

  ps: {
    pageTitle: "پټنوم بیا تنظیمول | افغان ورک",
    brandName: "افغان ورک",
    home: "کورپاڼه",
    jobs: "دندې",
    companies: "شرکتونه",
    candidates: "نوماندان",
    about: "زموږ په اړه",
    login: "ننوتل",
    register: "راجستر",
    resetPassword: "پټنوم بیا تنظیمول",
    createNewPassword: "نوی پټنوم جوړ کړئ",
    newPassword: "نوی پټنوم",
    confirmPassword: "د پټنوم تایید",
    newPasswordPlaceholder: "نوی پټنوم",
    confirmPasswordPlaceholder: "پټنوم بیا ولیکئ",
    updatePassword: "پټنوم بدلول",
    footerDescription:
      "په ټول افغانستان کې د وړ کسانو او مناسبو کاري فرصتونو ترمنځ اړیکه جوړول.",
    jobSeekers: "د کار غوښتونکي",
    findJobs: "د دندو لټون",
    resumeBuilder: "د سي وي جوړول",
    employers: "کار ورکوونکي",
    postJob: "دنده خپرول",
    account: "حساب",
    copyright: "© ۲۰۲۶ افغان ورک. ټول حقونه خوندي دي.",
    passwordRequired: "مهرباني وکړئ نوی پټنوم ولیکئ.",
    passwordLength: "پټنوم باید لږ تر لږه ۸ توري ولري.",
    passwordMismatch: "پټنومونه یو له بل سره برابر نه دي.",
    resetUnavailable:
      "د پټنوم بدلولو لپاره تایید شوی لینک او سرور ته اړتیا ده."
  }
};

/* =========================================
   LANGUAGE
   ========================================= */

function translateResetPasswordPage(language) {
  const lang = RESET_PASSWORD_TRANSLATIONS[language]
    ? language
    : "en";

  const dictionary = RESET_PASSWORD_TRANSLATIONS[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir =
    lang === "fa" || lang === "ps" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key] !== undefined) {
      element.placeholder = dictionary[key];
    }
  });

  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === lang;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

/* =========================================
   FORM VALIDATION
   ========================================= */

function initResetPasswordForm() {
  const form = document.getElementById("resetPasswordForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const language =
      localStorage.getItem("afghanWorkLanguage") || "en";

    const dictionary =
      RESET_PASSWORD_TRANSLATIONS[language] ||
      RESET_PASSWORD_TRANSLATIONS.en;

    const password = document.getElementById("newPassword").value;
    const confirmPassword =
      document.getElementById("confirmPassword").value;

    const message = document.getElementById("resetMessage");

    if (!password) {
      message.textContent = dictionary.passwordRequired;
      return;
    }

    if (password.length < 8) {
      message.textContent = dictionary.passwordLength;
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = dictionary.passwordMismatch;
      return;
    }

    /*
      This page only validates the form.
      It does not change a real account password.
      A secure backend and verified reset token are required.
    */

    message.textContent = dictionary.resetUnavailable;
  });
}

/* =========================================
   INITIALIZATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage =
    localStorage.getItem("afghanWorkLanguage") || "en";

  translateResetPasswordPage(savedLanguage);
  initResetPasswordForm();

  document.addEventListener("languageChanged", (event) => {
    const language =
      typeof event.detail === "string"
        ? event.detail
        : event.detail?.language ||
          localStorage.getItem("afghanWorkLanguage") ||
          "en";

    translateResetPasswordPage(language);
  });
});
