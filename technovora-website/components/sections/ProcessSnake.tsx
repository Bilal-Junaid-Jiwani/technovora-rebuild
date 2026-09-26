"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { useI18n } from "@/components/layout/I18nProvider";
import { Plus, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    tag: "Day 0",
    description:
      "30-minute call. We audit your biggest process bottleneck live — you walk away with a clear diagnosis whether we work together or not.",
    deliverable: "Written gap analysis + recommended approach",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Architecture & Scope",
    tag: "Days 1–3",
    description:
      "We map the full automation or build plan — tools, integrations, timeline, and exact deliverables. No vague SOWs.",
    deliverable: "Signed SOW with fixed scope and fixed price",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Build & Iterate",
    tag: "Weeks 1–3",
    description:
      "Biweekly demos. You see working software every 5 days. Feedback loops built into the process, not bolted on at the end.",
    deliverable: "Working demos every 5 days. Zero surprises.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Deploy & Handover",
    tag: "Week 3",
    description:
      "Full deployment to your environment. Documentation, video walkthroughs, and a 2-hour live handover session with your team.",
    deliverable: "Full docs + video walkthrough + 2h live handover",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "05",
    title: "Support & Scale",
    tag: "Day 30+",
    description:
      "30 days of post-launch support included. Then we scope the next bottleneck — most clients run 3–4 automations in the first 6 months.",
    deliverable: "30-day support SLA + scale roadmap",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export function ProcessSnake() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  const activeStep = STEPS[active];
  const prev = () => setActive((i) => (i - 1 + STEPS.length) % STEPS.length);
  const next = () => setActive((i) => (i + 1) % STEPS.length);

  return (
    <section className="py-24 bg-bg-base border-y border-bg-border">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text tracking-tight text-center mb-16">
            {t("process.title")}
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Left: accordion */}
          <FadeIn className="flex flex-col gap-3">
            {STEPS.map((step, i) => {
              const isActive = i === active;
              return (
                <div
                  key={step.number}
                  className={`rounded-2xl border transition-colors ${
                    isActive ? "border-bg-border bg-bg-surface p-5" : "border-bg-border px-5 py-4"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="w-full flex items-center gap-3 text-left"
                  >
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isActive ? "bg-magenta/10 text-magenta rotate-45" : "bg-bg-elevated text-text-muted"
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                    <span className={`font-display font-semibold ${isActive ? "text-text" : "text-text-muted"}`}>
                      {t(`process.step.${i + 1}.title`) || step.title}
                    </span>
                  </button>
                  {isActive && (
                    <p className="text-sm text-text-muted leading-relaxed mt-3 pl-10 pr-2">
                      {t(`process.step.${i + 1}.desc`) || step.description}
                    </p>
                  )}
                </div>
              );
            })}
          </FadeIn>

          {/* Right: photo card carousel */}
          <FadeIn delay={0.1} className="relative">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous step"
              className="hidden md:flex absolute left-[-22px] top-[38%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-bg-elevated border border-bg-border shadow-md items-center justify-center text-text-muted hover:text-text hover:shadow-lg transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next step"
              className="hidden md:flex absolute right-[-22px] top-[38%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-bg-elevated border border-bg-border shadow-md items-center justify-center text-text-muted hover:text-text hover:shadow-lg transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="bg-bg-elevated border border-bg-border rounded-3xl shadow-xl p-4 sm:p-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-surface">
                <Image
                  key={activeStep.image}
                  src={activeStep.image}
                  alt={t(`process.step.${active + 1}.title`) || activeStep.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-4 bottom-4 flex items-center gap-2 bg-bg-elevated/95 backdrop-blur rounded-full pl-1.5 pr-3 py-1.5 shadow-sm">
                  <span className="w-6 h-6 rounded-full bg-magenta text-white text-[11px] font-bold flex items-center justify-center">
                    {activeStep.number}
                  </span>
                  <span className="text-xs font-semibold text-text">
                    {t(`process.step.${active + 1}.day`) || activeStep.tag}
                  </span>
                </div>
              </div>

              <div className="pt-6 pb-2 text-center">
                <h3 className="text-2xl font-display font-bold text-text mb-2">
                  {t(`process.step.${active + 1}.title`) || activeStep.title}
                </h3>
                <p className="text-sm text-text-muted mb-6">
                  {t(`process.step.${active + 1}.deliverable`) || activeStep.deliverable}
                </p>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-text text-text font-semibold text-sm hover:bg-text hover:text-bg-base transition-colors"
                >
                  {t("services.getstarted")} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
