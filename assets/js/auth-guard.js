
"use strict";

/* =========================================
   AFGHAN WORK — AUTH GUARD
   Protect private pages only
   ========================================= */

(function () {
  const CURRENT_USER_KEY = "currentUser";
  const SESSION_KEY = "afghanWorkSession";

  const currentPath = window.location.pathname.toLowerCase();

  // Find project root from this script's URL
  const scriptUrl = document.currentScript.src;
  const projectRoot = new URL("../../", scriptUrl);

  // Pages visitors can open without login
  const publicPages = [
    "/index.html",
    "/pages/jobs.html",
    "/pages/employer.html",
    "/pages/candidates.html",
    "/pages/about.html",
    "/auth/login.html",
    "/auth/register.html",
    "/auth/forgot-password.html",
    "/auth/reset-password.html"
  ];

  const isPublicPage = publicPages.some((page) =>
    currentPath.endsWith(page)
  );

  function getSavedData(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      return null;
    }
  }

  const user = getSavedData(CURRENT_USER_KEY);
  const session = getSavedData(SESSION_KEY);

  const isLoggedIn = Boolean(
    user &&
    user.id &&
    user.email &&
    session &&
    session.userId === user.id
  );

  // Redirect logged-out visitors only from private pages
  
  // Redirect logged-out visitors only from private pages
  if (!isPublicPage && !isLoggedIn) {
    const loginUrl = new URL("auth/login.html", projectRoot);
    loginUrl.searchParams.set(
      "redirect",
      window.location.pathname + window.location.search
    );

    window.location.href = loginUrl.href;
  }
})();