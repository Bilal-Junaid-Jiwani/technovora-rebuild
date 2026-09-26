"use client";

import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function PortfolioCta() {
  const { t } = useI18n();
  return (
    <section className="px-6 pb-20 pt-4 md:pb-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="h2 text-3xl text-foreground md:text-5xl">
            {t("portfolio.cta.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {t("portfolio.cta.desc")}
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href={t("common.calendly")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t("portfolio.cta.primary")} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            {t("portfolio.cta.note")}{" "}
            <a
              href={`mailto:${t("common.email.sales")}`}
              className="font-medium text-foreground underline decoration-hairline underline-offset-4 hover:text-accent"
            >
              {t("common.email.sales")}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
