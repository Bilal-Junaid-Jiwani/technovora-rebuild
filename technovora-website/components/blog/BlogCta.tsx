"use client";

import { Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

/**
 * BlogCta — subscribe-by-email band.
 * Intentionally NOT a subscribe form: one tap composes a pre-filled
 * email to sales@technovora.com. Honest and real — no dead submit.
 */
export function BlogCta() {
  const { t } = useI18n();
  const sales = t("common.email.sales");
  const href = `mailto:${sales}?subject=${encodeURIComponent(
    "Subscribe me to new essays"
  )}&body=${encodeURIComponent(
    "Hi,\n\nPlease add me to the Technovora studio notes list.\n\nThanks!"
  )}`;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
      <Reveal>
        <div className="flex flex-col items-center rounded-2xl border border-hairline bg-accent-soft px-8 py-14 text-center md:py-16">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="h2 mt-6 max-w-xl text-2xl text-foreground md:text-3xl">
            {t("blog3.cta.title")}
          </h2>
          <p className="mt-3 max-w-lg leading-relaxed text-muted">
            {t("blog3.cta.desc")}
          </p>
          <a href={href} className="btn-primary mt-8">
            {t("blog3.cta.button")}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
