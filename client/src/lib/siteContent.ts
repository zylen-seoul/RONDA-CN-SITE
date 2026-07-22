import manifestData from "@shared/seo-pages.json";
import type { Language } from "@/contexts/LanguageContext";

export type PageKey =
  | "home"
  | "products"
  | "downJackets"
  | "technicalShells"
  | "skiwear"
  | "doubleFacedCoats"
  | "furShearling"
  | "downBedding"
  | "services"
  | "partners"
  | "digital"
  | "about"
  | "global"
  | "contact"
  | "inquiry"
  | "privacy"
  | "terms";

export interface LocalizedText {
  zh: string;
  en: string;
  ko: string;
}

export interface StaticSection {
  heading: LocalizedText;
  paragraphs: Record<Language, string[]>;
}

export interface SitePageDefinition {
  key: PageKey;
  path: string;
  index: boolean;
  title: LocalizedText;
  description: LocalizedText;
  h1: LocalizedText;
  intro: LocalizedText;
  summary: LocalizedText;
  staticSections: StaticSection[];
}

interface SiteManifest {
  siteUrl: string;
  organization: {
    name: string;
    englishName: string;
    alternateNames: string[];
    email: string;
    telephone: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
    };
  };
  pages: SitePageDefinition[];
}

export const siteManifest = manifestData as SiteManifest;

export function getPageDefinition(key: PageKey): SitePageDefinition {
  const page = siteManifest.pages.find((item) => item.key === key);
  if (!page) throw new Error(`Unknown site page: ${key}`);
  return page;
}

export function localize(text: LocalizedText, lang: Language): string {
  return text[lang] || text.zh;
}

export function localizeList(text: Record<Language, string[]>, lang: Language): string[] {
  return text[lang] || text.zh;
}

const LANGUAGE_PREFIX = /^\/(en|ko)(?=\/|$)/;

export function localizedPagePath(path: string, lang: Language): string {
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  const base = withLeadingSlash === "/" ? "/" : `${withLeadingSlash.replace(/\/+$/, "")}/`;
  if (lang === "zh") return base;
  return base === "/" ? `/${lang}/` : `/${lang}${base}`;
}

export function normalizeRoute(path: string): string {
  const withoutQuery = path.split(/[?#]/, 1)[0] || "/";
  const withoutLanguage = withoutQuery.replace(LANGUAGE_PREFIX, "") || "/";
  if (withoutLanguage === "/") return "/";
  return withoutLanguage.replace(/\/+$/, "") || "/";
}

export const primaryPageKeys: PageKey[] = [
  "products",
  "services",
  "partners",
  "digital",
  "about",
  "global",
  "contact",
];
