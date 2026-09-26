"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { useI18n } from "@/components/layout/I18nProvider";
import { CheckCircle2 } from "lucide-react";

const TECH_CHIPS = ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js", "PostgreSQL", "GraphQL", "Docker"];

const DEPLOY_LINES = [
  { text: "$ vercel deploy --prod", dim: false },
  { text: "Building…", dim: true },
  { text: "✓ Compiled successfully in 8.2s", dim: false, accent: true },
  { text: "✓ Type-checking passed", dim: false, accent: true },
  { text: "✓ Deployed to production", dim: false, accent: true },
];

export function PlatformShowcase() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: copy */}
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">
              {t("platform.eyebrow")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text leading-tight mb-5">
              {t("platform.title")}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg">
              {t("platform.desc")}
            </p>
            <ul className="space-y-3">
              {["platform.point1", "platform.point2", "platform.point3"].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-text-muted">{t(key)}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right: terminal / deploy window */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-bg-border bg-bg-elevated shadow-2xl overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-bg-border bg-bg-surface/50">
                <span className="w-3 h-3 rounded-full bg-brand-crimson/60" />
                <span className="w-3 h-3 rounded-full bg-brand-orange/60" />
                <span className="w-3 h-3 rounded-full bg-text-faint/40" />
                <span className="ml-3 font-mono text-xs text-text-faint">deploy.sh</span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-2.5 min-h-[220px]">
                {DEPLOY_LINES.map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.accent
                        ? "text-brand-orange"
                        : line.dim
                        ? "text-text-faint"
                        : "text-text"
                    }
                  >
                    {line.text}
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-2 h-4 bg-brand-orange animate-live" />
                </div>
              </div>

              {/* Tech chip row */}
              <div className="flex flex-wrap gap-2 px-6 pb-6">
                {TECH_CHIPS.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs rounded-full border border-bg-border bg-bg-surface px-3 py-1.5 text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
