import type { Metadata } from "next";
import { ServicesHero } from "@/components/services-index/ServicesHero";
import { CapabilityBands } from "@/components/services-index/CapabilityBands";
import { FitGuide } from "@/components/services-index/FitGuide";
import { PrinciplesStrip } from "@/components/services-index/PrinciplesStrip";
import { ServicesCta } from "@/components/services-index/ServicesCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, web development, mobile apps, cloud & DevOps, design, and social media — six service lines from one senior team.",
};

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <ServicesHero />
      <CapabilityBands />
      <FitGuide />
      <PrinciplesStrip />
      <ServicesCta />
    </main>
  );
}
