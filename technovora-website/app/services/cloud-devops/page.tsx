"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useI18n } from "@/components/layout/I18nProvider";
import { SERVICES } from "@/lib/constants";
import {
  ArrowLeft,
  ArrowRight,
  Cloud,
  GitBranch,
  ShieldCheck,
  Gauge,
  DollarSign,
  Server,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SERVICE = SERVICES.find((s) => s.slug === "cloud-devops")!;

const INCLUDED_ITEMS: { icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { icon: Cloud, titleKey: "svc.cloud-devops.included.1.title", descKey: "svc.cloud-devops.included.1.desc" },
  { icon: GitBranch, titleKey: "svc.cloud-devops.included.2.title", descKey: "svc.cloud-devops.included.2.desc" },
  { icon: Server, titleKey: "svc.cloud-devops.included.3.title", descKey: "svc.cloud-devops.included.3.desc" },
  { icon: Gauge, titleKey: "svc.cloud-devops.included.4.title", descKey: "svc.cloud-devops.included.4.desc" },
  { icon: DollarSign, titleKey: "svc.cloud-devops.included.5.title", descKey: "svc.cloud-devops.included.5.desc" },
  { icon: ShieldCheck, titleKey: "svc.cloud-devops.included.6.title", descKey: "svc.cloud-devops.included.6.desc" },
];

const TECH_CHIPS = ["AWS", "Docker", "Terraform", "GitHub Actions", "Kubernetes", "Datadog", "CloudFront", "PostgreSQL"];

const PROCESS_STEPS = [
  { step: "01", titleKey: "services.architecture.1.title", descKey: "services.architecture.1.desc" },
  { step: "02", titleKey: "services.architecture.2.title", descKey: "services.architecture.2.desc" },
  { step: "03", titleKey: "services.architecture.3.title", descKey: "services.architecture.3.desc" },
  { step: "04", titleKey: "services.architecture.4.title", descKey: "services.architecture.4.desc" },
];

const FAQ_ITEMS = [
  { qKey: "svc.cloud-devops.faq.1.q", aKey: "svc.cloud-devops.faq.1.a" },
  { qKey: "svc.cloud-devops.faq.2.q", aKey: "svc.cloud-devops.faq.2.a" },
  { qKey: "svc.cloud-devops.faq.3.q", aKey: "svc.cloud-devops.faq.3.a" },
];

export default function CloudDevopsServicePage() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageTransitionWrapper>
      {/* 1. Breadcrumb + Hero */}
      <section className="relative overflow-hidden bg-bg-base px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="orb orb-orange -top-24 left-1/4" aria-hidden="true" />
        <div className="orb orb-crimson top-10 right-0" aria-hidden="true" />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <FadeIn>
            <Link
              href="/services"
              className="font-mono mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-brand-orange"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t("svc.cloud-devops.breadcrumb.back")}
            </Link>
            <div>
              <span className="font-mono mb-6 inline-flex items-center gap-2 rounded-full border border-bg-border px-4 py-1.5 text-xs uppercase tracking-widest text-text-muted">
                <Cloud className="h-3.5 w-3.5 text-brand-orange" />
                {t("svc.cloud-devops.hero.eyebrow")}
              </span>
              <h1 className="font-display text-5xl font-bold tracking-tight text-text md:text-7xl">
                {t("services.cloud-devops")}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted md:text-xl">
                {t("services.outcome.cloud")}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  {t("svc.cloud-devops.hero.cta1")} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/portfolio" className="btn-secondary">
                  {t("svc.cloud-devops.hero.cta2")}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Problem */}
      <section className="bg-bg-surface px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow={t("svc.cloud-devops.problem.eyebrow")}
              title={t("svc.cloud-devops.problem.title")}
              description={t("svc.cloud-devops.problem.desc")}
              centered
              className="mx-auto mb-16 max-w-3xl"
            />
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FadeIn delay={0}>
              <div className="h-full rounded-2xl border border-bg-border bg-bg-elevated p-8">
                <p className="font-display text-lg font-semibold text-text">{t("svc.cloud-devops.problem.1.title")}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{t("svc.cloud-devops.problem.1.desc")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="h-full rounded-2xl border border-brand-orange/30 bg-bg-elevated p-8">
                <p className="font-display text-lg font-semibold text-text">{t("problem.2.pain")}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{t("problem.2.cost")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="h-full rounded-2xl border border-bg-border bg-bg-elevated p-8">
                <p className="font-display text-lg font-semibold text-text">{t("svc.cloud-devops.problem.3.title")}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{t("svc.cloud-devops.problem.3.desc")}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. What's included */}
      <section className="bg-bg-base px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow={t("svc.cloud-devops.included.eyebrow")}
              title={t("svc.cloud-devops.included.title")}
              description={t("svc.cloud-devops.included.desc")}
              centered
              className="mx-auto mb-16 max-w-2xl"
            />
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.titleKey} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-bg-border bg-bg-elevated p-8 transition-colors hover:border-brand-orange/50">
                    <div className="mb-6 flex w-fit items-center justify-center rounded-xl bg-bg-surface p-3">
                      <Icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-text">{t(item.titleKey)}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{t(item.descKey)}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="bg-bg-surface px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionHeading
              eyebrow={t("svc.cloud-devops.process.eyebrow")}
              title={t("services.architecture.title")}
              centered
              className="mx-auto mb-16 max-w-2xl"
            />
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {PROCESS_STEPS.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-bg-border bg-bg-elevated p-6">
                  <span className="font-mono mb-4 block text-sm text-brand-orange">{p.step}</span>
                  <h3 className="font-display mb-2 text-lg font-semibold text-text">{t(p.titleKey)}</h3>
                  <p className="text-sm text-text-muted">{t(p.descKey)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tech & tools */}
      <section className="bg-bg-base px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="font-mono mb-3 text-xs uppercase tracking-widest text-text-muted">
                {t("svc.cloud-devops.tech.eyebrow")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
                {t("svc.cloud-devops.tech.title")}
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {TECH_CHIPS.map((tool) => (
                <span key={tool} className="tech-brick font-mono rounded-full border border-bg-border bg-bg-elevated px-5 py-2.5 text-sm text-text-muted">
                  {tool}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Pricing snapshot */}
      <section className="bg-bg-surface px-6 py-24 md:py-32">
        <FadeIn>
          <div className="bg-gradient-slanted mx-auto max-w-4xl rounded-3xl border border-bg-border px-8 py-16 text-center md:px-16">
            <p className="font-mono mb-3 text-xs uppercase tracking-widest text-text-muted">
              {t("svc.cloud-devops.pricing.eyebrow")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
              {t("services.capabilities.starts")} {SERVICE.entry}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">{t("svc.cloud-devops.pricing.desc")}</p>
            <Link href="/packages" className="btn-primary mt-8 inline-flex">
              {t("svc.cloud-devops.pricing.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 7. FAQ */}
      <section className="bg-bg-base px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-14 text-center">
              <p className="font-mono mb-3 text-xs uppercase tracking-widest text-text-muted">
                {t("svc.cloud-devops.faq.eyebrow")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text">
                {t("svc.cloud-devops.faq.title")}
              </h2>
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
                      <ChevronDown className={`h-5 w-5 shrink-0 text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && <p className="px-6 pb-5 text-sm leading-relaxed text-text-muted">{t(item.aKey)}</p>}
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
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text">{t("svc.cloud-devops.cta.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">{t("svc.cloud-devops.cta.desc")}</p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              {t("svc.cloud-devops.cta.button")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </PageTransitionWrapper>
  );
}
