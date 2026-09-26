"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Quote, Star } from "lucide-react";
import { useI18n } from "@/components/layout/I18nProvider";

const TESTIMONIALS = [
  {
    metric: "6 HRS/WEEK",
    metricSub: "saved on manual lead scoring",
    quote:
      "Technovora automated our lead scoring pipeline in 3 weeks. We were manually doing this every Monday — 6 hours gone, every week. That time now goes into actually talking to leads.",
    name: "Alex Chen",
    title: "CTO",
    company: "Stackflow AI",
    initials: "AC",
  },
  {
    metric: "+23%",
    metricSub: "landing page conversion lift",
    quote:
      "The Next.js rebuild increased our landing page conversion by 23%. Our previous agency had been promising the same thing for 8 months. Technovora shipped it in 3 weeks.",
    name: "Sarah Kim",
    title: "VP of Growth",
    company: "Reflex Labs",
    initials: "SK",
  },
  {
    metric: "4H → 11 MIN",
    metricSub: "deploy time cut",
    quote:
      "We cut deploy time from 4 hours to 11 minutes. I didn't believe it until I ran the pipeline myself. The documentation they left was better than anything our internal team had written.",
    name: "James Liu",
    title: "Founder",
    company: "Meridian SaaS",
    initials: "JL",
  },
] as const;

const ROTATE_MS = 7000;

export function Testimonials() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % TESTIMONIALS.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, active]);

  const card = TESTIMONIALS[active];
  const n = active + 1;

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-bg-base border-y border-bg-border">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "rgba(var(--accent-b-rgb), 0.10)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14 md:mb-16 max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              {t("testimonials.badge")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text leading-tight">
              {t("testimonials.title1")} <br />
              <span className="text-text-muted">{t("testimonials.title2")}</span>
            </h2>
          </div>
        </FadeIn>

        <div
          className="grid lg:grid-cols-[4fr_8fr] gap-6 lg:gap-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Story selector */}
          <FadeIn>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-text-faint">
              {t("results.pick")}
            </p>
            <div role="tablist" className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {TESTIMONIALS.map((item, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={item.name}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`group relative min-w-[240px] lg:min-w-0 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-magenta/50 bg-bg-elevated shadow-lg"
                        : "border-bg-border bg-bg-surface hover:border-text-faint"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-sm font-bold transition-colors ${
                          isActive
                            ? "border-magenta bg-magenta text-white"
                            : "border-bg-border bg-bg-elevated text-text-muted"
                        }`}
                      >
                        {item.initials}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-text">{item.company}</span>
                        <span className="block truncate font-mono text-xs text-text-muted">
                          {t(`testimonials.card${i + 1}.metric`) || item.metric}
                        </span>
                      </span>
                    </div>
                    {isActive && !paused && (
                      <motion.span
                        key={`bar-${active}`}
                        className="absolute bottom-0 left-0 h-[2px] bg-magenta"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Story panel */}
          <FadeIn delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-bg-border bg-bg-elevated p-8 md:p-12">
              <Quote
                className="absolute right-8 top-8 h-24 w-24 text-magenta/10"
                strokeWidth={0}
                fill="currentColor"
                aria-hidden="true"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative flex h-full flex-col justify-between gap-10"
                >
                  <div>
                    <span className="gradient-text block font-display text-5xl md:text-7xl font-bold leading-none tracking-tight">
                      {t(`testimonials.card${n}.metric`) || card.metric}
                    </span>
                    <span className="mt-3 block font-mono text-xs font-semibold uppercase tracking-widest text-text-muted">
                      {t(`testimonials.card${n}.metricSub`) || card.metricSub}
                    </span>
                  </div>

                  <blockquote className="font-display text-xl md:text-2xl font-medium leading-relaxed text-text">
                    {t(`testimonials.card${n}.quote`) || card.quote}
                  </blockquote>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-bg-border pt-6">
                    <div>
                      <p className="text-sm font-semibold text-text">{card.name}</p>
                      <p className="text-[13px] text-text-muted">
                        {t(`testimonials.card${n}.title`) || card.title} · {card.company}
                      </p>
                    </div>
                    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} className="h-4 w-4 fill-magenta text-magenta" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
