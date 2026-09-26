"use client";

import { useRef, useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const STATS: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Delivered", sub: "across SaaS, FinTech, HealthTech" },
  { value: 18, suffix: "", label: "Countries Served", sub: "global clients, remote-first" },
  { value: 3, suffix: " WEEK", label: "Average First Build", sub: "prototype to production" },
  { value: 99.9, suffix: "%", label: "Delivery Rate", sub: "zero abandoned projects" },
];

function Counter({ stat, start }: { stat: Stat; start: boolean }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const duration = 1600;
    const startTime = performance.now();
    const target = stat.value;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((target * eased).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [start, stat.value]);

  const formatted = stat.value % 1 !== 0
    ? display.toFixed(1)
    : Math.round(display).toString();

  return (
    <span className="font-bebas text-[clamp(3.5rem,6vw,5.5rem)] leading-none tracking-tight" style={{ color: "var(--brand-orange)" }}>
      {formatted}{stat.suffix}
    </span>
  );
}

export function StatsCounter() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 border-b"
      style={{ borderColor: "#2A2A2A", background: "#090909" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col gap-3 lg:border-r last:border-r-0" style={{ borderColor: "#2A2A2A" }}>
              <Counter stat={stat} start={started} />
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-sm text-[#F0EDE6] uppercase tracking-[0.08em]">
                  {stat.label}
                </span>
                <span className="font-mono text-xs text-[#888]">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
