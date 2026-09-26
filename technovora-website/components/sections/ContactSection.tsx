"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Clock, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/components/layout/I18nProvider";
import { OFFICES, SALES_EMAIL, SERVICES } from "@/lib/constants";

const BUDGETS = ["< $10k", "$10k – $25k", "$25k+"] as const;

const inputClass =
  "w-full rounded-xl border border-bg-border bg-bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none transition-all focus:border-magenta focus:ring-2 focus:ring-magenta/20";

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "border-magenta bg-magenta text-white shadow-md shadow-magenta/25"
          : "border-bg-border bg-bg-surface text-text-muted hover:border-text-faint hover:text-text"
      }`}
    >
      {children}
    </button>
  );
}

export function ContactSection() {
  const { t } = useI18n();
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>(BUDGETS[1]);

  const toggle = (slug: string) =>
    setPicked((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));

  const onSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-bg-surface border-y border-bg-border">
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[460px] w-[460px] rounded-full blur-[140px]"
        style={{ background: "rgba(var(--accent-b-rgb), 0.14)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Left — pitch + contact details */}
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              {t("contact.eyebrow")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text leading-tight mb-5">
              {t("contact.title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text-heading">{t("contact.title").split(" ").slice(-1)[0]}</span>
            </h2>
            <p className="text-lg leading-relaxed text-text-muted max-w-md">{t("contact.subtitle")}</p>

            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href={`mailto:${SALES_EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-bg-border bg-bg-elevated p-4 transition-all hover:border-magenta/40"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-magenta/10 text-magenta">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-text-muted">{t("contact.sales")}</span>
                    <span className="block truncate font-mono text-sm text-text group-hover:text-magenta transition-colors">
                      {SALES_EMAIL}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-bg-border bg-bg-elevated p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-magenta/10 text-magenta">
                  <Clock className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-text">{t("contact.reply")}</span>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-bg-border bg-bg-elevated p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-magenta/10 text-magenta">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-sm text-text-muted">
                  {OFFICES.map((o, i) => (
                    <span key={o.city}>
                      {i > 0 && <span className="mx-2 text-text-faint">/</span>}
                      <span className="font-medium text-text">{t(`office.${o.city}`)}</span>
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </FadeIn>

          {/* Right — form card */}
          <FadeIn delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-bg-border bg-bg-elevated p-6 md:p-10 shadow-xl"
            >
              <fieldset className="mb-8">
                <legend className="mb-3 text-sm font-semibold text-text">{t("contact.projecttype")}</legend>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <Chip key={s.slug} active={picked.includes(s.slug)} onClick={() => toggle(s.slug)}>
                      {t(`services.${s.slug}`)}
                    </Chip>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mb-8">
                <legend className="mb-3 text-sm font-semibold text-text">{t("contact.budget")}</legend>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>
                      {b}
                    </Chip>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-text-muted">{t("contact.firstname")}</span>
                  <input type="text" name="firstName" autoComplete="given-name" className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-text-muted">{t("contact.lastname")}</span>
                  <input type="text" name="lastName" autoComplete="family-name" className={inputClass} />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-2 block text-xs font-medium text-text-muted">{t("contact.email")}</span>
                <input type="email" name="email" autoComplete="email" className={inputClass} />
              </label>
              <label className="mt-4 block">
                <span className="mb-2 block text-xs font-medium text-text-muted">{t("contact.message")}</span>
                <textarea name="message" rows={4} className={`${inputClass} resize-none`} />
              </label>

              <button type="submit" className="btn-primary mt-8 w-full justify-center">
                {t("contact.send")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
