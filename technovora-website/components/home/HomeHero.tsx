"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { HeroProofCard } from "./HeroProofCard";

// The wireframe globe is decorative and self-contained (pure SVG + CSS), so it
// loads in a separate chunk after the first paint instead of blocking it.
const GlobeVisual = dynamic(
  () => import("@/components/visuals/GlobeVisual").then((m) => m.GlobeVisual),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="h-[317px] w-[317px] sm:h-[396px] sm:w-[396px] lg:h-[440px] lg:w-[440px]"
      />
    ),
  },
);

// Typographic statement hero [Cuberto / Work & Co]:
// left-aligned oversized Inter statement + decorative globe right,
// per-section meta-bar below (BASIC/DEPT).
export function HomeHero() {
  const { t } = useI18n();

  const meta = [
    {
      label: t("home.hero.meta.location.label"),
      value: t("home.hero.meta.location.value"),
    },
    {
      label: t("home.hero.meta.availability.label"),
      value: t("home.hero.meta.availability.value"),
    },
    {
      label: t("home.hero.meta.response.label"),
      value: t("home.hero.meta.response.value"),
    },
  ];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
          <div className="min-w-0 flex-1">
            <Reveal>
              <h1 className="display max-w-5xl text-5xl text-foreground md:text-7xl lg:text-[5.25rem]">
                {t("home.hero.heading")}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                {t("home.hero.sub")}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={t("common.calendly")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {t("home.hero.cta.primary")}
                </a>
                <Link href="/packages" className="btn-secondary">
                  {t("home.hero.cta.secondary")}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right visual column: decorative wireframe globe + engagement
              snapshot card. Stacked below CTAs on mobile, right-aligned
              column on desktop. */}
          <div className="flex w-full max-w-[440px] shrink-0 flex-col items-center gap-6 lg:w-auto lg:items-end">
            <Reveal delay={0.12} className="shrink-0">
              <div className="pointer-events-none flex justify-center lg:justify-end">
                <GlobeVisual
                  size={440}
                  orbit
                  orbitDuration={90}
                  atmosphere
                  className="scale-[0.72] sm:scale-90 lg:scale-100"
                />
              </div>
            </Reveal>
            <HeroProofCard />
          </div>
        </div>

        {/* Meta-bar: location / availability / response time */}
        <Reveal delay={0.18}>
          <dl className="mt-16 grid gap-6 border-t border-hairline pt-5 sm:grid-cols-3 md:mt-20">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
