"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/home/Reveal";

const PRINCIPLES = [1, 2, 3];

export function PrinciplesStrip() {
  const { t } = useI18n();

  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("servicesidx.principles.title")}
          </h2>
        </Reveal>

        <div className="mt-4">
          {PRINCIPLES.map((n, i) => (
            <Reveal key={n} delay={i * 0.05}>
              <div className="border-b border-hairline py-10 md:py-12">
                <p className="h2 max-w-3xl text-2xl text-foreground md:text-3xl">
                  {t(`servicesidx.principles.${n}`)}
                </p>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {t(`servicesidx.principles.${n}.note`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
