
"use strict";

/* =========================================
   AFGHAN WORK - GLOBAL LANGUAGE SYSTEM
   English / Dari / Pashto
   ========================================= */

(function () {
  const STORAGE_KEY = "afghanWorkLanguage";
  const LANGUAGES = ["en", "fa", "ps"];

  function getLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(saved) ? saved : "en";
  }

  function applyLanguage(language) {
    if (!LANGUAGES.includes(language)) return;

    localStorage.setItem(STORAGE_KEY, language);

    document.documentElement.lang = language;
    document.documentElement.dir =
      language === "en" ? "ltr" : "rtl";

    // Update every language button on the page
    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === language;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    // Translate elements using the shared dictionary
    const dictionary = window.AFGHAN_WORK_TRANSLATIONS;

    if (dictionary && dictionary[language]) {
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const translation = dictionary[language][key];

        if (typeof translation === "string") {
          element.textContent = translation;
        }
      });

      document.querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {
          const key = element.dataset.i18nPlaceholder;
          const translation = dictionary[language][key];

          if (typeof translation === "string") {
            element.placeholder = translation;
          }
        });

      if (dictionary[language].pageTitle) {
        document.title = dictionary[language].pageTitle;
      }
    }

    // Notify page-specific scripts
    document.dispatchEvent(
      new CustomEvent("languageChanged", {
        detail: { language }
      })
    );
  }

  // One click handler works for buttons on every page,
  // including language buttons created dynamically.
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language]");
    if (!button) return;

    applyLanguage(button.dataset.language);
  });

  // Expose the functions for other scripts
  window.AfghanWorkLanguage = {
    getLanguage,
    applyLanguage
  };

  // Apply saved language when the page opens
  function initialize() {
    applyLanguage(getLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, {
      once: true
    });
  } else {
    initialize();
  }
})();
