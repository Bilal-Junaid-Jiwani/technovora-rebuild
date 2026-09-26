"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { useI18n } from "@/components/layout/I18nProvider";

interface StatCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  style: React.CSSProperties;
  delay: number;
}

const STAT_CARDS: StatCard[] = [
  {
    id: "ai",
    title: "Protonic Engineering AI",
    subtitle: "Singapore",
    icon: "AI",
    iconBg: "bg-magenta/10",
    iconColor: "text-magenta",
    delay: 0.90,
    style: { top: "40%", left: "-15%" },
  },
  {
    id: "3d",
    title: "Medmarks 3D 5D [...]",
    subtitle: "Indonesia",
    icon: "3D",
    iconBg: "bg-crimson/10",
    iconColor: "text-crimson",
    delay: 1.1,
    style: { top: "60%", left: "-5%" },
  },
  {
    id: "stripe",
    title: "Stripe Global Connect",
    subtitle: "USA",
    icon: "S",
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
    delay: 1.3,
    style: { top: "45%", right: "-10%" },
  },
];

export function GlobeStatCards() {
  const reduceMotion = useReducedMotion();
  const { t } = useI18n();

  return (
    <>
      {STAT_CARDS.map((card) => (
        <motion.div
          key={card.id}
          className="absolute pointer-events-none z-10"
          style={card.style}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                delay: card.delay,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }
          }
        >
          {/* Card */}
          <div className="flex items-center gap-3 bg-bg-elevated shadow-xl shadow-black/5 dark:shadow-black/30 border border-bg-border rounded-xl px-4 py-2.5 w-56">
            <div className={`w-8 h-8 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor} text-xs font-bold shrink-0`}>
              {card.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-text leading-tight truncate">
                {t(`globe.${card.id}.title`) || card.title}
              </span>
              <span className="text-[9px] text-text-muted">
                {t(`globe.${card.id}.subtitle`) || card.subtitle}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}
