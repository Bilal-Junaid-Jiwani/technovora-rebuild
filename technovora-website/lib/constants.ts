export const SITE_NAME = "Technovora";
export const SITE_URL = "https://technovora.com";
export const SITE_DESCRIPTION =
  "AI automation and custom software for SaaS teams.";

export const CONTACT_EMAIL = "moin@technovora.com";
export const SALES_EMAIL = "sales@technovora.com";
export const CALENDLY_URL = "https://calendly.com/technovora";

export const OFFICES = [
  { city: "Sheridan", country: "WY, United States" },
  { city: "Hong Kong", country: "SAR, China" },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
] as const;

export const SERVICES = [
  {
    slug: "ai-automation",
    title: "AI Agents & Automation",
    description:
      "n8n workflows, Claude-powered agents, and custom AI tools that replace manual processes.",
    href: "/services/ai-automation",
    entry: "$10,000",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Next.js platforms built for speed. Most rebuilds cut page load by 40-60%.",
    href: "/services/web-development",
    entry: "$5,000",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    description:
      "Cross-platform and native apps for teams whose users are on mobile.",
    href: "/services/mobile-apps",
    entry: "$10,000",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "AWS migrations, CI/CD pipelines, and infrastructure that scales without burning budget.",
    href: "/services/cloud-devops",
    entry: "$15,000",
  },
  {
    slug: "design",
    title: "Design & UI/UX",
    description:
      "Design systems, Figma prototypes, and brand identity built to convert.",
    href: "/services/design",
    entry: "$7,500",
  },
  {
    slug: "smm",
    title: "SMM & Growth",
    description:
      "Content pipelines and social management for B2B teams with no social presence.",
    href: "/services/smm",
    entry: "$5,000/mo",
  },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/Technovora",
  linkedin: "",
  twitter: "",
} as const;
