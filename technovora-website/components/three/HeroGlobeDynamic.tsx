"use client";

import dynamic from "next/dynamic";
import type { HeroGlobeProps } from "./HeroGlobe";

export const HeroGlobeDynamic = dynamic<HeroGlobeProps>(
  () => import("./HeroGlobe").then((m) => ({ default: m.HeroGlobe })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="rounded-full animate-pulse"
          style={{
            width: 580,
            height: 580,
            background:
              "radial-gradient(circle at 38% 38%, rgba(var(--accent-a-rgb), 0.08) 0%, rgba(13,13,13,0.95) 60%)",
            border: "1px solid rgba(var(--accent-a-rgb), 0.1)",
            boxShadow: "0 0 60px rgba(var(--accent-a-rgb), 0.04) inset",
          }}
        />
      </div>
    ),
  }
);
