"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

// Anti-positioning negation block [Cheesecake Labs]:
// 3 struck-through negation rows + a plain what-we-are statement.
const NEGATIONS = [1, 2, 3];

export function AntiPositioning() {
  const { t } = useI18n();

  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Meta-bar */}
        <Reveal>
          <div className="flex items-baseline justify-between pb-8 md:pb-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.anti.meta.label")}
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.anti.meta.value")}
            </p>
          </div>
        </Reveal>

        {/* Negation rows */}
        <div>
          {NEGATIONS.map((n, i) => (
            <Reveal key={n} delay={i * 0.06}>
              <p className="h2 border-t border-hairline py-7 text-2xl text-muted line-through decoration-foreground/40 decoration-2 md:py-8 md:text-4xl">
                {t(`home.anti.${n}`)}
              </p>
            </Reveal>
          ))}
          <div className="border-t border-hairline" aria-hidden="true" />
        </div>

        {/* What we are */}
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-foreground md:mt-14 md:text-2xl">
            {t("home.anti.statement")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
