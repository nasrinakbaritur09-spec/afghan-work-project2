
"use strict";

/* =====================================================
   AFGHAN WORK — LOGIN JAVASCRIPT
   English / Dari / Pashto
   Successful login -> Home page
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const CONFIG = {
    USERS_KEY: "afghanWorkUsers",
    CURRENT_USER_KEY: "currentUser",
    SESSION_KEY: "afghanWorkSession",
    LANGUAGE_KEY: "afghanWorkLanguage",
    MIN_PASSWORD_LENGTH: 8
  };

  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const loginButton = document.getElementById("loginButton");
  const messageBox = document.getElementById("loginMessage");
  const passwordToggle = document.querySelector(
    ".login-password-toggle"
  );

  /* =========================================
     TRANSLATIONS
     ========================================= */

  const LOGIN_TEXTS = {
    en: {
      required: "Please enter your email and password.",
      invalidEmail: "Please enter a valid email address.",
      invalidCredentials: "Email or password is incorrect.",
      success: "Login successful! Redirecting to Home...",
      error: "Something went wrong. Please try again.",
      loading: "Signing in...",
      showPassword: "Show password",
      hidePassword: "Hide password"
    },

    fa: {
      required: "لطفاً ایمیل و رمز عبور خود را وارد کنید.",
      invalidEmail: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
      invalidCredentials: "ایمیل یا رمز عبور اشتباه است.",
      success: "ورود موفق بود! انتقال به صفحهٔ اصلی...",
      error: "مشکلی رخ داد. لطفاً دوباره تلاش کنید.",
      loading: "در حال ورود...",
      showPassword: "نمایش رمز عبور",
      hidePassword: "پنهان کردن رمز عبور"
    },

    ps: {
      required: "مهرباني وکړئ خپل ایمیل او پټنوم ولیکئ.",
      invalidEmail: "مهرباني وکړئ سم ایمیل ولیکئ.",
      invalidCredentials: "ایمیل یا پټنوم ناسم دی.",
      success: "ننوتل بریالي شول! کورپاڼې ته لېږد...",
      error: "ستونزه رامنځته شوه. بیا هڅه وکړئ.",
      loading: "د ننوتلو په حال کې...",
      showPassword: "پټنوم ښکاره کړئ",
      hidePassword: "پټنوم پټ کړئ"
    }
  };

  /* =========================================
     LANGUAGE
     ========================================= */

  function getLanguage() {
    const savedLanguage = localStorage.getItem(
      CONFIG.LANGUAGE_KEY
    );

    return LOGIN_TEXTS[savedLanguage] ? savedLanguage : "en";
  }

  function getText(key) {
    return LOGIN_TEXTS[getLanguage()][key] ||
      LOGIN_TEXTS.en[key] ||
      "";
  }

  /* =========================================
     MESSAGE
     ========================================= */

  function showMessage(message, type = "error") {
    if (!messageBox) {
      alert(message);
      return;
    }

    messageBox.textContent = message;
    messageBox.className = "login-message " + type;
    messageBox.style.display = "block";
    messageBox.setAttribute("role", "alert");
  }

  function clearMessage() {
    if (!messageBox) return;

    messageBox.textContent = "";
    messageBox.style.display = "none";
    messageBox.className = "login-message";
  }

  /* =========================================
     EMAIL VALIDATION
     ========================================= */

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* =========================================
     NORMALIZE USER ROLE
     ========================================= */

  function normalizeRole(role) {
    const normalizedRole = String(role || "")
      .trim()
      .toLowerCase();

    if (normalizedRole === "admin") {
      return "admin";
    }

    if (
      normalizedRole === "employer" ||
      normalizedRole === "recruiter"
    ) {
      return "employer";
    }

    return "jobseeker";
  }

  /* =========================================
     READ USERS
     ========================================= */

  function getUsers() {
    try {
      const storedUsers = localStorage.getItem(
        CONFIG.USERS_KEY
      );

      if (!storedUsers) return [];

      const users = JSON.parse(storedUsers);

      return Array.isArray(users) ? users : [];
    } catch (error) {
      console.error("Could not read users:", error);
      return [];
    }
  }

  /* =========================================
     PASSWORD HASH
     Compatible with register.js SHA-256 + salt
     ========================================= */

  async function hashPassword(password, salt) {
    const data = new TextEncoder().encode(
      String(salt) + String(password)
    );

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      data
    );

    return Array.from(new Uint8Array(hashBuffer))
      .map(byte => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  async function verifyPassword(inputPassword, user) {
    /*
      New accounts: passwordHash + salt
      The hash format must match register.js.
    */

    if (user.passwordHash && user.salt) {
      try {
        const hashedPassword = await hashPassword(
          inputPassword,
          user.salt
        );

        return hashedPassword === user.passwordHash;
      } catch (error) {
        console.error("Password verification failed:", error);
        return false;
      }
    }

    /*
      Backward compatibility for older accounts.
      Plain-text passwords are not secure and should
      be migrated to salted hashes.
    */

    if (typeof user.password === "string") {
      return user.password === inputPassword;
    }

    return false;
  }

  /* =========================================
     SAVE USER AND SESSION
     ========================================= */

  function saveLogin(user) {
    const firstName = String(user.firstName || "").trim();
    const lastName = String(user.lastName || "").trim();

    const fullName =
      String(user.name || "").trim() ||
      [firstName, lastName].filter(Boolean).join(" ") ||
      String(user.email || "").split("@")[0];

    const safeUser = {
      id: user.id || user.email,
      name: fullName,
      firstName: firstName,
      lastName: lastName,
      email: String(user.email || "").trim().toLowerCase(),
      role: normalizeRole(user.role),
      createdAt: user.createdAt || null
    };

    const session = {
      userId: safeUser.id,
      email: safeUser.email,
      role: safeUser.role,
      loginAt: new Date().toISOString()
    };

    localStorage.setItem(
      CONFIG.CURRENT_USER_KEY,
      JSON.stringify(safeUser)
    );

    localStorage.setItem(
      CONFIG.SESSION_KEY,
      JSON.stringify(session)
    );

    return safeUser;
  }

  /* =========================================
     REDIRECT AFTER LOGIN
     All users go to Home
     ========================================= */

  function redirectAfterLogin() {
    window.location.href = "../index.html";
  }

  /* =========================================
     PASSWORD SHOW / HIDE
     ========================================= */

  function setupPasswordToggle() {
    if (!passwordToggle || !passwordInput) return;

    passwordToggle.addEventListener("click", () => {
      const isPasswordHidden =
        passwordInput.type === "password";

      passwordInput.type = isPasswordHidden
        ? "text"
        : "password";

      passwordToggle.setAttribute(
        "aria-label",
        isPasswordHidden
          ? getText("hidePassword")
          : getText("showPassword")
      );

      passwordToggle.setAttribute(
        "title",
        isPasswordHidden
          ? getText("hidePassword")
          : getText("showPassword")
      );

      const icon = passwordToggle.querySelector("i");

      if (icon) {
        icon.classList.toggle(
          "fa-eye",
          !isPasswordHidden
        );

        icon.classList.toggle(
          "fa-eye-slash",
          isPasswordHidden
        );
      }
    });
  }

  /* =========================================
     LOGIN FORM
     ========================================= */

  async function handleLogin(event) {
    event.preventDefault();
    clearMessage();

    const email = String(emailInput?.value || "")
      .trim()
      .toLowerCase();

    const password = String(passwordInput?.value || "");

    if (!email || !password) {
      showMessage(getText("required"));
      return;
    }

    if (!isValidEmail(email)) {
      showMessage(getText("invalidEmail"));
      emailInput?.focus();
      return;
    }

    if (loginButton) {
      loginButton.disabled = true;
      loginButton.dataset.originalText =
        loginButton.textContent;

      loginButton.textContent = getText("loading");
    }

    try {
      const users = getUsers();

      const user = users.find(item =>
        String(item.email || "")
          .trim()
          .toLowerCase() === email
      );

      if (!user) {
        showMessage(getText("invalidCredentials"));
        return;
      }

      const passwordIsCorrect = await verifyPassword(
        password,
        user
      );

      if (!passwordIsCorrect) {
        showMessage(getText("invalidCredentials"));
        return;
      }

      saveLogin(user);

      showMessage(getText("success"), "success");

      /*
        Redirect to the homepage after a short delay.
      */

      window.setTimeout(() => {
        redirectAfterLogin();
      }, 700);

    } catch (error) {
      console.error("Login error:", error);
      showMessage(getText("error"));
    } finally {
      if (loginButton) {
        /*
          If the page is still here, restore the button.
        */

        window.setTimeout(() => {
          loginButton.disabled = false;

          if (loginButton.dataset.originalText) {
            loginButton.textContent =
              loginButton.dataset.originalText;
          }
        }, 800);
      }
    }
  }

  /* =========================================
     LANGUAGE CHANGE SUPPORT
     ========================================= */

  function updatePasswordToggleLanguage() {
    if (!passwordToggle || !passwordInput) return;

    const isPasswordHidden =
      passwordInput.type === "password";

    const label = isPasswordHidden
      ? getText("showPassword")
      : getText("hidePassword");

    passwordToggle.setAttribute("aria-label", label);
    passwordToggle.setAttribute("title", label);
  }

  document.addEventListener("languageChanged", () => {
    updatePasswordToggleLanguage();
  });

  window.addEventListener("storage", event => {
    if (event.key === CONFIG.LANGUAGE_KEY) {
      updatePasswordToggleLanguage();
    }
  });

  /* =========================================
     INITIALIZE
     ========================================= */

  if (form) {
    form.addEventListener("submit", handleLogin);
  } else {
    console.warn(
      "Login form not found. Check that the form ID is loginForm."
    );
  }

  setupPasswordToggle();
  updatePasswordToggleLanguage();
});
