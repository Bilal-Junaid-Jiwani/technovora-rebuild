"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";
import { ArticleTag } from "./articles";
import { Reveal } from "./Reveal";

interface ArticleTemplateProps {
  topic: string;
  title: string;
  seasonKey: string;
  readTime: string;
  children: ReactNode;
}

/**
 * Shared layout for all article pages.
 * Body prose is hardcoded in English in each article page file.
 */
export function ArticleTemplate({ topic, title, seasonKey, readTime, children }: ArticleTemplateProps) {
  const { t } = useI18n();
  const calendly = t("common.calendly");

  return (
    <div className="bg-background">
      {/* Article hero */}
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-28 md:pt-36">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("blog3.article.back")}
          </Link>
          <div className="mt-8">
            <ArticleTag>{topic}</ArticleTag>
          </div>
          <h1 className="display mt-6 text-3xl text-foreground md:text-5xl">{title}</h1>
          <p className="mt-6 text-sm text-muted">
            {t("blog3.article.author")} · {t(seasonKey)} · {readTime}
          </p>
        </Reveal>
      </section>

      {/* Prose body — hardcoded English JSX from the article page */}
      <section className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="space-y-6 pb-4 leading-relaxed text-foreground/90 [&_h2]:h2 [&_h2]:pt-8 [&_h2]:text-2xl [&_h2]:text-foreground [&_p]:text-muted [&_p]:leading-loose [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted [&_li]:leading-loose">
            {children}
          </div>
        </Reveal>
      </section>

      {/* Closing CTA — distinct from BlogCta: split, left-aligned, ruled band */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Reveal>
          <div className="rule flex flex-col gap-6 pt-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="h2 text-xl text-foreground md:text-2xl">
                {t("blog3.article.cta.title")}
              </h2>
              <p className="mt-2 max-w-md leading-relaxed text-muted">
                {t("blog3.article.cta.desc")}
              </p>
            </div>
            <a
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0"
            >
              {t("blog3.article.cta.button")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
