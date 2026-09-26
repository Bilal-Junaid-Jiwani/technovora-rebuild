"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { HeroGlobeDynamic } from "@/components/three/HeroGlobeDynamic";
import { GlobeStatCards } from "@/components/sections/GlobeStatCards";
import { useI18n } from "@/components/layout/I18nProvider";

const MOBILE_STATS = [
  { num: "48H", labelKey: "stat.prototype" },
  { num: "50+", labelKey: "stat.projects" },
  { num: "3W", labelKey: "stat.delivery" },
  { num: "0", labelKey: "stat.abandoned" },
] as const;

export function HeroSection() {
  const { t } = useI18n();

  // Split multi-line title (separated by \n in translation)
  const titleLines = t("hero.title").split("\n");

  return (
    <section className="noise-overlay relative min-h-[calc(100vh-101px)] flex items-center overflow-hidden bg-bg-base">

      {/* Glow — bottom left */}
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none animate-float-slow"
        style={{ background: "radial-gradient(circle, rgba(var(--accent-a-rgb), 0.10) 0%, transparent 65%)", filter: "blur(100px)" }}
        aria-hidden="true"
      />
      {/* Glow — top right */}
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, rgba(160,32,119,0.10) 0%, transparent 65%)", filter: "blur(100px)" }}
        aria-hidden="true"
      />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-40" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 xl:gap-14 items-center">

          {/* ── Left: copy ── */}
          <div className="flex flex-col gap-6">
            {/* H1 */}
            <FadeIn delay={0.07}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-text">
                {titleLines[0]}{titleLines[1] && <><br />{titleLines[1]}</>}
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.14}>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-[500px]">
                {t("hero.subtitle")}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-3 mt-2">
                <Link
                  href="/services"
                  className="btn-primary inline-flex w-fit items-center gap-2 shadow-lg"
                >
                  {t("hero.cta")}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33333M12.6666 8L7.99998 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <p className="text-sm text-text-faint font-medium flex items-center gap-2">
                  {t("hero.note1")}
                  <span className="text-text-muted/40">+</span>
                  {t("hero.note2")}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ── Right: 3D globe + stat corner cards ── */}
          <FadeIn delay={0.1} className="hidden lg:flex items-center justify-center">
            <div className="relative" style={{ width: 580, height: 580 }}>
              <HeroGlobeDynamic size={580} />
              <GlobeStatCards />
            </div>
          </FadeIn>
        </div>

        {/* Mobile — quick stats 2×2 grid */}
        <FadeIn delay={0.3} className="lg:hidden mt-10 grid grid-cols-2 gap-x-8 gap-y-5 max-w-[260px]">
          {MOBILE_STATS.map((s) => (
            <div key={s.num} className="flex flex-col gap-0.5">
              <span className="font-display text-3xl leading-none" style={{ color: "var(--brand-orange)" }}>
                {s.num}
              </span>
              <span className="font-mono text-[10px] text-[#888] uppercase tracking-wider leading-tight">
                {t(s.labelKey)}
              </span>
            </div>
          ))}
        </FadeIn>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg-base))" }}
        aria-hidden="true"
      />
    </section>
  );
}
