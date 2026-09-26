"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/home/Reveal";

const FACTS = [1, 2, 3];

export function ServicesHero() {
  const { t } = useI18n();

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <Reveal>
            <p className="eyebrow">{t("servicesidx.hero.eyebrow")}</p>
            <h1 className="h2 mt-4 max-w-xl text-4xl text-foreground md:text-5xl">
              {t("servicesidx.hero.title")}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-muted md:pt-10">
              {t("servicesidx.hero.lede")}
            </p>
            <dl className="mt-8 space-y-4">
              {FACTS.map((n) => (
                <div
                  key={n}
                  className="flex items-baseline gap-4 border-t border-hairline pt-4"
                >
                  <dt className="h2 w-28 shrink-0 text-xl text-foreground">
                    {t(`servicesidx.hero.fact${n}.value`)}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-muted">
                    {t(`servicesidx.hero.fact${n}.label`)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
