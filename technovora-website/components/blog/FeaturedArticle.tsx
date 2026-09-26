"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ARTICLES } from "./articles";
import { Reveal } from "./Reveal";

/**
 * FeaturedArticle — featured essay block.
 * Not a card: season/topic/read meta line, a large display title,
 * excerpt, and a plain read link. Studio-journal editorial composition.
 */
export function FeaturedArticle() {
  const { t } = useI18n();
  const featured = ARTICLES[0];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <Reveal>
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {t("blog3.featured.label")}
        </p>
        <p className="mt-4 text-sm text-muted">
          {t(featured.topicKey)} · {t(featured.seasonKey)} · {t(featured.readKey)}
        </p>
        <Link href={`/blog/${featured.slug}`} className="group mt-5 block">
          <h2 className="display max-w-4xl text-3xl text-foreground transition-colors group-hover:text-accent md:text-5xl">
            {t(featured.titleKey)}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {t(featured.descKey)}
          </p>
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            {t("blog3.featured.read")}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
