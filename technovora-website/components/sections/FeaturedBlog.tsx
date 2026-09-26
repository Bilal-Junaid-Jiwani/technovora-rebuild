"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { useI18n } from "@/components/layout/I18nProvider";

const POSTS = [
  {
    title: "The Future of Next.js Architecture",
    category: "Engineering",
    date: "Oct 24, 2026",
    description: "How we scale our application using the latest App Router patterns and Turbopack.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Mastering Tailwind CSS Gradients",
    category: "Design",
    date: "Oct 18, 2026",
    description: "A deep dive into creating mesmerizing mesh gradients with standard Tailwind utilities.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Deploying at the Edge with Vercel",
    category: "Infrastructure",
    date: "Oct 12, 2026",
    description: "Reducing latency and increasing performance by pushing compute to the edge.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
];

export function FeaturedBlog() {
  const { t } = useI18n();
  const [featured, ...rest] = POSTS;

  return (
    <section className="py-24 md:py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14 md:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">
                {t("blog.eyebrow")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text leading-tight mb-3">
                {t("blog.title")}
              </h2>
              <p className="text-text-muted text-lg max-w-md">{t("blog.subtitle")}</p>
            </div>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-magenta transition-all hover:gap-3"
            >
              {t("blog.viewall")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Featured — image-led card */}
          <FadeIn className="lg:col-span-3">
            <Link
              href="/blog"
              className="group relative flex min-h-[420px] lg:min-h-[560px] h-full flex-col justify-end overflow-hidden rounded-3xl border border-bg-border"
            >
              <Image
                src={featured.image}
                alt={t("home.blog.1.title") || featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
              <span className="absolute left-6 top-6 rounded-full bg-magenta px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-white">
                {t("blog.featured")}
              </span>
              <span className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors group-hover:bg-magenta">
                <ArrowUpRight className="h-5 w-5" />
              </span>
              <div className="relative p-6 md:p-10">
                <div className="mb-4 flex items-center gap-3 font-mono text-xs text-white/70">
                  <span className="uppercase tracking-wide">{t("home.blog.1.category") || featured.category}</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>{featured.date}</span>
                </div>
                <h3 className="max-w-xl font-display text-2xl md:text-4xl font-bold leading-tight text-white">
                  {t("home.blog.1.title") || featured.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm md:text-base leading-relaxed text-white/75 line-clamp-2">
                  {t("home.blog.1.desc") || featured.description}
                </p>
              </div>
            </Link>
          </FadeIn>

          {/* Secondary stack */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {rest.map((post, idx) => {
              const n = idx + 2;
              return (
                <FadeIn key={post.title} delay={0.08 * (idx + 1)} className="flex-1">
                  <Link
                    href="/blog"
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-bg-border bg-bg-elevated transition-all duration-300 hover:-translate-y-1 hover:border-magenta/40 sm:flex-row lg:flex-col xl:flex-row"
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-2/5 lg:aspect-[16/8] lg:w-full xl:aspect-auto xl:w-2/5">
                      <Image
                        src={post.image}
                        alt={t(`home.blog.${n}.title`) || post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 20vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="mb-3 flex items-center gap-3 font-mono text-[11px]">
                          <span className="font-semibold uppercase tracking-wide text-magenta">
                            {t(`home.blog.${n}.category`) || post.category}
                          </span>
                          <span className="text-text-faint">{post.date}</span>
                        </div>
                        <h3 className="font-display text-lg font-semibold leading-snug text-text transition-colors group-hover:text-magenta">
                          {t(`home.blog.${n}.title`) || post.title}
                        </h3>
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-magenta">
                        {t("blog.readarticle")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
