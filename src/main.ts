import "./style.css";
/* eslint-env browser */
/* global document, alert, HTMLFormElement, HTMLButtonElement, HTMLInputElement, HTMLTextAreaElement */
import { changeLanguage, updateLanguageUI } from "./utils/language";
import type { Language } from "./utils/language";
import { translations } from "./data/translations";

// Set up event listeners for the website
const setupEventListeners = (): void => {
  // Language switcher (dropdown) with localStorage persistence
  const langDropdown = document.getElementById("lang-dropdown") as HTMLSelectElement | null;
  function setHtmlLang(lang: Language) {
    document.documentElement.lang = lang;
  }
  function getStoredLang(): Language {
    return (localStorage.getItem('siteLang') as Language) || 'pl';
  }
  function storeLang(lang: Language) {
    localStorage.setItem('siteLang', lang);
  }
  if (langDropdown) {
    langDropdown.addEventListener("change", () => {
      const lang = langDropdown.value as Language;
      if (lang) {
        changeLanguage(lang);
        storeLang(lang);
        setHtmlLang(lang);
      }
    });
    // Set dropdown and language from localStorage on load
    const storedLang = getStoredLang();
    langDropdown.value = storedLang;
    changeLanguage(storedLang);
    setHtmlLang(storedLang);
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn") as HTMLButtonElement | null;
  const mainNav = document.getElementById("main-nav");
  const mobileNavOverlay = document.querySelector(".mobile-nav-overlay") as HTMLDivElement | null;
  let lastFocusedElement: HTMLElement | null = null;

  function openMobileMenu() {
    if (!mobileMenuBtn || !mainNav || !mobileNavOverlay) return;
    mobileMenuBtn.classList.add("active");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    mobileNavOverlay.classList.add("active");
    mobileNavOverlay.setAttribute("aria-hidden", "false");
    if (mainNav) {
      mainNav.classList.add("active");
      mainNav.setAttribute("aria-hidden", "false");
      mainNav.tabIndex = 0;
      lastFocusedElement = document.activeElement as HTMLElement;
      // Focus first link
      const firstLink = mainNav.querySelector(".nav-link") as HTMLElement;
      if (firstLink) firstLink.focus();
      // Trap focus
      document.addEventListener("keydown", trapFocus);
    }
  }
  function closeMobileMenu() {
    if (!mobileMenuBtn || !mainNav || !mobileNavOverlay) return;
    mobileMenuBtn.classList.remove("active");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileNavOverlay.classList.remove("active");
    mobileNavOverlay.setAttribute("aria-hidden", "true");
    if (mainNav) {
      mainNav.classList.remove("active");
      mainNav.setAttribute("aria-hidden", "true");
      mainNav.tabIndex = -1;
      document.removeEventListener("keydown", trapFocus);
    }
    if (lastFocusedElement) lastFocusedElement.focus();
  }
  function trapFocus(e: KeyboardEvent) {
    if (!mainNav || !mainNav.classList.contains("active")) return;
    const focusableEls = mainNav.querySelectorAll<HTMLElement>("a, button, [tabindex]:not([tabindex='-1'])");
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    } else if (e.key === "Escape") {
      closeMobileMenu();
    }
  }
  mobileMenuBtn?.addEventListener("click", () => {
    if (mainNav?.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Close when clicking overlay
  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener("click", () => {
      closeMobileMenu();
    });
  }



  // Contact form submission
  const contactForm = document.getElementById("contact-form");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    alert("Thank you for your message! We will contact you soon.");
    (contactForm as HTMLFormElement).reset();
  });
};

// Initialize language
updateLanguageUI();

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <div class="mobile-nav-overlay" aria-hidden="true" tabindex="-1"></div>

      <!-- Header -->
      <header class="header sticky-navbar" id="header" role="banner" aria-label="Site Header">
        <div class="container">
          <div class="logo">
            <img src="/img/logo.png" alt="AutoSerwisMax company logo" class="logo-img" role="img">
            <span class="logo-text">AutoSerwisMax</span>
          </div>
          <div class="language-selector">
  <label for="lang-dropdown" class="visually-hidden">Select Language</label>
  <select id="lang-dropdown" class="lang-dropdown" aria-label="Select Language">
    <option value="pl" selected>🇵🇱 Polski</option>
    <option value="en">🇬🇧 English</option>
    <option value="ua">🇺🇦 Українська</option>
    <option value="by">🇧🇾 Беларуская</option>
    <option value="ru">🇷🇺 Русский</option>
  </select>
</div>
        </div>
      </header>
      <nav class="page-navbar" id="page-navbar" role="navigation" aria-label="Page Navigation">
        <ul class="page-nav-list two-row-mobile" role="menubar">
  <li><a href="#home" class="nav-link" data-trans="nav.home" role="menuitem" tabindex="0">Home</a></li>
  <li><a href="#services" class="nav-link" data-trans="nav.services" role="menuitem" tabindex="0">Services</a></li>
  <li><a href="#about" class="nav-link" data-trans="nav.about" role="menuitem" tabindex="0">About Us</a></li>
  <li><a href="#contact" class="nav-link" data-trans="nav.contact" role="menuitem" tabindex="0">Contact</a></li>
  <li><a href="/legal-info.html" class="nav-link" data-trans="nav.legal" role="menuitem" tabindex="0">Legal</a></li>
</ul>
      </nav>

      <!-- Hero Section -->
      <section class="hero" id="home" aria-label="Hero Section">
          <div class="container">
              <div class="hero-content">
                  <h1 class="hero-title" data-trans="hero.title">Fast & Reliable Car Towing</h1>
                  <p class="hero-subtitle" data-trans="hero.subtitle">Professional vehicle recovery and repair services available 24/7</p>
                  <a href="tel:+48530162530" class="cta-button">
                      <span class="phone-emoji">📞</span>
                      <span data-trans="hero.cta">Call Now</span>
                  </a>
              </div>
              
          </div>
      </section>

      <!-- Services Section -->
      <section class="services" id="services" aria-label="Services">
          <div class="container">
              <h2 class="section-title" data-trans="services.title">Our Services</h2>
              <div class="services-grid">
                  <div class="service-card">
                      <div class="service-icon"><i class="fas fa-truck-pickup"></i></div>
                      <h3 class="service-title" data-trans="services.towing.title">Car Towing</h3>
                      <p class="service-description" data-trans="services.towing.description">Professional towing services for all vehicle types, with quick response times and careful handling.</p>
                  </div>
                  <div class="service-card">
                      <div class="service-icon"><i class="fas fa-tools"></i></div>
                      <h3 class="service-title" data-trans="services.repair.title">Workshop Repairs</h3>
                      <p class="service-description" data-trans="services.repair.description">Full-service auto repair workshop with certified mechanics and modern diagnostic equipment.</p>
                  </div>
                  <div class="service-card">
                      <div class="service-icon"><i class="fas fa-car-battery"></i></div>
                      <h3 class="service-title" data-trans="services.roadside.title">Roadside Assistance</h3>
                      <p class="service-description" data-trans="services.roadside.description">Immediate help with battery jumps, flat tires, fuel delivery, and other emergency situations.</p>
                  </div>
                  <div class="service-card">
                      <div class="service-icon"><i class="fas fa-truck-moving"></i></div>
                      <h3 class="service-title" data-trans="services.transport.title">Vehicle Transport</h3>
                      <p class="service-description" data-trans="services.transport.description">Safe and secure transport of cars, motorcycles, and other vehicles across the region.</p>
                  </div>
              </div>
          </div>
      </section>

      <!-- About Section -->
      <section class="about" id="about" aria-label="About Us">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2 class="section-title" data-trans="about.title">About AutoSerwisMax</h2>
              <p class="about-description" data-trans="about.description">AutoSerwisMax has been providing premium towing and auto repair services in Białystok since 2010. With a team of experienced professionals and state-of-the-art equipment, we ensure the highest quality service for every customer.</p>
            </div>
            <div class="about-image">
              <img src="/img/2.jpeg" alt="About AutoSerwisMax" class="about-img-responsive" style="width:100%;max-width:480px;height:auto;border-radius:16px;object-fit:cover;box-shadow:0 4px 24px rgba(0,0,0,0.10);margin:0 auto;display:block;" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact" id="contact" aria-label="Contact">
        <div class="container">
           <h2 class="section-title" style="text-align:center;margin-bottom:2rem;" data-trans="contact.title">Contact Us</h2>
          <div class="contact-grid">
            <!-- Left column: Contact Form -->
            <div class="card contact-form-card">
               <h3 style="margin-bottom:1.2rem;font-size:1.15rem;font-weight:700;" data-trans="contact.form.book">Book an Appointment</h3>
               <form class="contact-form" id="contact-form" aria-label="Contact form" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="87a0e0d1-a3d2-4023-bd40-31ca376ff958">
                  <label for="contact-name" data-trans="contact.form.name">Full Name</label>
                  <input type="text" id="contact-name" name="name" required placeholder="Full Name">
                  <label for="contact-phone" data-trans="contact.form.phone">Phone Number</label>
                  <input type="tel" id="contact-phone" name="phone" required placeholder="Phone Number">
                  <label for="contact-email" data-trans="contact.form.email">Email</label>
                  <input type="email" id="contact-email" name="email" required placeholder="Email">
                  <label for="contact-message" data-trans="contact.form.message">Message</label>
                  <textarea id="contact-message" name="message" rows="3" placeholder="Message"></textarea>
                  <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
                  <!-- <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> -->
                  <button type="submit" class="cta-button" id="contact-call" style="margin-top:1rem;" data-trans="contact.form.call">Send Message</button>
               </form>
            </div>
            <!-- Right column: Info + Map stacked -->
            <div class="contact-info-stack">
               <div class="card contact-address">
                <h3 style="margin-bottom:1.2rem;font-size:1.15rem;font-weight:700;" data-trans="contact.info">Contact Information</h3>
                <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:1rem;">
  <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-map-marker-alt"></i></span>
  <div>
    <div style="display:flex;align-items:center;gap:6px;">
      <div style="font-weight:600;" data-trans="contact.addressLabel">Adres warsztatu</div>
      <span id="contact-address-value" style="font-weight:400;">Słonimska 2, 15-026 Białystok</span>
    </div>
  </div>
</div>
<div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
  <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-phone-alt"></i></span>
  <div>
    <div style="display:flex;align-items:center;gap:6px;">
      <div style="font-weight:600;" data-trans="contact.phoneLabel">Telefon</div>
      <a id="contact-phone-link" href="tel:+48530162530" style="color:inherit;text-decoration:none;font-weight:400;">530 162 530</a>
    </div>
  </div>
</div>
<div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
  <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-envelope"></i></span>
  <div>
    <div style="display:flex;align-items:center;gap:6px;">
      <div style="font-weight:600;" data-trans="contact.emailLabel">Email</div>
      <a id="contact-email-link" href="mailto:autoserwismax.bialystok@gmail.com" style="color:inherit;text-decoration:none;font-weight:400;">autoserwismax.bialystok@gmail.com</a>
    </div>
  </div>
</div>
                <div style="display:flex;align-items:flex-start;gap:10px;margin-top:1rem;">
                  <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-clock"></i></span>
                  <div>
                    <div style="font-weight:600;" data-trans="contact.hours">Working Hours</div>
                    <div>
                      <span data-trans="contact.weekdays">MoPn-Pt: 8:00 - 17:00</span><br>
                      <span data-trans="contact.weekend">Sat: 9:00 - 14:00</span><br>
                      <span data-trans="contact.sunday">Sun: Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.408960434125!2d23.16807331580034!3d53.13248807993562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffb2f9c6e5c13%3A0x2c3b5b7e7f6b2c6b!2sBia%C5%82ystok!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl" width="100%" height="220" style="border:0;border-radius:10px;box-shadow:var(--shadow);margin:1.5rem 0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
  setupEventListeners();
  updateLanguageUI();

  // Ensure contact address, phone, and email are always rendered from translations (with fallback)
    const lang = (localStorage.getItem('lang') as keyof typeof translations) || 'pl';
  const translationsForLang = translations[lang] || translations['pl'];
  const address = translationsForLang?.contact?.addressValue || 'Słonimska 2, 15-026 Białystok';
  const phone = translationsForLang?.contact?.phoneValue || '530 162 530';
  const email = translationsForLang?.contact?.emailValue || 'autoserwismax.bialystok@gmail.com';

  const addressSpan = document.getElementById('contact-address-value');
  if (addressSpan) {
    addressSpan.textContent = address;
  }
  const phoneLink = document.getElementById('contact-phone-link') as HTMLAnchorElement;
  if (phoneLink) {
    phoneLink.textContent = phone;
    phoneLink.href = `tel:${phone.replace(/\s+/g, '')}`;
  }
  const emailLink = document.getElementById('contact-email-link') as HTMLAnchorElement;
  if (emailLink) {
    emailLink.textContent = email;
    emailLink.href = `mailto:${email}`;
  }
});
