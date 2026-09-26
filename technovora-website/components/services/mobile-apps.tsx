"use client";

import { ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { ServiceDef } from "@/lib/services";
import { Reveal, ServiceBreadcrumb, CalendlyButton } from "./shared";

type Props = { service: ServiceDef };

/** Triptych hero: headline + sub + three mini panels anchoring to sections below. [8th Light: Challenge/Partnership/Impact triptych] */
export function MobileHero({ service }: Props) {
  const { t } = useI18n();
  const panels = [
    { anchor: "#challenge", title: t("svc.mobile-apps.hero.triptych.1.title"), desc: t("svc.mobile-apps.hero.triptych.1.desc") },
    { anchor: "#partnership", title: t("svc.mobile-apps.hero.triptych.2.title"), desc: t("svc.mobile-apps.hero.triptych.2.desc") },
    { anchor: "#impact", title: t("svc.mobile-apps.hero.triptych.3.title"), desc: t("svc.mobile-apps.hero.triptych.3.desc") },
  ];
  return (
    <section className="border-b border-hairline bg-surface px-6 pb-16 pt-28 md:pb-20 md:pt-36">
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
            {t("svc.mobile-apps.hero.sub")}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-3">
            {panels.map((p) => (
              <a
                key={p.anchor}
                href={p.anchor}
                className="group bg-background px-6 py-7 transition-colors hover:bg-surface"
              >
                <p className="font-semibold text-foreground">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <ArrowDown
                  className="mt-4 h-4 w-4 text-accent transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Challenge: narrative prose + pull list beside. */
export function MobileChallenge() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4].map((i) => t(`svc.mobile-apps.challenge.list.${i}`));
  return (
    <section id="challenge" className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("svc.mobile-apps.challenge.title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            {t("svc.mobile-apps.challenge.body1")}
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            {t("svc.mobile-apps.challenge.body2")}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <aside className="rounded-xl border border-hairline bg-background px-6 py-7 md:mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {t("svc.mobile-apps.challenge.list.title")}
            </p>
            <ul className="mt-5 space-y-4">
              {items.map((item) => (
                <li key={item} className="border-t border-hairline pt-4 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

/** Partnership: week-by-week paired rows. */
export function MobilePartnership() {
  const { t } = useI18n();
  const rows = [1, 2, 3, 4].map((i) => ({
    label: t(`svc.mobile-apps.partnership.week${i}.label`),
    activity: t(`svc.mobile-apps.partnership.week${i}.activity`),
  }));
  return (
    <section id="partnership" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("svc.mobile-apps.partnership.title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {t("svc.mobile-apps.partnership.intro")}
          </p>
        </Reveal>
        <div className="mt-10">
          {rows.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.05}>
              <div className="grid gap-2 border-t border-hairline py-7 md:grid-cols-[160px_1fr] md:gap-10">
                <p className="font-sans text-sm font-medium text-accent">{row.label}</p>
                <p className="text-base leading-relaxed text-foreground md:text-lg">
                  {row.activity}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-hairline" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

/** Impact: labeled qualitative result statements, no numerals. */
export function MobileImpact() {
  const { t } = useI18n();
  const results = [1, 2, 3, 4].map((i) => ({
    label: t(`svc.mobile-apps.impact.${i}.label`),
    text: t(`svc.mobile-apps.impact.${i}.text`),
  }));
  return (
    <section id="impact" className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("svc.mobile-apps.impact.title")}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={(i % 2) * 0.05}>
              <div className="h-full bg-background px-7 py-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {r.label}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Platforms: iOS / Android / cross-platform grouped panels. */
export function MobilePlatforms() {
  const { t } = useI18n();
  const panels = [1, 2, 3].map((i) => ({
    title: t(`svc.mobile-apps.platforms.${i}.title`),
    desc: t(`svc.mobile-apps.platforms.${i}.desc`),
    notes: ["a", "b"].map((n) => t(`svc.mobile-apps.platforms.${i}.${n}`)),
  }));
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("svc.mobile-apps.platforms.title")}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {panels.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="card h-full px-7 py-8">
                <h3 className="h2 text-xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
                <ul className="mt-6 space-y-3">
                  {p.notes.map((note) => (
                    <li key={note} className="border-t border-hairline pt-3 text-sm text-foreground">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** CTA: thin meta-rule + centered CTA band. */
export function MobileCta() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="flex items-center justify-between border-t border-hairline pt-4">
            <p className="font-sans text-xs text-muted">{t("svc.mobile-apps.cta.meta")}</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="pt-12 text-center">
            <h2 className="h2 text-3xl text-foreground md:text-4xl">
              {t("svc.mobile-apps.cta.headline")}
            </h2>
            <div className="mt-8 flex justify-center">
              <CalendlyButton label={t("svc.mobile-apps.cta.button")} />
            </div>
            <p className="mt-5 text-sm text-muted">{t("svc.mobile-apps.cta.fine")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
