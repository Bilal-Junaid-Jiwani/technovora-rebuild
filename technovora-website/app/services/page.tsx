"use client";
import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import { ServiceCards } from "@/components/sections/ServiceCards";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Globe,
  Megaphone,
  Palette,
  Smartphone,
  CheckCircle2,
  X,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useI18n } from "@/components/layout/I18nProvider";
import type { LucideIcon } from "lucide-react";

const SERVICE_OUTCOME_KEYS = [
  "services.outcome.ai",
  "services.outcome.web",
  "services.outcome.mobile",
  "services.outcome.cloud",
  "services.outcome.design",
  "services.outcome.smm",
];

const SERVICE_ICONS: LucideIcon[] = [Bot, Globe, Smartphone, Cloud, Palette, Megaphone];

const PROCESS_STEPS = [
  { step: "01", titleKey: "services.architecture.1.title", descKey: "services.architecture.1.desc" },
  { step: "02", titleKey: "services.architecture.2.title", descKey: "services.architecture.2.desc" },
  { step: "03", titleKey: "services.architecture.3.title", descKey: "services.architecture.3.desc" },
  { step: "04", titleKey: "services.architecture.4.title", descKey: "services.architecture.4.desc" },
];

const COMPARISON_ROWS = [
  { col1: "services.comparison.row1.col1", col2: "services.comparison.row1.col2", col3: "services.comparison.row1.col3" },
  { col1: "services.comparison.row2.col1", col2: "services.comparison.row2.col2", col3: "services.comparison.row2.col3" },
  { col1: "services.comparison.row3.col1", col2: "services.comparison.row3.col2", col3: "services.comparison.row3.col3" },
  { col1: "services.comparison.row4.col1", col2: "services.comparison.row4.col2", col3: "services.comparison.row4.col3" },
];

const ROI_STATS = [
  { valueKey: "roi.stat.1", value: "40-60%", descKey: "services.roi.1.desc" },
  { valueKey: "roi.stat.2", value: "20hrs/wk", descKey: "services.roi.2.desc" },
  { valueKey: "roi.stat.3", value: "99+", descKey: "services2.roi.3.desc" },
  { valueKey: "roi.stat.4", value: "2 weeks", descKey: "services2.roi.4.desc" },
];

const FAQ_ITEMS = [
  { qKey: "services.faq.1.q", aKey: "services.faq.1.a" },
  { qKey: "services.faq.2.q", aKey: "services.faq.2.a" },
  { qKey: "services2.faq.3.q", aKey: "services2.faq.3.a" },
  { qKey: "services2.faq.4.q", aKey: "services2.faq.4.a" },
];

export default function ServicesPage() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageTransitionWrapper>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-bg-base px-6 pt-36 pb-24 text-center md:pt-48 md:pb-32">
        <div className="orb orb-orange -top-24 left-1/4" />
        <div className="orb orb-crimson top-10 right-0" />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl">
          <FadeIn>
            <span className="font-mono mb-6 inline-flex items-center gap-2 rounded-full border border-bg-border px-4 py-1.5 text-xs uppercase tracking-widest text-text-muted">
              <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
              {t("services2.hero.eyebrow")}
            </span>
            <h1 className="font-display text-5xl font-bold tracking-tight text-text md:text-7xl">
              {t("services.hero.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted md:text-xl">
              {t("services.hero.desc")}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                {t("services2.hero.cta")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                {t("services2.hero.cta2")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Services bento grid */}
      <section className="bg-bg-surface px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="font-mono mb-3 text-xs uppercase tracking-widest text-text-muted">
                {t("services2.grid.eyebrow")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
                {t("services2.grid.title")}
              </h2>
              <p className="mt-4 text-text-muted">{t("services2.grid.subtitle")}</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <FadeIn key={service.slug} delay={i * 0.06}>
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-2xl border border-bg-border bg-bg-elevated p-8 transition-colors hover:border-brand-orange/50"
                  >
                    <div className="mb-6 flex w-fit items-center justify-center rounded-xl bg-bg-surface p-3">
                      <Icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-text">
                      {t(`services.${service.slug}`)}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                      {t(SERVICE_OUTCOME_KEYS[i])}
                    </p>
                    <div className="mt-8 flex items-center justify-between border-t border-bg-border pt-5">
                      <span className="font-mono text-xs text-brand-magenta">
                        {t("services.capabilities.starts")} {service.entry}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. How we work */}
      <section className="bg-bg-base px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="font-mono mb-3 text-xs uppercase tracking-widest text-text-muted">
                {t("services2.process.eyebrow")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
                {t("services.architecture.title")}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {PROCESS_STEPS.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-bg-border bg-bg-elevated p-6">
                  <span className="font-mono mb-4 block text-sm text-brand-orange">{p.step}</span>
                  <h3 className="font-display mb-2 text-lg font-semibold text-text">{t(p.titleKey)}</h3>
                  <p className="text-sm text-text-muted">{t(p.descKey)}</p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="absolute top-1/2 -right-3 hidden h-5 w-5 -translate-y-1/2 text-text-faint md:block" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison table */}
      <section className="bg-bg-surface px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="font-mono mb-3 text-xs uppercase tracking-widest text-text-muted">
                {t("services2.comparison.eyebrow")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
                {t("services.comparison.title")}
              </h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-bg-border bg-bg-elevated">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-bg-border">
                      <th className="px-6 py-5 text-sm font-semibold text-text-muted">
                        {t("services.comparison.col1")}
                      </th>
                      <th className="bg-brand-orange/5 px-6 py-5 text-sm font-semibold text-brand-orange">
                        {t("services.comparison.col2")}
                      </th>
                      <th className="px-6 py-5 text-sm font-semibold text-text-muted">
                        {t("services.comparison.col3")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, i) => (
                      <tr
                        key={row.col1}
                        className={`transition-colors hover:bg-bg-surface ${
                          i < COMPARISON_ROWS.length - 1 ? "border-b border-bg-border" : ""
                        }`}
                      >
                        <td className="px-6 py-5 text-sm text-text">{t(row.col1)}</td>
                        <td className="bg-brand-orange/5 px-6 py-5 text-sm font-medium text-text">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-orange" />
                            {t(row.col2)}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm text-text-muted">
                          <span className="flex items-center gap-2">
                            <X className="h-4 w-4 shrink-0 text-text-faint" />
                            {t(row.col3)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Team Agents */}
      <ServiceCards />

      {/* 6. ROI / results band */}
      <section className="bg-bg-surface px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="font-mono mb-3 text-xs uppercase tracking-widest text-text-muted">
                {t("services2.roi.eyebrow")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text">{t("services.roi.title")}</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {ROI_STATS.map((stat, i) => (
              <FadeIn key={stat.valueKey} delay={i * 0.06}>
                <div className="rounded-2xl border border-bg-border bg-bg-elevated p-6 text-center md:p-8">
                  <p className="font-display text-3xl font-bold text-text md:text-4xl">{stat.value}</p>
                  <p className="mt-3 text-sm text-text-muted">{t(stat.descKey)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-bg-base px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-14 text-center">
              <p className="font-mono mb-3 text-xs uppercase tracking-widest text-text-muted">
                {t("services2.faq.eyebrow")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text">{t("services.faq.title")}</h2>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <FadeIn key={item.qKey} delay={i * 0.05}>
                  <div className="overflow-hidden rounded-2xl border border-bg-border bg-bg-elevated">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-semibold text-text">{t(item.qKey)}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-6 pb-5 text-sm leading-relaxed text-text-muted">{t(item.aKey)}</p>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="bg-bg-surface px-6 py-24 md:py-32">
        <FadeIn>
          <div className="bg-gradient-slanted mx-auto max-w-4xl rounded-3xl border border-bg-border px-8 py-16 text-center md:px-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text">{t("services.cta.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">{t("services.cta.desc")}</p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              {t("services.cta.button")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </PageTransitionWrapper>
  );
}
