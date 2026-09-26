import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { ProjectIndex } from "@/components/portfolio/ProjectIndex";
import { MethodNote } from "@/components/portfolio/MethodNote";
import { PortfolioCta } from "@/components/portfolio/PortfolioCta";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Selected work: SaaS onboarding flows, internal dashboards, AI assistants, and storefront rebuilds. Real engagements, anonymized where under NDA.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <PortfolioHero />
      <FeaturedProject />
      <ProjectIndex />
      <MethodNote />
      <PortfolioCta />
    </div>
  );
}
