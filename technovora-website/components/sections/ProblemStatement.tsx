"use client";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useI18n } from "@/components/layout/I18nProvider";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const BIG_STATS = ["14h", "$60K", "25%"] as const;

export function ProblemStatement() {
  const { t } = useI18n();

  const PROBLEMS = [
    { num: "01", stat: BIG_STATS[0], pain: t("problem.1.pain"), cost: t("problem.1.cost") },
    { num: "02", stat: BIG_STATS[1], pain: t("problem.2.pain"), cost: t("problem.2.cost") },
    { num: "03", stat: BIG_STATS[2], pain: t("problem.3.pain"), cost: t("problem.3.cost") },
  ] as const;

  return (
    <section className="relative border-t border-bg-border bg-bg-base">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
          {/* Left — sticky intro */}
          <div className="lg:sticky lg:top-36">
            <FadeIn>
              <SectionHeading eyebrow={t("problem.eyebrow")} title={t("problem.badge")} />
              <div className="mt-10 flex items-center gap-6">
                <Link href="/contact" className="btn-primary">
                  {t("about2.hero.cta1")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="mt-12 hidden lg:flex items-center gap-3 font-mono text-xs text-text-faint">
                <span className="h-px w-10 bg-bg-border" />
                <span>03 / 03</span>
              </div>
            </FadeIn>
          </div>

          {/* Right — stacked stat cards */}
          <div className="flex flex-col gap-5">
            {PROBLEMS.map((p, i) => (
              <FadeIn key={p.num} delay={i * 0.08}>
                <article className="group relative overflow-hidden rounded-3xl border border-bg-border bg-bg-elevated p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-magenta/40">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "rgba(var(--accent-b-rgb), 0.22)" }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between gap-6">
                    <span className="font-mono text-xs font-semibold tracking-widest text-magenta">
                      {p.num}
                    </span>
                    <span className="gradient-text font-display text-5xl md:text-6xl font-bold leading-none tracking-tight">
                      {p.stat}
                    </span>
                  </div>

                  <p className="relative mt-8 font-display text-xl md:text-2xl font-semibold leading-snug text-text">
                    {p.pain}
                  </p>

                  <div className="relative mt-8 flex items-start gap-3 border-t border-bg-border pt-6">
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                    <p className="text-sm leading-relaxed text-text-muted">{p.cost}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
