"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function ProjectIndex() {
  const { t } = useI18n();
  return (
    <section className="bg-surface px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <p className="eyebrow mb-4">{t("portfolio.index.eyebrow")}</p>
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("portfolio.index.title")}
          </h2>
        </Reveal>
        <div className="border-t border-hairline">
          {ROWS.map((n, i) => (
            <Reveal key={n} delay={i * 0.02}>
              <div className="grid gap-2 border-b border-hairline py-6 md:grid-cols-[1.5fr_1fr] md:items-baseline md:gap-8">
                <div>
                  <p className="text-lg font-medium leading-snug text-foreground">
                    {t(`portfolio.index.${n}.outcome`)}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {t(`portfolio.index.${n}.name`)}
                  </p>
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted md:text-right">
                  {t(`portfolio.index.${n}.stack`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
