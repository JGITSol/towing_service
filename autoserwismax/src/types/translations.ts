// Translation interfaces for type safety

export interface NavTranslation {
  home: string;
  services: string;
  about: string;
  why: string;
  gallery: string;
  testimonials: string;
  contact: string;
}

export interface HeroTranslation {
  title: string;
  subtitle: string;
  cta: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicesTranslation {
  title: string;
  towing: ServiceItem;
  repair: ServiceItem;
  roadside: ServiceItem;
  transport: ServiceItem;
}

export interface AboutStatsTranslation {
  experience: string;
  vehicles: string;
  clients: string;
}

export interface AboutTranslation {
  title: string;
  description: string;
  stats: AboutStatsTranslation;
}

export interface ReasonItem {
  title: string;
  description: string;
}

export interface WhyTranslation {
  title: string;
  reason1: ReasonItem;
  reason2: ReasonItem;
  reason3: ReasonItem;
  reason4: ReasonItem;
}

export interface GalleryTranslation {
  title: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
}

export interface TestimonialsTranslation {
  title: string;
  testimonial1: TestimonialItem;
  testimonial2: TestimonialItem;
  testimonial3: TestimonialItem;
}

export interface ContactFormTranslation {
  name: string;
  email: string;
  phone: string;
  message: string;
  submit: string;
}

export interface ContactTranslation {
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  weekdays: string;
  weekend: string;
  sunday: string;
  form: ContactFormTranslation;
}

export interface FooterTranslation {
  rights: string;
  privacy: string;
  terms: string;
}

export interface LanguageTranslation {
  nav: NavTranslation;
  hero: HeroTranslation;
  services: ServicesTranslation;
  about: AboutTranslation;
  why: WhyTranslation;
  gallery: GalleryTranslation;
  testimonials: TestimonialsTranslation;
  contact: ContactTranslation;
  footer: FooterTranslation;
}

export interface Translations {
  en: LanguageTranslation;
  pl: LanguageTranslation;
  ru: LanguageTranslation;
}