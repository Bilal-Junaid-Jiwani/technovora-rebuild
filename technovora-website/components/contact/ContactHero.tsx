"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/blog/Reveal";

/**
 * ContactHero — contact header.
 * Headline plus a plain response-time promise. Deliberately spare:
 * the compressed ContactRow directly below carries the channels.
 */
export function ContactHero() {
  const { t } = useI18n();
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-28 md:pb-12 md:pt-36">
        <Reveal>
          <p className="eyebrow mb-5">{t("contact3.hero.eyebrow")}</p>
          <h1 className="display max-w-3xl text-4xl text-foreground md:text-6xl">
            {t("contact3.hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {t("contact3.hero.desc")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
