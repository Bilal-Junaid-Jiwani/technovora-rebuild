"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Link from "next/link";
import { CheckCircle2, Minus, Shield, Sparkles } from "lucide-react";
import { useI18n } from "@/components/layout/I18nProvider";

export default function PackagesPage() {
  const { t } = useI18n();

  const tiers = [
    {
      nameKey: "packages.tier1.name",
      descKey: "packages.tier1.desc",
      price: "$5,000",
      featured: false,
    },
    {
      nameKey: "packages.tier2.name",
      descKey: "packages.tier2.desc",
      price: "$10,000",
      featured: true,
    },
    {
      nameKey: "packages.tier3.name",
      descKey: "packages.tier3.desc",
      price: "$25,000+",
      featured: false,
    },
  ];

  const allFeatureKeys = ["packages.feat1", "packages.feat2", "packages.feat3", "packages.feat4", "packages.feat5"];
  // Starter: feat1-3 · Growth: feat1-4 · Enterprise: feat1-5
  const includedCount = [3, 4, 5];

  const paymentStages = [
    { key: "packages2.payment.stage1", pct: 50, color: "var(--brand-orange)" },
    { key: "packages2.payment.stage2", pct: 25, color: "var(--brand-magenta)" },
    { key: "packages2.payment.stage3", pct: 25, color: "var(--brand-purple)" },
  ];

  const addons = [
    { key: "packages.addons.1", price: "$1,500/mo" },
    { key: "packages.addons.2", price: "+$2,000" },
    { key: "packages.addons.3", price: "+$1,000" },
  ];

  const faqs = [
    { q: "packages.faq.1.q", a: "packages.faq.1.a" },
    { q: "packages.faq.2.q", a: "packages.faq.2.a" },
    { q: "packages.faq.3.q", a: "packages.faq.3.a" },
  ];

  return (
    <PageTransitionWrapper>
      {/* 1. Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28 px-6 text-center bg-bg-base">
        <div className="absolute inset-0 bg-dot-grid opacity-70 pointer-events-none" />
        <div className="orb orb-orange -top-20 left-1/4" />
        <div className="orb orb-crimson top-10 right-1/4" />
        <FadeIn className="relative">
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
            {t("packages2.hero.eyebrow")}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
            {t("packages.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            {t("packages.hero.desc")}
          </p>
        </FadeIn>
      </section>

      {/* 2. Pricing tiers */}
      <section className="py-20 md:py-28 px-6 bg-bg-base">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionHeading eyebrow={t("packages2.tiers.eyebrow")} title={t("packages.hero.title")} centered className="mb-14" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier, i) => {
              const card = (
                <div className={`p-8 rounded-2xl border h-full flex flex-col bg-bg-elevated ${tier.featured ? "border-transparent" : "border-bg-border hover:border-text-faint transition-colors"}`}>
                  {tier.featured && (
                    <span
                      className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white mb-6"
                      style={{ background: "var(--gradient)" }}
                    >
                      <Sparkles className="w-3.5 h-3.5" /> {t("packages2.tier2.badge")}
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold text-text mb-2">{t(tier.nameKey)}</h3>
                  <p className="text-text-muted text-sm mb-6 min-h-[2.5rem]">{t(tier.descKey)}</p>
                  <div className="font-mono text-4xl text-text mb-8">{tier.price}</div>
                  <ul className="space-y-3.5 mb-8 flex-grow">
                    {allFeatureKeys.slice(0, includedCount[i]).map((fk) => (
                      <li key={fk} className="flex items-center text-sm text-text-muted">
                        <CheckCircle2 className="w-4 h-4 mr-3 shrink-0 text-brand-magenta" /> {t(fk)}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={tier.featured ? "btn-primary justify-center w-full" : "btn-secondary justify-center w-full"}
                  >
                    {t("packages.btn")} {t(tier.nameKey)}
                  </Link>
                </div>
              );
              return (
                <FadeIn key={tier.nameKey} delay={i * 0.08} className={tier.featured ? "md:-translate-y-3" : undefined}>
                  {tier.featured ? (
                    <div className="rounded-2xl p-[1.5px]" style={{ background: "var(--gradient)" }}>
                      {card}
                    </div>
                  ) : (
                    card
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Add-ons menu */}
      <section className="py-20 md:py-28 px-6 bg-bg-surface">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <SectionHeading eyebrow={t("packages2.addons.eyebrow")} title={t("packages.addons.title")} centered className="mb-12" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {addons.map((addon, i) => (
              <FadeIn key={addon.key} delay={i * 0.06}>
                <div className="p-6 rounded-2xl border border-bg-border bg-bg-elevated h-full flex flex-col justify-between hover:border-text-faint transition-colors">
                  <span className="text-text font-semibold mb-6 block">{t(addon.key)}</span>
                  <span className="font-mono text-brand-orange text-lg">{addon.price}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technovora Guarantee — standalone banner */}
      <section className="py-20 md:py-28 px-6 bg-bg-base">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div
              className="relative overflow-hidden rounded-3xl px-8 py-16 md:py-20 text-center"
              style={{ background: "var(--gradient)" }}
            >
              <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
              <div className="relative max-w-2xl mx-auto">
                <Shield className="w-10 h-10 text-white/90 mx-auto mb-6" />
                <p className="font-mono text-xs text-white/80 uppercase tracking-widest mb-4">
                  {t("packages2.guarantee.eyebrow")}
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {t("packages.guarantee.title")}
                </h2>
                <p className="text-white/85 text-lg">{t("packages.guarantee.desc")}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Payment terms with 50/25/25 visual */}
      <section className="py-20 md:py-28 px-6 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeading eyebrow={t("packages2.payment.eyebrow")} title={t("packages.payment.title")} centered className="mb-6" />
            <p className="text-text-muted text-center max-w-2xl mx-auto mb-14">{t("packages.payment.desc")}</p>

            <div className="flex w-full h-3 rounded-full overflow-hidden mb-8 border border-bg-border">
              {paymentStages.map((stage) => (
                <div key={stage.key} style={{ width: `${stage.pct}%`, backgroundColor: stage.color }} />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              {paymentStages.map((stage) => (
                <div key={stage.key}>
                  <div className="font-display text-4xl md:text-5xl text-text mb-1">{stage.pct}%</div>
                  <p className="text-text-muted text-sm">{t(stage.key)}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. What's included comparison table */}
      <section className="py-20 md:py-28 px-6 bg-bg-base">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionHeading eyebrow={t("packages2.compare.eyebrow")} title={t("packages2.compare.title")} centered className="mb-12" />
            <div className="overflow-x-auto rounded-2xl border border-bg-border">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-bg-border">
                    <th className="py-4 px-6 text-text-faint font-mono text-xs uppercase tracking-widest">
                      {t("packages2.compare.feature")}
                    </th>
                    {tiers.map((tier) => (
                      <th
                        key={tier.nameKey}
                        className={`py-4 px-6 font-semibold text-center ${tier.featured ? "text-brand-orange bg-bg-surface" : "text-text"}`}
                      >
                        {t(tier.nameKey)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatureKeys.map((fk, rowIdx) => (
                    <tr key={fk} className="border-b border-bg-border last:border-b-0">
                      <td className="py-4 px-6 text-text-muted text-sm">{t(fk)}</td>
                      {tiers.map((tier, colIdx) => (
                        <td
                          key={tier.nameKey}
                          className={`py-4 px-6 text-center ${tier.featured ? "bg-bg-surface" : ""}`}
                        >
                          {rowIdx < includedCount[colIdx] ? (
                            <CheckCircle2 className="w-5 h-5 mx-auto text-brand-magenta" />
                          ) : (
                            <Minus className="w-5 h-5 mx-auto text-text-faint" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 md:py-28 px-6 bg-bg-surface">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionHeading eyebrow={t("packages2.faq.eyebrow")} title={t("packages.faq.title")} centered className="mb-12" />
            <div className="divide-y divide-bg-border border-t border-bg-border">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-6">
                  <h4 className="text-lg font-semibold text-text mb-2">{t(faq.q)}</h4>
                  <p className="text-text-muted text-sm">{t(faq.a)}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Custom quote form — closing CTA */}
      <section className="py-20 md:py-28 px-6 bg-bg-base">
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <SectionHeading eyebrow={t("packages2.form.eyebrow")} title={t("packages.form.title")} centered className="mb-10" />
            <div className="bg-bg-elevated p-8 rounded-2xl border border-bg-border">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder={t("packages.form.name")}
                  className="w-full bg-bg-base border border-bg-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-brand-orange"
                />
                <input
                  type="email"
                  placeholder={t("packages.form.email")}
                  className="w-full bg-bg-base border border-bg-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-brand-orange"
                />
                <textarea
                  rows={4}
                  placeholder={t("packages.form.details")}
                  className="w-full bg-bg-base border border-bg-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-brand-orange resize-none"
                />
                <button type="submit" className="btn-primary justify-center w-full text-base py-3.5">
                  {t("packages.form.submit")}
                </button>
              </form>
              <p className="text-text-faint text-xs text-center mt-4">{t("packages2.form.note")}</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransitionWrapper>
  );
}
