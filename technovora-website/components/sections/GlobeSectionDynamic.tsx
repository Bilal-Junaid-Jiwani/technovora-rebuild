"use client";

import dynamic from "next/dynamic";

export const GlobeSectionDynamic = dynamic(
  () =>
    import("@/components/sections/GlobeSection").then((m) => ({
      default: m.GlobeSection,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="w-[560px] max-w-full aspect-square rounded-full bg-bg-elevated animate-pulse" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-4 w-32 bg-bg-elevated rounded animate-pulse" />
            <div className="h-12 w-80 bg-bg-elevated rounded animate-pulse" />
            <div className="h-20 w-full bg-bg-elevated rounded animate-pulse" />
          </div>
        </div>
      </div>
    ),
  }
);
