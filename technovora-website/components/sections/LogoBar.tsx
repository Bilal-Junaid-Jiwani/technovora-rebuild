import { FadeIn } from "@/components/animations/FadeIn";
import { CountUp } from "@/components/animations/CountUp";

const METRICS = [
  {
    id: "projects",
    countTo: 20,
    suffix: "+",
    static: null,
    label: "Projects Delivered",
    sub: "On time, every time",
  },
  {
    id: "sla",
    countTo: null,
    suffix: "",
    static: "99.9%",
    label: "SLA Uptime",
    sub: "Across all clients",
  },
  {
    id: "countries",
    countTo: 18,
    suffix: "",
    static: null,
    label: "Countries Served",
    sub: "Global client base",
  },
  {
    id: "years",
    countTo: 5,
    suffix: "+",
    static: null,
    label: "Years of Experience",
    sub: "Since 2019",
  },
] as const;

export function LogoBar() {
  return (
    <section className="relative py-14 overflow-hidden" style={{ background: "rgba(22,13,36,0.5)" }}>
      {/* Gradient accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "var(--gradient)", opacity: 0.28 }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "var(--gradient)", opacity: 0.28 }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <FadeIn key={m.id} delay={0.06 * i}>
              <div
                className={`flex flex-col items-center text-center px-6 py-4 ${
                  i < METRICS.length - 1 ? "md:border-r border-bg-border" : ""
                }`}
              >
                <span className="font-display font-extrabold text-[clamp(2.4rem,4vw,3.6rem)] leading-none text-text">
                  {m.static ? (
                    m.static
                  ) : (
                    <CountUp to={m.countTo as number} suffix={m.suffix} duration={2.2} />
                  )}
                </span>
                <span className="mt-2 text-sm font-semibold text-text-muted">{m.label}</span>
                <span className="mt-0.5 text-xs text-text-faint">{m.sub}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
