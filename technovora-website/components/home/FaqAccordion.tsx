"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

// Objection-handling FAQ [Clay]: accordion, max 5 questions buyers ask.
const ITEMS = [1, 2, 3, 4, 5];

export function FaqAccordion() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (n: number) => setOpen((prev) => (prev === n ? null : n));

  return (
    <section className="border-t border-hairline bg-background" id="faq">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Meta-bar */}
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 pb-8 md:pb-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.faq.meta.label")}
            </p>
            <p className="text-right text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.faq.meta.value")}
            </p>
          </div>
        </Reveal>

        {/* Accordion */}
        <div className="mx-auto max-w-4xl">
          {ITEMS.map((n, i) => {
            const isOpen = open === n;
            return (
              <Reveal key={n} delay={i * 0.03}>
                <div className="border-t border-hairline last:border-b">
                  <button
                    type="button"
                    onClick={() => toggle(n)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${n}`}
                    id={`faq-button-${n}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-medium tracking-tight text-foreground">
                      {t(`home.faq.${n}.q`)}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-panel-${n}`}
                    role="region"
                    aria-labelledby={`faq-button-${n}`}
                    hidden={!isOpen}
                  >
                    <p className="max-w-3xl pb-7 text-[15px] leading-relaxed text-muted">
                      {t(`home.faq.${n}.a`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
