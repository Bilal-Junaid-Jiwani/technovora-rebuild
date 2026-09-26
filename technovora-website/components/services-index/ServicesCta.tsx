"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/home/Reveal";

export function ServicesCta() {
  const { t } = useI18n();

  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <Reveal>
            <h2 className="h2 max-w-xl text-3xl text-foreground md:text-4xl">
              {t("servicesidx.cta.title")}
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              {t("servicesidx.cta.sub")}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card p-7 md:p-8">
              <p className="text-sm font-semibold tracking-wide text-foreground">
                {t("servicesidx.cta.card.title")}
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-medium text-muted">
                    {t("servicesidx.cta.card.email.label")}
                  </p>
                  <a
                    href={`mailto:${t("servicesidx.cta.card.email.value")}`}
                    className="mt-1 inline-block text-lg font-medium text-foreground hover:text-accent"
                  >
                    {t("servicesidx.cta.card.email.value")}
                  </a>
                </div>
                <div className="border-t border-hairline pt-5">
                  <p className="text-sm font-medium text-muted">
                    {t("servicesidx.cta.card.call.label")}
                  </p>
                  <a
                    href={t("common.calendly")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-lg font-medium text-foreground hover:text-accent"
                  >
                    {t("servicesidx.cta.card.call.value")}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </div>
              </div>
              <p className="mt-6 border-t border-hairline pt-5 text-sm text-muted">
                {t("servicesidx.cta.card.note")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
