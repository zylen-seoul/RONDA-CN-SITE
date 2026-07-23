import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage, localizedPath, type Language } from "@/contexts/LanguageContext";
import "@/terminal-pages.css";

export type TerminalLocalized = Record<Language, string>;

export function terminalText(value: TerminalLocalized, lang: Language): string {
  return value[lang] || value.zh;
}

export function useTerminalLanguage() {
  const { lang } = useLanguage();
  return {
    lang,
    text: (value: TerminalLocalized) => terminalText(value, lang),
    path: (value: string) => localizedPath(value, lang),
  };
}

export function TerminalFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { lang } = useLanguage();
  return (
    <div className={`terminal-site ${className}`.trim()} data-lang={lang}>
      {children}
    </div>
  );
}

export function TerminalSection({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "steel" | "dark";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`terminal-section terminal-section--${tone} ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <div className="terminal-container">
        <header className="terminal-section__header">
          <div>
            <p className="terminal-eyebrow">{eyebrow}</p>
            <h2 id={`${id}-title`} className="terminal-heading">
              {title}
            </h2>
          </div>
          {intro ? <p className="terminal-section__intro">{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export function TerminalProofStrip({
  label,
  items,
}: {
  label: string;
  items: Array<{ value: string; caption: string; note?: string }>;
}) {
  return (
    <section className="terminal-proof" aria-label={label}>
      <div className="terminal-container terminal-proof__grid">
        {items.map((item, index) => (
          <article key={`${item.value}-${index}`}>
            <span className="terminal-proof__index">{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.value}</strong>
            <p>{item.caption}</p>
            {item.note ? <small>{item.note}</small> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function TerminalCTA({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="terminal-cta" aria-labelledby="terminal-cta-title">
      <div className="terminal-container terminal-cta__grid">
        <div>
          <p className="terminal-eyebrow">{eyebrow}</p>
          <h2 id="terminal-cta-title" className="terminal-heading">
            {title}
          </h2>
        </div>
        <div className="terminal-cta__copy">
          <p>{body}</p>
          <div className="terminal-actions">
            <a className="terminal-button terminal-button--primary" href={primary.href}>
              {primary.label}<ArrowUpRight aria-hidden="true" size={14} />
            </a>
            {secondary ? (
              <a className="terminal-button terminal-button--ghost" href={secondary.href}>
                {secondary.label}<ArrowRight aria-hidden="true" size={14} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TerminalPageHero({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  meta?: string;
}) {
  return (
    <section className="terminal-page-hero" aria-labelledby="terminal-page-title">
      <div className="terminal-container terminal-page-hero__grid">
        <div>
          <p className="terminal-eyebrow">{eyebrow}</p>
          <h1 id="terminal-page-title">{title}</h1>
        </div>
        <div className="terminal-page-hero__intro">
          {meta ? <span>{meta}</span> : null}
          <p>{intro}</p>
        </div>
      </div>
    </section>
  );
}

export function TerminalNotice({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <aside className="terminal-notice">
      <strong>{label}</strong>
      <div>{children}</div>
    </aside>
  );
}
