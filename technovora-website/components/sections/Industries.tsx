"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { Zap, GitBranch, Bell, Mail, MessageSquare, Plus } from "lucide-react";
import { useI18n } from "@/components/layout/I18nProvider";

export function Industries() {
  const { t } = useI18n();

  return (
    <section className="py-32 bg-bg-elevated overflow-hidden relative">
      
      {/* Header Area */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 flex flex-col items-center">
        <FadeIn>
          <span className="text-sm font-semibold tracking-wide text-text-muted uppercase mb-4 block">
            {t("industries.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text tracking-tight mb-6">
            {t("industries.title")}
          </h2>
          <div className="text-2xl md:text-3xl text-text font-medium leading-snug max-w-2xl mx-auto mb-10 flex flex-wrap justify-center items-center gap-x-2 gap-y-2">
            {t("industries.subtitle1")}
            <span className="inline-flex -space-x-2 px-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white relative z-30" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white relative z-20" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white relative z-10" />
            </span>
            {t("industries.subtitle2")}
            <span className="inline-flex -space-x-2 px-2">
              <span className="w-8 h-8 rounded-full border-2 border-white bg-magenta/15 flex items-center justify-center relative z-20 shadow-sm"><span className="text-[10px]">🤖</span></span>
              <span className="w-8 h-8 rounded-full border-2 border-white bg-orange/15 flex items-center justify-center relative z-10 shadow-sm"><span className="text-[10px]">🤖</span></span>
            </span>
          </div>
          <button className="bg-text hover:opacity-90 text-bg-base font-semibold rounded-full px-8 py-3.5 transition-colors shadow-lg">
            {t("industries.cta")} →
          </button>
        </FadeIn>
      </div>

      {/* Flowchart Diagram */}
      <div className="max-w-3xl mx-auto px-6 relative mt-20 overflow-visible">
        <FadeIn delay={0.2} className="relative flex flex-col items-center origin-top transform scale-[0.6] sm:scale-75 md:scale-100">
          
          {/* Start Node */}
          <div className="relative z-10 bg-bg-elevated border border-bg-border shadow-sm rounded-xl px-6 py-4 flex items-center gap-4 w-72 justify-center transition-transform hover:-translate-y-1">
            <div className="absolute -top-4 bg-magenta rounded p-1.5 shadow-sm text-white">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <span className="font-semibold text-text text-sm">{t("industries.node1")}</span>
          </div>

          {/* Vertical Line */}
          <div className="w-px h-10 bg-bg-border relative z-0"></div>

          {/* Decision Node */}
          <div className="relative z-10 bg-bg-elevated border border-bg-border shadow-sm rounded-xl px-6 py-4 flex items-center gap-3 w-80 justify-center transition-transform hover:-translate-y-1 shadow-magenta/10 border-b-4 border-b-magenta/30">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-magenta to-orange flex items-center justify-center text-white shrink-0">
              <GitBranch className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-text text-sm">{t("industries.node2")}</span>
          </div>

          {/* Branches */}
          <div className="flex w-full mt-10 relative max-w-xl mx-auto">
            {/* Horizontal connection line */}
            <div className="absolute top-0 left-[25%] right-[25%] h-px bg-bg-border"></div>
            {/* Vertical drop lines */}
            <div className="absolute top-0 left-[25%] w-px h-10 bg-bg-border"></div>
            <div className="absolute top-0 right-[25%] w-px h-10 bg-bg-border"></div>
            
            <div className="absolute -top-4 left-[25%] -translate-x-1/2 bg-bg-elevated px-2 text-xs font-semibold text-text-faint">{t("industries.yes")}</div>
            <div className="absolute -top-4 right-[25%] translate-x-1/2 bg-bg-elevated px-2 text-xs font-semibold text-text-faint">{t("industries.no")}</div>

            {/* Left Branch */}
            <div className="flex-1 flex flex-col items-center pt-10 gap-4">
              <div className="bg-bg-elevated border border-bg-border shadow-sm rounded-xl px-4 py-3 flex items-center gap-3 w-64 hover:-translate-y-0.5 transition-transform">
                <Bell className="w-4 h-4 text-text-faint" />
                <span className="text-sm text-text-muted font-medium">{t("industries.left1")}</span>
              </div>
              <div className="bg-bg-elevated border border-bg-border shadow-sm rounded-xl px-4 py-3 flex items-center gap-3 w-64 hover:-translate-y-0.5 transition-transform">
                <MessageSquare className="w-4 h-4 text-text-faint" />
                <span className="text-sm text-text-muted font-medium">{t("industries.left2")}</span>
              </div>
              <div className="bg-gradient-to-r from-magenta/20 to-magenta/10 p-0.5 rounded-xl w-64 hover:-translate-y-0.5 transition-transform shadow-md">
                <div className="bg-bg-elevated rounded-[10px] px-4 py-3 flex items-center gap-3 w-full">
                  <div className="w-6 h-6 rounded bg-magenta/15 flex items-center justify-center shrink-0 border border-magenta/25">
                    <span className="text-[10px]">🤖</span>
                  </div>
                  <span className="text-sm font-semibold text-text">{t("industries.left3")}</span>
                </div>
              </div>
              
              {/* Bottom line */}
              <div className="w-px h-10 bg-bg-surface mt-2"></div>
              <div className="w-5 h-5 rounded border border-bg-border flex items-center justify-center text-text-faint bg-bg-elevated">
                <Plus className="w-3 h-3" />
              </div>
            </div>

            {/* Right Branch */}
            <div className="flex-1 flex flex-col items-center pt-10 gap-4">
              <div className="bg-bg-elevated border border-bg-border shadow-sm rounded-xl px-4 py-3 flex items-center gap-3 w-64 hover:-translate-y-0.5 transition-transform">
                <div className="w-4 h-4 rounded-full bg-bg-surface flex items-center justify-center text-[8px] font-bold text-text-muted">{t("industries.on_label")}</div>
                <span className="text-sm text-text-muted font-medium">{t("industries.right1")}</span>
              </div>
              <div className="bg-bg-elevated border border-bg-border shadow-sm rounded-xl px-4 py-3 flex items-center gap-3 w-64 hover:-translate-y-0.5 transition-transform">
                <Mail className="w-4 h-4 text-orange" />
                <span className="text-sm text-text-muted font-medium">{t("industries.right2")}</span>
              </div>
              <div className="bg-gradient-to-r from-orange/20 to-orange/10 p-0.5 rounded-xl w-64 hover:-translate-y-0.5 transition-transform shadow-md">
                <div className="bg-bg-elevated rounded-[10px] px-4 py-3 flex items-center gap-3 w-full">
                  <div className="w-6 h-6 rounded bg-orange/15 flex items-center justify-center shrink-0 border border-orange/25">
                    <span className="text-[10px]">🤖</span>
                  </div>
                  <span className="text-sm font-semibold text-text">{t("industries.right3")}</span>
                </div>
              </div>

              {/* Bottom line */}
              <div className="w-px h-10 bg-bg-surface mt-2"></div>
              <div className="w-5 h-5 rounded border border-bg-border flex items-center justify-center text-text-faint bg-bg-elevated">
                <Plus className="w-3 h-3" />
              </div>
            </div>

          </div>

        </FadeIn>
      </div>

    </section>
  );
}
