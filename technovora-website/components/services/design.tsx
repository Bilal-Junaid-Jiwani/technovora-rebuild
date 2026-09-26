"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, CalendlyButton } from "./shared";

const CONTACT_EMAIL = "moin@technovora.com";

/* ── Design specimen panel (abstract, illustrative — not client work) ── */

function SpecimenPanel() {
  const { t } = useI18n();
  return (
    <figure className="card overflow-hidden">
      <div className="border-b border-hairline px-6 py-4">
        <p className="font-sans text-xs uppercase tracking-widest text-muted">
          {t("svc2.design.hero.specimenTitle")}
        </p>
      </div>
      <div className="p-6 md:p-8">
        <p className="display text-7xl text-foreground md:text-8xl" aria-hidden="true">
          Aa
        </p>
        <div className="mt-8 space-y-4 border-t border-hairline pt-6">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-3xl font-semibold text-foreground">Display</p>
            <p className="font-sans text-xs text-muted">48 / 1.1</p>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-xl font-semibold text-foreground">Heading</p>
            <p className="font-sans text-xs text-muted">24 / 1.3</p>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-base text-foreground">Body text, set for reading</p>
            <p className="font-sans text-xs text-muted">16 / 1.6</p>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-xs text-muted">Caption and metadata</p>
            <p className="font-sans text-xs text-muted">12 / 1.4</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 border-t border-hairline pt-6">
          <div>
            <div className="h-12 rounded-md bg-foreground" aria-hidden="true" />
            <p className="mt-2 font-sans text-xs text-muted">Ink</p>
          </div>
          <div>
            <div className="h-12 rounded-md border border-hairline bg-background" aria-hidden="true" />
            <p className="mt-2 font-sans text-xs text-muted">Paper</p>
          </div>
          <div>
            <div className="h-12 rounded-md bg-accent" aria-hidden="true" />
            <p className="mt-2 font-sans text-xs text-muted">Accent</p>
          </div>
        </div>
      </div>
      <figcaption className="border-t border-hairline bg-surface px-6 py-4 text-sm text-muted">
        {t("svc2.design.hero.specimenNote")}
      </figcaption>
    </figure>
  );
}

/* ── Crit-loop diagram: diverge → critique → converge → ship, then loop ── */

function CritLoopDiagram() {
  const { t } = useI18n();
  return (
    <svg
      viewBox="0 0 400 330"
      className="h-auto w-full"
      role="img"
      aria-label="Design loop diagram: diverge, critique, converge, ship, then repeat"
    >
      <defs>
        <marker
          id="crit-arrow"
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
      {/* diamond: Diverge → Critique → Converge → Ship */}
      <path
        d="M70,165 L200,65 L330,165 L200,265"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-muted"
        markerMid="url(#crit-arrow)"
        markerEnd="url(#crit-arrow)"
      />
      {/* return loop: Ship → Diverge */}
      <path
        d="M200,265 C110,300 30,250 62,180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        className="text-muted"
        markerEnd="url(#crit-arrow)"
      />
      {[
        { x: 70, y: 165, key: "1", lx: 70, ly: 200 },
        { x: 200, y: 65, key: "2", lx: 200, ly: 40 },
        { x: 330, y: 165, key: "3", lx: 330, ly: 200 },
        { x: 200, y: 265, key: "4", lx: 200, ly: 300 },
      ].map((n) => (
        <g key={n.key}>
          <circle
            cx={n.x}
            cy={n.y}
            r="7"
            className="fill-background stroke-accent"
            strokeWidth="2"
          />
          <text
            x={n.lx}
            y={n.ly}
            textAnchor="middle"
            fontSize="13"
            className="fill-foreground font-sans font-semibold"
          >
            {t(`svc2.design.crit.${n.key}.title`)}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Sections ────────────────────────────────────────────────────────── */

/** 1. Story-statement hero: large "We design…" statement + specimen panel. */
export function DesignHero() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h1 className="display text-4xl leading-tight text-foreground md:text-6xl">
              {t("svc2.design.hero.statement")}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {t("svc2.design.hero.sub")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CalendlyButton label={t("svc2.design.hero.cta1")} />
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary">
                {t("svc2.design.hero.cta2")}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SpecimenPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** 2. Design debt: annotated symptom list with margin annotations. */
export function DesignDebt() {
  const { t } = useI18n();
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.design.debt.eyebrow")}</p>
          <h2 className="h2 mt-4 max-w-2xl text-3xl text-foreground md:text-4xl">
            {t("svc2.design.debt.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {t("svc2.design.debt.desc")}
          </p>
        </Reveal>
        <div className="mt-12">
          {[1, 2, 3, 4].map((i) => (
            <Reveal key={i} delay={(i - 1) * 0.05}>
              <div className="grid gap-3 border-t border-hairline py-7 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-10">
                <p className="text-lg font-medium leading-snug text-foreground md:text-xl">
                  <span className="mr-3 font-sans text-sm text-accent" aria-hidden="true">
                    {String(i).padStart(2, "0")}
                  </span>
                  {t(`svc2.design.debt.${i}.symptom`)}
                </p>
                <p className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted md:pt-1">
                  {t(`svc2.design.debt.${i}.note`)}
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

/** 3. Verb-outcome rows: "We research → so you…". */
export function DesignVerbs() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.design.verbs.eyebrow")}</p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
            {t("svc2.design.verbs.title")}
          </h2>
        </Reveal>
        <div className="mt-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <Reveal key={i} delay={(i - 1) * 0.04}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-hairline py-6">
                <p className="text-xl font-semibold text-foreground md:text-2xl">
                  {t(`svc2.design.verbs.${i}.verb`)}
                </p>
                <ArrowRight className="h-5 w-5 shrink-0 self-center text-accent" aria-hidden="true" />
                <p className="text-xl text-muted md:text-2xl">
                  {t(`svc2.design.verbs.${i}.outcome`)}
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

/** 4. Crit loop: diverge → converge diagram + step list. */
export function DesignCritLoop() {
  const { t } = useI18n();
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t("svc2.design.crit.eyebrow")}</p>
            <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
              {t("svc2.design.crit.title")}
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
              {t("svc2.design.crit.desc")}
            </p>
            <ol className="mt-10 space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-background font-sans text-sm font-semibold text-accent"
                    aria-hidden="true"
                  >
                    {i}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {t(`svc2.design.crit.${i}.title`)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {t(`svc2.design.crit.${i}.desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
              {t("svc2.design.crit.note")}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <CritLoopDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** 5. Toolbox: tools as a single text line, no cards. */
export function DesignToolbox() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.design.toolbox.title")}</p>
          <p className="mt-6 max-w-4xl text-2xl leading-relaxed text-foreground md:text-4xl">
            {t("svc2.design.toolbox.line")}
          </p>
          <p className="mt-6 text-muted">{t("svc2.design.toolbox.note")}</p>
        </Reveal>
      </div>
    </section>
  );
}

/** 6. Giant email CTA: oversized mailto link. */
export function DesignCta() {
  const { t } = useI18n();
  return (
    <section className="bg-surface px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-5xl">
            {t("svc2.design.cta.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {t("svc2.design.cta.sub")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="display mt-10 inline-block break-all text-3xl text-foreground underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-5xl md:text-6xl"
          >
            {CONTACT_EMAIL}
          </a>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 font-sans text-xs uppercase tracking-widest text-muted">
            {t("svc2.design.cta.note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
