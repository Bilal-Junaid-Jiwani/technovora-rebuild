"use client";

import { ArrowUpRight, Mail, MapPin, CalendarClock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/blog/Reveal";

/**
 * ContactRow — ONE compressed contact row [Koto].
 * Email, offices, and the Calendly link in a single band — one row,
 * not five blocks. Every action is real.
 */
export function ContactRow() {
  const { t } = useI18n();
  const sales = t("common.email.sales");
  const info = t("common.email.info");
  const calendly = t("common.calendly");

  const cells = [
    {
      icon: <Mail className="h-4 w-4" aria-hidden="true" />,
      label: t("contact3.row.email.label"),
      body: (
        <>
          <a href={`mailto:${sales}`} className="block font-medium text-foreground transition-colors hover:text-accent">
            {sales}
          </a>
          <span className="block text-sm text-muted">{t("contact3.row.email.1.note")}</span>
          <a
            href={`mailto:${info}`}
            className="mt-3 block font-medium text-foreground transition-colors hover:text-accent"
          >
            {info}
          </a>
          <span className="block text-sm text-muted">{t("contact3.row.email.2.note")}</span>
        </>
      ),
    },
    {
      icon: <MapPin className="h-4 w-4" aria-hidden="true" />,
      label: t("contact3.row.offices.label"),
      body: (
        <>
          <span className="block font-medium text-foreground">{t("contact3.row.offices.1")}</span>
          <span className="mt-1 block font-medium text-foreground">{t("contact3.row.offices.2")}</span>
        </>
      ),
    },
    {
      icon: <CalendarClock className="h-4 w-4" aria-hidden="true" />,
      label: t("contact3.row.book.label"),
      body: (
        <>
          <a
            href={calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
          >
            {t("contact3.row.book.value")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <span className="mt-1 block text-sm text-muted">{t("contact3.row.book.note")}</span>
        </>
      ),
    },
  ];

  return (
    <section className="border-y border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {cells.map((cell) => (
              <div key={cell.label} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface text-accent">
                  {cell.icon}
                </span>
                <div>
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    {cell.label}
                  </p>
                  <div className="mt-2.5">{cell.body}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
