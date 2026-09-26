"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, RotateCcw } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/blog/Reveal";

/**
 * NeedsMatcher — 3-question needs-matcher [ELEKS].
 * Three light questions (need, timeline, budget) → a recommended service
 * plus a pre-filled mailto CTA. Every action is real; the matcher is
 * a guide, not a verdict.
 */

const NEEDS: { key: string; service: string }[] = [
  { key: "contact3.matcher.q1.a", service: "web-development" },
  { key: "contact3.matcher.q1.b", service: "web-development" },
  { key: "contact3.matcher.q1.c", service: "mobile-apps" },
  { key: "contact3.matcher.q1.d", service: "ai-automation" },
  { key: "contact3.matcher.q1.e", service: "design" },
  { key: "contact3.matcher.q1.f", service: "cloud-devops" },
  { key: "contact3.matcher.q1.g", service: "smm" },
];

const TIMELINES = [
  "contact3.matcher.q2.a",
  "contact3.matcher.q2.b",
  "contact3.matcher.q2.c",
  "contact3.matcher.q2.d",
];

const BUDGETS = [
  "contact3.matcher.q3.a",
  "contact3.matcher.q3.b",
  "contact3.matcher.q3.c",
  "contact3.matcher.q3.d",
];

function Question({
  n,
  title,
  options,
  selected,
  onSelect,
}: {
  n: string;
  title: string;
  options: string[];
  selected: number | null;
  onSelect: (i: number) => void;
}) {
  return (
    <div>
      <p className="flex items-baseline gap-3">
        <span className="display text-sm text-accent">{n}</span>
        <span className="h2 text-lg text-foreground">{title}</span>
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5" role="group" aria-label={title}>
        {options.map((key, i) => (
          <button
            key={key}
            type="button"
            aria-pressed={selected === i}
            onClick={() => onSelect(i)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              selected === i
                ? "border-accent bg-accent-soft text-foreground"
                : "border-hairline bg-background text-muted hover:border-muted hover:text-foreground"
            }`}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export function NeedsMatcher() {
  const { t } = useI18n();
  const [need, setNeed] = useState<number | null>(null);
  const [timeline, setTimeline] = useState<number | null>(null);
  const [budget, setBudget] = useState<number | null>(null);

  const done = need !== null && timeline !== null && budget !== null;

  const reset = () => {
    setNeed(null);
    setTimeline(null);
    setBudget(null);
  };

  const result = done
    ? (() => {
        const needDef = NEEDS[need];
        const serviceName = t(`svc.${needDef.service}.hero.eyebrow`);
        const reason = t(`contact3.matcher.svc.${needDef.service}.reason`);
        const sales = t("common.email.sales");
        const subject = `Project inquiry: ${serviceName}`;
        const body = [
          "Hi,",
          "",
          `What I need: ${t(needDef.key)}`,
          `Timeline: ${t(TIMELINES[timeline])}`,
          `Rough budget: ${t(BUDGETS[budget])}`,
          "",
          `I used your needs matcher and it recommended ${serviceName}.`,
          "",
          "Thanks!",
        ].join("\n");
        const href = `mailto:${sales}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        return { service: needDef.service, serviceName, reason, href };
      })()
    : null;

  return (
    <section className="border-b border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <Reveal>
          <h2 className="h2 text-xl text-foreground md:text-2xl">
            {t("contact3.matcher.title")}
          </h2>
          <p className="mt-2 max-w-xl leading-relaxed text-muted">
            {t("contact3.matcher.desc")}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-9 md:mt-12 md:gap-10">
          <Reveal>
            <Question
              n="01"
              title={t("contact3.matcher.q1")}
              options={NEEDS.map((n) => t(n.key))}
              selected={need}
              onSelect={setNeed}
            />
          </Reveal>
          <Reveal>
            <Question
              n="02"
              title={t("contact3.matcher.q2")}
              options={TIMELINES.map((k) => t(k))}
              selected={timeline}
              onSelect={setTimeline}
            />
          </Reveal>
          <Reveal>
            <Question
              n="03"
              title={t("contact3.matcher.q3")}
              options={BUDGETS.map((k) => t(k))}
              selected={budget}
              onSelect={setBudget}
            />
          </Reveal>
        </div>

        {result && (
          <Reveal className="mt-12">
            <div className="rule pt-10">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-accent">
                {t("contact3.matcher.result.label")}
              </p>
              <h3 className="display mt-3 text-2xl text-foreground md:text-3xl">
                {result.serviceName}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">
                {t("contact3.matcher.result.lead")} {result.reason}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a href={result.href} className="btn-primary">
                  {t("contact3.matcher.result.cta")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href={`/services/${result.service}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
                >
                  {t("contact3.matcher.result.service")}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  {t("contact3.matcher.reset")}
                </button>
              </div>
              <p className="mt-6 text-sm text-muted">{t("contact3.matcher.note")}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
