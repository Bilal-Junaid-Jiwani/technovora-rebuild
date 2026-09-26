"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { OFFICES, CONTACT_EMAIL, SALES_EMAIL, CALENDLY_URL } from "@/lib/constants";
import { Mail, MapPin, ArrowRight, ShieldCheck, CalendarCheck } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/components/layout/I18nProvider";

const SERVICE_OPTIONS = [
  { id: "webapp", key: "portfolio.filter.webapp" },
  { id: "aiautomation", key: "contactpage.form.service.aiautomation" },
  { id: "mobileapp", key: "contactpage.form.service.mobileapp" },
  { id: "devops", key: "contactpage.form.service.devops" },
  { id: "design", key: "blog.filter.design" },
];

const BUDGET_OPTIONS = [
  { id: "tier0", key: "contactpage.form.budget.tier0" },
  { id: "tier1", key: "contactpage.form.budget.tier1" },
  { id: "tier2", key: "contactpage.form.budget.tier2" },
  { id: "tier3", key: "contactpage.form.budget.tier3" },
];

const NEXT_STEPS = [
  { key: "contact2.next.1", accent: "text-brand-orange", bg: "bg-brand-orange/10" },
  { key: "contact2.next.2", accent: "text-brand-magenta", bg: "bg-brand-magenta/10" },
  { key: "contact2.next.3", accent: "text-brand-purple", bg: "bg-brand-purple/10" },
] as const;

export default function ContactPage() {
  const { t } = useI18n();
  const [budget, setBudget] = useState("tier1");
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (s: string) => {
    if (services.includes(s)) setServices(services.filter((i) => i !== s));
    else setServices([...services, s]);
  };

  return (
    <PageTransitionWrapper>
      {/* ─────────────────────────────────────────────
         1. HERO — short headline + subhead
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-24 px-6 bg-bg-base">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-40" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-text leading-tight tracking-tight">
              {t("contactpage.hero.title")}
            </h1>
            <p className="mt-5 text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
              {t("contactpage.hero.desc")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         2. DIRECT CHANNELS
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-6 bg-bg-base border-t border-bg-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionHeading title={t("contactpage.channels.title")} />
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <FadeIn>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 p-6 bg-bg-elevated rounded-2xl border border-bg-border hover:border-brand-orange transition-colors group h-full"
              >
                <span className="shrink-0 w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-orange" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-text">{t("contactpage.channels.1")}</h3>
                  <p className="text-text-muted text-sm mt-0.5">{CONTACT_EMAIL}</p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={0.06}>
              <a
                href={`mailto:${SALES_EMAIL}`}
                className="flex items-center gap-4 p-6 bg-bg-elevated rounded-2xl border border-bg-border hover:border-brand-magenta transition-colors group h-full"
              >
                <span className="shrink-0 w-12 h-12 rounded-full bg-brand-magenta/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-magenta" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-text">{t("contactpage.channels.2")}</h3>
                  <p className="text-text-muted text-sm mt-0.5">{SALES_EMAIL}</p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         3. OFFICES
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-6 bg-bg-surface border-t border-bg-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionHeading title={t("contactpage.offices.title")} />
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-2xl">
            {OFFICES.map((office, i) => (
              <FadeIn key={office.city} delay={i * 0.06}>
                <div className="p-6 bg-bg-elevated rounded-2xl border border-bg-border h-full">
                  <span className="inline-flex w-10 h-10 rounded-full bg-brand-purple/10 items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-brand-purple" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-text">{t(`office.${office.city}`)}</h3>
                  <p className="text-text-muted text-sm mt-0.5">{t(`office.${office.country}`)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         4. PROJECT INQUIRY FORM
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-6 bg-bg-base border-t border-bg-border">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionHeading title={t("contactpage.form.title")} centered />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mt-10 bg-bg-surface p-8 md:p-12 rounded-3xl border border-bg-border">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fname" className="block text-sm font-semibold text-text-muted mb-2">
                      {t("contactpage.form.fname")}
                    </label>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="w-full bg-bg-base border border-bg-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-sm font-semibold text-text-muted mb-2">
                      {t("contactpage.form.lname")}
                    </label>
                    <input
                      id="lname"
                      name="lname"
                      type="text"
                      autoComplete="family-name"
                      required
                      className="w-full bg-bg-base border border-bg-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-muted mb-2">
                    {t("contactpage.form.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full bg-bg-base border border-bg-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>

                <fieldset>
                  <legend className="block text-sm font-semibold text-text-muted mb-4">
                    {t("contactpage.form.services")}
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {SERVICE_OPTIONS.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        aria-pressed={services.includes(s.id)}
                        onClick={() => toggleService(s.id)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                          services.includes(s.id)
                            ? "bg-brand-orange border-brand-orange text-white"
                            : "bg-bg-base border-bg-border text-text hover:border-brand-orange"
                        }`}
                      >
                        {t(s.key)}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-text-muted mb-4">
                    {t("contactpage.form.budget")}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-bg-base border border-bg-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-brand-orange appearance-none transition-colors"
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b.id} value={b.id}>
                        {t(b.key)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-text-muted mb-2">
                    {t("contactpage.form.details")}
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="w-full bg-bg-base border border-bg-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-brand-orange resize-none transition-colors"
                    placeholder={t("contactpage.form.placeholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange text-white font-semibold py-4 rounded-xl hover:bg-brand-magenta transition-colors text-lg"
                >
                  {t("contactpage.form.submit")}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         5. WHAT HAPPENS NEXT
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-6 bg-bg-surface border-t border-bg-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionHeading title={t("contact2.next.title")} centered />
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {NEXT_STEPS.map((step, i) => (
              <FadeIn key={step.key} delay={i * 0.08}>
                <div className="text-center sm:text-left">
                  <span
                    className={`inline-flex w-10 h-10 rounded-full ${step.bg} ${step.accent} items-center justify-center font-mono font-semibold mb-4`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-text">{t(`${step.key}.title`)}</h3>
                  <p className="text-text-muted text-sm mt-2 leading-relaxed">{t(`${step.key}.desc`)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         6. FAQ PREVIEW
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-6 bg-bg-base border-t border-bg-border">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionHeading title={t("contactpage.faq.title")} centered />
          </FadeIn>
          <div className="space-y-4 mt-10">
            <FadeIn>
              <div className="p-6 bg-bg-surface rounded-2xl border border-bg-border">
                <h4 className="font-semibold text-text mb-2">{t("contactpage.faq.1.q")}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{t("contactpage.faq.1.a")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="p-6 bg-bg-surface rounded-2xl border border-bg-border">
                <h4 className="font-semibold text-text mb-2">{t("contactpage.faq.2.q")}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{t("contactpage.faq.2.a")}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         7. ALTERNATE PATH — CALENDLY
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-6 bg-bg-surface border-t border-bg-border">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl border border-bg-border bg-bg-elevated">
              <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
                <span className="shrink-0 w-12 h-12 rounded-full bg-brand-magenta/10 flex items-center justify-center">
                  <CalendarCheck className="w-5 h-5 text-brand-magenta" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-display font-bold text-text">{t("contact2.calendly.title")}</h3>
                  <p className="text-text-muted text-sm mt-1 max-w-sm">{t("contact2.calendly.desc")}</p>
                </div>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0 whitespace-nowrap"
              >
                {t("contact2.calendly.cta")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         8. CLOSING REASSURANCE / CTA BAND
      ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-bg-base border-t border-bg-border text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <span className="inline-flex w-12 h-12 rounded-full bg-brand-purple/10 items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-brand-purple" aria-hidden="true" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text leading-tight">
              {t("packages.guarantee.title")}
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">{t("packages.guarantee.desc")}</p>
          </FadeIn>
        </div>
      </section>
    </PageTransitionWrapper>
  );
}
