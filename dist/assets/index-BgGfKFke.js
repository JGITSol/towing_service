(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const v={en:{nav:{home:"Home",services:"Services",about:"About Us",why:"Why Choose Us",gallery:"Gallery",testimonials:"Testimonials",contact:"Contact",legal:"Legal Info",workshop:"Workshop"},hero:{title:"Fast & Reliable Car Towing",subtitle:"Professional vehicle recovery and repair services available 24/7",cta:"Call Now"},services:{title:"Our Services",towing:{title:"Car Towing",description:"Professional towing services for all vehicle types, with quick response times and careful handling."},repair:{title:"Workshop Repairs",description:"Full-service auto repair workshop with certified mechanics and modern diagnostic equipment."},roadside:{title:"Roadside Assistance",description:"Immediate help with battery jumps, flat tires, fuel delivery, and other emergency situations."},transport:{title:"Vehicle Transport",description:"Safe and secure transport of cars, motorcycles, and other vehicles across the region."}},about:{title:"About AutoSerwisMax",description:"AutoSerwisMax has been providing premium towing and auto repair services in Białystok since 2005. With a team of experienced professionals and state-of-the-art equipment, we ensure the highest quality service for every customer.",stats:{experience:"Years of Experience",vehicles:"Vehicles Serviced",clients:"Satisfied Clients"}},why:{title:"Why Choose Us",reason1:{title:"24/7 Availability",description:"We are available round the clock to assist you with any emergency."},reason2:{title:"Fast Response",description:"Our average arrival time is under 30 minutes within the city area."},reason3:{title:"Experienced Team",description:"Our mechanics have extensive training and years of experience."},reason4:{title:"Fair Pricing",description:"Transparent pricing with no hidden fees or surprises."}},gallery:{title:"Our Work Gallery"},testimonials:{title:"What Our Clients Say",testimonial1:{text:"AutoSerwisMax saved me when my car broke down on the highway. They arrived quickly and the service was excellent!",author:"John Smith"},testimonial2:{text:"I was impressed by their professionalism and the quality of repairs. My car runs better than before!",author:"Anna Kowalska"},testimonial3:{text:"Reliable, quick, and fair pricing. I highly recommend their services to anyone in need of towing or repairs.",author:"Michael Brown"}},contact:{title:"Contact Us",address:"Workshop Address",phone:"Phone",email:"Email",hours:"Working Hours",weekdays:"Mon-Fri: 8:00 - 17:00",weekend:"Sat: 9:00 - 14:00",sunday:"Sun: Closed",form:{name:"Full Name",phone:"Phone Number",email:"Email",service:"Service Needed",servicePlaceholder:"Select a service",serviceOptions:{towing:"Towing",repair:"Repair",roadside:"Roadside Assistance",transport:"Vehicle Transport"},message:"Message",call:"Call Us",quote:"Get Exact Quote",submit:"Send Message"}},footer:{rights:"All Rights Reserved",privacy:"Privacy Policy",terms:"Terms of Service"}},pl:{nav:{home:"Strona główna",services:"Usługi",about:"O nas",why:"Dlaczego my",gallery:"Galeria",testimonials:"Opinie",contact:"Kontakt",legal:"Informacje prawne",workshop:"Warsztat"},hero:{title:"Szybkie i niezawodne holowanie pojazdów",subtitle:"Profesjonalne usługi holowania i naprawy pojazdów dostępne 24/7",cta:"Zadzwoń teraz"},services:{title:"Nasze usługi",towing:{title:"Holowanie pojazdów",description:"Profesjonalne usługi holownicze dla wszystkich typów pojazdów, z szybkim czasem reakcji i ostrożną obsługą."},repair:{title:"Naprawy warsztatowe",description:"Pełnowymiarowy warsztat samochodowy z certyfikowanymi mechanikami i nowoczesnym sprzętem diagnostycznym."},roadside:{title:"Pomoc drogowa",description:"Natychmiastowa pomoc przy rozładowanych akumulatorach, przebitych oponach, dostawie paliwa i innych sytuacjach awaryjnych."},transport:{title:"Transport pojazdów",description:"Bezpieczny i pewny transport samochodów, motocykli i innych pojazdów w całym regionie."}},about:{title:"O firmie AutoSerwisMax",description:"AutoSerwisMax świadczy premium usługi holowania i naprawy samochodów w Białymstoku od 2005 roku. Dzięki zespołowi doświadczonych profesjonalistów i najnowocześniejszemu sprzętowi zapewniamy najwyższą jakość usług dla każdego klienta.",stats:{experience:"Lat doświadczenia",vehicles:"Obsłużonych pojazdów",clients:"Zadowolonych klientów"}},why:{title:"Dlaczego my",reason1:{title:"Dostępność 24/7",description:"Jesteśmy dostępni przez całą dobę, aby pomóc Ci w każdej sytuacji awaryjnej."},reason2:{title:"Szybka reakcja",description:"Nasz średni czas przyjazdu to mniej niż 30 minut w obszarze miasta."},reason3:{title:"Doświadczony zespół",description:"Nasi mechanicy mają rozległe szkolenia i wieloletnie doświadczenie."},reason4:{title:"Uczciwe ceny",description:"Przejrzyste ceny bez ukrytych opłat czy niespodzianek."}},gallery:{title:"Galeria naszych prac"},testimonials:{title:"Co mówią nasi klienci",testimonial1:{text:"AutoSerwisMax uratował mnie, gdy mój samochód zepsuł się na autostradzie. Przyjechali szybko, a obsługa była doskonała!",author:"Jan Kowalski"},testimonial2:{text:"Byłam pod wrażeniem ich profesjonalizmu i jakości napraw. Mój samochód działa lepiej niż wcześniej!",author:"Anna Nowak"},testimonial3:{text:"Niezawodni, szybcy i uczciwe ceny. Gorąco polecam ich usługi każdemu, kto potrzebuje holowania lub naprawy.",author:"Michał Wiśniewski"}},contact:{info:"Informacje kontaktowe",addressValue:"Słonimska 2, 15-026 Białystok",phoneValue:"530 162 530",emailValue:"autoserwismax.bialystok@gmail.com",title:"Kontakt",address:"Adres warsztatu",phone:"Telefon",email:"Email",hours:"Godziny pracy",weekdays:"Pn-Pt: 8:00 - 17:00",weekend:"Sobota: 9:00 - 14:00",sunday:"Niedziela: Zamknięte",form:{name:"Imię i nazwisko",phone:"Numer telefonu",email:"Email",service:"Wymagana usługa",servicePlaceholder:"Wybierz usługę",serviceOptions:{towing:"Holowanie",repair:"Naprawa",roadside:"Pomoc drogowa",transport:"Transport pojazdu"},message:"Wiadomość",call:"Zadzwoń",quote:"Uzyskaj dokładną wycenę",submit:"Wyślij wiadomość"}},footer:{rights:"Wszelkie prawa zastrzeżone",privacy:"Polityka prywatności",terms:"Warunki korzystania z usług"}},ua:{nav:{home:"Головна",services:"Послуги",about:"Про нас",why:"Чому ми",gallery:"Галерея",testimonials:"Відгуки",contact:"Контакт",legal:"Правова інформація",workshop:"Майстерня"},hero:{title:"Швидка та надійна евакуація автомобілів",subtitle:"Професійні послуги евакуації та ремонту автомобілів 24/7",cta:"Зателефонувати зараз"},services:{title:"Наші послуги",towing:{title:"Евакуація автомобілів",description:"Професійні послуги евакуації для всіх типів транспортних засобів, швидкий відгук та обережне поводження."},repair:{title:"Ремонт у майстерні",description:"Повноцінна автомайстерня з сертифікованими механіками та сучасним діагностичним обладнанням."},roadside:{title:"Допомога на дорозі",description:"Негайна допомога при розряджених акумуляторах, проколотих шинах, доставці пального та інших аварійних ситуаціях."},transport:{title:"Транспортування автомобілів",description:"Безпечне та надійне транспортування автомобілів, мотоциклів та інших транспортних засобів по регіону."}},about:{title:"Про AutoSerwisMax",description:"AutoSerwisMax надає преміальні послуги евакуації та ремонту автомобілів у Білостоці з 2005 року. Завдяки команді досвідчених професіоналів та сучасному обладнанню ми гарантуємо найвищу якість обслуговування для кожного клієнта.",stats:{experience:"Років досвіду",vehicles:"Обслужених автомобілів",clients:"Задоволених клієнтів"}},why:{title:"Чому обирають нас",reason1:{title:"Доступність 24/7",description:"Ми доступні цілодобово, щоб допомогти вам у будь-якій надзвичайній ситуації."},reason2:{title:"Швидка реакція",description:"Наш середній час прибуття менше 30 хвилин у межах міста."},reason3:{title:"Досвідчена команда",description:"Наші механіки мають великий досвід та проходили численні навчання."},reason4:{title:"Чесні ціни",description:"Прозорі ціни без прихованих платежів чи сюрпризів."}},gallery:{title:"Галерея наших робіт"},testimonials:{title:"Що кажуть наші клієнти",testimonial1:{text:"AutoSerwisMax врятував мене, коли мій автомобіль зламався на трасі. Вони приїхали швидко, і сервіс був чудовий!",author:"Олександр Іваненко"},testimonial2:{text:"Я була вражена їх професіоналізмом та якістю ремонту. Моя машина працює краще, ніж раніше!",author:"Ірина Ковальчук"},testimonial3:{text:"Надійні, швидкі та чесні ціни. Дуже рекомендую їх послуги всім, хто потребує евакуації чи ремонту.",author:"Михайло Бондаренко"}},contact:{info:"Контактна інформація",addressValue:"Слонімська 2, Білосток, Польща",phoneValue:"530 162 530",emailValue:"autoserwismax.bialystok@gmail.com",title:"Контакт",address:"Адреса майстерні",phone:"Телефон",email:"Email",hours:"Години роботи",weekdays:"Пн-Пт: 8:00 - 18:00",weekend:"Субота: 9:00 - 14:00",sunday:"Неділя: зачинено",form:{name:"ПІБ",phone:"Номер телефону",email:"Email",service:"Потрібна послуга",servicePlaceholder:"Оберіть послугу",serviceOptions:{towing:"Евакуація",repair:"Ремонт",roadside:"Допомога на дорозі",transport:"Транспортування"},message:"Повідомлення",call:"Зателефонувати",quote:"Отримати точну ціну",submit:"Відправити повідомлення"}},footer:{rights:"Всі права захищені",privacy:"Політика конфіденційності",terms:"Умови використання"}},by:{nav:{home:"Галоўная",services:"Паслугі",about:"Пра нас",why:"Чаму мы",gallery:"Галерэя",testimonials:"Водгукі",contact:"Кантакт",legal:"Прававая інфармацыя",workshop:"Майстэрня"},hero:{title:"Хуткая і надзейная эвакуацыя аўтамабіляў",subtitle:"Прафесійныя паслугі эвакуацыі і рамонту аўтамабіляў 24/7",cta:"Патэлефанаваць зараз"},services:{title:"Нашы паслугі",towing:{title:"Эвакуацыя аўтамабіляў",description:"Прафесійныя паслугі эвакуацыі для ўсіх тыпаў транспартных сродкаў, хуткі водгук і асцярожнае абыходжанне."},repair:{title:"Рамонт у майстэрні",description:"Поўнафункцыянальная аўтамайстэрня з сертыфікаванымі механікамі і сучасным дыягнастычным абсталяваннем."},roadside:{title:"Дапамога на дарозе",description:"Неадкладная дапамога пры разраджаных акумулятарах, прабітых шынах, дастаўцы паліва і іншых аварыйных сітуацыях."},transport:{title:"Транспартаванне аўтамабіляў",description:"Бяспечнае і надзейнае транспартаванне аўтамабіляў, матацыклаў і іншых транспартных сродкаў па рэгіёне."}},about:{title:"Пра AutoSerwisMax",description:"AutoSerwisMax аказвае прэміяльныя паслугі эвакуацыі і рамонту аўтамабіляў у Беластоку з 2005 года. Дзякуючы камандзе вопытных прафесіяналаў і сучаснаму абсталяванню мы гарантуем найвышэйшую якасць абслугоўвання для кожнага кліента.",stats:{experience:"Гадоў вопыту",vehicles:"Абыслугоўваных аўтамабіляў",clients:"Задаволеных кліентаў"}},why:{title:"Чаму выбіраюць нас",reason1:{title:"Даступнасць 24/7",description:"Мы даступныя кругласутачна, каб дапамагчы вам у любой надзвычайнай сітуацыі."},reason2:{title:"Хуткая рэакцыя",description:"Наш сярэдні час прыбыцця менш за 30 хвілін у межах горада."},reason3:{title:"Вопытная каманда",description:"Нашы механікі маюць вялікі вопыт і прайшлі шматлікія навучанні."},reason4:{title:"Сумленныя цэны",description:"Празрыстыя цэны без схаваных плацяжоў ці сюрпрызаў."}},gallery:{title:"Галерэя нашых работ"},testimonials:{title:"Што кажуць нашы кліенты",testimonial1:{text:"AutoSerwisMax выратаваў мяне, калі мой аўтамабіль зламаўся на трасе. Яны хутка прыехалі, і сэрвіс быў выдатны!",author:"Аляксандр Сяргееў"},testimonial2:{text:"Я была ўражана іх прафесіяналізмам і якасцю рамонту. Мая машына працуе лепш, чым раней!",author:"Ірына Кавальчук"},testimonial3:{text:"Надзейныя, хуткія і сумленныя цэны. Вельмі рэкамендую іх паслугі ўсім, хто мае патрэбу ў эвакуацыі або рамонце.",author:"Міхаіл Бандарэнка"}},contact:{info:"Кантактная інфармацыя",addressValue:"Слонімская 2, Беласток, Польшча",phoneValue:"530 162 530",emailValue:"autoserwismax.bialystok@gmail.com",title:"Кантакт",address:"Адрас майстэрні",phone:"Тэлефон",email:"Email",hours:"Гадзіны працы",weekdays:"Пн-Пт: 8:00 - 18:00",weekend:"Субота: 9:00 - 14:00",sunday:"Нядзеля: зачынена",form:{name:"ПІБ",phone:"Нумар тэлефона",email:"Email",service:"Патрэбная паслуга",servicePlaceholder:"Абярыце паслугу",serviceOptions:{towing:"Эвакуацыя",repair:"Рамонт",roadside:"Дапамога на дарозе",transport:"Транспартаванне"},message:"Паведамленне",call:"Патэлефанаваць",quote:"Атрымаць дакладную цану",submit:"Адправіць паведамленне"}},footer:{rights:"Усе правы абаронены",privacy:"Палітыка прыватнасці",terms:"Умовы выкарыстання"}},ru:{nav:{home:"Главная",services:"Услуги",about:"О нас",why:"Почему мы",gallery:"Галерея",testimonials:"Отзывы",contact:"Контакты",legal:"Правовая информация",workshop:"Мастерская"},hero:{title:"Быстрая и надежная эвакуация автомобилей",subtitle:"Профессиональные услуги по эвакуации и ремонту автомобилей 24/7",cta:"Позвонить сейчас"},services:{title:"Наши услуги",towing:{title:"Эвакуация автомобилей",description:"Профессиональные услуги эвакуации для всех типов транспортных средств, с быстрым временем реагирования и бережным обращением."},repair:{title:"Мастерская по ремонту",description:"Полноценная авторемонтная мастерская с сертифицированными механиками и современным диагностическим оборудованием."},roadside:{title:"Помощь на дороге",description:"Немедленная помощь с разрядкой аккумулятора, проколом шин, доставкой топлива и другими аварийными ситуациями."},transport:{title:"Транспортировка автомобилей",description:"Безопасная и надежная транспортировка автомобилей, мотоциклов и других транспортных средств по всему региону."}},about:{title:"О компании AutoSerwisMax",description:"AutoSerwisMax предоставляет премиальные услуги по эвакуации и ремонту автомобилей в Белостоке с 2005 года. Благодаря команде опытных профессионалов и современному оборудованию мы обеспечиваем высочайшее качество обслуживания для каждого клиента.",stats:{experience:"Лет опыта",vehicles:"Обслуженных автомобилей",clients:"Довольных клиентов"}},why:{title:"Почему выбирают нас",reason1:{title:"Доступность 24/7",description:"Мы доступны круглосуточно, чтобы помочь вам в любой чрезвычайной ситуации."},reason2:{title:"Быстрое реагирование",description:"Наше среднее время прибытия составляет менее 30 минут в пределах города."},reason3:{title:"Опытная команда",description:"Наши механики имеют обширную подготовку и многолетний опыт."},reason4:{title:"Справедливые цены",description:"Прозрачные цены без скрытых платежей или сюрпризов."}},gallery:{title:"Галерея наших работ"},testimonials:{title:"Что говорят наши клиенты",testimonial1:{text:"AutoSerwisMax спас меня, когда моя машина сломалась на шоссе. Они быстро приехали, и сервис был отличным!",author:"Иван Петров"},testimonial2:{text:"Я была впечатлена их профессионализмом и качеством ремонта. Моя машина работает лучше, чем раньше!",author:"Анна Смирнова"},testimonial3:{text:"Надежные, быстрые и честные цены. Я настоятельно рекомендую их услуги всем, кто нуждается в эвакуации или ремонте.",author:"Михаил Иванов"}},contact:{info:"Контактная информация",addressValue:"Слонимска 2, Белосток, Польша",phoneValue:"530 162 530",emailValue:"autoserwismax.bialystok@gmail.com",title:"Контакты",address:"Адрес мастерской",phone:"Телефон",email:"Email",hours:"Часы работы",weekdays:"Пн-Пт: 8:00 - 18:00",weekend:"Суббота: 9:00 - 14:00",sunday:"Воскресенье: Закрыто",form:{name:"ФИО",phone:"Номер телефона",email:"Email",service:"Необходимая услуга",servicePlaceholder:"Выберите услугу",serviceOptions:{towing:"Эвакуация",repair:"Ремонт",roadside:"Помощь на дороге",transport:"Транспортировка"},message:"Сообщение",call:"Позвонить",quote:"Получить точную цену",submit:"Отправить сообщение"}},footer:{rights:"Все права защищены",privacy:"Политика конфиденциальности",terms:"Условия использования"}}};let y="en";const k=()=>v[y],b=s=>{y=s,g()},g=()=>{const s=document.querySelectorAll("[data-trans]"),r=k();s.forEach(n=>{const t=n.getAttribute("data-trans");if(!t)return;const e=t.split(".").reduce((i,l)=>i&&i[l]!==void 0?i[l]:"",r);typeof e=="string"&&(n.textContent=e)}),document.querySelectorAll(".lang-btn").forEach(n=>{n.getAttribute("data-lang")===y?n.classList.add("active"):n.classList.remove("active")}),x()},x=()=>{const s=k().contact.form,r=document.getElementById("contact-name"),o=document.getElementById("contact-email"),n=document.getElementById("contact-phone"),t=document.getElementById("contact-message"),e=document.getElementById("contact-submit");r&&(r.placeholder=s.name),o&&(o.placeholder=s.email),n&&(n.placeholder=s.phone),t&&(t.placeholder=s.message),e&&(e.textContent=s.submit)},z=()=>{const s=document.getElementById("lang-dropdown");function r(a){document.documentElement.lang=a}function o(){return localStorage.getItem("siteLang")||"pl"}function n(a){localStorage.setItem("siteLang",a)}if(s){s.addEventListener("change",()=>{const c=s.value;c&&(b(c),n(c),r(c))});const a=o();s.value=a,b(a),r(a)}const t=document.querySelector(".mobile-menu-btn"),e=document.getElementById("main-nav"),i=document.querySelector(".mobile-nav-overlay");let l=null;function m(){if(!(!t||!e||!i)&&(t.classList.add("active"),t.setAttribute("aria-expanded","true"),i.classList.add("active"),i.setAttribute("aria-hidden","false"),e)){e.classList.add("active"),e.setAttribute("aria-hidden","false"),e.tabIndex=0,l=document.activeElement;const a=e.querySelector(".nav-link");a&&a.focus(),document.addEventListener("keydown",p)}}function d(){!t||!e||!i||(t.classList.remove("active"),t.setAttribute("aria-expanded","false"),i.classList.remove("active"),i.setAttribute("aria-hidden","true"),e&&(e.classList.remove("active"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1,document.removeEventListener("keydown",p)),l&&l.focus())}function p(a){if(!e||!e.classList.contains("active"))return;const c=e.querySelectorAll("a, button, [tabindex]:not([tabindex='-1'])"),f=c[0],w=c[c.length-1];a.key==="Tab"?a.shiftKey?document.activeElement===f&&(a.preventDefault(),w.focus()):document.activeElement===w&&(a.preventDefault(),f.focus()):a.key==="Escape"&&d()}t==null||t.addEventListener("click",()=>{e!=null&&e.classList.contains("active")?d():m()}),document.querySelectorAll(".nav-link").forEach(a=>{a.addEventListener("click",()=>{d()})}),i&&i.addEventListener("click",()=>{d()});const u=document.getElementById("contact-form");u==null||u.addEventListener("submit",a=>{a.preventDefault(),alert("Thank you for your message! We will contact you soon."),u.reset()})};g();document.addEventListener("DOMContentLoaded",()=>{var d,p,h;const s=document.getElementById("app");s&&(s.innerHTML=`
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
    `),z(),g();const r=localStorage.getItem("lang")||"pl",o=v[r]||v.pl,n=((d=o==null?void 0:o.contact)==null?void 0:d.addressValue)||"Słonimska 2, 15-026 Białystok",t=((p=o==null?void 0:o.contact)==null?void 0:p.phoneValue)||"530 162 530",e=((h=o==null?void 0:o.contact)==null?void 0:h.emailValue)||"autoserwismax.bialystok@gmail.com",i=document.getElementById("contact-address-value");i&&(i.textContent=n);const l=document.getElementById("contact-phone-link");l&&(l.textContent=t,l.href=`tel:${t.replace(/\s+/g,"")}`);const m=document.getElementById("contact-email-link");m&&(m.textContent=e,m.href=`mailto:${e}`)});
