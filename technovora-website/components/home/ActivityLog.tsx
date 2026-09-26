"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

// Activity log [Darkroom]: "a typical engagement, week by week".
// Relative week labels only — never fake calendar dates.
const WEEKS = [1, 2, 3, 4, 5, 6];

export function ActivityLog() {
  const { t } = useI18n();

  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Meta-bar */}
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 pb-8 md:pb-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.log.meta.label")}
            </p>
            <p className="text-right text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.log.meta.value")}
            </p>
          </div>
        </Reveal>

        {/* Log rows */}
        <div>
          {WEEKS.map((n, i) => (
            <Reveal key={n} delay={i * 0.03}>
              <div className="grid gap-2 border-t border-hairline py-6 last:border-b md:grid-cols-[10rem_12rem_1fr] md:gap-8 md:py-7">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted">
                  {t(`home.log.${n}.week`)}
                </p>
                <p className="text-base font-semibold tracking-tight text-foreground md:text-lg">
                  {t(`home.log.${n}.title`)}
                </p>
                <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
                  {t(`home.log.${n}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <p className="mt-8 text-sm text-muted">{t("home.log.note")}</p>
        </Reveal>
      </div>
    </section>
  );
}
