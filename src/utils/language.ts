/* eslint-env browser */
/* global document, HTMLInputElement, HTMLTextAreaElement, HTMLButtonElement */
import { translations } from "../data/translations";
import type { LanguageTranslation } from "../types/translations";

// Available languages
export type Language = "en" | "pl" | "ru" | "ua" | "by";

// Current language state
let currentLanguage: Language = "en";

/**
 * Get the current language
 */
export const getCurrentLanguage = (): Language => currentLanguage;

/**
 * Get translations for the current language
 */
export const getTranslations = (): LanguageTranslation => translations[currentLanguage];

/**
 * Change the current language and update the UI
 */
export const changeLanguage = (lang: Language): void => {
  currentLanguage = lang;
  updateLanguageUI();
};

/**
 * Update all elements with data-trans attribute
 */
export const updateLanguageUI = (): void => {
  const elements = document.querySelectorAll("[data-trans]");
  const currentTranslations = getTranslations();

  elements.forEach(element => {
    const transKey = element.getAttribute("data-trans");
    if (!transKey) return;

    // Handle nested keys like 'nav.home'
    const value = transKey.split(".").reduce((obj, key) => 
      obj && obj[key as keyof typeof obj] !== undefined ? obj[key as keyof typeof obj] : "", 
      currentTranslations as any
    );

    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  // Update language buttons
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    const btnLang = btn.getAttribute("data-lang");
    if (btnLang === currentLanguage) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update form placeholders
  updateFormPlaceholders();
};

/**
 * Update form input placeholders
 */
const updateFormPlaceholders = (): void => {
  const contactForm = getTranslations().contact.form;
  
  const nameInput = document.getElementById("contact-name") as HTMLInputElement;
  const emailInput = document.getElementById("contact-email") as HTMLInputElement;
  const phoneInput = document.getElementById("contact-phone") as HTMLInputElement;
  const messageInput = document.getElementById("contact-message") as HTMLTextAreaElement;
  const submitButton = document.getElementById("contact-submit") as HTMLButtonElement;
  
  if (nameInput) nameInput.placeholder = contactForm.name;
  if (emailInput) emailInput.placeholder = contactForm.email;
  if (phoneInput) phoneInput.placeholder = contactForm.phone;
  if (messageInput) messageInput.placeholder = contactForm.message;
  if (submitButton) submitButton.textContent = contactForm.submit;
};