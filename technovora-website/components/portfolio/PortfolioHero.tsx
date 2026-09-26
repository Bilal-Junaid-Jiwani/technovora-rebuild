"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function PortfolioHero() {
  const { t } = useI18n();
  return (
    <section className="px-6 pb-14 pt-28 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-5">{t("portfolio.hero.eyebrow")}</p>
          <h1 className="display text-4xl text-foreground md:text-6xl">
            {t("portfolio.hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t("portfolio.hero.sub")}
          </p>
          <div className="rule mt-12 flex flex-col gap-3 pt-5 sm:flex-row sm:items-baseline sm:gap-10 md:mt-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t("portfolio.hero.count")}
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {t("portfolio.hero.method")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
