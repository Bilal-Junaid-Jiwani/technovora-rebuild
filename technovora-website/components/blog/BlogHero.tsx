"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

/**
 * BlogHero — journal masthead.
 * Big "Studio notes" title, editorial meta line, and a meta rule row
 * (season + essay count) in the BASIC/DEPT journal-index spirit.
 * Distinct from the card-style heroes elsewhere on the site.
 */
export function BlogHero() {
  const { t } = useI18n();
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-28 md:pb-14 md:pt-36">
        <Reveal>
          <h1 className="display text-4xl text-foreground md:text-6xl">
            {t("blog3.hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {t("blog3.hero.meta")}
          </p>
          <div className="rule mt-10 flex items-center justify-between pt-4 text-sm text-muted">
            <span>{t("blog3.hero.index")}</span>
            <span>{t("blog3.article.author")}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
