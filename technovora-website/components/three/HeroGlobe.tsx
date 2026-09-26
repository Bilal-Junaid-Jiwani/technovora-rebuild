"use client";

import dynamic from "next/dynamic";

export interface HeroGlobeProps {
  size?: number;
}

const RealGlobeDynamic = dynamic(() => import("./RealGlobe"), {
  ssr: false,
  loading: () => (
    <div
      className="relative flex items-center justify-center bg-bg-elevated border border-bg-border rounded-full animate-pulse w-full h-full min-w-[580px] min-h-[580px]"
    />
  ),
});

export function HeroGlobe({ size = 580 }: HeroGlobeProps) {
  return <RealGlobeDynamic size={size} />;
}
