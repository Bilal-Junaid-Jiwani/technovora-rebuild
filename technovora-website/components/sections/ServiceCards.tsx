"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES } from "@/lib/constants";
import { useI18n } from "@/components/layout/I18nProvider";
import { LayoutDashboard, Users, MessageSquare, BarChart, Settings, Search, ChevronRight } from "lucide-react";

const AGENT_MOCKS: Record<string, { name: string; role: string; image: string }[]> = {
  "ai-automation": [
    { name: "Workflow Architect", role: "n8n Specialist", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80" },
    { name: "Data Organizer", role: "Data Pipeline", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "Support Agent", role: "Claude integration", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
    { name: "Analytics Bot", role: "BI Agent", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  ],
  "web-development": [
    { name: "Frontend Wizard", role: "React/Next.js", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    { name: "Backend Logic", role: "API Developer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" },
    { name: "UI Polish", role: "CSS Expert", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    { name: "Performance Bot", role: "Core Web Vitals", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  ],
  "mobile-apps": [
    { name: "App Architect", role: "React Native", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    { name: "iOS Native", role: "SwiftUI", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
    { name: "Android Native", role: "Kotlin", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "Store Publisher", role: "CI/CD", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  ],
  "cloud-devops": [
    { name: "Infra Builder", role: "Terraform", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    { name: "Security Guard", role: "IAM Specialist", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" },
    { name: "Cost Optimizer", role: "FinOps", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    { name: "Deploy Bot", role: "GitHub Actions", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  ],
  "design": [
    { name: "Brand Architect", role: "Visual Identity", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    { name: "UX Researcher", role: "User Flows", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "UI Polisher", role: "Figma Expert", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
    { name: "Motion Designer", role: "Framer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  ],
  "smm": [
    { name: "Content Writer", role: "Copywriter", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
    { name: "Trend Spotter", role: "Market Research", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    { name: "Community Lead", role: "Engagement", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "Ad Optimizer", role: "Media Buyer", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80" },
  ],
};

const SERVICE_META: Record<string, { outcomeKey: string }> = {
  "ai-automation": { outcomeKey: "services.outcome.ai" },
  "web-development": { outcomeKey: "services.outcome.web" },
  "mobile-apps": { outcomeKey: "services.outcome.mobile" },
  "cloud-devops": { outcomeKey: "services.outcome.cloud" },
  "design": { outcomeKey: "services.outcome.design" },
  "smm": { outcomeKey: "services.outcome.smm" },
};

export function ServiceCards() {
  const { t } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SERVICES[activeIdx];
  const meta = SERVICE_META[active.slug];
  const agents = AGENT_MOCKS[active.slug] || AGENT_MOCKS["smm"];

  const agentT = (i: number, field: "name" | "role", fallback: string) => {
    const key =
      active.slug === "ai-automation"
        ? `services.agent.${i + 1}.${field}`
        : `services.agents.${active.slug}.${i + 1}.${field}`;
    return t(key) || fallback;
  };

  return (
    <section className="py-24 bg-bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text tracking-tight mb-8">
            {t("serviceCards.title")}
          </h2>
          
          {/* Top Pill Navigation */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-bg-elevated/50 border border-bg-border rounded-full gap-1 mx-auto shadow-sm">
            {SERVICES.map((service, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={service.slug}
                  onClick={() => setActiveIdx(i)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-magenta/10 text-magenta shadow-sm"
                      : "text-text-muted hover:text-text hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {t(`services.${service.slug}`) !== `services.${service.slug}` ? t(`services.${service.slug}`) : service.title}
                </button>
              );
            })}
          </div>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center justify-between">
          
          {/* Left Text & CTA */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6 lg:pl-4 text-center lg:text-left">
            <FadeIn key={`text-${activeIdx}`}>
              <h3 className="text-4xl md:text-5xl font-display font-semibold text-text leading-tight tracking-tight">
                {t(`services.heading.${active.slug}`)} <span className="text-magenta">{t("services.heading.done")}</span>
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mt-4 max-w-md mx-auto lg:mx-0">
                {t(meta.outcomeKey)}
              </p>
              <div className="mt-8">
                <Link
                  href={active.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-magenta hover:opacity-90 text-white font-semibold transition-all shadow-lg shadow-magenta/25 hover:shadow-magenta/40 hover:-translate-y-0.5"
                >
                  {t("services.getstarted")} →
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Cards Showcase (Window Mock) */}
          <div className="w-full lg:w-[60%]">
            <FadeIn key={`showcase-${activeIdx}`} delay={0.1}>
              <div className="bg-bg-elevated border border-bg-border rounded-xl shadow-2xl overflow-hidden flex h-[420px]">
                
                {/* Sidebar */}
                <div className="w-16 flex-shrink-0 bg-bg-base/50 border-r border-bg-border flex flex-col items-center py-6 gap-6">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-magenta to-orange mb-4" />
                  <LayoutDashboard className="w-5 h-5 text-text-muted hover:text-text cursor-pointer transition-colors" />
                  <Users className="w-5 h-5 text-magenta cursor-pointer transition-colors" />
                  <MessageSquare className="w-5 h-5 text-text-muted hover:text-text cursor-pointer transition-colors" />
                  <BarChart className="w-5 h-5 text-text-muted hover:text-text cursor-pointer transition-colors" />
                  <div className="flex-1" />
                  <Settings className="w-5 h-5 text-text-muted hover:text-text cursor-pointer transition-colors" />
                </div>

                {/* Main Window Area */}
                <div className="flex-1 bg-bg-base/20 p-8 flex flex-col overflow-hidden relative">
                  
                  {/* Decorative Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2 text-text-muted font-medium text-sm">
                      <Users className="w-4 h-4" />
                      {t("services.agents.team_title")}
                    </div>
                    <div className="flex items-center gap-2 bg-bg-elevated border border-bg-border rounded-full px-3 py-1.5 text-xs text-text-muted">
                      <Search className="w-3 h-3" /> {t("services.agents.search_placeholder")}
                    </div>
                  </div>

                  {/* Horizontal Scroll Area */}
                  <div className="flex gap-5 overflow-x-auto pb-6 w-full snap-x snap-mandatory hide-scrollbar">
                    {agents.map((agent, i) => (
                      <motion.div
                        key={agentT(i, "name", agent.name)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="shrink-0 w-44 snap-center flex flex-col"
                      >
                        <div className="w-full aspect-[4/5] rounded-2xl relative overflow-hidden group shadow-md border border-black/5 dark:border-white/5">
                          {/* Colored backdrop depending on index */}
                          <div className={`absolute inset-0 ${i % 2 === 0 ? 'bg-orange/10' : 'bg-magenta/10'}`} />
                          
                          <Image
                            src={agent.image}
                            alt={agentT(i, "name", agent.name)}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          
                          {/* Inner gradient for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="mt-4 text-center">
                          <h4 className="font-display font-semibold text-sm text-text">
                            {agentT(i, "name", agent.name)}
                          </h4>
                          <p className="text-xs text-text-muted mt-0.5">
                            {agentT(i, "role", agent.role)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Fade out edges */}
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-elevated to-transparent pointer-events-none" />
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
