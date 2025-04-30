<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Responsive Car Towing Service Website for AutoSerwisMax

Here's a complete responsive one-page website for AutoSerwisMax with multilingual support, modern design, and SEO optimization.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoSerwisMax - Professional Car Towing & Repair Services</title>
    <meta name="description" content="24/7 car towing services and professional off-site repairs in Białystok. Fast, reliable roadside assistance when you need it most.">
    <meta name="keywords" content="car towing, vehicle repairs, roadside assistance, auto service, emergency towing, Białystok">
    
    <!-- Open Graph tags -->
    <meta property="og:title" content="AutoSerwisMax - Professional Car Towing & Repair Services">
    <meta property="og:description" content="24/7 car towing services and professional off-site repairs in Białystok. Fast, reliable assistance when you need it most.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://autoserwismax.pl">
    <meta property="og:image" content="img/og-image.jpg">
    
    <!-- favicon -->
    <link rel="icon" type="image/png" href="img/favicon.png">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Oswald:wght@400;600&display=swap" rel="stylesheet">
    
    <!-- Structured Data for Local Business -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "name": "AutoSerwisMax",
      "image": "https://autoserwismax.pl/img/logo.png",
      "telephone": "+48123456789",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Example Street 123",
        "addressLocality": "Białystok",
        "postalCode": "15-001",
        "addressCountry": "PL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.1324886",
        "longitude": "23.1688403"
      },
      "url": "https://autoserwismax.pl",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://facebook.com/autoserwismax",
        "https://instagram.com/autoserwismax"
      ]
    }
    </script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Language Data -->
    <script>
        const translations = {
            en: {
                nav: {
                    home: "Home",
                    services: "Services",
                    about: "About Us",
                    why: "Why Choose Us",
                    gallery: "Gallery",
                    testimonials: "Testimonials",
                    contact: "Contact"
                },
                hero: {
                    title: "Fast & Reliable Car Towing",
                    subtitle: "Professional vehicle recovery and repair services available 24/7",
                    cta: "Call Now"
                },
                services: {
                    title: "Our Services",
                    towing: {
                        title: "Car Towing",
                        description: "Professional towing services for all vehicle types, with quick response times and careful handling."
                    },
                    repair: {
                        title: "Workshop Repairs",
                        description: "Full-service auto repair workshop with certified mechanics and modern diagnostic equipment."
                    },
                    roadside: {
                        title: "Roadside Assistance",
                        description: "Immediate help with battery jumps, flat tires, fuel delivery, and other emergency situations."
                    },
                    transport: {
                        title: "Vehicle Transport",
                        description: "Safe and secure transport of cars, motorcycles, and other vehicles across the region."
                    }
                },
                about: {
                    title: "About AutoSerwisMax",
                    description: "AutoSerwisMax has been providing premium towing and auto repair services in Białystok since 2005. With a team of experienced professionals and state-of-the-art equipment, we ensure the highest quality service for every customer.",
                    stats: {
                        experience: "Years of Experience",
                        vehicles: "Vehicles Serviced",
                        clients: "Satisfied Clients"
                    }
                },
                why: {
                    title: "Why Choose Us",
                    reason1: {
                        title: "24/7 Availability",
                        description: "We're available round the clock to assist you with any emergency."
                    },
                    reason2: {
                        title: "Fast Response",
                        description: "Our average arrival time is under 30 minutes within the city area."
                    },
                    reason3: {
                        title: "Experienced Team",
                        description: "Our mechanics have extensive training and years of experience."
                    },
                    reason4: {
                        title: "Fair Pricing",
                        description: "Transparent pricing with no hidden fees or surprises."
                    }
                },
                gallery: {
                    title: "Our Work Gallery"
                },
                testimonials: {
                    title: "What Our Clients Say",
                    testimonial1: {
                        text: "AutoSerwisMax saved me when my car broke down on the highway. They arrived quickly and the service was excellent!",
                        author: "John Smith"
                    },
                    testimonial2: {
                        text: "I was impressed by their professionalism and the quality of repairs. My car runs better than before!",
                        author: "Anna Kowalska"
                    },
                    testimonial3: {
                        text: "Reliable, quick, and fair pricing. I highly recommend their services to anyone in need of towing or repairs.",
                        author: "Michael Brown"
                    }
                },
                contact: {
                    title: "Contact Us",
                    address: "Address",
                    phone: "Phone",
                    email: "Email",
                    hours: "Working Hours",
                    weekdays: "Monday - Friday: 8:00 - 18:00",
                    weekend: "Saturday: 9:00 - 16:00",
                    sunday: "Sunday: Emergency Service Only",
                    form: {
                        name: "Your Name",
                        email: "Your Email",
                        phone: "Your Phone",
                        message: "Your Message",
                        submit: "Send Message"
                    }
                },
                footer: {
                    rights: "All Rights Reserved",
                    privacy: "Privacy Policy",
                    terms: "Terms of Service"
                }
            },
            pl: {
                nav: {
                    home: "Strona główna",
                    services: "Usługi",
                    about: "O nas",
                    why: "Dlaczego my",
                    gallery: "Galeria",
                    testimonials: "Opinie",
                    contact: "Kontakt"
                },
                hero: {
                    title: "Szybki i niezawodny holowanie pojazdów",
                    subtitle: "Profesjonalne usługi holowania i naprawy pojazdów dostępne 24/7",
                    cta: "Zadzwoń teraz"
                },
                services: {
                    title: "Nasze usługi",
                    towing: {
                        title: "Holowanie pojazdów",
                        description: "Profesjonalne usługi holownicze dla wszystkich typów pojazdów, z szybkim czasem reakcji i ostrożną obsługą."
                    },
                    repair: {
                        title: "Naprawy warsztatowe",
                        description: "Pełnowymiarowy warsztat samochodowy z certyfikowanymi mechanikami i nowoczesnym sprzętem diagnostycznym."
                    },
                    roadside: {
                        title: "Pomoc drogowa",
                        description: "Natychmiastowa pomoc przy rozładowanych akumulatorach, przebitych oponach, dostawie paliwa i innych sytuacjach awaryjnych."
                    },
                    transport: {
                        title: "Transport pojazdów",
                        description: "Bezpieczny i pewny transport samochodów, motocykli i innych pojazdów w całym regionie."
                    }
                },
                about: {
                    title: "O firmie AutoSerwisMax",
                    description: "AutoSerwisMax świadczy premium usługi holowania i naprawy samochodów w Białymstoku od 2005 roku. Dzięki zespołowi doświadczonych profesjonalistów i najnowocześniejszemu sprzętowi zapewniamy najwyższą jakość usług dla każdego klienta.",
                    stats: {
                        experience: "Lat doświadczenia",
                        vehicles: "Obsłużonych pojazdów",
                        clients: "Zadowolonych klientów"
                    }
                },
                why: {
                    title: "Dlaczego my",
                    reason1: {
                        title: "Dostępność 24/7",
                        description: "Jesteśmy dostępni przez całą dobę, aby pomóc Ci w każdej sytuacji awaryjnej."
                    },
                    reason2: {
                        title: "Szybka reakcja",
                        description: "Nasz średni czas przyjazdu to mniej niż 30 minut w obszarze miasta."
                    },
                    reason3: {
                        title: "Doświadczony zespół",
                        description: "Nasi mechanicy mają rozległe szkolenia i wieloletnie doświadczenie."
                    },
                    reason4: {
                        title: "Uczciwe ceny",
                        description: "Przejrzyste ceny bez ukrytych opłat czy niespodzianek."
                    }
                },
                gallery: {
                    title: "Galeria naszych prac"
                },
                testimonials: {
                    title: "Co mówią nasi klienci",
                    testimonial1: {
                        text: "AutoSerwisMax uratował mnie, gdy mój samochód zepsuł się na autostradzie. Przyjechali szybko, a obsługa była doskonała!",
                        author: "Jan Kowalski"
                    },
                    testimonial2: {
                        text: "Byłam pod wrażeniem ich profesjonalizmu i jakości napraw. Mój samochód działa lepiej niż wcześniej!",
                        author: "Anna Nowak"
                    },
                    testimonial3: {
                        text: "Niezawodni, szybcy i uczciwe ceny. Gorąco polecam ich usługi każdemu, kto potrzebuje holowania lub naprawy.",
                        author: "Michał Wiśniewski"
                    }
                },
                contact: {
                    title: "Kontakt",
                    address: "Adres",
                    phone: "Telefon",
                    email: "Email",
                    hours: "Godziny pracy",
                    weekdays: "Poniedziałek - Piątek: 8:00 - 18:00",
                    weekend: "Sobota: 9:00 - 16:00",
                    sunday: "Niedziela: Tylko obsługa awaryjna",
                    form: {
                        name: "Twoje imię",
                        email: "Twój email",
                        phone: "Twój telefon",
                        message: "Twoja wiadomość",
                        submit: "Wyślij wiadomość"
                    }
                },
                footer: {
                    rights: "Wszelkie prawa zastrzeżone",
                    privacy: "Polityka prywatności",
                    terms: "Warunki korzystania z usług"
                }
            },
            ru: {
                nav: {
                    home: "Главная",
                    services: "Услуги",
                    about: "О нас",
                    why: "Почему мы",
                    gallery: "Галерея",
                    testimonials: "Отзывы",
                    contact: "Контакты"
                },
                hero: {
                    title: "Быстрая и надежная эвакуация автомобилей",
                    subtitle: "Профессиональные услуги по эвакуации и ремонту автомобилей 24/7",
                    cta: "Позвонить сейчас"
                },
                services: {
                    title: "Наши услуги",
                    towing: {
                        title: "Эвакуация автомобилей",
                        description: "Профессиональные услуги эвакуации для всех типов транспортных средств, с быстрым временем реагирования и бережным обращением."
                    },
                    repair: {
                        title: "Мастерская по ремонту",
                        description: "Полноценная авторемонтная мастерская с сертифицированными механиками и современным диагностическим оборудованием."
                    },
                    roadside: {
                        title: "Помощь на дороге",
                        description: "Немедленная помощь с разрядкой аккумулятора, проколом шин, доставкой топлива и другими аварийными ситуациями."
                    },
                    transport: {
                        title: "Транспортировка автомобилей",
                        description: "Безопасная и надежная транспортировка автомобилей, мотоциклов и других транспортных средств по всему региону."
                    }
                },
                about: {
                    title: "О компании AutoSerwisMax",
                    description: "AutoSerwisMax предоставляет премиальные услуги по эвакуации и ремонту автомобилей в Белостоке с 2005 года. Благодаря команде опытных профессионалов и современному оборудованию мы обеспечиваем высочайшее качество обслуживания для каждого клиента.",
                    stats: {
                        experience: "Лет опыта",
                        vehicles: "Обслуженных автомобилей",
                        clients: "Довольных клиентов"
                    }
                },
                why: {
                    title: "Почему выбирают нас",
                    reason1: {
                        title: "Доступность 24/7",
                        description: "Мы доступны круглосуточно, чтобы помочь вам в любой чрезвычайной ситуации."
                    },
                    reason2: {
                        title: "Быстрое реагирование",
                        description: "Наше среднее время прибытия составляет менее 30 минут в пределах города."
                    },
                    reason3: {
                        title: "Опытная команда",
                        description: "Наши механики имеют обширную подготовку и многолетний опыт."
                    },
                    reason4: {
                        title: "Справедливые цены",
                        description: "Прозрачные цены без скрытых платежей или сюрпризов."
                    }
                },
                gallery: {
                    title: "Галерея наших работ"
                },
                testimonials: {
                    title: "Что говорят наши клиенты",
                    testimonial1: {
                        text: "AutoSerwisMax спас меня, когда моя машина сломалась на шоссе. Они быстро приехали, и сервис был отличным!",
                        author: "Иван Петров"
                    },
                    testimonial2: {
                        text: "Я была впечатлена их профессионализмом и качеством ремонта. Моя машина работает лучше, чем раньше!",
                        author: "Анна Смирнова"
                    },
                    testimonial3: {
                        text: "Надежные, быстрые и честные цены. Я настоятельно рекомендую их услуги всем, кто нуждается в эвакуации или ремонте.",
                        author: "Михаил Иванов"
                    }
                },
                contact: {
                    title: "Контакты",
                    address: "Адрес",
                    phone: "Телефон",
                    email: "Email",
                    hours: "Часы работы",
                    weekdays: "Понедельник - Пятница: 8:00 - 18:00",
                    weekend: "Суббота: 9:00 - 16:00",
                    sunday: "Воскресенье: Только аварийное обслуживание",
                    form: {
                        name: "Ваше имя",
                        email: "Ваш email",
                        phone: "Ваш телефон",
                        message: "Ваше сообщение",
                        submit: "Отправить сообщение"
                    }
                },
                footer: {
                    rights: "Все права защищены",
                    privacy: "Политика конфиденциальности",
                    terms: "Условия использования"
                }
            }
        };
    </script>

    <!-- Header -->
    <header class="header" id="header">
        <div class="container">
            <div class="logo">
                <img src="img/logo.png" alt="AutoSerwisMax Logo" class="logo-img">
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
                    <li><a href="#why" class="nav-link" data-trans="nav.why">Why Choose Us</a></li>
                    <li><a href="#gallery" class="nav-link" data-trans="nav.gallery">Gallery</a></li>
                    <li><a href="#testimonials" class="nav-link" data-trans="nav.testimonials">Testimonials</a></li>
                    <li><a href="#contact" class="nav-link" data-trans="nav.contact">Contact</a></li>
                </ul>
            </nav>
            
            <div class="menu-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
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
                    <div class="service-icon">
                        <i class="fas fa-truck-pickup"></i>
                    </div>
                    <h3 class="service-title" data-trans="services.towing.title">Car Towing</h3>
                    <p class="service-description" data-trans="services.towing.description">Professional towing services for all vehicle types, with quick response times and careful handling.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h3 class="service-title" data-trans="services.repair.title">Workshop Repairs</h3>
                    <p class="service-description" data-trans="services.repair.description">Full-service auto repair workshop with certified mechanics and modern diagnostic equipment.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-car-battery"></i>
                    </div>
                    <h3 class="service-title" data-trans="services.roadside.title">Roadside Assistance</h3>
                    <p class="service-description" data-trans="services.roadside.description">Immediate help with battery jumps, flat tires, fuel delivery, and other emergency situations.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-truck-moving"></i>
                    </div>
                    <h3 class="service-title" data-trans="services.transport.title">Vehicle Transport</h3>
                    <p class="service-description" data-trans="services.transport.description">Safe and secure transport of cars, motorcycles, and other vehicles across the region.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section class="about" id="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2 class="section-title" data-trans="about.title">About AutoSerwisMax</h2>
                    <p class="about-description" data-trans="about.description">AutoSerwisMax has been providing premium towing and auto repair services in Białystok since 2005. With a team of experienced professionals and state-of-the-art equipment, we ensure the highest quality service for every customer.</p>
                    <a href="tel:+48123456789" class="cta-button">
                        <span class="phone-emoji">📞</span>
                        <span data-trans="hero.cta">Call Now</span>
                    </a>
                </div>
                <div class="about-stats">
                    <div class="stat-item">
                        <div class="stat-number">18+</div>
                        <div class="stat-label" data-trans="about.stats.experience">Years of Experience</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">10k+</div>
                        <div class="stat-label" data-trans="about.stats.vehicles">Vehicles Serviced</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">5k+</div>
                        <div class="stat-label" data-trans="about.stats.clients">Satisfied Clients</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-us" id="why">
        <div class="container">
            <h2 class="section-title" data-trans="why.title">Why Choose Us</h2>
            <div class="why-us-grid">
                <div class="why-card">
                    <div class="why-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h3 class="why-title" data-trans="why.reason1.title">24/7 Availability</h3>
                    <p class="why-description" data-trans="why.reason1.description">We're available round the clock to assist you with any emergency.</p>
                </div>
                
                <div class="why-card">
                    <div class="why-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h3 class="why-title" data-trans="why.reason2.title">Fast Response</h3>
                    <p class="why-description" data-trans="why.reason2.description">Our average arrival time is under 30 minutes within the city area.</p>
                </div>
                
                <div class="why-card">
                    <div class="why-icon">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <h3 class="why-title" data-trans="why.reason3.title">Experienced Team</h3>
                    <p class="why-description" data-trans="why.reason3.description">Our mechanics have extensive training and years of experience.</p>
                </div>
                
                <div class="why-card">
                    <div class="why-icon">
                        <i class="fas fa-tag"></i>
                    </div>
                    <h3 class="why-title" data-trans="why.reason4.title">Fair Pricing</h3>
                    <p class="why-description" data-trans="why.reason4.description">Transparent pricing with no hidden fees or surprises.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery" id="gallery">
        <div class="container">
            <h2 class="section-title" data-trans="gallery.title">Our Work Gallery</h2>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="img/gallery1.jpg" alt="Towing a sedan car" class="gallery-img">
                </div>
                <div class="gallery-item">
                    <img src="img/gallery2.jpg" alt="Mechanic repairing an engine" class="gallery-img">
                </div>
                <div class="gallery-item">
                    <img src="img/gallery3.jpg" alt="Towing truck in action" class="gallery-img">
                </div>
                <div class="gallery-item">
                    <img src="img/gallery4.jpg" alt="Roadside assistance at night" class="gallery-img">
                </div>
                <div class="gallery-item">
                    <img src="img/gallery5.jpg" alt="Completed car repair" class="gallery-img">
                </div>
                <div class="gallery-item">
                    <img src="img/gallery6.jpg" alt="Car being loaded onto a tow truck" class="gallery-img">
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
        <div class="container">
            <h2 class="section-title" data-trans="testimonials.title">What Our Clients Say</h2>
            <div class="testimonial-slider">
                <div class="testimonial-slide">
                    <div class="testimonial-text" data-trans="testimonials.testimonial1.text">AutoSerwisMax saved me when my car broke down on the highway. They arrived quickly and the service was excellent!</div>
                    <div class="testimonial-author" data-trans="testimonials.testimonial1.author">John Smith</div>
                </div>
                
                <div class="testimonial-slide">
                    <div class="testimonial-text" data-trans="testimonials.testimonial2.text">I was impressed by their professionalism and the quality of repairs. My car runs better than before!</div>
                    <div class="testimonial-author" data-trans="testimonials.testimonial2.author">Anna Kowalska</div>
                </div>
                
                <div class="testimonial-slide">
                    <div class="testimonial-text" data-trans="testimonials.testimonial3.text">Reliable, quick, and fair pricing. I highly recommend their services to anyone in need of towing or repairs.</div>
                    <div class="testimonial-author" data-trans="testimonials.testimonial3.author">Michael Brown</div>
                </div>
            </div>
            <div class="testimonial-controls">
                <button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
                <div class="dots">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <button class="next-btn"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="section-title" data-trans="contact.title">Contact Us</h2>
            <div class="contact-grid">
                <div class="contact-info">
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="info-content">
                            <h3 data-trans="contact.address">Address</h3>
                            <p>ul. Example Street 123<br>15-001 Białystok<br>Poland</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="info-content">
                            <h3 data-trans="contact.phone">Phone</h3>
                            <p><a href="tel:+48123456789">+48 123 456 789</a></p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="info-content">
                            <h3 data-trans="contact.email">Email</h3>
                            <p><a href="mailto:contact@autoserwismax.pl">contact@autoserwismax.pl</a></p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="info-content">
                            <h3 data-trans="contact.hours">Working Hours</h3>
                            <p data-trans="contact.weekdays">Monday - Friday: 8:00 - 18:00</p>
                            <p data-trans="contact.weekend">Saturday: 9:00 - 16:00</p>
                            <p data-trans="contact.sunday">Sunday: Emergency Service Only</p>
                        </div>
                    </div>
                    
                    <div class="cta-wrapper">
                        <a href="tel:+48123456789" class="cta-button">
                            <span class="phone-emoji">📞</span>
                            <span data-trans="hero.cta">Call Now</span>
                        </a>
                    </div>
                </div>
                
                <div class="contact-form-container">
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">```

