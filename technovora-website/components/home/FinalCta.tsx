"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

// One-line-question CTA [Viget]: centered question + two buttons.
export function FinalCta() {
  const { t } = useI18n();
  const calendly = t("common.calendly");

  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <h2 className="h2 text-4xl text-foreground md:text-5xl">
            {t("home.final.question")}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t("home.final.sub")}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t("home.final.cta.primary")}
            </a>
            <Link href="/packages" className="btn-secondary">
              {t("home.final.cta.secondary")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
