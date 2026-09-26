"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Plus } from "lucide-react";
import { useI18n } from "@/components/layout/I18nProvider";
import { SALES_EMAIL } from "@/lib/constants";

interface FAQRowProps {
  index: number;
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}

function FAQRow({ index, q, a, open, onToggle }: FAQRowProps) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        open ? "border-magenta/40 bg-bg-elevated" : "border-bg-border bg-bg-surface hover:border-text-faint"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-5 p-5 md:p-6 text-left"
      >
        <span
          className={`font-mono text-xs font-semibold transition-colors ${open ? "text-magenta" : "text-text-faint"}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-base md:text-lg font-semibold text-text">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
            open ? "bg-magenta text-white" : "bg-bg-elevated text-text-muted"
          }`}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-[3.75rem] pr-6 md:pl-[4.25rem] text-text-muted leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-bg-base">
      <div className="absolute inset-0 bg-gradient-slanted opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[4fr_7fr] lg:gap-20 items-start">
          {/* Left — sticky intro + support card */}
          <FadeIn className="lg:sticky lg:top-36">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">
              {t("faq.eyebrow")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text leading-tight mb-4">
              {t("faq.title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text-heading">{t("faq.title").split(" ").slice(-1)[0]}</span>
            </h2>
            <p className="text-text-muted text-lg">{t("faq.subtitle")}</p>

            <a
              href={`mailto:${SALES_EMAIL}`}
              className="group mt-10 block rounded-3xl border border-bg-border bg-bg-elevated p-6 transition-all hover:border-magenta/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-magenta/10 text-magenta">
                <Mail className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-lg font-semibold text-text">{t("faq.stillquestions")}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">{t("faq.stillquestions.desc")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-magenta">
                {SALES_EMAIL}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </FadeIn>

          {/* Right — accordion */}
          <div className="space-y-3">
            {FAQS.map((item, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <FAQRow
                  index={i}
                  q={item.q}
                  a={item.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
