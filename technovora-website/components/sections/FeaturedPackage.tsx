"use client";
import { useI18n } from "@/components/layout/I18nProvider";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { CALENDLY_URL } from "@/lib/constants";

const DELIVERABLES = [
  "Discovery call + process audit (2h)",
  "n8n automation architecture design",
  "3 automated workflows built and tested",
  "Claude AI integration where applicable",
  "CRM / tool integrations (HubSpot, Slack, etc.)",
  "Full documentation and handover session",
  "2 rounds of revisions included",
  "30-day post-launch support",
];

const OUTCOMES = [
  { metric: "6–12h", label: "saved per week" },
  { metric: "3 weeks", label: "to production" },
  { metric: "100%", label: "code ownership" },
];

export function FeaturedPackage() {
  const { t } = useI18n();
  return (
    <section className="py-28 border-y border-bg-border bg-bg-surface/40">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs text-text-faint uppercase tracking-widest mb-3 text-center">{t("pkg.popular") || "Most Popular"}</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-text mb-2 leading-tight">
            AI Automation{" "}
            <span className="gradient-text">{t("pkg.sprint") || "Sprint Package"}</span>
          </h2>
          <p className="text-text-muted text-lg text-center max-w-xl mx-auto mb-16">
            Highest demand. Fastest ROI. Your most painful manual process — automated and shipped in 3 weeks.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Deliverables */}
          <FadeIn delay={0.1}>
            <div className="bg-bg-elevated border border-bg-border rounded-2xl p-8">
              <h3 className="font-display font-semibold text-xl text-text mb-6">
                What's included
              </h3>
              <ul className="space-y-3.5">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-orange mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M13.5 4.5l-7.5 7.5L2.5 8.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Pricing card */}
          <FadeIn delay={0.18}>
            <div className="sticky top-24">
              <div
                className="rounded-2xl p-[1px]"
                style={{ background: "var(--gradient)" }}
              >
                <div className="bg-bg-elevated rounded-[15px] p-7 flex flex-col gap-6">
                  {/* Price */}
                  <div>
                    <div className="font-mono text-xs text-text-faint uppercase tracking-widest mb-2">{t("pkg.starting") || "Starting from"}</div>
                    <div className="font-display font-bold text-5xl text-text">
                      $10,000
                    </div>
                    <div className="text-sm text-text-muted mt-1">
                      50% upfront · 50% on delivery
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-bg-border">
                    {OUTCOMES.map((o) => (
                      <div key={o.label} className="text-center">
                        <div className="font-mono font-bold text-lg text-text">
                          {o.metric}
                        </div>
                        <div className="text-xs text-text-muted mt-0.5">
                          {o.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-3.5 rounded-xl font-semibold text-white text-sm hover:opacity-90 transition-opacity"
                      style={{ background: "var(--gradient)" }}
                    >
                      Book a Discovery Call
                    </a>
                    <Link
                      href="/packages"
                      className="w-full text-center py-3.5 rounded-xl font-semibold text-text-muted text-sm border border-bg-border hover:border-text-faint hover:text-text transition-all"
                    >
                      See All Packages
                    </Link>
                  </div>

                  <p className="text-xs text-text-faint text-center">
                    No retainer required. Cancel after delivery.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
