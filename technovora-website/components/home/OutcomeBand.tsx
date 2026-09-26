"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

// Outcome-metric band [Netguru]: 4 columns, big numerals + one result
// sentence each. Promise-framed facts only — service promises we make,
// never past-performance claims.
const OUTCOMES = [1, 2, 3, 4];

export function OutcomeBand() {
  const { t } = useI18n();

  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Meta-bar */}
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 pb-10 md:pb-14">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.outcome.meta.label")}
            </p>
            <p className="text-right text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.outcome.meta.value")}
            </p>
          </div>
        </Reveal>

        {/* 4 columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {OUTCOMES.map((n, i) => (
            <Reveal key={n} delay={i * 0.06}>
              <p className="display text-6xl text-foreground md:text-7xl">
                {t(`home.outcome.${n}.num`)}
              </p>
              <p className="mt-4 max-w-[16rem] text-[15px] leading-relaxed text-muted">
                {t(`home.outcome.${n}.text`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
