
"use strict";

/* =========================================================
   AFGHAN WORK - MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme/background before controls that may depend on them.
  initThemeStyles();
  init3DBackground();
  initTheme();

  // Language and profile controls
  initLanguageSwitcher();
  initProfileMenu();

  // Other page features
  initMobileMenu();
  initSearch();
  initCurrentYear();
  initSmoothScroll();
  initNavbarScroll();
  initLogout();
  setActiveNavigation();
});


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}


/* =========================================================
   SEARCH
   ========================================================= */


/* =========================================================
   SEARCH
   ========================================================= */

function initSearch() {
  const searchForms = document.querySelectorAll(".search-form");

  searchForms.forEach((searchForm) => {
    // Prevent attaching the same listener twice.
    if (searchForm.dataset.searchInitialized === "true") return;
    searchForm.dataset.searchInitialized = "true";

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const keywordInput = searchForm.querySelector(
        'input[name="keyword"], #keyword, .search-input'
      );

      const locationInput = searchForm.querySelector(
        'input[name="location"], #location'
      );

      const keyword = keywordInput
        ? keywordInput.value.trim()
        : "";

      const location = locationInput
        ? locationInput.value.trim()
        : "";

      // Do not search if both fields are empty.
      if (!keyword && !location) {
        if (keywordInput) {
          keywordInput.focus();
          keywordInput.setCustomValidity(
            getAWCurrentLanguage() === "fa"
              ? "لطفاً عنوان وظیفه یا مکان را وارد کنید."
              : getAWCurrentLanguage() === "ps"
                ? "مهرباني وکړئ د دندې نوم یا ځای ولیکئ."
                : "Please enter a job title or location."
          );
          keywordInput.reportValidity();
        }

        return;
      }

      // Clear any previous validation message.
      if (keywordInput) {
        keywordInput.setCustomValidity("");
      }

      const params = new URLSearchParams();

      if (keyword) {
        params.set("keyword", keyword);
      }

      if (location) {
        params.set("location", location);
      }

      window.location.href =
        getRootPath() + "pages/jobs.html?" + params.toString();
    });

    // Remove the old validation message when the user starts typing.
    searchForm.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", () => {
        input.setCustomValidity("");
      });
    });
  });
}



/* =========================================================
   CURRENT YEAR
   ========================================================= */

function initCurrentYear() {
  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}


/* =========================================================
   NAVBAR SCROLL
   ========================================================= */

function initNavbarScroll() {
  const header = document.querySelector(".site-header");

  if (!header) return;

  const handleScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
}


/* =========================================================
   LOGOUT
   ========================================================= */

function initLogout() {
  // Delegated listener also handles logout buttons created dynamically.
  if (document.documentElement.dataset.logoutListener === "true") return;
  document.documentElement.dataset.logoutListener = "true";

  document.addEventListener("click", (event) => {
    const button = event.target.closest(
      ".logout-btn, [data-action='logout'], .aw-profile-logout"
    );
    if (!button) return;

    event.preventDefault();
    const language = getAWCurrentLanguage();
    const messages = {
      en: "Are you sure you want to logout?",
      fa: "آیا مطمئن هستید که می‌خواهید خارج شوید؟",
      ps: "ایا ډاډه یاست چې غواړئ ووځئ؟",
    };
    if (!window.confirm(messages[language] || messages.en)) return;

    localStorage.removeItem("currentUser");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("afghanWorkSession");
    window.location.href = getRootPath() + "index.html";
  });
}

/* =========================================================
   ROOT PATH
   ========================================================= */

function getRootPath() {
  const path = window.location.pathname;

  if (
    path.includes("/pages/") ||
    path.includes("/auth/") ||
    path.includes("/user/") ||
    path.includes("/admin/")
  ) {
    return "../";
  }

  return "./";
}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function setActiveNavigation() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const linkPath = new URL(
      link.href,
      window.location.origin
    ).pathname;

    if (
      currentPath === linkPath ||
      (currentPath.endsWith("/") && linkPath.endsWith("index.html"))
    ) {
      link.classList.add("active");
    }
  });
}


/* =========================================================
   GLOBAL LANGUAGE SYSTEM
   English / Dari / Pashto
   ========================================================= */

const AW_LANGUAGE_STORAGE_KEY = "afghanWorkLanguage";
const AW_SUPPORTED_LANGUAGES = ["en", "fa", "ps"];


/* Get the saved language */

function getAWCurrentLanguage() {
  const savedLanguage = localStorage.getItem(
    AW_LANGUAGE_STORAGE_KEY
  );

  return AW_SUPPORTED_LANGUAGES.includes(savedLanguage)
    ? savedLanguage
    : "en";
}


/* Initialize the language system */

function initLanguageSwitcher() {
  createLanguageSwitchers();

  // Apply the saved language to the current page.
  applyAWLanguage(getAWCurrentLanguage(), false);

  // Install only one delegated click listener.
  if (!window.awMainLanguageHandlerInstalled) {
    window.awMainLanguageHandlerInstalled = true;

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;

      const button = event.target.closest(
        ".language-btn[data-language]"
      );

      if (!button) return;

      const language = button.getAttribute("data-language");

      if (!AW_SUPPORTED_LANGUAGES.includes(language)) return;

      event.preventDefault();
      applyAWLanguage(language);
    });
  }

  // Respond to language changes from other page scripts.
  document.addEventListener("languageChanged", (event) => {
    const language =
      event.detail?.language || getAWCurrentLanguage();

    if (!AW_SUPPORTED_LANGUAGES.includes(language)) return;

    updateLanguageButtons(language);

    const theme =
      document.documentElement.getAttribute("data-theme") || "light";

    updateThemeButtons(theme);
  });
}


/* Create desktop and mobile language switchers */

function createLanguageSwitchers() {
  const navActions = document.querySelector(".nav-actions");

  if (
    navActions &&
    !navActions.querySelector(".language-switcher")
  ) {
    navActions.prepend(createLanguageSwitcherElement());
  }

  createMobileLanguageSwitcherIfNeeded();
}


/* Create mobile language switcher */

function createMobileLanguageSwitcherIfNeeded() {
  const navLinks = document.querySelector(".nav-links");

  if (!navLinks) return;

  if (navLinks.querySelector(".mobile-language")) return;

  const mobileWrapper = document.createElement("div");
  mobileWrapper.className = "mobile-language";

  mobileWrapper.appendChild(createLanguageSwitcherElement());
  navLinks.appendChild(mobileWrapper);
}


/* Build the language buttons */

function createLanguageSwitcherElement() {
  const wrapper = document.createElement("div");

  wrapper.className = "language-switcher";
  wrapper.setAttribute("aria-label", "Language selector");

  const languages = [
    { code: "en", label: "EN", aria: "English" },
    { code: "fa", label: "دری", aria: "Dari" },
    { code: "ps", label: "پښتو", aria: "Pashto" },
  ];

  languages.forEach(({ code, label, aria }) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "language-btn";
    button.setAttribute("data-language", code);
    button.setAttribute("aria-label", aria);
    button.setAttribute("aria-pressed", "false");
    button.textContent = label;

    wrapper.appendChild(button);
  });

  return wrapper;
}


/* =========================================================
   TRANSLATION DICTIONARIES
   ========================================================= */

/*
  Common translations:
  window.AW_COMMON_TRANSLATIONS

  Current-page translations:
  window.AW_PAGE_TRANSLATIONS

  The current page's translations override common translations
  when the same key exists in both dictionaries.
*/

function getAWTranslationDictionary() {
  const common = window.AW_COMMON_TRANSLATIONS || {};
  const page = window.AW_PAGE_TRANSLATIONS || {};

  const translations = {};

  AW_SUPPORTED_LANGUAGES.forEach((language) => {
    translations[language] = {
      ...(common[language] || {}),
      ...(page[language] || {}),
    };
  });

  return translations;
}


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function applyAWLanguage(language, dispatchEvent = true) {
  if (!AW_SUPPORTED_LANGUAGES.includes(language)) return;

  // Save the selected language for other pages.
  localStorage.setItem(AW_LANGUAGE_STORAGE_KEY, language);

  // Set page direction and language.
  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "en" ? "ltr" : "rtl";

  updateLanguageButtons(language);

  const dictionaries = getAWTranslationDictionary();
  const translations = dictionaries[language] || {};

  // Translate text content.
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (typeof translations[key] === "string") {
      element.textContent = translations[key];
    }
  });

  // Translate input placeholders.
  document.querySelectorAll("[data-i18n-placeholder]").forEach(
    (element) => {
      const key = element.getAttribute("data-i18n-placeholder");

      if (typeof translations[key] === "string") {
        element.setAttribute("placeholder", translations[key]);
      }
    }
  );

  // Translate accessible labels.
  document.querySelectorAll("[data-i18n-aria-label]").forEach(
    (element) => {
      const key = element.getAttribute("data-i18n-aria-label");

      if (typeof translations[key] === "string") {
        element.setAttribute("aria-label", translations[key]);
      }
    }
  );

  // Translate title attributes.
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.getAttribute("data-i18n-title");

    if (typeof translations[key] === "string") {
      element.setAttribute("title", translations[key]);
    }
  });

  // Translate the browser tab title.
  const pageTitleKey =
    document.documentElement.getAttribute("data-i18n-title");

  if (
    pageTitleKey &&
    typeof translations[pageTitleKey] === "string"
  ) {
    document.title = translations[pageTitleKey];
  } else if (typeof translations.pageTitle === "string") {
    document.title = translations.pageTitle;
  }

  // Update theme button labels.
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";

  updateThemeButtons(currentTheme);

  // Notify other scripts, such as page-specific form scripts.
  if (dispatchEvent) {
    document.dispatchEvent(
      new CustomEvent("languageChanged", {
        detail: { language },
      })
    );
  }
}


/* Highlight the selected language */

function updateLanguageButtons(language) {
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive =
      button.getAttribute("data-language") === language;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}


/* =========================================================
   3D BACKGROUND
   ========================================================= */

function init3DBackground() {
  let background = document.getElementById("threeDBackground");

  if (!background) {
    background = document.createElement("div");
    background.id = "threeDBackground";

    background.innerHTML = `
      <div class="bg-grid"></div>
      <div class="bg-orb orb-1"></div>
      <div class="bg-orb orb-2"></div>
      <div class="bg-orb orb-3"></div>
    `;

    document.body.prepend(background);
  }

  const orbs = background.querySelectorAll(".bg-orb");

  if (!orbs.length) return;

  let animationFrame = null;

  document.addEventListener("mousemove", (event) => {
    if (window.innerWidth <= 768) return;

    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;

    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }

    animationFrame = requestAnimationFrame(() => {
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 12;
        const moveX = mouseX * speed;
        const moveY = mouseY * speed;
        const rotateX = mouseY * -8;
        const rotateY = mouseX * 8;

        orb.style.transform = `
          translate3d(${moveX}px, ${moveY}px, 0)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
      });
    });
  });
}


/* =========================================================
   THEME
   LIGHT / DARK MODE
   ========================================================= */

function initTheme() {
  const savedTheme = localStorage.getItem("afghanWorkTheme");

  const systemDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = savedTheme || (systemDark ? "dark" : "light");

  createThemeButton();
  applyTheme(theme);
}


/* Create only one theme button */

function createThemeButton() {
  let button = document.querySelector("[data-theme-toggle]");

  const navActions = document.querySelector(".nav-actions");
  const navLinks = document.querySelector(".nav-links");

  if (!navActions && !navLinks) return;

  if (!button) {
    button = createThemeButtonElement();
  } else if (!button.dataset.themeHandlerInstalled) {
    button.addEventListener("click", toggleTheme);
    button.dataset.themeHandlerInstalled = "true";
  }

  button.dataset.themeReady = "true";

  let mobileWrapper = navLinks
    ? navLinks.querySelector(".mobile-theme")
    : null;

  if (!mobileWrapper && navLinks) {
    mobileWrapper = document.createElement("div");
    mobileWrapper.className = "mobile-theme";
    navLinks.appendChild(mobileWrapper);
  }

  const updateThemeButtonPosition = () => {
    if (window.innerWidth <= 768 && mobileWrapper) {
      if (button.parentElement !== mobileWrapper) {
        mobileWrapper.appendChild(button);
      }

      return;
    }

    if (navActions && button.parentElement !== navActions) {
      navActions.insertBefore(button, navActions.firstChild);
    }
  };

  updateThemeButtonPosition();

  if (!window.awThemeResizeHandlerInstalled) {
    window.awThemeResizeHandlerInstalled = true;

    window.addEventListener("resize", updateThemeButtonPosition);
  }
}


/* Create the theme button */

function createThemeButtonElement() {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "theme-toggle";
  button.setAttribute("data-theme-toggle", "true");
  button.setAttribute("aria-label", "Switch theme");

  button.innerHTML = `
    <span class="theme-icon">☾</span>
    <span class="theme-text">Dark</span>
  `;

  button.addEventListener("click", toggleTheme);
  button.dataset.themeHandlerInstalled = "true";

  return button;
}


/* Toggle theme */

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";

  applyTheme(currentTheme === "dark" ? "light" : "dark");
}


/* Apply theme */

function applyTheme(theme) {
  const safeTheme = theme === "dark" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", safeTheme);
  localStorage.setItem("afghanWorkTheme", safeTheme);

  updateThemeButtons(safeTheme);
  update3DTheme(safeTheme);
}


/* Update theme button labels in all three languages */

function updateThemeButtons(theme) {
  const buttons = document.querySelectorAll("[data-theme-toggle]");
  const language = getAWCurrentLanguage();

  const labels = {
    en: {
      light: "Light",
      dark: "Dark",
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    fa: {
      light: "روشن",
      dark: "تاریک",
      toLight: "تغییر به حالت روشن",
      toDark: "تغییر به حالت تاریک",
    },
    ps: {
      light: "رڼا",
      dark: "تیاره",
      toLight: "روښانه حالت ته بدلول",
      toDark: "تیاره حالت ته بدلول",
    },
  };

  const text = labels[language] || labels.en;

  buttons.forEach((button) => {
    const icon = button.querySelector(".theme-icon");
    const label = button.querySelector(".theme-text");

    if (theme === "dark") {
      if (icon) icon.textContent = "☀";
      if (label) label.textContent = text.light;

      button.setAttribute("aria-label", text.toLight);
    } else {
      if (icon) icon.textContent = "☾";
      if (label) label.textContent = text.dark;

      button.setAttribute("aria-label", text.toDark);
    }
  });
}


/* Update the 3D background theme */

function update3DTheme(theme) {
  const background = document.getElementById("threeDBackground");

  if (!background) return;

  background.setAttribute("data-theme", theme);
}


/* =========================================================
   THEME + 3D CSS
   ========================================================= */

function initThemeStyles() {
  if (document.getElementById("afghanWorkThemeStyles")) return;

  const style = document.createElement("style");
  style.id = "afghanWorkThemeStyles";

  style.textContent = `

:root {
  --aw-body-bg: #f8fbff;
  --aw-body-text: #111827;
  --aw-surface: #ffffff;
  --aw-surface-2: #f8fafc;
  --aw-surface-3: #eef2ff;
  --aw-text-main: #111827;
  --aw-text-secondary: #475569;
  --aw-text-muted: #64748b;
  --aw-border: #e7eaf3;
  --aw-input-bg: #ffffff;
  --aw-input-text: #0f172a;
  --aw-header-bg: rgba(255,255,255,.88);
}

html[data-theme="dark"] {
  --aw-body-bg: #080d18;
  --aw-body-text: #f8fafc;
  --aw-surface: #111827;
  --aw-surface-2: #172033;
  --aw-surface-3: #1e293b;
  --aw-text-main: #f8fafc;
  --aw-text-secondary: #cbd5e1;
  --aw-text-muted: #94a3b8;
  --aw-border: #263449;
  --aw-input-bg: #111827;
  --aw-input-text: #f8fafc;
  --aw-header-bg: rgba(10,15,27,.90);
}

html,
body {
  transition: background-color .35s ease, color .35s ease;
}

html[data-theme="dark"] body {
  color: var(--aw-body-text);
  background-color: var(--aw-body-bg);
}

html[data-theme="dark"] .site-header {
  background: var(--aw-header-bg);
  border-bottom-color: rgba(71,85,105,.35);
  box-shadow: 0 8px 30px rgba(0,0,0,.20);
}

html[data-theme="dark"] .nav-links a {
  color: #cbd5e1;
}

html[data-theme="dark"] .nav-links a:hover,
html[data-theme="dark"] .nav-links a.active {
  color: #818cf8;
}

html[data-theme="dark"] .card,
html[data-theme="dark"] .job-card,
html[data-theme="dark"] .candidate-card,
html[data-theme="dark"] .company-card,
html[data-theme="dark"] .profile-card,
html[data-theme="dark"] .auth-card,
html[data-theme="dark"] .dashboard-card,
html[data-theme="dark"] .stat-card,
html[data-theme="dark"] .content-card {
  background: linear-gradient(145deg, #151e2f, #101827);
  border-color: #263449;
  color: #f8fafc;
  box-shadow: 0 20px 55px rgba(0,0,0,.28);
}

html[data-theme="dark"] .visual-card {
  background: rgba(17,24,39,.88);
  border-color: rgba(71,85,105,.8);
  box-shadow: 0 20px 0 rgba(79,70,229,.08), 0 28px 60px rgba(0,0,0,.35);
}

html[data-theme="dark"] .float-card {
  background: #1e293b;
  border-color: #334155;
  color: #f8fafc;
  box-shadow: 0 18px 35px rgba(0,0,0,.35);
}

html[data-theme="dark"] .float-card strong,
html[data-theme="dark"] .float-card span,
html[data-theme="dark"] .float-card p {
  color: #f8fafc;
}

html[data-theme="dark"] .visual-photo {
  background: #1e293b;
}

html[data-theme="dark"] h1,
html[data-theme="dark"] h2,
html[data-theme="dark"] h3,
html[data-theme="dark"] h4,
html[data-theme="dark"] h5,
html[data-theme="dark"] h6 {
  color: #f8fafc;
}

html[data-theme="dark"] p,
html[data-theme="dark"] .lead,
html[data-theme="dark"] .muted,
html[data-theme="dark"] .section-head p,
html[data-theme="dark"] .page-hero p {
  color: #94a3b8;
}

html[data-theme="dark"] .stat-number {
  color: #f8fafc;
}

html[data-theme="dark"] .stat-label {
  color: #94a3b8;
}

html[data-theme="dark"] input,
html[data-theme="dark"] select,
html[data-theme="dark"] textarea {
  color: #f8fafc;
  background: linear-gradient(180deg, #172033, #111827);
  border-color: #334155;
}

html[data-theme="dark"] input::placeholder,
html[data-theme="dark"] textarea::placeholder {
  color: #64748b;
}

html[data-theme="dark"] label {
  color: #e2e8f0;
}

html[data-theme="dark"] .search-box,
html[data-theme="dark"] .search-form {
  background: rgba(17,24,39,.90);
  border-color: #263449;
  box-shadow: 0 18px 45px rgba(0,0,0,.30);
}

/* Language switcher */

.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 4px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: rgba(255,255,255,.90);
  box-shadow: 0 5px 14px rgba(15,23,42,.08);
  position: relative;
  z-index: 20;
}

.language-btn {
  min-height: 32px;
  padding: 0 9px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #64748b;
  font-family: inherit;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  transition: all .2s ease;
}

.language-btn:hover {
  color: #4f46e5;
  background: #eef2ff;
  transform: translateY(-1px);
}

.language-btn.active {
  color: #ffffff;
  background: linear-gradient(145deg, #4f46e5, #6d5dfc);
  box-shadow: 0 4px 10px rgba(79,70,229,.25);
}

html[data-theme="dark"] .language-switcher {
  background: rgba(17,24,39,.90);
  border-color: #334155;
  box-shadow: 0 8px 20px rgba(0,0,0,.25);
}

html[data-theme="dark"] .language-btn {
  color: #94a3b8;
}

html[data-theme="dark"] .language-btn:hover {
  color: #a5b4fc;
  background: #1e293b;
}

html[data-theme="dark"] .language-btn.active {
  color: #ffffff;
  background: linear-gradient(145deg, #4f46e5, #6d5dfc);
}

.mobile-language {
  display: none;
}

/* Tables */

html[data-theme="dark"] table {
  color: #cbd5e1;
}

html[data-theme="dark"] th {
  color: #f8fafc;
  background: #172033;
}

html[data-theme="dark"] td,
html[data-theme="dark"] th {
  border-color: #263449;
}

/* Theme button */

.theme-toggle {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 13px;
  border: 1px solid #e2e8f0;
  border-radius: 11px;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  color: #475569;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 5px 14px rgba(15,23,42,.08);
  transition: all .25s ease;
  position: relative;
  z-index: 20;
}

.theme-toggle:hover {
  color: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 9px 20px rgba(15,23,42,.12);
}

.theme-icon {
  font-size: 17px;
  line-height: 1;
}

html[data-theme="dark"] .theme-toggle {
  color: #e2e8f0;
  background: linear-gradient(145deg, #1e293b, #111827);
  border-color: #334155;
  box-shadow: 0 7px 18px rgba(0,0,0,.28);
}

html[data-theme="dark"] .theme-toggle:hover {
  color: #a5b4fc;
  border-color: #4f46e5;
}

/* Mobile controls */

@media (max-width:768px) {
  .mobile-language {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 5px 5px;
  }

  .mobile-language .language-switcher {
    width: 100%;
    justify-content: center;
  }

  .mobile-language .language-btn {
    flex: 1;
  }

  .mobile-theme {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 5px 5px;
  }

  .mobile-theme .theme-toggle {
    width: 100%;
  }
}

/* 3D background */

#threeDBackground {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -10;
  background:
    radial-gradient(circle at 15% 20%, rgba(79,70,229,.14), transparent 35%),
    radial-gradient(circle at 85% 30%, rgba(37,99,235,.12), transparent 35%),
    linear-gradient(135deg, #f8fbff, #eef4ff, #ffffff);
  transition: background .5s ease;
}

#threeDBackground .bg-grid {
  position: absolute;
  width: 160%;
  height: 160%;
  left: -30%;
  top: -20%;
  background-image:
    linear-gradient(rgba(79,70,229,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79,70,229,.05) 1px, transparent 1px);
  background-size: 55px 55px;
  transform: perspective(700px) rotateX(62deg) translateZ(-100px);
  transform-origin: center;
  opacity: .65;
}

#threeDBackground .bg-orb {
  position: absolute;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 25%, rgba(255,255,255,.95),
    rgba(99,102,241,.25) 35%, rgba(37,99,235,.08) 65%, transparent 75%);
  box-shadow: 0 30px 80px rgba(79,70,229,.12);
  transform-style: preserve-3d;
  transition: transform .25s ease-out;
}

#threeDBackground .orb-1 {
  width: 320px;
  height: 320px;
  top: 5%;
  left: -100px;
}

#threeDBackground .orb-2 {
  width: 250px;
  height: 250px;
  top: 40%;
  right: -80px;
}

#threeDBackground .orb-3 {
  width: 190px;
  height: 190px;
  bottom: 5%;
  left: 45%;
}

/* Dark 3D background */

html[data-theme="dark"] #threeDBackground {
  background:
    radial-gradient(circle at 20% 20%, rgba(79,70,229,.22), transparent 35%),
    radial-gradient(circle at 80% 30%, rgba(37,99,235,.18), transparent 35%),
    radial-gradient(circle at 50% 90%, rgba(124,58,237,.12), transparent 40%),
    linear-gradient(135deg, #070b14 0%, #0d1424 50%, #080d18 100%);
}

html[data-theme="dark"] #threeDBackground .bg-grid {
  background-image:
    linear-gradient(rgba(129,140,248,.065) 1px, transparent 1px),
    linear-gradient(90deg, rgba(129,140,248,.065) 1px, transparent 1px);
  opacity: .5;
}

html[data-theme="dark"] #threeDBackground .bg-orb {
  background:
    radial-gradient(circle at 30% 25%, rgba(255,255,255,.14),
    rgba(99,102,241,.25) 35%, rgba(37,99,235,.10) 65%, transparent 75%);
  box-shadow: 0 30px 90px rgba(79,70,229,.20);
}

/* Footer */

html[data-theme="dark"] footer,
html[data-theme="dark"] .site-footer {
  color: #cbd5e1;
}

html[data-theme="dark"] footer a,
html[data-theme="dark"] .site-footer a {
  color: #cbd5e1;
}

html[data-theme="dark"] footer a:hover,
html[data-theme="dark"] .site-footer a:hover {
  color: #a5b4fc;
}

/* Mobile 3D */

@media (max-width:768px) {
  #threeDBackground .bg-grid {
    background-size: 40px 40px;
    transform: perspective(500px) rotateX(62deg) translateZ(-80px);
  }

  #threeDBackground .orb-1 {
    width: 200px;
    height: 200px;
  }

  #threeDBackground .orb-2 {
    width: 160px;
    height: 160px;
  }

  #threeDBackground .orb-3 {
    width: 120px;
    height: 120px;
  }
}

/* Reduce motion */

@media (prefers-reduced-motion:reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }

  #threeDBackground .bg-orb {
    transition: none;
  }
}

`;

  document.head.appendChild(style);
}
/* =========================================================
   AFGHAN WORK — ROLE-BASED PROFILE MENU
   Job Seeker / Employer / Admin
   English / Dari / Pashto
   ========================================================= */

/* =========================================================
   AFGHAN WORK — ROLE-BASED PROFILE MENU
   Job Seeker / Employer / Admin
   English / Dari / Pashto
   ========================================================= */

function initProfileMenu() {
  const user = getAWLoggedInUser();

  // اگر کاربر وارد نشده باشد، دکمه‌های Login و Register باقی بمانند.
  if (!user) return;

  const navActions = document.querySelector(".nav-actions");
  const navLinks = document.querySelector(".nav-links");

  if (!navActions && !navLinks) return;

  // پنهان کردن دکمه‌های Login و Register
  document.querySelectorAll(
    'a[href*="login.html"], a[href*="register.html"], ' +
    '[data-auth="login"], [data-auth="register"]'
  ).forEach((element) => {
    element.hidden = true;
  });

  // جلوگیری از ایجاد منوی تکراری
  if (document.querySelector(".aw-profile-menu")) {
    updateAWProfileMenu(user);
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "aw-profile-menu";
  wrapper.style.position = "relative";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "aw-profile-button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-haspopup", "true");

  const menu = document.createElement("div");
  menu.className = "aw-profile-dropdown";
  menu.hidden = true;

  wrapper.append(button, menu);

  // نمایش در بخش دسکتاپ
  if (navActions) {
    navActions.appendChild(wrapper);
  } else if (navLinks) {
    navLinks.appendChild(wrapper);
  }

  function renderMenu() {
    const language = getAWCurrentLanguage();
    const role = getAWUserRole(user);

    const text = {
      en: {
        account: "My Account",
        dashboard: "Dashboard",
        profile: "My Profile",
        settings: "Account Settings",
        applications: "My Applications",
        favorites: "Saved Jobs",
        messages: "Messages",
        postJob: "Post a Job",
        myJobs: "My Jobs",
        applicants: "Applicants",
        manageJobs: "Manage Jobs",
        manageUsers: "Manage Users",
        employers: "Employers",
        analytics: "Analytics",
        logout: "Log Out",
        guest: "User",
        seeker: "Job Seeker",
        employer: "Employer",
        admin: "Administrator"
      },
      fa: {
        account: "حساب کاربری من",
        dashboard: "داشبورد",
        profile: "پروفایل من",
        settings: "تنظیمات حساب",
        applications: "درخواست‌های کاری من",
        favorites: "وظایف ذخیره‌شده",
        messages: "پیام‌ها",
        postJob: "ثبت وظیفه",
        myJobs: "وظایف من",
        applicants: "متقاضیان",
        manageJobs: "مدیریت وظایف",
        manageUsers: "مدیریت کاربران",
        employers: "کارفرمایان",
        analytics: "آمار و گزارش‌ها",
        logout: "خروج از حساب",
        guest: "کاربر",
        seeker: "کارجو",
        employer: "کارفرما",
        admin: "مدیر"
      },
      ps: {
        account: "زما حساب",
        dashboard: "ډشبورډ",
        profile: "زما پروفایل",
        settings: "د حساب تنظیمات",
        applications: "زما دندې غوښتنلیکونه",
        favorites: "خوندي شوې دندې",
        messages: "پیغامونه",
        postJob: "دنده خپرول",
        myJobs: "زما دندې",
        applicants: "غوښتونکي",
        manageJobs: "د دندو مدیریت",
        manageUsers: "د کاروونکو مدیریت",
        employers: "کارورکوونکي",
        analytics: "احصایې او راپورونه",
        logout: "له حساب څخه وتل",
        guest: "کاروونکی",
        seeker: "د کار غوښتونکی",
        employer: "کارورکوونکی",
        admin: "مدیر"
      }
    };

    const t = text[language] || text.en;
    const name = user.firstName
      ? `${user.firstName} ${user.lastName || ""}`.trim()
      : user.name || user.fullName || t.guest;

    const roleLabels = {
      jobseeker: t.seeker,
      employer: t.employer,
      admin: t.admin
    };

    button.innerHTML = `
      <span class="aw-profile-avatar" aria-hidden="true">
        ${escapeAWHTML(name.charAt(0).toUpperCase())}
      </span>
      <span class="aw-profile-user">
        <span class="aw-profile-name">
          ${escapeAWHTML(name)}
        </span>
        <span class="aw-profile-role">
          ${roleLabels[role] || t.seeker}
        </span>
      </span>
      <span aria-hidden="true">⌄</span>
    `;

    const root = getRootPath();

    let links = [];

    if (role === "admin") {
      links = [
        [t.dashboard, root + "admin/index.html"],
        [t.manageJobs, root + "admin/jobs.html"],
        [t.manageUsers, root + "admin/users.html"],
        [t.employers, root + "admin/employers.html"],
        [t.analytics, root + "admin/analytics.html"]
      ];
    } else if (role === "employer") {
      links = [
        [t.dashboard, root + "user/employer-dashboard.html"],
        [t.profile, root + "pages/employer-profile.html"],
        [t.postJob, root + "pages/post-job.html"],
        [t.myJobs, root + "pages/employer.html"],
        [t.applicants, root + "pages/applications.html"],
        [t.messages, root + "pages/messages.html"]
      ];
    } else {
      links = [
        [t.dashboard, root + "user/dashboard.html"],
        [t.profile, root + "pages/profile.html"],
        [t.applications, root + "pages/applications.html"],
        [t.favorites, root + "pages/favorites.html"],
        [t.messages, root + "pages/messages.html"]
      ];
    }

    menu.replaceChildren();

    links.forEach(([label, href]) => {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      menu.appendChild(link);
    });

    const separator = document.createElement("div");
    separator.className = "aw-profile-separator";
    menu.appendChild(separator);

    const logout = document.createElement("button");
    logout.type = "button";
    logout.className = "aw-profile-logout";
    logout.textContent = t.logout;

    logout.addEventListener("click", () => {
      const confirmText = {
        en: "Are you sure you want to log out?",
        fa: "آیا مطمئن هستید که می‌خواهید از حساب خارج شوید؟",
        ps: "ایا ډاډه یاست چې له خپل حساب څخه وځئ؟"
      };

      if (!window.confirm(confirmText[language] || confirmText.en)) {
        return;
      }

      localStorage.removeItem("currentUser");
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("afghanWorkSession");

      window.location.href = root + "index.html";
    });

    menu.appendChild(logout);
  }

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });

  document.addEventListener("click", (event) => {
    if (!wrapper.contains(event.target)) {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("languageChanged", renderMenu);

  renderMenu();

  // استایل منو؛ مستقل از CSS سه‌بعدی فعلی
  if (!document.getElementById("awProfileMenuStyles")) {
    const style = document.createElement("style");
    style.id = "awProfileMenuStyles";

    style.textContent = `
      .aw-profile-menu {
        display: inline-flex;
        align-items: center;
        z-index: 1000;
      }

      .aw-profile-button {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        padding: 7px 11px;
        border: 1px solid var(--aw-border, #e7eaf3);
        border-radius: 13px;
        background: var(--aw-surface, #fff);
        color: var(--aw-text-main, #111827);
        font: inherit;
        cursor: pointer;
        box-shadow: 0 5px 16px rgba(15,23,42,.08);
      }

      .aw-profile-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        flex-shrink: 0;
        border-radius: 50%;
        color: #fff;
        background: linear-gradient(145deg,#4f46e5,#2563eb);
        font-weight: 800;
      }

      .aw-profile-user {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
      }

      .aw-profile-name {
        max-width: 145px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 750;
      }

      .aw-profile-role {
        font-size: 11px;
        color: var(--aw-text-muted, #64748b);
      }

      .aw-profile-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        inset-inline-end: 0;
        min-width: 220px;
        padding: 8px;
        border: 1px solid var(--aw-border, #e7eaf3);
        border-radius: 15px;
        background: var(--aw-surface, #fff);
        box-shadow: 0 18px 45px rgba(15,23,42,.16);
        z-index: 1001;
      }

      .aw-profile-dropdown[hidden] {
        display: none !important;
      }

      .aw-profile-dropdown a,
      .aw-profile-logout {
        display: block;
        width: 100%;
        padding: 11px 12px;
        border: 0;
        border-radius: 9px;
        background: transparent;
        color: var(--aw-text-main, #111827);
        text-decoration: none;
        text-align: start;
        font: inherit;
        font-size: 13px;
        cursor: pointer;
        box-sizing: border-box;
      }

      .aw-profile-dropdown a:hover {
        background: var(--aw-surface-3, #eef2ff);
        color: #4f46e5;
      }

      .aw-profile-separator {
        height: 1px;
        margin: 6px 4px;
        background: var(--aw-border, #e7eaf3);
      }

      .aw-profile-logout {
        color: #dc2626;
      }

      .aw-profile-logout:hover {
        background: #fef2f2;
      }

      html[data-theme="dark"] .aw-profile-dropdown,
      html[data-theme="dark"] .aw-profile-button {
        background: var(--aw-surface, #111827);
        border-color: var(--aw-border, #263449);
        color: var(--aw-text-main, #f8fafc);
      }

      html[data-theme="dark"] .aw-profile-dropdown a:hover {
        background: #1e293b;
        color: #a5b4fc;
      }

      @media (max-width: 768px) {
        .aw-profile-menu {
          width: 100%;
        }

        .aw-profile-button {
          width: 100%;
          justify-content: center;
        }

        .aw-profile-dropdown {
          width: 100%;
          box-sizing: border-box;
        }
      }
    `;

    document.head.appendChild(style);
  }
}


/* Read the current logged-in user */

function getAWLoggedInUser() {
  try {
    const raw =
      localStorage.getItem("currentUser") ||
      localStorage.getItem("loggedInUser");

    if (!raw) return null;

    const user = JSON.parse(raw);

    if (!user || typeof user !== "object") return null;

    return user;
  } catch (error) {
    console.error("Unable to read the current user:", error);
    return null;
  }
}


/* Normalize role names */

function getAWUserRole(user) {
  const role = String(user.role || "")
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, "");

  if (role === "admin" || role === "administrator") {
    return "admin";
  }

  if (role === "employer") {
    return "employer";
  }

  return "jobseeker";
}


/* Safely display user-provided text */

function escapeAWHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}


/* Update an existing profile menu */

function updateAWProfileMenu(user) {
  const menu = document.querySelector(".aw-profile-menu");
  if (menu) menu.remove();
  if (user) initProfileMenu();
}
