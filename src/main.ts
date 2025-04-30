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
          <h2 class="section-title" style="text-align:center;margin-bottom:2rem;">Contact Us</h2>
          <div class="contact-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start;">
            <!-- Book an Appointment Form -->
            <div class="card" style="padding:2rem 2rem 1.5rem 2rem;border-radius:10px;box-shadow:var(--shadow);background:#fff;">
              <h3 style="margin-bottom:1.2rem;font-size:1.15rem;font-weight:700;">Book an Appointment</h3>
              <form class="contact-form" id="contact-form">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" required placeholder="Full Name" />
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required placeholder="Phone Number" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Email" />
                <label for="service">Service Needed</label>
                <select id="service" name="service" required>
                  <option value="" disabled selected>Select a service</option>
                  <option value="towing">Towing</option>
                  <option value="repair">Repair</option>
                  <option value="roadside">Roadside Assistance</option>
                  <option value="transport">Vehicle Transport</option>
                </select>
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="3" placeholder="Message"></textarea>
                <button type="submit" class="cta-button" style="margin-top:1rem;">Call Us</button>
                <button type="button" class="cta-button" style="margin-top:0.5rem;background:#fff;color:var(--primary-color);border:1px solid var(--primary-color);">Get Exact Quote</button>
              </form>
            </div>
            <!-- Contact Information + Map Stack -->
            <div style="display:flex;flex-direction:column;gap:24px;">
              <div class="card" style="padding:2rem 2rem 1.5rem 2rem;border-radius:10px;box-shadow:var(--shadow);background:#fff;">
                <h3 style="margin-bottom:1.2rem;font-size:1.15rem;font-weight:700;">Contact Information</h3>
                <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:1rem;">
                  <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-map-marker-alt"></i></span>
                  <div>
                    <div style="font-weight:600;">Workshop Address</div>
                    <div>Słonimska 2 Białystok, Poland</div>
                  </div>
                </div>
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
                  <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-phone-alt"></i></span>
                  <div>
                    <div style="font-weight:600;">Phone</div>
                    <div>530 162 530</div>
                  </div>
                </div>
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
                  <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-envelope"></i></span>
                  <div>
                    <div style="font-weight:600;">Email</div>
                    <div><a href="mailto:autoserwismax.bialystok@gmail.com" style="color:var(--secondary-color);text-decoration:underline;">autoserwismax.bialystok@gmail.com</a></div>
                  </div>
                </div>
                <div style="display:flex;align-items:flex-start;gap:10px;">
                  <span style="color:var(--primary-color);font-size:1.2rem;"><i class="fas fa-clock"></i></span>
                  <div>
                    <div style="font-weight:600;">Working Hours</div>
                    <div>Mon-Fri: 8:00 - 18:00<br>Sat: 9:00 - 14:00<br>Sun: Closed</div>
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
