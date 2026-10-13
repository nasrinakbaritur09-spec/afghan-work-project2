
"use strict";

/* =========================================================
   AFGHAN WORK - REGISTER SYSTEM
   English / Dari / Pashto
   ========================================================= */

const REGISTER_CONFIG = {
  USERS_KEY: "afghanWorkUsers",
  MIN_PASSWORD_LENGTH: 8,
  MAX_NAME_LENGTH: 50,
  MAX_EMAIL_LENGTH: 150,
  MAX_PHONE_LENGTH: 30
};

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const REGISTER_TEXT = {
  en: {
    showPassword: "Show password",
    hidePassword: "Hide password",
    length: "At least 8 characters",
    uppercase: "One uppercase letter (A-Z)",
    lowercase: "One lowercase letter (a-z)",
    number: "One number (0-9)",
    special: "One special character",
    weak: "Password strength: Weak",
    medium: "Password strength: Medium",
    strong: "Password strength: Strong",
    firstName: "Please enter your first name.",
    lastName: "Please enter your last name.",
    email: "Please enter a valid email address.",
    emailRequired: "Please enter your email address.",
    emailLong: "Email address is too long.",
    phone: "Please enter a valid phone number.",
    password: "Password does not meet all requirements.",
    confirm: "Please confirm your password.",
    mismatch: "Passwords do not match.",
    exists: "This email is already registered. Please log in.",
    success: "Account created successfully. Redirecting to login...",
    saveError: "Could not save your account. Please try again.",
    generalError: "Something went wrong. Please try again.",
    creating: "Creating account...",
    role: "Please select an account type."
  },

  fa: {
    showPassword: "نمایش رمز عبور",
    hidePassword: "پنهان‌کردن رمز عبور",
    length: "حداقل ۸ کاراکتر",
    uppercase: "حداقل یک حرف بزرگ انگلیسی (A-Z)",
    lowercase: "حداقل یک حرف کوچک انگلیسی (a-z)",
    number: "حداقل یک عدد (0-9)",
    special: "حداقل یک علامت خاص",
    weak: "قدرت رمز عبور: ضعیف",
    medium: "قدرت رمز عبور: متوسط",
    strong: "قدرت رمز عبور: قوی",
    firstName: "لطفاً نام خود را وارد کنید.",
    lastName: "لطفاً تخلص خود را وارد کنید.",
    email: "لطفاً ایمیل معتبر وارد کنید.",
    emailRequired: "لطفاً ایمیل خود را وارد کنید.",
    emailLong: "ایمیل بیش از حد طولانی است.",
    phone: "لطفاً شماره تلفن معتبر وارد کنید.",
    password: "رمز عبور تمام شرایط لازم را ندارد.",
    confirm: "لطفاً رمز عبور را تأیید کنید.",
    mismatch: "رمزهای عبور یکسان نیستند.",
    exists: "این ایمیل قبلاً ثبت شده است. لطفاً وارد شوید.",
    success: "حساب با موفقیت ساخته شد. انتقال به صفحه ورود...",
    saveError: "ذخیره حساب ممکن نشد. لطفاً دوباره تلاش کنید.",
    generalError: "مشکلی رخ داد. لطفاً دوباره تلاش کنید.",
    creating: "در حال ساخت حساب...",
    role: "لطفاً نوع حساب را انتخاب کنید."
  },

  ps: {
    showPassword: "پټ نوم ښکاره کول",
    hidePassword: "پټ نوم پټول",
    length: "لږ تر لږه ۸ توري",
    uppercase: "لږ تر لږه یو لوی انګلیسي توری (A-Z)",
    lowercase: "لږ تر لږه یو کوچنی انګلیسي توری (a-z)",
    number: "لږ تر لږه یوه شمېره (0-9)",
    special: "لږ تر لږه یوه ځانګړې نښه",
    weak: "د پټ نوم ځواک: کمزوری",
    medium: "د پټ نوم ځواک: منځنی",
    strong: "د پټ نوم ځواک: پیاوړی",
    firstName: "مهرباني وکړئ خپل نوم ولیکئ.",
    lastName: "مهرباني وکړئ خپل تخلص ولیکئ.",
    email: "مهرباني وکړئ سم برېښنالیک ولیکئ.",
    emailRequired: "مهرباني وکړئ خپل برېښنالیک ولیکئ.",
    emailLong: "برېښنالیک ډېر اوږد دی.",
    phone: "مهرباني وکړئ د تلیفون سمه شمېره ولیکئ.",
    password: "پټ نوم ټول اړین شرایط نه پوره کوي.",
    confirm: "مهرباني وکړئ پټ نوم تایید کړئ.",
    mismatch: "پټ نومونه یو له بل سره برابر نه دي.",
    exists: "دا برېښنالیک مخکې ثبت شوی دی. مهرباني وکړئ ننوځئ.",
    success: "حساب جوړ شو. د ننوتلو پاڼې ته لېږدول کېږئ...",
    saveError: "حساب خوندي نه شو. بیا هڅه وکړئ.",
    generalError: "ستونزه رامنځته شوه. بیا هڅه وکړئ.",
    creating: "حساب جوړېږي...",
    role: "مهرباني وکړئ د حساب ډول وټاکئ."
  }
};

/* =========================================================
   LANGUAGE HELPERS
   ========================================================= */

function getRegisterLanguage() {
  const saved = localStorage.getItem("afghanWorkLanguage");

  if (REGISTER_TEXT[saved]) return saved;

  const htmlLanguage = document.documentElement.lang;

  if (REGISTER_TEXT[htmlLanguage]) return htmlLanguage;

  return "en";
}

function registerText(key) {
  const language = getRegisterLanguage();

  return REGISTER_TEXT[language]?.[key] ||
         REGISTER_TEXT.en[key] ||
         key;
}

/* =========================================================
   FIND FORM AND INPUTS
   ========================================================= */

function findRegisterForm() {
  const form = document.querySelector("#registerForm");

  if (form) return form;

  const password = document.querySelector(
    'input[name="password"], #password'
  );

  return password?.closest("form") || null;
}

function findInput(name) {
  return (
    document.querySelector(`#registerForm [name="${name}"]`) ||
    document.querySelector(`#registerForm #${name}`) ||
    document.querySelector(`[name="${name}"]`) ||
    document.querySelector(`#${name}`)
  );
}

/* =========================================================
   INITIALIZE
   ========================================================= */

function initRegister() {
  const form = findRegisterForm();

  if (!form) {
    console.warn("Afghan Work: Register form not found.");
    return;
  }

  form.setAttribute("novalidate", "true");

  prepareRegisterForm();
  createRegisterMessage();
  createPasswordToggles();
  createPasswordRules();
  createPasswordStrength();
  initRegisterValidation(form);
  initRegisterSubmit(form);
  initEnterKey(form);
  refreshPasswordUI();

  document.addEventListener("languageChanged", refreshPasswordUI);
  window.addEventListener("languageChanged", refreshPasswordUI);
}

function prepareRegisterForm() {
  const settings = [
    ["firstName", "given-name"],
    ["lastName", "family-name"],
    ["email", "email"],
    ["phone", "tel"],
    ["password", "new-password"],
    ["confirmPassword", "new-password"]
  ];

  settings.forEach(([name, autocomplete]) => {
    const input = findInput(name);
    if (!input) return;

    input.name = name;
    input.autocomplete = autocomplete;

    if (name === "email") input.type = "email";

    if (name === "password" || name === "confirmPassword") {
      input.type = "password";
    }
  });

  const password = findInput("password");

  if (password) {
    password.minLength = REGISTER_CONFIG.MIN_PASSWORD_LENGTH;
  }
}

/* =========================================================
   REGISTER MESSAGE
   ========================================================= */

function createRegisterMessage() {
  if (document.querySelector("#registerMessage")) return;

  const form = findRegisterForm();
  if (!form) return;

  const box = document.createElement("div");

  box.id = "registerMessage";
  box.className = "register-message";
  box.setAttribute("role", "status");
  box.setAttribute("aria-live", "polite");
  box.style.display = "none";

  form.prepend(box);
}

function showRegisterMessage(message, type = "error") {
  const box = document.querySelector("#registerMessage");
  if (!box) return;

  box.textContent = message;
  box.className = `register-message ${type}`;
  box.style.display = "block";
  box.style.marginBottom = "18px";
  box.style.padding = "12px 15px";
  box.style.borderRadius = "10px";

  if (type === "success") {
    box.style.color = "#166534";
    box.style.background = "#dcfce7";
    box.style.border = "1px solid #86efac";
  } else {
    box.style.color = "#991b1b";
    box.style.background = "#fee2e2";
    box.style.border = "1px solid #fca5a5";
  }
}

function hideRegisterMessage() {
  const box = document.querySelector("#registerMessage");

  if (box) {
    box.textContent = "";
    box.style.display = "none";
  }
}

/* =========================================================
   PASSWORD EYE BUTTONS
   ========================================================= */

function createPasswordToggles() {
  createPasswordToggle(findInput("password"));
  createPasswordToggle(findInput("confirmPassword"));
}

function createPasswordToggle(input) {
  if (!input) return;

  if (input.parentElement?.classList.contains("password-input-wrapper")) {
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "password-input-wrapper";

  input.parentNode.insertBefore(wrapper, input);
  wrapper.appendChild(input);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "password-toggle-btn";
  button.setAttribute("aria-pressed", "false");

  const eye = `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>`;

  const eyeOff = `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="m3 3 18 18"/>
      <path d="M10.6 5.1A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a16 16 0 0 1-3.1 3.9"/>
      <path d="M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1.5 0 2.8-.4 4-1"/>
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>
    </svg>`;

  button.innerHTML = eye;
  wrapper.appendChild(button);

  button.addEventListener("click", () => {
    const visible = input.type === "password";

    input.type = visible ? "text" : "password";
    button.innerHTML = visible ? eyeOff : eye;
    button.setAttribute("aria-pressed", String(visible));

    updatePasswordToggleLanguage();
  });
}

function updatePasswordToggleLanguage() {
  document.querySelectorAll(".password-toggle-btn").forEach((button) => {
    const visible = button.getAttribute("aria-pressed") === "true";

    button.setAttribute(
      "aria-label",
      visible ? registerText("hidePassword") : registerText("showPassword")
    );

    button.title = visible
      ? registerText("hidePassword")
      : registerText("showPassword");
  });
}

/* =========================================================
   PASSWORD RULES
   ========================================================= */

function createPasswordRules() {
  const password = findInput("password");
  if (!password || document.querySelector("#passwordRules")) return;

  const rules = document.createElement("div");
  rules.id = "passwordRules";
  rules.style.marginTop = "8px";
  rules.style.fontSize = "12px";
  rules.style.lineHeight = "1.8";

  [
    "length",
    "uppercase",
    "lowercase",
    "number",
    "special"
  ].forEach((name) => {
    const item = document.createElement("div");
    item.dataset.rule = name;
    rules.appendChild(item);
  });

  password.parentElement.appendChild(rules);

  password.addEventListener("input", () => {
    updatePasswordRules(password.value);
    updatePasswordStrength(password.value);
    clearFieldError(password);
    hideRegisterMessage();
  });
}

function updatePasswordRules(value = "") {
  const rules = document.querySelector("#passwordRules");
  if (!rules) return;

  const checks = {
    length: value.length >= REGISTER_CONFIG.MIN_PASSWORD_LENGTH,
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
    number: /[0-9]/.test(value),
    special: /[^A-Za-z0-9]/.test(value)
  };

  Object.entries(checks).forEach(([name, valid]) => {
    const item = rules.querySelector(`[data-rule="${name}"]`);
    if (!item) return;

    item.textContent =
      `${valid ? "✓" : "✕"} ${registerText(name)}`;

    item.style.color = valid ? "#16a34a" : "#dc2626";
  });
}

/* =========================================================
   PASSWORD STRENGTH
   ========================================================= */

function createPasswordStrength() {
  const password = findInput("password");
  if (!password || document.querySelector("#passwordStrength")) return;

  const strength = document.createElement("div");
  strength.id = "passwordStrength";
  strength.style.marginTop = "8px";
  strength.style.fontSize = "12px";

  const rules = document.querySelector("#passwordRules");

  if (rules) {
    rules.after(strength);
  } else {
    password.parentElement.appendChild(strength);
  }
}

function updatePasswordStrength(value = "") {
  const element = document.querySelector("#passwordStrength");
  if (!element) return;

  if (!value) {
    element.textContent = "";
    return;
  }

  let score = 0;

  if (value.length >= 8) score++;
  if (value.length >= 12) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[a-z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  if (score <= 2) {
    element.textContent = registerText("weak");
    element.style.color = "#dc2626";
  } else if (score <= 4) {
    element.textContent = registerText("medium");
    element.style.color = "#ca8a04";
  } else {
    element.textContent = registerText("strong");
    element.style.color = "#16a34a";
  }
}

function refreshPasswordUI() {
  const password = findInput("password");

  updatePasswordToggleLanguage();

  if (password) {
    updatePasswordRules(password.value);
    updatePasswordStrength(password.value);
  }
}

/* =========================================================
   VALIDATION EVENTS
   ========================================================= */

function initRegisterValidation(form) {
  form.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("input", () => {
      clearFieldError(input);
      hideRegisterMessage();
    });
  });
}

/* =========================================================
   VALIDATE EMAIL AND PASSWORD
   ========================================================= */

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
    String(value).trim().toLowerCase()
  );
}

function validatePassword(value) {
  return (
    typeof value === "string" &&
    value.length >= REGISTER_CONFIG.MIN_PASSWORD_LENGTH &&
    /[A-Z]/.test(value) &&
    /[a-z]/.test(value) &&
    /[0-9]/.test(value) &&
    /[^A-Za-z0-9]/.test(value)
  );
}

function validateRegisterForm() {
  const firstName = findInput("firstName");
  const lastName = findInput("lastName");
  const email = findInput("email");
  const phone = findInput("phone");
  const password = findInput("password");
  const confirm = findInput("confirmPassword");
  const role = findInput("role");

  if (firstName && !firstName.value.trim()) {
    return invalid(firstName, "firstName");
  }

  if (
    firstName &&
    firstName.value.trim().length > REGISTER_CONFIG.MAX_NAME_LENGTH
  ) {
    return invalid(firstName, "firstName");
  }

  if (lastName && !lastName.value.trim()) {
    return invalid(lastName, "lastName");
  }

  if (!email || !email.value.trim()) {
    return invalid(email, "emailRequired");
  }

  if (!validateEmail(email.value)) {
    return invalid(email, "email");
  }

  if (email.value.trim().length > REGISTER_CONFIG.MAX_EMAIL_LENGTH) {
    return invalid(email, "emailLong");
  }

  if (phone && phone.value.trim()) {
    const phoneValue = phone.value.trim();

    if (
      phoneValue.length > REGISTER_CONFIG.MAX_PHONE_LENGTH ||
      !/^[0-9+\-()\s]{7,30}$/.test(phoneValue)
    ) {
      return invalid(phone, "phone");
    }
  }

  if (!password || !validatePassword(password.value)) {
    return invalid(password, "password");
  }

  if (!confirm || !confirm.value) {
    return invalid(confirm, "confirm");
  }

  if (password.value !== confirm.value) {
    return invalid(confirm, "mismatch");
  }

  const selectedRole = role ? normalizeRole(role.value) : "jobseeker";

  const first = firstName ? firstName.value.trim() : "";
  const last = lastName ? lastName.value.trim() : "";

  return {
    valid: true,
    data: {
      firstName: first,
      lastName: last,
      name: `${first} ${last}`.trim(),
      email: email.value.trim().toLowerCase(),
      phone: phone ? phone.value.trim() : "",
      password: password.value,
      role: selectedRole
    }
  };
}

function invalid(input, key) {
  const message = registerText(key);

  if (input) {
    setFieldError(input, message);
    input.focus();
  }

  return { valid: false, message };
}

/* =========================================================
   FIELD ERRORS
   ========================================================= */

function setFieldError(input, message) {
  if (!input) return;

  clearFieldError(input);
  input.style.borderColor = "#dc2626";

  const error = document.createElement("small");
  error.className = "field-error";
  error.textContent = message;
  error.style.display = "block";
  error.style.marginTop = "6px";
  error.style.color = "#dc2626";
  error.style.fontSize = "12px";

  input.parentElement.appendChild(error);
}

function clearFieldError(input) {
  if (!input) return;

  input.style.borderColor = "";

  const error = input.parentElement.querySelector(".field-error");

  if (error) error.remove();
}

/* =========================================================
   SUBMIT REGISTRATION
   ========================================================= */

function initRegisterSubmit(form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    hideRegisterMessage();

    const button = findSubmitButton(form);
    const validation = validateRegisterForm();

    if (!validation.valid) {
      showRegisterMessage(validation.message, "error");
      return;
    }

    setRegisterLoading(button, true);

    try {
      const result = await registerUser(validation.data);

      if (!result.success) {
        showRegisterMessage(result.message, "error");
        return;
      }

      showRegisterMessage(registerText("success"), "success");
      form.reset();
      refreshPasswordUI();

      await delay(1200);
      window.location.href = "login.html";
    } catch (error) {
      console.error("Registration error:", error);
      showRegisterMessage(registerText("generalError"), "error");
    } finally {
      setRegisterLoading(button, false);
    }
  });
}

/* =========================================================
   USERS STORAGE
   ========================================================= */

function getUsers() {
  try {
    const raw = localStorage.getItem(REGISTER_CONFIG.USERS_KEY);
    const users = raw ? JSON.parse(raw) : [];

    return Array.isArray(users) ? users : [];
  } catch (error) {
    console.error("Could not read users:", error);
    return [];
  }
}

function saveUsers(users) {
  try {
    localStorage.setItem(
      REGISTER_CONFIG.USERS_KEY,
      JSON.stringify(users)
    );

    return true;
  } catch (error) {
    console.error("Could not save users:", error);
    return false;
  }
}

/* =========================================================
   REGISTER USER
   ========================================================= */

async function registerUser(data) {
  const users = getUsers();
  const email = data.email.trim().toLowerCase();

  const exists = users.some(
    (user) => String(user.email || "").toLowerCase() === email
  );

  if (exists) {
    return {
      success: false,
      message: registerText("exists")
    };
  }

  /*
   * Frontend demonstration only.
   * This is NOT production-grade authentication.
   */

  const user = {
    id: createUserId(),
    name: data.name,
    firstName: data.firstName,
    lastName: data.lastName,
    email,
    phone: data.phone,
    role: data.role,
    password: data.password,
    createdAt: new Date().toISOString(),
    status: "active"
  };

  users.push(user);

  if (!saveUsers(users)) {
    return {
      success: false,
      message: registerText("saveError")
    };
  }

  return { success: true };
}

/* =========================================================
   HELPERS
   ========================================================= */

function normalizeRole(role) {
  const value = String(role || "").trim().toLowerCase();

  if (value === "employer") return "employer";
  if (value === "admin" || value === "administrator") return "admin";

  return "jobseeker";
}

function createUserId() {
  if (crypto.randomUUID) return crypto.randomUUID();

  return "user_" + Date.now() + "_" +
    Math.random().toString(36).slice(2, 10);
}

function findSubmitButton(form) {
  return (
    form.querySelector('button[type="submit"]') ||
    form.querySelector('input[type="submit"]') ||
    form.querySelector(".btn-primary")
  );
}

function setRegisterLoading(button, loading) {
  if (!button) return;

  if (loading) {
    button.dataset.originalText = button.textContent;
    button.disabled = true;
    button.textContent = registerText("creating");
  } else {
    button.disabled = false;

    if (button.dataset.originalText) {
      button.textContent = button.dataset.originalText;
      delete button.dataset.originalText;
    }
  }
}

function initEnterKey(form) {
  form.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.target.tagName === "TEXTAREA") {
      return;
    }

    if (typeof form.requestSubmit === "function") {
      event.preventDefault();
      form.requestSubmit();
    }
  });
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/* =========================================================
   PUBLIC FUNCTIONS
   ========================================================= */

window.registerUser = registerUser;
window.validateEmail = validateEmail;
window.validatePassword = validatePassword;
window.updatePasswordRules = updatePasswordRules;
window.updatePasswordStrength = updatePasswordStrength;
window.updatePasswordToggleLanguage = updatePasswordToggleLanguage;
window.refreshPasswordUI = refreshPasswordUI;

/* =========================================================
   START
   ========================================================= */

document.addEventListener("DOMContentLoaded", initRegister);