"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ARTICLES } from "./articles";
import { Reveal } from "./Reveal";

/**
 * ArticleGrid — essay index rows.
 * Date-led journal index (season + read time), topic, title, and excerpt
 * as hairline-separated rows. The featured essay is shown above and
 * excluded here to avoid duplication.
 */
export function ArticleGrid() {
  const { t } = useI18n();
  const rest = ARTICLES.slice(1);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <div className="rule">
        {rest.map((article, i) => (
          <Reveal key={article.slug} delay={i * 0.06}>
            <Link
              href={`/blog/${article.slug}`}
              className="group grid gap-3 border-b border-hairline py-7 md:grid-cols-[170px_1fr_auto] md:items-baseline md:gap-10"
            >
              <span className="shrink-0 text-sm leading-relaxed text-muted">
                {t(article.seasonKey)}
                <br />
                {t(article.readKey)}
              </span>
              <span className="block">
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
                  {t(article.topicKey)}
                </span>
                <span className="h2 mt-2 block text-xl text-foreground transition-colors group-hover:text-accent md:text-2xl">
                  {t(article.titleKey)}
                </span>
                <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted">
                  {t(article.descKey)}
                </span>
              </span>
              <ArrowUpRight
                className="hidden h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:block"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
