"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

// Featured work band [Work & Co / Ramotion]: proof directly under the hero.
// Anonymized engagement summaries only — no client names, no metrics,
// no screenshots. Honest labels throughout.
const ITEMS = [1, 2, 3];

export function FeaturedWork() {
  const { t } = useI18n();

  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6">
            <p className="eyebrow">{t("home.work.eyebrow")}</p>
            <Link
              href="/portfolio"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              {t("home.work.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="h2 mt-6 max-w-2xl text-3xl text-foreground md:text-4xl">
            {t("home.work.title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t("home.work.sub")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((n, i) => (
            <Reveal key={n} delay={i * 0.06}>
              <article className="card flex h-full flex-col p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {t(`home.work.${n}.kind`)}
                </p>
                <h3 className="h2 mt-4 text-2xl text-foreground">
                  {t(`home.work.${n}.title`)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {t(`home.work.${n}.desc`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <p className="mt-8 text-sm text-muted">{t("home.work.note")}</p>
        </Reveal>
      </div>
    </section>
  );
}
