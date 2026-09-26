import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { WorkIndex } from "@/components/sections/WorkIndex";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProcessSnake } from "@/components/sections/ProcessSnake";
import { Testimonials } from "@/components/sections/Testimonials";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";
import { FeaturedBlog } from "@/components/sections/FeaturedBlog";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ProblemStatement />
      <ServiceCards />
      <ProcessSnake />
      <Testimonials />
      <WorkIndex />
      <FeatureGrid />
      <PlatformShowcase />
      <FeaturedBlog />
      <CtaBanner />
      <ContactSection />
      <FAQ />
    </>
  );
}
