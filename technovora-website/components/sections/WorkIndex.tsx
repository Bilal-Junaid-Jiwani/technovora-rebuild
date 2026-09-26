"use client";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useI18n } from "@/components/layout/I18nProvider";

const WORKS = [
  { name: "Fintech Dashboard", type: "Web App", year: "2026", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
  { name: "AI Content Generator", type: "SaaS", year: "2025", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" },
  { name: "Global E-commerce", type: "Platform", year: "2025", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
  { name: "Healthcare Portal", type: "Web App", year: "2024", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" },
];

export function WorkIndex() {
  const { t } = useI18n();
  const [hovered, setHovered] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // Lerp the floating preview toward the cursor without re-rendering React on every frame.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14;
      pos.current.y += (target.current.y - pos.current.y) * 0.14;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${pos.current.x + 28}px, ${pos.current.y - 120}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  return (
    <section className="py-24 md:py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14 md:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={t("work.eyebrow")}
              title={t("work.title")}
              description={t("work.subtitle")}
              className="max-w-2xl"
            />
            <Link
              href="/portfolio"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-magenta transition-all hover:gap-3"
            >
              {t("work.viewall")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div
          ref={listRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setHovered(null)}
          className="relative border-t border-bg-border"
        >
          {/* Cursor-following preview (desktop only) */}
          <div
            ref={previewRef}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
            style={{ willChange: "transform" }}
            aria-hidden="true"
          >
            <div
              className="relative h-[210px] w-[320px] overflow-hidden rounded-2xl border border-bg-border bg-bg-surface shadow-2xl transition-all duration-300"
              style={{ opacity: hovered === null ? 0 : 1, scale: hovered === null ? 0.85 : 1 }}
            >
              {WORKS.map((work, i) => (
                <Image
                  key={work.name}
                  src={work.image}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover transition-all duration-500"
                  style={{
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? "scale(1)" : "scale(1.12)",
                    filter: hovered === i ? "none" : "blur(8px)",
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {WORKS.map((work, i) => {
            const isHovered = hovered === i;
            const dimmed = hovered !== null && !isHovered;
            return (
              <FadeIn key={work.name} delay={i * 0.06}>
                <Link
                  href="/portfolio"
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className={`group relative block border-b border-bg-border py-8 md:py-10 transition-opacity duration-300 ${
                    dimmed ? "opacity-40" : "opacity-100"
                  }`}
                >
                  <div
                    className={`absolute inset-y-0 -inset-x-4 rounded-2xl bg-bg-surface transition-all duration-300 ${
                      isHovered ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-10">
                    <span className="font-mono text-xs text-text-faint tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-display text-2xl md:text-5xl font-semibold leading-tight tracking-tight text-text transition-colors group-hover:text-magenta">
                        {t(`work.proj.${i + 1}.name`) || work.name}
                      </h3>
                      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-text-muted">
                        {t(`work.proj.${i + 1}.type`) || work.type}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 md:gap-8">
                      <span className="hidden font-mono text-sm text-text-muted tabular-nums sm:block">
                        {work.year}
                      </span>
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                          isHovered
                            ? "border-magenta bg-magenta text-white"
                            : "border-bg-border text-text-muted"
                        }`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>

                  {/* Mobile thumbnail — hover previews don't exist on touch */}
                  <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl md:hidden">
                    <Image
                      src={work.image}
                      alt={t(`work.proj.${i + 1}.name`) || work.name}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
