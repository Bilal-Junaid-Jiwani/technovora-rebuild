"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, CalendlyButton } from "./shared";

/* ── Shared bits ─────────────────────────────────────────────────────── */

function PipelineDiagram() {
  const nodes = [
    { x: 0, title: "code", sub: "GitHub" },
    { x: 134, title: "build", sub: "Docker" },
    { x: 268, title: "test", sub: "CI checks" },
    { x: 402, title: "deploy", sub: "AWS · GCP" },
    { x: 536, title: "observe", sub: "alerts" },
  ];
  return (
    <svg
      viewBox="0 0 640 200"
      className="h-auto w-full"
      role="img"
      aria-label="Schematic of a deployment pipeline: code, build, test, deploy, observe, with a feedback loop"
    >
      <defs>
        <marker
          id="cloud-arrow"
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
      {/* feedback loop */}
      <path
        d="M588,84 L588,152 L52,152 L52,84"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        className="text-muted"
        markerEnd="url(#cloud-arrow)"
      />
      <text
        x="320"
        y="172"
        textAnchor="middle"
        fontSize="11"
        className="fill-muted font-sans"
      >
        feedback loop
      </text>
      {nodes.map((n, i) => (
        <g key={n.title}>
          <rect
            x={n.x}
            y="16"
            width="104"
            height="64"
            rx="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-muted"
          />
          <text
            x={n.x + 52}
            y="44"
            textAnchor="middle"
            fontSize="13"
            className="fill-foreground font-sans font-semibold"
          >
            {n.title}
          </text>
          <text
            x={n.x + 52}
            y="62"
            textAnchor="middle"
            fontSize="10"
            className="fill-muted font-sans"
          >
            {n.sub}
          </text>
          {i < nodes.length - 1 && (
            <line
              x1={n.x + 104}
              y1="48"
              x2={n.x + 134}
              y2="48"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent"
              markerEnd="url(#cloud-arrow)"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

function PhaseDiagram({ phase }: { phase: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
  } as const;
  return (
    <svg
      viewBox="0 0 120 72"
      className="h-16 w-auto text-muted"
      aria-hidden="true"
    >
      {phase === 1 && (
        <g {...common}>
          <rect x="10" y="10" width="52" height="10" rx="2" />
          <rect x="10" y="28" width="52" height="10" rx="2" />
          <rect x="10" y="46" width="52" height="10" rx="2" />
          <circle cx="90" cy="42" r="14" />
          <line x1="100" y1="52" x2="110" y2="62" />
        </g>
      )}
      {phase === 2 && (
        <g {...common}>
          <rect x="6" y="24" width="30" height="24" rx="4" />
          <rect x="45" y="24" width="30" height="24" rx="4" />
          <rect x="84" y="24" width="30" height="24" rx="4" />
          <line x1="36" y1="36" x2="45" y2="36" className="text-accent" />
          <line x1="75" y1="36" x2="84" y2="36" className="text-accent" />
          <line x1="14" y1="32" x2="28" y2="32" />
          <line x1="14" y1="40" x2="24" y2="40" />
        </g>
      )}
      {phase === 3 && (
        <g {...common}>
          <rect x="32" y="8" width="56" height="38" rx="4" />
          <polyline
            points="40,30 50,30 55,20 62,40 68,27 74,30 82,30"
            className="text-accent"
          />
          <line x1="60" y1="46" x2="60" y2="56" />
          <line x1="48" y1="56" x2="72" y2="56" />
        </g>
      )}
      {phase === 4 && (
        <g {...common}>
          <rect x="42" y="6" width="36" height="56" rx="4" />
          <line x1="50" y1="18" x2="70" y2="18" />
          <line x1="50" y1="26" x2="70" y2="26" />
          <line x1="50" y1="34" x2="64" y2="34" />
          <polyline
            points="50,46 56,52 70,38"
            className="text-accent"
          />
        </g>
      )}
    </svg>
  );
}

/* ── Sections ────────────────────────────────────────────────────────── */

/** 1. Schematic hero: headline + labeled SVG pipeline diagram. */
export function CloudHero() {
  const { t } = useI18n();
  return (
    <section className="bg-background px-6 pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t("svc2.cloud.hero.eyebrow")}</p>
            <h1 className="display mt-5 text-4xl text-foreground md:text-6xl">
              {t("svc2.cloud.hero.title")}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {t("svc2.cloud.hero.sub")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CalendlyButton label={t("svc2.cloud.hero.cta1")} />
              <Link href="/packages" className="btn-secondary">
                {t("svc2.cloud.hero.cta2")}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <figure>
              <div className="card p-6 md:p-8">
                <PipelineDiagram />
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted">
                {t("svc2.cloud.hero.diagramCaption")}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** 2. Risk register: risk → mitigation table rows. */
export function CloudRisks() {
  const { t } = useI18n();
  const rows = [1, 2, 3, 4];
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.cloud.risks.eyebrow")}</p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
            {t("svc2.cloud.risks.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {t("svc2.cloud.risks.desc")}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-12">
            <div
              className="hidden grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 pb-4 md:grid"
              aria-hidden="true"
            >
              <p className="font-sans text-xs uppercase tracking-widest text-muted">
                {t("svc2.cloud.risks.col.risk")}
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-muted">
                {t("svc2.cloud.risks.col.mitigation")}
              </p>
            </div>
            {rows.map((i) => (
              <div
                key={i}
                className="grid gap-2 border-t border-hairline py-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8"
              >
                <h3 className="font-semibold leading-snug text-foreground">
                  {t(`svc2.cloud.risks.${i}.risk`)}
                </h3>
                <p className="leading-relaxed text-muted">
                  {t(`svc2.cloud.risks.${i}.mitigation`)}
                </p>
              </div>
            ))}
            <div className="border-t border-hairline" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 3. Illustrated phases: 01–04 cards, each with a small diagram panel. */
export function CloudPhases() {
  const { t } = useI18n();
  const phases = [1, 2, 3, 4];
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.cloud.phases.eyebrow")}</p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
            {t("svc2.cloud.phases.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {t("svc2.cloud.phases.desc")}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((i) => (
            <Reveal key={i} delay={(i - 1) * 0.06}>
              <article className="card flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm font-semibold text-accent">
                    {String(i).padStart(2, "0")}
                  </span>
                  <PhaseDiagram phase={i} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {t(`svc2.cloud.phases.${i}.title`)}
                </h3>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-muted">
                  {t(`svc2.cloud.phases.${i}.diagram`)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(`svc2.cloud.phases.${i}.desc`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 4. Layer stack: DNS → CDN → App → DB stacked diagram. */
export function CloudLayers() {
  const { t } = useI18n();
  const layers = [1, 2, 3, 4];
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.cloud.layers.eyebrow")}</p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
            {t("svc2.cloud.layers.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {t("svc2.cloud.layers.desc")}
          </p>
        </Reveal>
        <div className="relative mt-12 pl-10">
          <span
            className="absolute bottom-6 left-[15px] top-6 w-px bg-hairline"
            aria-hidden="true"
          />
          <ol className="space-y-2">
            {layers.map((i) => (
              <Reveal key={i} delay={(i - 1) * 0.05}>
                <li className="relative">
                  <span
                    className="absolute -left-10 top-8 flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-background font-sans text-xs font-semibold text-accent"
                    aria-hidden="true"
                  >
                    {i}
                  </span>
                  <div className="rounded-xl border border-hairline bg-background p-5 md:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-sans text-base font-semibold text-foreground">
                        {t(`svc2.cloud.layers.${i}.name`)}
                      </h3>
                      <p className="font-sans text-sm text-muted">
                        {t(`svc2.cloud.layers.${i}.tool`)}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t(`svc2.cloud.layers.${i}.desc`)}
                    </p>
                  </div>
                  {i < layers.length && (
                    <div className="flex justify-center py-1" aria-hidden="true">
                      <ArrowDown className="h-4 w-4 text-muted" />
                    </div>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
            {t("svc2.cloud.layers.note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** 5. Two engagement options: Project vs Retainer + pointer to /packages. */
export function CloudPricing() {
  const { t } = useI18n();
  const options = ["project", "retainer"] as const;
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">{t("svc2.cloud.pricing.eyebrow")}</p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
            {t("svc2.cloud.pricing.title")}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {options.map((opt, idx) => (
            <Reveal key={opt} delay={idx * 0.08}>
              <article className="card flex h-full flex-col p-8">
                <h3 className="text-2xl font-semibold text-foreground">
                  {t(`svc2.cloud.pricing.${opt}.title`)}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {t(`svc2.cloud.pricing.${opt}.desc`)}
                </p>
                <ul className="mt-6 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {t(`svc2.cloud.pricing.${opt}.${i}`)}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <a
                    href={t("common.calendly")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-accent hover:underline"
                  >
                    {t("svc2.cloud.pricing.cardCta")}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-muted">
            {t("svc2.cloud.pricing.note")}{" "}
            <Link href="/packages" className="font-medium text-accent hover:underline">
              {t("svc2.cloud.pricing.cta")} →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** 6. Checklist CTA: what the free infrastructure audit covers + button. */
export function CloudCta() {
  const { t } = useI18n();
  return (
    <section className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">{t("svc2.cloud.cta.eyebrow")}</p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-5xl">
            {t("svc2.cloud.cta.title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t("svc2.cloud.cta.desc")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-8">
            <p className="font-sans text-xs uppercase tracking-widest text-muted">
              {t("svc2.cloud.cta.listTitle")}
            </p>
            <ul className="mt-5 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-foreground">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft"
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </span>
                  {t(`svc2.cloud.cta.${i}`)}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CalendlyButton label={t("svc2.cloud.cta.button")} />
              <p className="mt-3 text-sm text-muted">{t("svc2.cloud.cta.note")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
