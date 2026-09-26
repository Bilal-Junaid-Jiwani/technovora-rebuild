"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { useI18n } from "@/components/layout/I18nProvider";

export function TrustedBy() {
  const { t } = useI18n();
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Canva_logo.svg", alt: "Canva" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg", alt: "Coca-Cola" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Lionsgate_logo.svg", alt: "Lionsgate" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Carrefour_logo.svg", alt: "Carrefour" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Universal_Music_Group_logo.svg", alt: "Universal Music" },
  ];

  return (
    <section className="py-16 md:py-20 border-b border-bg-border bg-bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-5">
            <span className="hidden sm:block h-px flex-1 max-w-24 bg-bg-border" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint text-center">
              {t("trusted.title")}
            </p>
            <span className="hidden sm:block h-px flex-1 max-w-24 bg-bg-border" aria-hidden="true" />
          </div>
        </FadeIn>
      </div>

      <div
        className="relative w-full flex overflow-x-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex animate-marquee-slow whitespace-nowrap items-center gap-20 md:gap-28 pr-20 md:pr-28">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="relative w-28 h-8 md:w-32 md:h-9 shrink-0 opacity-40 grayscale hover:opacity-90 hover:grayscale-0 dark:invert dark:hover:invert-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
