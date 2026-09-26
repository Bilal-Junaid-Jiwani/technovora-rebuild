"use client";

import { Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const POINTS = [1, 2, 3];

export function MethodNote() {
  const { t } = useI18n();
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="card p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft">
                  <Info className="h-5 w-5 text-accent" />
                </span>
                <h2 className="h2 mt-5 text-3xl text-foreground md:text-4xl">
                  {t("portfolio.method.title")}
                </h2>
              </div>
              <div>
                <p className="leading-relaxed text-muted">
                  {t("portfolio.method.note")}
                </p>
                <ul className="mt-8 space-y-5">
                  {POINTS.map((n) => (
                    <li key={n} className="rule flex gap-4 pt-5">
                      <span className="display shrink-0 text-sm text-accent">
                        0{n}
                      </span>
                      <p className="text-sm leading-relaxed text-muted">
                        {t(`portfolio.method.${n}`)}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-muted">
                  {t("portfolio.method.request")}{" "}
                  <a
                    href={`mailto:${t("common.email.sales")}`}
                    className="font-medium text-foreground underline decoration-hairline underline-offset-4 hover:text-accent"
                  >
                    {t("common.email.sales")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
