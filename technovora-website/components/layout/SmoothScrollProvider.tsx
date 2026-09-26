"use client";

import { useEffect } from "react";

/**
 * Smooth-scroll provider. Lenis is dynamically imported so it never sits
 * in the initial JS bundle — scroll smoothing loads after the page does.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: { raf(t: number): void; destroy(): void } | null = null;
    let rafId = 0;
    let cancelled = false;

    function loop(time: number) {
      if (cancelled) return;
      lenis?.raf(time);
      rafId = requestAnimationFrame(loop);
    }

    import("lenis").then((m) => {
      if (cancelled) return;
      lenis = new m.default({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });
      rafId = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
