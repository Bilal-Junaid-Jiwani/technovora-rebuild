"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type Globe } from "cobe";
import { FadeIn } from "@/components/animations/FadeIn";
import { OFFICES } from "@/lib/constants";
import { useI18n } from "@/components/layout/I18nProvider";

const MARKERS = [
  { location: [44.7977, -106.9564] as [number, number], size: 0.06 }, // Sheridan, WY
  { location: [22.3193, 114.1694] as [number, number], size: 0.06 },  // Hong Kong
];

function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<Globe | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0.6;

    globeRef.current = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 560 * 2,
      height: 560 * 2,
      phi,
      theta: 0.2,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: 5,
      baseColor: [0.08, 0.04, 0.1],
      markerColor: [0.976, 0.451, 0.086],
      glowColor: [0.49, 0.23, 0.93],
      markers: MARKERS,
    });

    const animate = () => {
      phi += 0.003;
      globeRef.current?.update({ phi });
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      globeRef.current?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={560}
      height={560}
      className="w-full max-w-[560px] aspect-square"
      aria-label="Globe showing Technovora office locations in Wyoming and Hong Kong"
    />
  );
}

export function GlobeSection() {
  const { t } = useI18n();
  return (
    <section className="py-28 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Globe */}
        <FadeIn className="flex justify-center">
          <GlobeCanvas />
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-xs text-text-faint uppercase tracking-widest mb-3">
                {t("globe.where") || "Where We Are"}
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight">
                {t("globe.two_offices") || "Two offices."}{" "}
                <span className="gradient-text">{t("globe.one_team") || "One team."}</span>
              </h2>
              <p className="mt-5 text-text-muted text-lg leading-relaxed">
                {t("globe.desc") || "US-incorporated in Wyoming. Engineering in Hong Kong. Clients across North America, Europe, and Southeast Asia."}
              </p>
            </div>

            {/* Office cards */}
            <div className="flex flex-col gap-3">
              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="flex items-center gap-4 p-4 bg-bg-elevated border border-bg-border rounded-xl"
                >
                  <div
                    className="w-2 h-2 rounded-full bg-orange shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-text text-sm">{office.city}</p>
                    <p className="text-xs text-text-muted">{office.country}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Callout */}
            <div className="flex items-start gap-3 p-4 bg-bg-elevated border border-bg-border rounded-xl">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-orange mt-0.5 shrink-0"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8 5v4M8 11v.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-sm text-text-muted">
                US entity. Invoiced in USD. No exchange rate surprises for North American clients.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
