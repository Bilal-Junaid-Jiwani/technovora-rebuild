"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { ReactNode } from "react";

/** Subtle fade-up reveal. No animation library: IntersectionObserver
    toggles visibility, CSS transitions do the rest. Renders static
    content when the user prefers reduced motion. */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Vertical rise distance in px — varied per service page so the six
      pages don't share one identical animation. */
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "-60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        reduced
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : `translateY(${y}px)`,
              transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
            }
      }
    >
      {children}
    </div>
  );
}

export function ServiceBreadcrumb() {
  const { t } = useI18n();
  return (
    <Link
      href="/services"
      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      {t("svc.shared.allServices")}
    </Link>
  );
}

export function SectionHead({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal>
      <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2 mt-4 text-3xl text-foreground md:text-4xl">{title}</h2>
        {desc && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{desc}</p>}
      </div>
    </Reveal>
  );
}

export function CalendlyButton({ label, variant = "primary" }: { label: string; variant?: "primary" | "secondary" }) {
  const { t } = useI18n();
  return (
    <a
      href={t("common.calendly")}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "primary" ? "btn-primary" : "btn-secondary"}
    >
      {label}
    </a>
  );
}
