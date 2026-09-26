"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/home/Reveal";

const GOOD = [1, 2, 3, 4];
const BAD = [1, 2, 3, 4];

export function FitGuide() {
  const { t } = useI18n();

  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t("servicesidx.fit.eyebrow")}</p>
          <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">
            {t("servicesidx.fit.title")}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <h3 className="text-lg font-semibold text-foreground">
              {t("servicesidx.fit.good.title")}
            </h3>
            <ul className="mt-6 space-y-4">
              {GOOD.map((n) => (
                <li
                  key={n}
                  className="flex gap-3 border-t border-hairline pt-4 text-[15px] leading-relaxed text-muted"
                >
                  <span className="mt-0.5 text-accent" aria-hidden="true">
                    +
                  </span>
                  {t(`servicesidx.fit.good.${n}`)}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="text-lg font-semibold text-foreground">
              {t("servicesidx.fit.bad.title")}
            </h3>
            <ul className="mt-6 space-y-4">
              {BAD.map((n) => (
                <li
                  key={n}
                  className="flex gap-3 border-t border-hairline pt-4 text-[15px] leading-relaxed text-muted"
                >
                  <span className="mt-0.5 text-muted" aria-hidden="true">
                    −
                  </span>
                  {t(`servicesidx.fit.bad.${n}`)}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
