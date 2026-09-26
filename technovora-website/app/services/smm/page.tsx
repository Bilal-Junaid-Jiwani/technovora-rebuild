import type { Metadata } from "next";
import { getService } from "@/lib/services";
import { services as enCopy } from "@/lib/i18n/en/services";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Reveal, ServiceBreadcrumb } from "@/components/services/shared";
import {
  SmmHero,
  SmmTask,
  SmmSolution,
  SmmCycle,
  SmmTiers,
  SmmCta,
} from "@/components/services/smm";

const service = getService("smm");

export const metadata: Metadata = buildMetadata({
  title: enCopy[service.metaTitleKey],
  description: enCopy[service.metaDescKey],
  path: `/services/${service.slug}`,
});

const serviceName = enCopy[service.metaTitleKey].replace(" | Technovora", "");

const jsonLd = [
  serviceJsonLd({
    slug: service.slug,
    name: serviceName,
    description: enCopy[service.metaDescKey],
  }),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: serviceName, path: `/services/${service.slug}` },
  ]),
];

export default function SmmPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <div className="bg-background px-6 pt-24 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <ServiceBreadcrumb />
          </Reveal>
        </div>
      </div>
      <SmmHero />
      <SmmTask />
      <SmmSolution />
      <SmmCycle />
      <SmmTiers />
      <SmmCta />
    </main>
  );
}
