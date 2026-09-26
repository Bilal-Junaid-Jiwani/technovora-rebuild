"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/blog/Reveal";

/**
 * BookingBand — "book directly" Calendly band.
 * Centered statement over a meta rule: headline, one plain line,
 * primary booking button, small print. Distinct from the blog CTA band.
 */
export function BookingBand() {
  const { t } = useI18n();
  const calendly = t("common.calendly");

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
      <Reveal>
        <div className="rule pt-14 text-center md:pt-16">
          <p className="eyebrow">{t("contact3.book.eyebrow")}</p>
          <h2 className="display mt-4 text-3xl text-foreground md:text-4xl">
            {t("contact3.book.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            {t("contact3.book.desc")}
          </p>
          <a
            href={calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            {t("contact3.book.cta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-muted">{t("contact3.book.note")}</p>
        </div>
      </Reveal>
    </section>
  );
}
