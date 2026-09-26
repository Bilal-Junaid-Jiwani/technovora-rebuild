"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { useTranslation } from "@/lib/i18n";

const TECH_STACK = [
  { name: "Next.js", color: "#000000", darkColor: "#ffffff" },
  { name: "TypeScript", color: "#3178C6", darkColor: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4", darkColor: "#06B6D4" },
  { name: "React", color: "#61DAFB", darkColor: "#61DAFB" },
  { name: "Node.js", color: "#339933", darkColor: "#339933" },
  { name: "PostgreSQL", color: "#4169E1", darkColor: "#4169E1" },
  { name: "GraphQL", color: "#E10098", darkColor: "#E10098" },
  { name: "Docker", color: "#2496ED", darkColor: "#2496ED" },
];

export function TechWall() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-bg overflow-hidden border-y border-border">
      <FadeIn>
        <div className="text-center mb-16 px-6">
          <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4">{t("tech.poweredby")}</h2>
          <p className="font-bebas text-4xl text-text tracking-wide">{t("tech.title")}</p>
        </div>
      </FadeIn>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
        
        <div className="animate-marquee flex gap-5 py-4 items-center min-w-full">
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <div
              key={i}
              className="tech-brick flex items-center gap-3 rounded-xl border border-bg-border bg-bg-elevated px-5 py-3 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-bg-surface flex items-center justify-center font-mono font-bold text-sm text-text border border-bg-border">
                {tech.name[0]}
              </div>
              <span className="font-semibold text-sm text-text whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
