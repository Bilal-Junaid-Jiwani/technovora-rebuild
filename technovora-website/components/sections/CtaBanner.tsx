"use client";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { CALENDLY_URL } from "@/lib/constants";
import { useI18n } from "@/components/layout/I18nProvider";
import { ArrowRight, CalendarCheck, Video } from "lucide-react";

const SLOTS = ["10:00", "11:30", "14:00", "16:30"] as const;

export function CtaBanner() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 md:py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[2rem] px-8 py-14 md:px-16 md:py-20"
            style={{ background: "var(--gradient)" }}
          >
            {/* Texture: grid + soft light */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage: "radial-gradient(ellipse at 30% 40%, black 10%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, black 10%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/20 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Copy */}
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
                  {t("cta.title")}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{t("cta.subtitle")}</p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={CALENDLY_URL}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                  >
                    {t("cta.button")} <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {t("cta.secondary")}
                  </Link>
                </div>
              </div>

              {/* Booking card mock */}
              <div className="relative lg:justify-self-end w-full max-w-sm mx-auto lg:mx-0">
                <div className="rotate-0 lg:rotate-[3deg] rounded-3xl bg-bg-elevated p-6 shadow-2xl ring-1 ring-black/10 transition-transform duration-500 hover:rotate-0">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-magenta/15 text-magenta">
                      <Video className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-text">{t("cta.card.title")}</p>
                      <p className="font-mono text-xs text-text-muted">{t("cta.card.meta")}</p>
                    </div>
                  </div>

                  <div className="my-5 h-px bg-bg-border" />

                  <div className="grid grid-cols-2 gap-3">
                    {SLOTS.map((slot, i) => (
                      <a
                        key={slot}
                        href={CALENDLY_URL}
                        className={`rounded-xl border px-4 py-3 text-center font-mono text-sm transition-colors ${
                          i === 1
                            ? "border-magenta bg-magenta text-white"
                            : "border-bg-border text-text hover:border-magenta/50"
                        }`}
                      >
                        {slot}
                      </a>
                    ))}
                  </div>

                  <a
                    href={CALENDLY_URL}
                    className="mt-5 flex items-center justify-between rounded-xl bg-bg-surface px-4 py-3 text-sm font-semibold text-text transition-colors hover:text-magenta"
                  >
                    <span className="flex items-center gap-2">
                      <CalendarCheck className="h-4 w-4 text-magenta" />
                      {t("cta.button")}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
