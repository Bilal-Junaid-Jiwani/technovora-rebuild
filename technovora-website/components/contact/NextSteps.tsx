"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/blog/Reveal";

/**
 * NextSteps — steps timeline.
 * Three simple steps, no dates: you write → 30-minute call → clear written estimate.
 * Ruled numbered rows, shared with the blog's numbered-rhythm language.
 */
const STEP_KEYS = ["contact3.next.1", "contact3.next.2", "contact3.next.3"];

export function NextSteps() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <Reveal>
        <h2 className="h2 text-xl text-foreground md:text-2xl">
          {t("contact3.next.title")}
        </h2>
      </Reveal>
      <ol className="mt-8">
        {STEP_KEYS.map((key, i) => (
          <Reveal key={key} delay={i * 0.07}>
            <li className="rule flex gap-6 py-8 md:gap-10 md:py-10">
              <span className="display shrink-0 text-4xl text-accent md:text-6xl">
                0{i + 1}
              </span>
              <div className="pt-1 md:pt-2">
                <h3 className="h2 text-lg text-foreground md:text-xl">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  {t(`${key}.desc`)}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
