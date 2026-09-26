"use client";

import type { ReactNode } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useI18n } from "@/components/layout/I18nProvider";
import { Lock, Unlock, Play, Check, GitCommitHorizontal, MessageCircle } from "lucide-react";

/* ── Mini UI mockups — deliberately language-neutral (code, numbers, initials) ── */

function CommitsVisual() {
  const rows = [
    ["a3f9c1e", "feat: lead scoring pipeline"],
    ["7b21d0a", "fix: edge cache invalidation"],
    ["e94c7f3", "perf: deploy 4h → 11m"],
  ];
  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="flex items-center">
        {["AC", "SK", "JL", "MR"].map((i, idx) => (
          <span
            key={i}
            className="-ml-2 first:ml-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-bg-elevated bg-magenta/15 text-xs font-bold text-magenta"
            style={{ zIndex: 10 - idx }}
          >
            {i}
          </span>
        ))}
        <span className="ml-3 rounded-full border border-magenta/30 bg-magenta/10 px-3 py-1 font-mono text-[11px] text-magenta">
          10+ yrs
        </span>
      </div>
      <div className="space-y-2 rounded-xl border border-bg-border bg-bg-base p-4 font-mono text-xs">
        {rows.map(([hash, msg]) => (
          <div key={hash} className="flex items-center gap-3">
            <GitCommitHorizontal className="h-3.5 w-3.5 shrink-0 text-magenta" />
            <span className="text-text-faint">{hash}</span>
            <span className="truncate text-text-muted">{msg}</span>
            <Check className="ml-auto h-3.5 w-3.5 shrink-0 text-magenta" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceVisual() {
  return (
    <div className="rounded-xl border border-bg-border bg-bg-base p-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-3xl font-bold text-text">$15,000</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-magenta/10 text-magenta">
          <Lock className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {[92, 68, 80].map((w, i) => (
          <div key={i} className="h-2 rounded-full bg-bg-elevated">
            <div className="h-2 rounded-full bg-magenta/50" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SprintVisual() {
  const bars = [
    ["D5", 34],
    ["D10", 58],
    ["D15", 80],
    ["D20", 100],
  ] as const;
  return (
    <div className="flex h-full items-end justify-between gap-3 rounded-xl border border-bg-border bg-bg-base p-5">
      {bars.map(([label, h]) => (
        <div key={label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex h-24 w-full items-end">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-magenta/40 to-magenta transition-all duration-700"
              style={{ height: `${h}%` }}
            />
          </div>
          <span className="font-mono text-[10px] text-text-faint">{label}</span>
        </div>
      ))}
    </div>
  );
}

function RepoVisual() {
  return (
    <div className="rounded-xl border border-bg-border bg-bg-base p-5 font-mono text-xs">
      <div className="flex items-center gap-2 text-text-muted">
        <Unlock className="h-4 w-4 text-magenta" />
        <span className="text-text">your-org</span>
        <span className="text-text-faint">/</span>
        <span className="text-text">product-app</span>
        <span className="ml-auto rounded-full border border-bg-border px-2 py-0.5 text-[10px] text-text-muted">main</span>
      </div>
      <div className="mt-4 space-y-2 text-text-faint">
        <p>
          <span className="text-magenta">owner</span> = &quot;you&quot;
        </p>
        <p>
          <span className="text-magenta">license</span> = &quot;yours&quot;
        </p>
        <p>
          <span className="text-magenta">lock_in</span> = 0
        </p>
      </div>
    </div>
  );
}

function SupportVisual() {
  const r = 40;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-6 rounded-xl border border-bg-border bg-bg-base p-5">
      <svg width="96" height="96" viewBox="0 0 96 96" className="shrink-0 -rotate-90" aria-hidden="true">
        <circle cx="48" cy="48" r={r} fill="none" strokeWidth="7" className="stroke-bg-border" />
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * 0.18}
          className="stroke-magenta"
        />
      </svg>
      <div>
        <p className="font-display text-4xl font-bold leading-none text-text">30d</p>
        <div className="mt-3 flex gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={`h-1.5 w-1.5 rounded-full ${i < 5 ? "bg-magenta" : "bg-bg-border"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AsyncVisual() {
  return (
    <div className="rounded-xl border border-bg-border bg-bg-base p-4">
      <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-magenta/25 to-bg-elevated">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
        <span className="absolute bottom-2 right-2 rounded bg-black/50 px-1.5 py-0.5 font-mono text-[10px] text-white">
          04:12
        </span>
      </div>
      <div className="mt-3 h-1 rounded-full bg-bg-elevated">
        <div className="h-1 w-2/5 rounded-full bg-magenta" />
      </div>
      <div className="mt-3 flex items-center gap-2 text-text-faint">
        <MessageCircle className="h-3.5 w-3.5" />
        <div className="h-2 w-24 rounded-full bg-bg-elevated" />
      </div>
    </div>
  );
}

const TILES: { key: string; span: string; visual: ReactNode; visualLeft?: boolean }[] = [
  { key: "1", span: "lg:col-span-4", visual: <CommitsVisual />, visualLeft: true },
  { key: "2", span: "lg:col-span-2", visual: <PriceVisual /> },
  { key: "3", span: "lg:col-span-3", visual: <SprintVisual />, visualLeft: true },
  { key: "4", span: "lg:col-span-3", visual: <RepoVisual /> },
  { key: "5", span: "lg:col-span-3", visual: <SupportVisual /> },
  { key: "6", span: "lg:col-span-3", visual: <AsyncVisual />, visualLeft: true },
];

export function FeatureGrid() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-bg-surface border-y border-bg-border">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={t("features.eyebrow")}
            title={t("features.title")}
            description={t("features.subtitle")}
            centered
            className="mx-auto mb-16 max-w-2xl"
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          {TILES.map((tile, i) => (
            <FadeIn key={tile.key} delay={i * 0.06} className={tile.span}>
              <article
                className={`group relative h-full overflow-hidden rounded-3xl border border-bg-border bg-bg-elevated p-7 transition-all duration-300 hover:-translate-y-1 hover:border-magenta/40 ${
                  tile.visualLeft ? "lg:flex lg:items-center lg:gap-8" : ""
                }`}
              >
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "rgba(var(--accent-b-rgb), 0.18)" }}
                  aria-hidden="true"
                />
                <div className={`relative ${tile.visualLeft ? "lg:order-2 lg:flex-1" : "mb-7"}`}>{tile.visual}</div>
                <div className={`relative ${tile.visualLeft ? "mt-7 lg:mt-0 lg:order-1 lg:flex-1" : ""}`}>
                  <h3 className="mb-2 font-display text-xl font-semibold text-text">
                    {t(`features.${tile.key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">{t(`features.${tile.key}.desc`)}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
