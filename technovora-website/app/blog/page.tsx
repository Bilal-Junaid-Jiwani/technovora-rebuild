"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import { CALENDLY_URL } from "@/lib/constants";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/components/layout/I18nProvider";

const CATEGORIES = [
  { id: "all", key: "portfolio.filter.all" },
  { id: "aiautomation", key: "blog.filter.aiautomation" },
  { id: "engineering", key: "blog.filter.engineering" },
  { id: "design", key: "blog.filter.design" },
  { id: "business", key: "blog.filter.business" },
];

export default function BlogPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");

  const BLOG_POSTS = [
    {
      title: t("blog.post1.title"),
      categoryId: "aiautomation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      date: "Oct 12, 2026",
      author: "Sarah Chen",
      readTime: t("blog.post.read1"),
      excerpt: t("blog.post1.desc")
    },
    {
      title: t("blog.post2.title"),
      categoryId: "engineering",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      date: "Sep 28, 2026",
      author: "Marcus Johnson",
      readTime: t("blog.post.read2"),
      excerpt: t("blog.post2.desc")
    },
    {
      title: t("blog.post3.title"),
      categoryId: "design",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      date: "Sep 15, 2026",
      author: "Elena Rodriguez",
      readTime: t("blog.post.read3"),
      excerpt: t("blog.post3.desc")
    },
    {
      title: t("blog.post4.title"),
      categoryId: "engineering",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      date: "Aug 30, 2026",
      author: "Marcus Johnson",
      readTime: t("blog.post.read4"),
      excerpt: t("blog.post4.desc")
    },
    {
      title: t("blog.post5.title"),
      categoryId: "business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      date: "Aug 12, 2026",
      author: "Sarah Chen",
      readTime: t("blog.post.read5"),
      excerpt: t("blog.post5.desc")
    },
    {
      title: t("blog.post6.title"),
      categoryId: "aiautomation",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      date: "Jul 25, 2026",
      author: "David Kim",
      readTime: t("blog.post.read6"),
      excerpt: t("blog.post6.desc")
    }
  ];

  const filteredPosts = filter === "all" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.categoryId === filter);
  const featuredPost = BLOG_POSTS[0];
  const gridPosts = filter === "all" ? filteredPosts.slice(1) : filteredPosts;
  const popularPosts = [BLOG_POSTS[1], BLOG_POSTS[3], BLOG_POSTS[5]];

  const selectFilter = (id: string) => {
    setFilter(id);
    document.getElementById("blog-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageTransitionWrapper>
      {/* 1. Hero */}
      <section className="pt-40 pb-20 bg-bg-base text-center px-6">
        <FadeIn>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-orange mb-6 block">
            {t("blog2.hero.eyebrow")}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-text mb-6 max-w-4xl mx-auto">
            {t("blog.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            {t("blog.hero.desc")}
          </p>
        </FadeIn>
      </section>

      {/* 2. Featured post spotlight */}
      {filter === "all" && (
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <Link
                href="#"
                className="group grid md:grid-cols-2 gap-0 items-stretch bg-bg-surface rounded-3xl overflow-hidden border border-bg-border hover:border-brand-orange transition-colors"
              >
                <div className="relative aspect-video md:aspect-auto w-full min-h-[320px]">
                  <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-6 left-6 bg-brand-orange text-bg-base text-xs font-mono font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
                    {t("blog2.featured.label")}
                  </span>
                </div>
                <div className="p-8 md:p-14 flex flex-col justify-center">
                  <span className="text-brand-magenta font-mono text-sm uppercase mb-4 block">{t(`blog.filter.${featuredPost.categoryId}`)}</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight group-hover:text-brand-orange transition-colors">{featuredPost.title}</h2>
                  <p className="text-text-muted text-lg mb-8">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-text-muted gap-4 mb-8">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featuredPost.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-text group-hover:text-brand-orange transition-colors">
                    {t("blog2.featured.readMore")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* 3. Category filter bar */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint text-center mb-6">
              {t("blog2.filter.heading")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => selectFilter(cat.id)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors ${filter === cat.id ? 'bg-brand-orange text-bg-base' : 'bg-bg-surface text-text border border-bg-border hover:border-brand-orange'}`}
                >
                  {t(cat.key)}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Post grid */}
      <section id="blog-grid" className="pb-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Link href="#" className="group block bg-bg-surface rounded-2xl overflow-hidden border border-bg-border hover:border-brand-orange transition-colors h-full flex flex-col">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-brand-magenta font-mono text-xs uppercase mb-3 block">{t(`blog.filter.${post.categoryId}`)}</span>
                    <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-text-muted text-sm mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-xs text-text-muted mt-auto pt-4 border-t border-bg-border">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Popular this month */}
      <section className="py-24 px-6 bg-bg-surface border-y border-bg-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text">{t("blog2.popular.heading")}</h2>
              <p className="text-text-muted max-w-md">{t("blog2.popular.desc")}</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-px bg-bg-border rounded-2xl overflow-hidden border border-bg-border">
            {popularPosts.map((post, i) => (
              <FadeIn key={i} delay={i * 0.08} className="h-full">
                <Link href="#" className="group h-full flex flex-col justify-between bg-bg-base p-8 hover:bg-bg-elevated transition-colors">
                  <div>
                    <span className="font-mono text-4xl font-bold text-text-faint group-hover:text-brand-orange transition-colors block mb-6">
                      0{i + 1}
                    </span>
                    <span className="text-brand-magenta font-mono text-xs uppercase mb-3 block">{t(`blog.filter.${post.categoryId}`)}</span>
                    <h3 className="text-lg font-semibold text-text mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">{post.title}</h3>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-muted mt-6 pt-4 border-t border-bg-border">
                    <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Topics / tags */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-8">{t("blog2.topics.heading")}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.filter(c => c.id !== "all").map(cat => (
                <button
                  key={cat.id}
                  onClick={() => selectFilter(cat.id)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-text-muted border border-bg-border hover:border-brand-orange hover:text-text transition-colors"
                >
                  #{t(cat.key)}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-brand-orange text-bg-base rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">{t("blog.news.title")}</h2>
                <p className="text-lg text-bg-base/90 mb-8 max-w-xl mx-auto">{t("blog.news.desc")}</p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder={t("blog.news.email")} className="flex-grow px-6 py-4 rounded-xl text-text bg-bg-base border-none focus:ring-2 focus:ring-brand-purple outline-none" required />
                  <button type="submit" className="bg-bg-base text-brand-orange font-semibold px-8 py-4 rounded-xl hover:bg-bg-surface transition-colors">
                    {t("blog.news.button")}
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="py-24 px-6 border-t border-bg-border">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">{t("portfolio.cta.title")}</h2>
            <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">{t("portfolio.cta.desc")}</p>
            <a
              href={CALENDLY_URL}
              className="inline-flex items-center gap-2 bg-text text-bg-base font-semibold px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-xl"
            >
              {t("portfolio.cta.button")} <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>
    </PageTransitionWrapper>
  );
}
