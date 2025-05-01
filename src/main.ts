import "./style.css";
/* eslint-env browser */
/* global document, alert, HTMLFormElement, HTMLButtonElement, HTMLInputElement, HTMLTextAreaElement */
import { changeLanguage, updateLanguageUI } from "./utils/language";
import type { Language } from "./utils/language";

// Set up event listeners for the website
const setupEventListeners = (): void => {
  // Language switcher
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang") as Language;
      if (lang) {
        changeLanguage(lang);
      }
    });
  });

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
      <header class="header" id="header" role="banner" aria-label="Site Header">
          <div class="container">
              <div class="logo">
                  <img src="/img/logo.png" alt="AutoSerwisMax company logo" class="logo-img" role="img">
                  <span class="logo-text">AutoSerwisMax</span>
                </div>
                <div class="language-selector">
                  <button data-lang="en" class="lang-btn active">EN</button>
                  <button data-lang="pl" class="lang-btn">PL</button>
                  <button data-lang="ru" class="lang-btn">RU</button>
                </div>
                <nav class="main-nav" id="main-nav" role="navigation" aria-label="Main Navigation" tabindex="-1">
                  <ul class="nav-list" role="menubar">
                      <li><a href="#home" class="nav-link" data-trans="nav.home" role="menuitem" tabindex="0">Home</a></li>
                      <li><a href="#services" class="nav-link" data-trans="nav.services" role="menuitem" tabindex="0">Services</a></li>
                      <li><a href="#about" class="nav-link" data-trans="nav.about" role="menuitem" tabindex="0">About Us</a></li>
                      <li><a href="#contact" class="nav-link" data-trans="nav.contact" role="menuitem" tabindex="0">Contact</a></li>
                  </ul>
                </nav>
          </div>
      </header>

      <!-- Hero Section -->
      <section class="hero" id="home" aria-label="Hero Section">
          <div class="container">
              <div class="hero-content">
                  <h1 class="hero-title" data-trans="hero.title">Fast & Reliable Car Towing</h1>
                  <p class="hero-subtitle" data-trans="hero.subtitle">Professional vehicle recovery and repair services available 24/7</p>
                  <a href="tel:+48123456789" class="cta-button">
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
            <!-- Address Card -->
            <div class="card contact-address">
              <h3 style="margin-bottom:1.2rem;font-size:1.15rem;font-weight:700;" data-trans="contact.info">Contact Information</h3>
              <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:1rem;">
                <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-map-marker-alt"></i></span>
                <div>
                  <span data-trans="contact.address">ul. Przykładowa 123, 15-123 Białystok</span><br>
                  <span data-trans="contact.hours">Mon-Fri: 8:00-18:00, Sat: 9:00-14:00</span>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
                <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-phone-alt"></i></span>
                <a href="tel:+48123456789" style="color:inherit;text-decoration:none;" data-trans="contact.phone">+48 123 456 789</a>
              </div>
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-envelope"></i></span>
                <a href="mailto:kontakt@autoservismax.pl" style="color:inherit;text-decoration:none;" data-trans="contact.email">kontakt@autoservismax.pl</a>
              </div>
            </div>
            <!-- Map -->
            <div class="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.408960434125!2d23.16807331580034!3d53.13248807993562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffb2f9c6e5c13%3A0x2c3b5b7e7f6b2c6b!2sBia%C5%82ystok!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl" width="100%" height="220" style="border:0;border-radius:10px;box-shadow:var(--shadow);margin:1.5rem 0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- Contact Form -->
            <div class="card contact-form-card">
               <h3 style="margin-bottom:1.2rem;font-size:1.15rem;font-weight:700;" data-trans="contact.form.book">Book an Appointment</h3>
               <form class="contact-form" id="contact-form" aria-label="Contact form">
                 <label for="contact-name" data-trans="contact.form.name">Full Name</label>
                 <input type="text" id="contact-name" name="fullname" required placeholder="Full Name" />
                 <label for="contact-phone" data-trans="contact.form.phone">Phone Number</label>
                 <input type="tel" id="contact-phone" name="phone" required placeholder="Phone Number" />
                 <label for="contact-email" data-trans="contact.form.email">Email</label>
                 <input type="email" id="contact-email" name="email" required placeholder="Email" />
                 <label for="service" data-trans="contact.form.service">Service Needed</label>
                 <select id="service" name="service" required>
                   <option value="" disabled selected data-trans="contact.form.servicePlaceholder">Select a service</option>
                   <option value="towing" data-trans="contact.form.serviceOptions.towing">Towing</option>
                   <option value="repair" data-trans="contact.form.serviceOptions.repair">Repair</option>
                   <option value="roadside" data-trans="contact.form.serviceOptions.roadside">Roadside Assistance</option>
                   <option value="transport" data-trans="contact.form.serviceOptions.transport">Vehicle Transport</option>
                 </select>
                 <label for="contact-message" data-trans="contact.form.message">Message</label>
                 <textarea id="contact-message" name="message" rows="3" placeholder="Message"></textarea>
                 <button type="submit" class="cta-button" id="contact-call" style="margin-top:1rem;" data-trans="contact.form.call">Call Us</button>
                 <button type="button" class="cta-button" id="contact-quote" style="margin-top:0.5rem;background:#fff;color:var(--primary-color);border:1px solid var(--primary-color);" data-trans="contact.form.quote">Get Exact Quote</button>
               </form>
            </div>
            <!-- Contact Information + Map Stack -->
            <div style="display:flex;flex-direction:column;gap:24px;">
               <div class="card" style="padding:2rem 2rem 1.5rem 2rem;border-radius:10px;box-shadow:var(--shadow);background:#fff;">
                 <h3 style="margin-bottom:1.2rem;font-size:1.15rem;font-weight:700;" data-trans="contact.info">Contact Information</h3>
                 <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:1rem;">
                   <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-map-marker-alt"></i></span>
                   <div>
                     <div style="font-weight:600;" data-trans="contact.address">Workshop Address</div>
                     <div data-trans="contact.addressValue">Słonimska 2 Białystok, Poland</div>
                   </div>
                 </div>
                 <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
                   <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-phone-alt"></i></span>
                   <div>
                     <div style="font-weight:600;" data-trans="contact.phone">Phone</div>
                     <div data-trans="contact.phoneValue">530 162 530</div>
                   </div>
                 </div>
                 <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
                   <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-envelope"></i></span>
                   <div>
                     <div style="font-weight:600;" data-trans="contact.email">Email</div>
                     <div><a href="mailto:autoserwismax.bialystok@gmail.com" style="color:var(--secondary-color);text-decoration:underline;" data-trans="contact.emailValue">autoserwismax.bialystok@gmail.com</a></div>
                   </div>
                 </div>
                 <div style="display:flex;align-items:flex-start;gap:10px;">
                   <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-clock"></i></span>
                   <div>
                     <div style="font-weight:600;" data-trans="contact.hours">Working Hours</div>
                     <div>
                       <span data-trans="contact.weekdays">Mon-Fri: 8:00 - 18:00</span><br>
                       <span data-trans="contact.weekend">Sat: 9:00 - 14:00</span><br>
                       <span data-trans="contact.sunday">Sun: Closed</span>
                     </div>
                   </div>
                 </div>
               </div>
              <div class="card" style="padding:0.5rem 1rem 1.5rem 1rem;border-radius:10px;box-shadow:var(--shadow);background:#fff;">
                <iframe src="https://www.google.com/maps?q=53.133662,23.175058&z=16&output=embed" width="100%" height="300" style="border:0;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.10);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
  setupEventListeners();
  updateLanguageUI();
});
