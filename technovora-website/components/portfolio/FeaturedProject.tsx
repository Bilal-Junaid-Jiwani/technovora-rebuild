"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const ACCENT = "#F97316";

/**
 * Deliberate abstract composition — geometric shapes in the brand palette.
 * Not a UI mock, not a client screenshot: an illustrative visual for a
 * section that must show no real client work.
 */
function AbstractComposition() {
  return (
    <svg
      viewBox="0 0 480 340"
      className="h-auto w-full text-foreground"
      role="img"
      aria-label="Abstract geometric composition"
    >
      {/* large ring */}
      <circle
        cx="150"
        cy="150"
        r="112"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeWidth="1.5"
      />
      {/* accent arc sweeping over the ring */}
      <path
        d="M 38 150 A 112 112 0 0 1 262 150"
        fill="none"
        stroke={ACCENT}
        strokeOpacity="0.75"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* inner ring */}
      <circle
        cx="150"
        cy="150"
        r="72"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="1"
        strokeDasharray="4 6"
      />
      {/* orbiting dot cluster */}
      <circle cx="352" cy="86" r="11" fill={ACCENT} fillOpacity="0.85" />
      <circle cx="384" cy="118" r="5.5" fill={ACCENT} fillOpacity="0.5" />
      <circle cx="318" cy="128" r="6.5" fill="currentColor" fillOpacity="0.18" />
      {/* triangle */}
      <polygon
        points="352,236 402,306 302,306"
        fill="none"
        stroke={ACCENT}
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* diagonal construction lines */}
      <line
        x1="52"
        y1="292"
        x2="196"
        y2="208"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeWidth="1.5"
      />
      <line
        x1="220"
        y1="318"
        x2="300"
        y2="272"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="1.5"
      />
      {/* accent bar cluster, asymmetric */}
      <rect x="330" y="180" width="64" height="8" rx="4" fill={ACCENT} fillOpacity="0.35" />
      <rect x="352" y="196" width="42" height="8" rx="4" fill="currentColor" fillOpacity="0.14" />
      <rect x="318" y="212" width="76" height="8" rx="4" fill={ACCENT} fillOpacity="0.6" />
      {/* small grid of squares */}
      {[
        [72, 52],
        [92, 52],
        [112, 52],
        [72, 72],
        [92, 72],
      ].map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="14"
          height="14"
          rx="3"
          fill="currentColor"
          fillOpacity={i === 0 ? 0.3 : 0.08}
        />
      ))}
    </svg>
  );
}

export function FeaturedProject() {
  const { t } = useI18n();
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="card relative overflow-hidden">
              <span className="absolute left-4 top-4 z-10 rounded-md border border-dashed border-muted/60 bg-background/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                Illustrative visual — not a client screenshot
              </span>
              <div className="p-6 md:p-10">
                <AbstractComposition />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted">
              {t("portfolio.work.illustrative")}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm font-medium text-muted">
              {t("portfolio.featured.label")}
            </p>
            <h2 className="display mt-4 text-3xl text-foreground md:text-5xl">
              {t("portfolio.featured.title")}
            </h2>
            <p className="mt-5 text-lg font-medium text-foreground">
              {t("portfolio.work.1.descriptor")}
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              {t("portfolio.work.1.scope")}
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted">
              {t("portfolio.featured.stack")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
