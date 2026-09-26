"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import { Industries } from "@/components/sections/Industries";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, Quote } from "lucide-react";
import { useI18n } from "@/components/layout/I18nProvider";

const CATEGORIES = [
  { id: "all", key: "portfolio.filter.all" },
  { id: "webapp", key: "portfolio.filter.webapp" },
  { id: "aisaas", key: "portfolio.filter.aisaas" },
  { id: "platform", key: "portfolio.filter.platform" },
];

const PROCESS_STEPS = [1, 2, 3, 4] as const;

export default function PortfolioPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");

  const PROJECTS = [
    {
      id: "proj1",
      title: t("portfolio.proj1.title"),
      categoryId: "webapp",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      metrics: t("portfolio.proj1.metrics"),
      tech: ["Next.js", "Tailwind", "tRPC"],
      testimonial: t("portfolio.proj1.testi"),
    },
    {
      id: "proj2",
      title: t("portfolio.proj2.title"),
      categoryId: "aisaas",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      metrics: t("portfolio.proj2.metrics"),
      tech: ["OpenAI", "Node.js", "PostgreSQL"],
      testimonial: t("portfolio.proj2.testi"),
    },
    {
      id: "proj3",
      title: t("portfolio.proj3.title"),
      categoryId: "platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      metrics: t("portfolio.proj3.metrics"),
      tech: ["AWS", "Docker", "React"],
      testimonial: t("portfolio.proj3.testi"),
    },
    {
      id: "proj4",
      title: t("portfolio.proj4.title"),
      categoryId: "webapp",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      metrics: t("portfolio.proj4.metrics"),
      tech: ["Next.js", "Prisma", "AWS"],
      testimonial: t("portfolio.proj4.testi"),
    },
  ];

  const featured = PROJECTS[0];
  const filteredProjects = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.categoryId === filter);

  return (
    <PageTransitionWrapper>
      {/* 1. Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-56 md:pb-28 bg-bg-base text-center px-6">
        <div className="orb orb-orange -top-24 left-1/4" />
        <div className="orb orb-crimson top-6 right-1/4" />
        <FadeIn>
          <span className="inline-block px-4 py-1.5 rounded-full border border-bg-border text-xs font-mono uppercase tracking-widest text-text-muted mb-8">
            {t("portfolio2.hero.badge")}
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-text mb-6 max-w-4xl mx-auto leading-[1.05]">
            {t("portfolio.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            {t("portfolio.hero.desc")}
          </p>
        </FadeIn>
      </section>

      {/* 2. Filter bar + case study grid */}
      <section id="work" className="py-24 bg-bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 block">
                {t("portfolio2.grid.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text leading-tight">
                {t("portfolio.hero.title")}
              </h2>
            </div>
          </FadeIn>

          <div className="flex flex-wrap gap-3 mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors ${
                  filter === cat.id
                    ? "bg-brand-orange text-bg-base"
                    : "bg-bg-base text-text border border-bg-border hover:border-brand-orange"
                }`}
              >
                {t(cat.key)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <FadeIn key={project.id}>
                <div className="group rounded-3xl border border-bg-border bg-bg-base overflow-hidden hover:border-brand-orange/40 transition-colors">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-bg-base/90 backdrop-blur text-xs font-mono uppercase tracking-widest text-text border border-bg-border">
                      {t(`portfolio.filter.${project.categoryId}`)}
                    </span>
                    <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-bg-base text-text flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-brand-orange" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-display font-semibold text-text group-hover:text-brand-orange transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-display text-lg text-brand-orange whitespace-nowrap shrink-0">
                        {project.metrics}
                      </span>
                    </div>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono text-text-muted bg-bg-surface px-2 py-1 rounded-md border border-bg-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-text-muted italic border-l-2 border-brand-orange/40 pl-3">
                      &ldquo;{project.testimonial}&rdquo;
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured case study spotlight */}
      <section className="py-24 md:py-32 bg-bg-base border-y border-bg-border px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-10 block">
              {t("portfolio2.featured.badge")}
            </span>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-bg-border">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="inline-block px-3 py-1 rounded-full border border-bg-border text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
                {t(`portfolio.filter.${featured.categoryId}`)}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-8 leading-tight">
                {featured.title}
              </h2>
              <div className="mb-8">
                <span className="block font-mono text-xs uppercase tracking-widest text-text-faint mb-2">
                  {t("portfolio2.featured.resultLabel")}
                </span>
                <span className="font-display text-4xl md:text-5xl gradient-text">{featured.metrics}</span>
              </div>
              <div className="flex gap-3 mb-8">
                <Quote className="w-6 h-6 text-brand-orange shrink-0" />
                <p className="text-lg text-text-muted italic leading-relaxed">{featured.testimonial}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-10">
                {featured.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-text-muted bg-bg-surface px-2 py-1 rounded-md border border-bg-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange text-bg-base px-8 py-4 rounded-full font-semibold hover:bg-brand-magenta transition-colors"
              >
                {t("portfolio2.featured.cta")} <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Results / metrics band */}
      <section className="py-20 bg-bg-surface border-b border-bg-border px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 block">
                {t("portfolio2.stats.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text">{t("portfolio2.stats.title")}</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.07}>
                <div className="flex flex-col gap-3 lg:border-r border-bg-border last:border-r-0 lg:px-4">
                  <span className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-none text-text">
                    {p.metrics}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted">{p.title}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries we've shipped */}
      <Industries />

      {/* 6. Client testimonial spotlight */}
      <section className="py-24 md:py-32 bg-bg-base px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 block">
                {t("portfolio2.voices.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text leading-tight">
                {t("portfolio2.voices.title")}
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.06}>
                <div className="p-8 rounded-2xl bg-bg-surface border border-bg-border h-full flex flex-col gap-5">
                  <Quote className="w-7 h-7 text-brand-orange" />
                  <p className="text-lg text-text leading-relaxed flex-1">&ldquo;{p.testimonial}&rdquo;</p>
                  <div className="flex items-center justify-between pt-4 border-t border-bg-border">
                    <span className="text-sm font-semibold text-text">{p.title}</span>
                    <span className="font-mono text-xs text-text-muted uppercase tracking-widest">{p.metrics}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our process teaser */}
      <section className="py-24 bg-bg-surface border-y border-bg-border px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3 block">
                  {t("portfolio2.process.badge")}
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-text">
                  {t("portfolio2.process.title")}
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-text font-semibold hover:text-brand-orange transition-colors shrink-0"
              >
                {t("portfolio2.process.cta")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((n, i) => (
              <FadeIn key={n} delay={i * 0.06}>
                <div className="p-6 rounded-2xl border border-bg-border bg-bg-base h-full">
                  <span className="font-mono text-xs text-text-faint">0{n}</span>
                  <h3 className="text-lg font-display font-semibold text-text mt-3 mb-2">
                    {t(`services.architecture.${n}.title`)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {t(`services.architecture.${n}.desc`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="py-32 bg-bg-base border-t border-bg-border px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-6">{t("portfolio.cta.title")}</h2>
          <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">{t("portfolio.cta.desc")}</p>
          <Link
            href="/contact"
            className="inline-block bg-brand-orange text-bg-base px-10 py-5 rounded-full font-semibold hover:bg-brand-magenta transition-colors text-lg"
          >
            {t("portfolio.cta.button")}
          </Link>
        </FadeIn>
      </section>
    </PageTransitionWrapper>
  );
}
