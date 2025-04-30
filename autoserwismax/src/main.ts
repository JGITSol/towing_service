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
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav");
  
  mobileMenuBtn?.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    mainNav?.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenuBtn?.classList.remove("active");
      mainNav?.classList.remove("active");
    });
  });



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
      <!-- Header -->
      <header class="header" id="header">
          <div class="container">
              <div class="logo">
                  <img src="/img/logo.png" alt="AutoSerwisMax Logo" class="logo-img">
                  <span class="logo-text">AutoSerwisMax</span>
                </div>
                <div class="language-selector">
                  <button data-lang="en" class="lang-btn active">EN</button>
                  <button data-lang="pl" class="lang-btn">PL</button>
                  <button data-lang="ru" class="lang-btn">RU</button>
                </div>
                <nav class="main-nav">
                  <ul class="nav-list">
                      <li><a href="#home" class="nav-link" data-trans="nav.home">Home</a></li>
                      <li><a href="#services" class="nav-link" data-trans="nav.services">Services</a></li>
                      <li><a href="#about" class="nav-link" data-trans="nav.about">About Us</a></li>
                      <li><a href="#contact" class="nav-link" data-trans="nav.contact">Contact</a></li>
                  </ul>
                </nav>
                <button class="mobile-menu-btn">
              </nav>
              <button class="mobile-menu-btn">
                  <span class="hamburger-icon"></span>
              </button>
          </div>
      </header>

      <!-- Hero Section -->
      <section class="hero" id="home">
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
      <section class="services" id="services">
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
      <section class="about" id="about">
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
      <section class="contact" id="contact">
        <div class="container">
          <h2 class="section-title" data-trans="contact.title">Contact Us</h2>
          <div class="contact-content">
            <div class="contact-info">
              <h3 data-trans="contact.hours">Working Hours</h3>
              <ul class="contact-hours">
                <li><strong>Mon-Fri:</strong> 8:00 – 16:00</li>
                <li><strong>Saturday:</strong> 8:00 – 14:00</li>
                <li><strong>Sunday:</strong> Closed</li>
              </ul>
              <h3 data-trans="contact.location">Workshop Location</h3>
              <div class="contact-address" style="font-weight:600;color:var(--secondary-color);margin-bottom:8px;">Słonimska 2, 15-028 Białystok</div>
              <div class="contact-map">
                <iframe src="https://www.google.com/maps?q=53.133662,23.175058&z=16&output=embed" width="100%" height="220" style="border:0;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.10);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <form class="contact-form" id="contact-form">
              <label for="name" data-trans="contact.form.name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
              <label for="email" data-trans="contact.form.email">Email</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
              <label for="message" data-trans="contact.form.message">Message</label>
              <textarea id="message" name="message" rows="4" required placeholder="How can we help?"></textarea>
              <button type="submit" class="cta-button" data-trans="contact.form.submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }
  setupEventListeners();
  updateLanguageUI();
});
