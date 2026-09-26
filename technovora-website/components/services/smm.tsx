"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, CalendlyButton } from "./shared";

const CONTACT_EMAIL = "moin@technovora.com";

/* ── Cycle diagram: measure → learn → adjust, looping ── */

function CycleDiagram() {
  const { t } = useI18n();
  const nodes = [
    { key: "1", num: "1", cx: 160, cy: 48, lx: 160, ly: 100 },
    { key: "2", num: "2", cx: 240, cy: 186, lx: 240, ly: 238 },
    { key: "3", num: "3", cx: 80, cy: 186, lx: 80, ly: 238 },
  ];
  return (
    <svg
      viewBox="0 0 320 270"
      className="h-auto w-full"
      role="img"
      aria-label="Cycle diagram: measure, learn, adjust, repeating every month"
    >
      <defs>
        <marker
          id="smm-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" className="fill-accent" />
        </marker>
      </defs>
      {/* arcs: 270°→30°, 30°→150°, 150°→270° on r=92 around (160,140) */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted">
        <path d="M206,60.3 A92,92 0 0 1 252,140" markerEnd="url(#smm-arrow)" />
        <path d="M206,219.7 A92,92 0 0 1 114,219.7" markerEnd="url(#smm-arrow)" />
        <path d="M68,140 A92,92 0 0 1 114,60.3" markerEnd="url(#smm-arrow)" />
      </g>
      {nodes.map((n) => (
        <g key={n.key}>
          <circle
            cx={n.cx}
            cy={n.cy}
            r="30"
            className="fill-surface stroke-hairline"
            strokeWidth="1.5"
          />
          <text
            x={n.cx}
            y={n.cy + 6}
            textAnchor="middle"
            fontSize="16"
            className="fill-foreground font-sans font-semibold"
          >
            {n.num}
          </text>
          <text
            x={n.lx}
            y={n.ly}
            textAnchor="middle"
            fontSize="13"
            className="fill-foreground font-sans font-semibold"
          >
            {t(`svc2.smm.cycle.${n.key}.title`)}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Sections ────────────────────────────────────────────────────────── */

/** 1. Spine hero: headline + Task/Solution/Result mini-spine strip. */
export function SmmHero() {
  const { t } = useI18n();
  const spine = ["task", "solution", "result"] as const;
  return (
    <section className="bg-background px-6 pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.smm.hero.eyebrow")}</p>
          <h1 className="display mt-5 max-w-3xl text-4xl text-foreground md:text-6xl">
            {t("svc2.smm.hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {t("svc2.smm.hero.sub")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CalendlyButton label={t("svc2.smm.hero.cta1")} />
            <Link href="/packages" className="btn-secondary">
              {t("svc2.smm.hero.cta2")}
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-14 flex flex-col gap-4 md:flex-row md:items-stretch">
            {spine.map((s, i) => (
              <div key={s} className="flex flex-1 flex-col md:flex-row md:items-stretch">
                <div className="card flex-1 p-6">
                  <p className="font-sans text-xs uppercase tracking-widest text-accent">
                    {t(`svc2.smm.hero.spine.${s}.label`)}
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground">
                    {t(`svc2.smm.hero.spine.${s}.text`)}
                  </p>
                </div>
                {i < spine.length - 1 && (
                  <div className="flex items-center justify-center py-1 md:px-3 md:py-0" aria-hidden="true">
                    <ArrowDown className="h-5 w-5 text-muted md:hidden" />
                    <ArrowRight className="hidden h-5 w-5 text-muted md:block" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 2. Task brief: brief-document style pain list. */
export function SmmTask() {
  const { t } = useI18n();
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-hairline px-6 py-4 md:px-8">
              <p className="font-sans text-xs uppercase tracking-widest text-muted">
                {t("svc2.smm.task.eyebrow")}
              </p>
              <p className="font-sans text-xs text-muted">5 points</p>
            </div>
            <div className="px-6 py-8 md:px-8">
              <h2 className="h2 text-2xl text-foreground md:text-3xl">
                {t("svc2.smm.task.title")}
              </h2>
              <ol className="mt-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li
                    key={i}
                    className="flex gap-4 border-t border-hairline py-5 last:border-b"
                  >
                    <span
                      className="font-sans text-sm font-semibold text-accent"
                      aria-hidden="true"
                    >
                      {String(i).padStart(2, "0")}
                    </span>
                    <p className="leading-relaxed text-foreground">
                      {t(`svc2.smm.task.${i}`)}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
                {t("svc2.smm.task.note")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 3. Solution: deliverable rows with Weekly/Monthly cadence tags. */
export function SmmSolution() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.smm.solution.eyebrow")}</p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
            {t("svc2.smm.solution.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {t("svc2.smm.solution.desc")}
          </p>
        </Reveal>
        <div className="mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Reveal key={i} delay={(i - 1) * 0.04}>
              <div className="grid gap-3 border-t border-hairline py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t(`svc2.smm.solution.${i}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {t(`svc2.smm.solution.${i}.desc`)}
                  </p>
                </div>
                <span
                  className={`inline-flex w-fit shrink-0 rounded-full px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest ${
                    t(`svc2.smm.solution.${i}.cadence`) === "Weekly"
                      ? "bg-accent-soft text-accent"
                      : "border border-hairline text-muted"
                  }`}
                >
                  {t(`svc2.smm.solution.${i}.cadence`)}
                </span>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-hairline" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

/** 4. Cycle: measure → learn → adjust loop diagram + step list. */
export function SmmCycle() {
  const { t } = useI18n();
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="mx-auto w-full max-w-md">
            <CycleDiagram />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">{t("svc2.smm.cycle.eyebrow")}</p>
            <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
              {t("svc2.smm.cycle.title")}
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              {t("svc2.smm.cycle.desc")}
            </p>
            <ol className="mt-10 space-y-6">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-background font-sans text-sm font-semibold text-accent"
                    aria-hidden="true"
                  >
                    {i}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {t(`svc2.smm.cycle.${i}.title`)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {t(`svc2.smm.cycle.${i}.desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
              {t("svc2.smm.cycle.note")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** 5. Compact tier table: 3 retainer tiers + pointer to /packages. */
export function SmmTiers() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.smm.tiers.eyebrow")}</p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
            {t("svc2.smm.tiers.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {t("svc2.smm.tiers.desc")}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-hairline">
                  {["tier", "includes", "fit"].map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="pb-4 pr-6 font-sans text-xs uppercase tracking-widest text-muted"
                    >
                      {t(`svc2.smm.tiers.col.${col}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="border-b border-hairline last:border-0">
                    <th scope="row" className="py-5 pr-6 font-semibold text-foreground">
                      {t(`svc2.smm.tiers.${i}.tier`)}
                    </th>
                    <td className="py-5 pr-6 text-sm leading-relaxed text-muted">
                      {t(`svc2.smm.tiers.${i}.includes`)}
                    </td>
                    <td className="py-5 text-sm leading-relaxed text-muted">
                      {t(`svc2.smm.tiers.${i}.fit`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 text-muted">
            {t("svc2.smm.tiers.note")}{" "}
            <Link href="/packages" className="font-medium text-accent hover:underline">
              {t("svc2.smm.tiers.cta")} →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** 6. Sample-request CTA: sample content calendar + mailto button. */
export function SmmCta() {
  const { t } = useI18n();
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-5xl">
            {t("svc2.smm.cta.title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t("svc2.smm.cta.desc")}
          </p>
          <div className="mt-8">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Sample%20content%20calendar%20request`}
              className="btn-primary"
            >
              {t("svc2.smm.cta.button")}
            </a>
            <p className="mt-4 text-sm text-muted">{t("svc2.smm.cta.note")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
