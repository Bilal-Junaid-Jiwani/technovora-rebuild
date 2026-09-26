"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

// Engagement snapshot card (F4, round 2): an honest, obviously illustrative
// anchor next to the hero globe. Fully static — no animation, no banned
// effects. All values are generic and labeled as an example.
export function HeroProofCard() {
  const { t } = useI18n();

  const rows = [
    { label: t("home.hero.proof.scope.label"), value: t("home.hero.proof.scope.value") },
    { label: t("home.hero.proof.stack.label"), value: t("home.hero.proof.stack.value") },
    { label: t("home.hero.proof.timeline.label"), value: t("home.hero.proof.timeline.value") },
  ];

  return (
    <aside
      aria-label={t("home.hero.proof.label")}
      className="w-full max-w-[440px] rounded-2xl border border-hairline bg-surface p-5 text-left"
    >
      <div className="flex items-center gap-2">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {t("home.hero.proof.label")}
        </p>
      </div>
      <dl className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-xs text-muted">{row.label}</dt>
            <dd className="mt-0.5 text-sm font-medium text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 border-t border-hairline pt-4">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          {t("home.hero.proof.link")}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </aside>
  );
}
