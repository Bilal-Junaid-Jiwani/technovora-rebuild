"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/home/Reveal";

type BandKey = "ai" | "web" | "mobile" | "cloud" | "design" | "smm";

const BANDS: { key: BandKey; href: string }[] = [
  { key: "ai", href: "/services/ai-automation" },
  { key: "web", href: "/services/web-development" },
  { key: "mobile", href: "/services/mobile-apps" },
  { key: "cloud", href: "/services/cloud-devops" },
  { key: "design", href: "/services/design" },
  { key: "smm", href: "/services/smm" },
];

function FrameDots() {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
      <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
      <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
    </div>
  );
}

function AiVisual({ t }: { t: (key: string) => string }) {
  return (
    <div className="card overflow-hidden" role="img" aria-label={t("servicesidx.bands.ai.term.title")}>
      <div className="flex items-center gap-3 border-b border-hairline px-5 py-3.5">
        <FrameDots />
        <span className="ml-1 truncate text-xs font-medium tracking-wide text-muted">
          {t("servicesidx.bands.ai.term.title")}
        </span>
      </div>
      <div className="space-y-4 px-5 py-6">
        {[1, 2].map((n) => (
          <div key={n}>
            <p className="text-sm text-muted">
              {t(`servicesidx.bands.ai.term.l${n}.cmd`)}
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {t(`servicesidx.bands.ai.term.l${n}.out`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WebVisual({ t }: { t: (key: string) => string }) {
  return (
    <div className="card overflow-hidden" role="img" aria-label={t("servicesidx.bands.web.browser.title")}>
      <div className="flex items-center gap-3 border-b border-hairline px-5 py-3.5">
        <FrameDots />
        <span className="ml-1 truncate text-xs font-medium tracking-wide text-muted">
          {t("servicesidx.bands.web.browser.title")}
        </span>
      </div>
      <div className="space-y-4 px-5 py-6">
        <nav className="flex gap-4 text-xs font-medium text-muted" aria-hidden="true">
          {t("servicesidx.bands.web.browser.nav").split(" · ").map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
        <div className="h-6 w-3/4 rounded-md bg-hairline" aria-hidden="true" />
        <p className="text-lg font-semibold text-foreground">
          {t("servicesidx.bands.web.browser.headline")}
        </p>
        <div className="space-y-2" aria-hidden="true">
          <div className="h-3 w-full rounded bg-hairline" />
          <div className="h-3 w-5/6 rounded bg-hairline" />
        </div>
        <p className="text-sm text-accent">{t("servicesidx.bands.web.browser.note")}</p>
      </div>
    </div>
  );
}

function MobileVisual({ t }: { t: (key: string) => string }) {
  const screens = [
    { label: "servicesidx.bands.mobile.screen1", w: "w-24" },
    { label: "servicesidx.bands.mobile.screen2", w: "w-24" },
  ];
  return (
    <div
      className="card flex items-end justify-center gap-6 px-6 py-10"
      role="img"
      aria-label={t("servicesidx.bands.mobile.title")}
    >
      {screens.map((screen) => (
        <div key={screen.label} className="flex flex-col items-center gap-3">
          <div className="h-52 w-28 rounded-2xl border border-hairline bg-background p-2">
            <div className="mx-auto h-1.5 w-10 rounded-full bg-hairline" aria-hidden="true" />
            <div className="mt-4 space-y-2" aria-hidden="true">
              <div className="h-2.5 w-3/4 rounded bg-hairline" />
              <div className="h-2.5 w-full rounded bg-hairline" />
              <div className="h-2.5 w-5/6 rounded bg-hairline" />
              <div className="mt-3 h-8 rounded-md bg-accent-soft" />
            </div>
          </div>
          <p className="text-xs font-medium text-muted">{t(screen.label)}</p>
        </div>
      ))}
    </div>
  );
}

function CloudVisual({ t }: { t: (key: string) => string }) {
  const steps = [1, 2, 3];
  return (
    <div
      className="card px-6 py-10"
      role="img"
      aria-label={t("servicesidx.bands.cloud.caption")}
    >
      <div className="flex items-center justify-center" aria-hidden="true">
        {steps.map((n, i) => (
          <div key={n} className="flex items-center">
            <div className="flex flex-col items-center gap-2.5">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                  n === 3 ? "border-accent bg-accent-soft" : "border-hairline bg-background"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    n === 3 ? "bg-accent" : "bg-hairline"
                  }`}
                />
              </span>
              <span className="text-xs font-medium text-muted">
                {t(`servicesidx.bands.cloud.step${n}`)}
              </span>
            </div>
            {i < steps.length - 1 && <div className="mx-3 h-px w-10 bg-hairline sm:w-16" />}
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted">
        {t("servicesidx.bands.cloud.caption")}
      </p>
    </div>
  );
}

function DesignVisual({ t }: { t: (key: string) => string }) {
  return (
    <div
      className="card px-6 py-8"
      role="img"
      aria-label={t("servicesidx.bands.design.specimen.title")}
    >
      <p className="text-xs font-medium tracking-wide text-muted uppercase">
        {t("servicesidx.bands.design.specimen.title")}
      </p>
      <p className="mt-5 text-3xl font-semibold text-foreground">
        {t("servicesidx.bands.design.specimen.line1")}
      </p>
      <p className="mt-2 text-base text-muted">
        {t("servicesidx.bands.design.specimen.line2")}
      </p>
      <div className="mt-6 flex items-center gap-3" aria-hidden="true">
        <span className="h-8 w-8 rounded-full bg-foreground" />
        <span className="h-8 w-8 rounded-full bg-muted" />
        <span className="h-8 w-8 rounded-full bg-hairline" />
        <span className="h-8 w-8 rounded-full bg-accent" />
      </div>
      <p className="mt-4 text-sm text-muted">
        {t("servicesidx.bands.design.specimen.note")}
      </p>
    </div>
  );
}

function SmmVisual({ t }: { t: (key: string) => string }) {
  const days = [1, 2, 3, 4, 5, 6, 7];
  const filled = [1, 3, 5];
  return (
    <div
      className="card px-6 py-8"
      role="img"
      aria-label={t("servicesidx.bands.smm.cal.title")}
    >
      <p className="text-xs font-medium tracking-wide text-muted uppercase">
        {t("servicesidx.bands.smm.cal.title")}
      </p>
      <div className="mt-5 grid grid-cols-7 gap-2">
        {days.map((n) => (
          <div key={n} className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-muted">
              {t(`servicesidx.bands.smm.day${n}`)}
            </span>
            <div
              className={`h-14 w-full rounded-md border ${
                filled.includes(n)
                  ? "border-accent bg-accent-soft"
                  : "border-hairline bg-background"
              }`}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const VISUALS: Record<BandKey, (props: { t: (key: string) => string }) => React.JSX.Element> = {
  ai: AiVisual,
  web: WebVisual,
  mobile: MobileVisual,
  cloud: CloudVisual,
  design: DesignVisual,
  smm: SmmVisual,
};

export function CapabilityBands() {
  const { t } = useI18n();

  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="h2 text-3xl text-foreground md:text-4xl">
            {t("servicesidx.bands.heading")}
          </h2>
        </Reveal>

        <div className="mt-14 space-y-8 md:space-y-10">
          {BANDS.map((band, i) => {
            const Visual = VISUALS[band.key];
            const visualFirst = i % 2 === 1;
            return (
              <Reveal key={band.key}>
                <article className="grid gap-0 overflow-hidden rounded-2xl border border-hairline bg-surface md:grid-cols-2">
                  <div
                    className={`flex flex-col justify-center p-8 md:p-12 ${
                      visualFirst ? "md:order-2" : ""
                    }`}
                  >
                    <h3 className="h2 text-2xl text-foreground md:text-3xl">
                      {t(`servicesidx.bands.${band.key}.title`)}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {t(`servicesidx.bands.${band.key}.desc`)}
                    </p>
                    <Link
                      href={band.href}
                      className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-accent hover:underline"
                    >
                      {t("servicesidx.bands.link")}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <div className={`p-8 md:p-12 ${visualFirst ? "md:order-1" : ""}`}>
                    <Visual t={t} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
