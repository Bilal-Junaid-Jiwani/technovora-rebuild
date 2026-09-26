"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

// Numbered services index 01–06 [Huge]: hairline TOC rows,
// number + name + one-liner + arrow linking to each service page.
const SERVICES = [
  { href: "/services/ai-automation", num: "01", index: 1 },
  { href: "/services/web-development", num: "02", index: 2 },
  { href: "/services/mobile-apps", num: "03", index: 3 },
  { href: "/services/cloud-devops", num: "04", index: 4 },
  { href: "/services/design", num: "05", index: 5 },
  { href: "/services/smm", num: "06", index: 6 },
];

export function ServicesIndex() {
  const { t } = useI18n();

  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Meta-bar */}
        <Reveal>
          <div className="flex items-baseline justify-between pb-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.services.meta.label")}
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {t("home.services.meta.value")}
            </p>
          </div>
        </Reveal>

        {/* TOC rows */}
        <div>
          {SERVICES.map((service, i) => (
            <Reveal key={service.href} delay={i * 0.04}>
              <Link
                href={service.href}
                className="group flex items-baseline gap-5 border-t border-hairline py-6 transition-colors last:border-b md:gap-8 md:py-7"
              >
                <span className="w-8 shrink-0 text-sm font-medium tabular-nums text-muted">
                  {service.num}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {t(`home.services.${service.index}.name`)}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted md:text-base">
                    {t(`home.services.${service.index}.desc`)}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 -translate-x-1 translate-y-1 text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
