
"use strict";

/* =====================================================
   AFGHAN WORK - AUTHENTICATION GUARD
   Frontend-only protection for private pages
   ===================================================== */

const AW_AUTH = {
  USER_KEY: "currentUser",
  SESSION_KEY: "afghanWorkSession",
  LANGUAGE_KEY: "afghanWorkLanguage",

  PUBLIC_PAGES: [
    "/index.html",
    "/pages/jobs.html",
    "/pages/job-details.html",
    "/auth/login.html",
    "/auth/register.html",
    "/auth/forgot-password.html",
   
  ]
};

/* Get the current user */
function getCurrentUser() {
  try {
    const rawUser = localStorage.getItem(AW_AUTH.USER_KEY);
    const rawSession = localStorage.getItem(AW_AUTH.SESSION_KEY);

    if (!rawUser || !rawSession) return null;

    const user = JSON.parse(rawUser);
    const session = JSON.parse(rawSession);

    if (!user || !session || !user.id || !user.email) {
      return null;
    }

    if (String(session.userId) !== String(user.id)) {
      return null;
    }

    if (
      String(session.email).toLowerCase() !==
      String(user.email).toLowerCase()
    ) {
      return null;
    }

    return user;
  } catch (error) {
    console.error("Could not read the current session:", error);
    return null;
  }
}

/* Check whether the current page is public */
function isPublicPage() {
  const path = window.location.pathname.toLowerCase();

  return AW_AUTH.PUBLIC_PAGES.some((page) =>
    path.endsWith(page)
  );
}

/* Redirect to login while keeping the return destination */
function redirectToLogin() {
  const loginUrl = new URL("../auth/login.html", window.location.href);

  loginUrl.searchParams.set(
    "returnTo",
    window.location.pathname + window.location.search
  );

  window.location.replace(loginUrl.href);
}

/* Protect private pages */
function protectPrivatePage() {
  if (isPublicPage()) return;

  const user = getCurrentUser();

  if (!user) {
    redirectToLogin();
    return;
  }

  document.documentElement.dataset.authenticated = "true";
}

/* Log out */
function logoutUser() {
  localStorage.removeItem(AW_AUTH.USER_KEY);
  localStorage.removeItem(AW_AUTH.SESSION_KEY);

  const loginUrl = new URL("../auth/login.html", window.location.href);
  window.location.replace(loginUrl.href);
}

/* Make functions available to other JS files */
window.getCurrentUser = getCurrentUser;
window.protectPrivatePage = protectPrivatePage;
window.logoutUser = logoutUser;

/* Run the guard */
document.addEventListener("DOMContentLoaded", () => {
  protectPrivatePage();
});