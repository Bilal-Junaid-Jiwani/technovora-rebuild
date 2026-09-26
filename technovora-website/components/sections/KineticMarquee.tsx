"use client";

import { useI18n } from "@/components/layout/I18nProvider";

function Dot() {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full shrink-0 bg-brand-orange"
      aria-hidden="true"
    />
  );
}

function Pill({ text, bold }: { text: string; bold: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 shrink-0 rounded-full border border-bg-border bg-bg-surface px-5 py-2.5"
    >
      <Dot />
      <span
        className={`font-mono text-[13px] tracking-[0.06em] uppercase whitespace-nowrap ${
          bold ? "font-semibold text-text" : "font-medium text-text-muted"
        }`}
      >
        {text}
      </span>
    </span>
  );
}

export function KineticMarquee() {
  const { t } = useI18n();

  const ITEMS = [
    { text: t("marquee.1"), bold: true },
    { text: t("marquee.2"), bold: false },
    { text: t("marquee.3"), bold: true },
    { text: t("marquee.4"), bold: false },
    { text: t("marquee.5"), bold: true },
    { text: t("marquee.6"), bold: false },
    { text: t("marquee.7"), bold: true },
    { text: t("marquee.8"), bold: false },
  ] as const;

  // Row 2 is the same set, offset by half so the two rows don't mirror each other.
  const ROW_2 = [...ITEMS.slice(4), ...ITEMS.slice(0, 4)];

  const rowTop = [...ITEMS, ...ITEMS];
  const rowBottom = [...ROW_2, ...ROW_2];

  return (
    <div
      className="relative overflow-hidden py-8 md:py-10 border-y border-bg-border bg-bg-surface flex flex-col gap-3 md:gap-4"
      aria-label="Services marquee"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap gap-3">
        {rowTop.map((item, i) => (
          <Pill key={i} text={item.text} bold={item.bold} />
        ))}
      </div>
      <div className="flex animate-marquee-reverse whitespace-nowrap gap-3">
        {rowBottom.map((item, i) => (
          <Pill key={i} text={item.text} bold={item.bold} />
        ))}
      </div>
    </div>
  );
}
