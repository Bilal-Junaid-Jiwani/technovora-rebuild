"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { ServiceDef } from "@/lib/services";
import { Reveal, ServiceBreadcrumb, CalendlyButton } from "./shared";

type Props = { service: ServiceDef };

/** Roadmap hero: headline + horizontal week-by-week mini timeline strip. [Brainhub: Day 1→Day 10 delivery roadmap] */
export function AiHero({ service }: Props) {
  const { t } = useI18n();
  const weeks = [1, 2, 3].map((i) => ({
    title: t(`svc.ai-automation.hero.week${i}.title`),
    desc: t(`svc.ai-automation.hero.week${i}.desc`),
  }));
  return (
    <section className="bg-background px-6 pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <ServiceBreadcrumb />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="eyebrow mt-10">{t(service.heroEyebrowKey)}</p>
          <h1 className="display mt-5 max-w-3xl text-4xl text-foreground md:text-6xl">
            {t(service.heroTitleKey)}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t(service.heroTaglineKey)}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CalendlyButton label={t("svc.shared.bookCall")} />
            <Link href="/packages" className="btn-secondary">
              {t("svc.shared.seePackages")}
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <ol className="mt-14 grid gap-0 border-t border-hairline md:grid-cols-3">
            {weeks.map((w, i) => (
              <li
                key={w.title}
                className={`relative py-6 pr-6 md:pl-6 ${
                  i > 0 ? "border-t border-hairline md:border-l md:border-t-0" : ""
                } ${i === 0 ? "md:pl-0" : ""}`}
              >
                <span
                  className="absolute -top-px left-0 h-[2px] w-10 bg-accent"
                  aria-hidden="true"
                />
                <p className="font-semibold text-foreground">{w.title}</p>
                <p className="mt-1 text-sm text-muted">{w.desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/** Symptoms: two-column checklist of automation symptoms. */
export function AiSymptoms() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6].map((i) => t(`svc.ai-automation.symptoms.${i}`));
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="h2 max-w-2xl text-3xl text-foreground md:text-4xl">
            {t("svc.ai-automation.symptoms.title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {t("svc.ai-automation.symptoms.intro")}
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 0.05}>
              <li className="flex items-start gap-4 border-t border-hairline py-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                  <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                </span>
                <span className="text-base text-foreground">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Roadmap: Day 1→Day 21 phased timeline with deliverables per phase. */
export function AiRoadmap() {
  const { t } = useI18n();
  const phases = [1, 2, 3, 4].map((i) => ({
    range: t(`svc.ai-automation.roadmap.phase${i}.range`),
    title: t(`svc.ai-automation.roadmap.phase${i}.title`),
    desc: t(`svc.ai-automation.roadmap.phase${i}.desc`),
    deliverables: [1, 2, 3].map((d) => t(`svc.ai-automation.roadmap.phase${i}.d${d}`)),
  }));
  return (
    <section id="roadmap" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="h2 max-w-2xl text-3xl text-foreground md:text-4xl">
            {t("svc.ai-automation.roadmap.title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {t("svc.ai-automation.roadmap.intro")}
          </p>
        </Reveal>
        <div className="mt-12">
          {phases.map((phase, i) => (
            <Reveal key={phase.title} delay={i * 0.05}>
              <div className="grid gap-6 border-t border-hairline py-8 md:grid-cols-[160px_1fr_1fr] md:gap-10">
                <div>
                  <p className="font-sans text-sm text-accent">{phase.range}</p>
                  <h3 className="h2 mt-2 text-2xl text-foreground">{phase.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-muted">{phase.desc}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Deliverables
                  </p>
                  <ul className="mt-3 space-y-2">
                    {phase.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Stack: prose paragraph naming tools inline + grouped text chips. */
export function AiStack() {
  const { t } = useI18n();
  const groups: { label: string; tools: string[] }[] = [
    { label: "Orchestration", tools: ["n8n", "Make", "Zapier"] },
    { label: "AI models", tools: ["Claude", "OpenAI"] },
    { label: "Connectors", tools: ["REST APIs", "Webhooks", "Slack", "Notion"] },
    { label: "Data", tools: ["PostgreSQL"] },
  ];
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="h2 max-w-2xl text-3xl text-foreground md:text-4xl">
            {t("svc.ai-automation.stack.title")}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-loose text-muted md:text-xl">
            {t("svc.ai-automation.stack.prose")}
          </p>
        </Reveal>
        <div className="mt-12 space-y-6">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
                <p className="w-32 shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-hairline bg-background px-4 py-1.5 text-sm text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** How-we-scope card: estimation scoping process + pointer to /packages. */
export function AiPricing() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-surface px-8 py-10 md:px-12 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            {t("svc.ai-automation.pricing.title")}
          </p>
          <p className="mt-4 text-xl leading-relaxed text-foreground md:text-2xl">
            {t("svc.ai-automation.pricing.desc")}
          </p>
          <Link
            href="/packages"
            className="mt-6 inline-flex items-center gap-2 font-medium text-accent hover:underline"
          >
            {t("svc.ai-automation.pricing.cta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

/** CTA: bordered offer card — free 30-min automation audit + Calendly. */
export function AiCta() {
  const { t } = useI18n();
  const items = [1, 2, 3].map((i) => t(`svc.ai-automation.cta.a${i}`));
  return (
    <section className="bg-background px-6 pb-24 md:pb-32">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-hairline px-8 py-12 text-center md:px-16 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Free offer
          </p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
            {t("svc.ai-automation.cta.headline")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {t("svc.ai-automation.cta.sub")}
          </p>
          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CalendlyButton label={t("svc.ai-automation.cta.button")} />
          </div>
          <p className="mt-5 text-xs text-muted">{t("svc.ai-automation.cta.fine")}</p>
        </div>
      </Reveal>
    </section>
  );
}
