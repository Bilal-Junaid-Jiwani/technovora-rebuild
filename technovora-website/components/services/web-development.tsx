"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { ServiceDef } from "@/lib/services";
import { Reveal, ServiceBreadcrumb, CalendlyButton } from "./shared";

type Props = { service: ServiceDef };

/** Chapter hero: centered narrow column, chapter numeral "01", headline, lead paragraph. [frog: chapter structure] */
export function WebHero({ service }: Props) {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <div className="flex justify-start">
            <ServiceBreadcrumb />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="display mt-10 text-sm tracking-[0.2em] text-accent">
            {t("svc.web-development.hero.numeral")}
          </p>
          <p className="eyebrow mt-6">{t(service.heroEyebrowKey)}</p>
          <h1 className="display mt-5 text-4xl text-foreground md:text-6xl">
            {t(service.heroTitleKey)}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t("svc.web-development.hero.lead")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CalendlyButton label={t("svc.shared.bookCall")} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Before/After: hairline rows, Before → After pairs. */
export function WebBeforeAfter() {
  const { t } = useI18n();
  const pairs = [1, 2, 3, 4, 5].map((i) => ({
    before: t(`svc.web-development.beforeafter.${i}.before`),
    after: t(`svc.web-development.beforeafter.${i}.after`),
  }));
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("svc.web-development.beforeafter.title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {t("svc.web-development.beforeafter.intro")}
          </p>
        </Reveal>
        <div className="mt-10">
          {pairs.map((pair, i) => (
            <Reveal key={pair.before} delay={i * 0.04}>
              <div className="grid gap-2 border-t border-hairline py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
                <p className="text-base text-muted line-through decoration-hairline">
                  {pair.before}
                </p>
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-accent md:block"
                  aria-hidden="true"
                />
                <p className="text-base font-medium text-foreground">{pair.after}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Chapters: numbered prose chapters 01–04. */
export function WebChapters() {
  const { t } = useI18n();
  const chapters = [1, 2, 3, 4].map((i) => ({
    numeral: `0${i}`,
    title: t(`svc.web-development.chapters.${i}.title`),
    body: t(`svc.web-development.chapters.${i}.body`),
  }));
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("svc.web-development.chapters.title")}
          </h2>
        </Reveal>
        <div className="mt-12 space-y-14">
          {chapters.map((c, i) => (
            <Reveal key={c.numeral} delay={i * 0.05}>
              <article className="border-t-2 border-foreground pt-6">
                <div className="flex items-baseline gap-5">
                  <span className="display text-sm tracking-[0.2em] text-accent">
                    {c.numeral}
                  </span>
                  <h3 className="h2 text-2xl text-foreground md:text-3xl">{c.title}</h3>
                </div>
                <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Stack table: definition table, category → tools. */
export function WebStackTable() {
  const { t } = useI18n();
  const rows = [1, 2, 3, 4, 5].map((i) => ({
    category: t(`svc.web-development.stack.${i}.category`),
    tools: t(`svc.web-development.stack.${i}.tools`),
  }));
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("svc.web-development.stack.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <dl className="mt-10">
            {rows.map((row) => (
              <div
                key={row.category}
                className="grid gap-1 border-t border-hairline py-5 md:grid-cols-[200px_1fr] md:gap-8"
              >
                <dt className="text-sm font-semibold text-foreground">{row.category}</dt>
                <dd className="text-base text-muted">{row.tools}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/** Scope shapers: "what shapes the scope" list + pointer to /packages. */
export function WebPriceFactors() {
  const { t } = useI18n();
  const factors = [1, 2, 3, 4, 5].map((i) => t(`svc.web-development.pricing.${i}`));
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("svc.web-development.pricing.title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {t("svc.web-development.pricing.intro")}
          </p>
        </Reveal>
        <ol className="mt-8 space-y-0">
          {factors.map((factor, i) => (
            <Reveal key={factor} delay={i * 0.04}>
              <li className="flex items-baseline gap-5 border-t border-hairline py-4">
                <span className="font-sans text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base text-foreground">{factor}</span>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="mt-10 rounded-xl border border-hairline bg-surface px-6 py-6">
            <p className="text-base text-foreground">{t("svc.web-development.pricing.note")}</p>
            <Link
              href="/packages"
              className="mt-3 inline-flex items-center gap-2 font-medium text-accent hover:underline"
            >
              {t("svc.web-development.pricing.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** CTA: left-aligned statement + single button + small print. */
export function WebCta() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 pb-24 md:pb-32">
      <Reveal>
        <div className="mx-auto max-w-5xl border-t border-hairline pt-12">
          <p className="display max-w-2xl text-3xl text-foreground md:text-5xl">
            {t("svc.web-development.cta.statement")}
          </p>
          <div className="mt-8">
            <CalendlyButton label={t("svc.web-development.cta.button")} />
          </div>
          <p className="mt-5 text-sm text-muted">{t("svc.web-development.cta.fine")}</p>
        </div>
      </Reveal>
    </section>
  );
}
