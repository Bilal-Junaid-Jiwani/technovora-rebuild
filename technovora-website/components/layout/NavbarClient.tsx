"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SERVICES, CALENDLY_URL } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useI18n } from "./I18nProvider";
import { Bot, Code2, Smartphone, Cloud, Palette, Megaphone, type LucideIcon } from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "ai-automation": Bot,
  "web-development": Code2,
  "mobile-apps": Smartphone,
  "cloud-devops": Cloud,
  design: Palette,
  smm: Megaphone,
};

const SERVICE_OUTCOME_KEY: Record<string, string> = {
  "ai-automation": "services.outcome.ai",
  "web-development": "services.outcome.web",
  "mobile-apps": "services.outcome.mobile",
  "cloud-devops": "services.outcome.cloud",
  design: "services.outcome.design",
  smm: "services.outcome.smm",
};

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <motion.line x1="3" x2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        initial={{ y1: 6, y2: 6, rotate: 0 }}
        animate={open ? { y1: 11, y2: 11, rotate: 45 } : { y1: 6, y2: 6, rotate: 0 }}
        style={{ originX: "11px", originY: "11px" }} transition={{ duration: 0.2 }} />
      <motion.line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        initial={{ opacity: 1 }}
        animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.15 }} />
      <motion.line x1="3" x2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        initial={{ y1: 16, y2: 16, rotate: 0 }}
        animate={open ? { y1: 11, y2: 11, rotate: -45 } : { y1: 16, y2: 16, rotate: 0 }}
        style={{ originX: "11px", originY: "11px" }} transition={{ duration: 0.2 }} />
    </svg>
  );
}

export function NavbarClient() {
  const { t } = useI18n();
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none"
        style={{ top: "47px" }}
      >
        <nav
          className={cn(
            "pointer-events-auto mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 sm:px-5 transition-all duration-300",
            scrolled || mobileOpen
              ? "border-bg-border bg-bg-base/85 shadow-xl shadow-black/10 backdrop-blur-xl dark:shadow-black/50"
              : "border-bg-border/60 bg-bg-base/40 backdrop-blur-md"
          )}
        >

          {/* Logo — left */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Technovora home">
            <Image
              src="/images/logo-wordmark.webp"
              alt="Technovora"
              width={400}
              height={120}
              className="h-24 w-auto object-contain max-w-[200px]"
              priority
            />
          </Link>

          {/* Nav links — center */}
          <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center" role="list">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <li key="services" ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      onKeyDown={(e) => e.key === "Escape" && setServicesOpen(false)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                        isActive("/services") || servicesOpen
                          ? "bg-magenta/10 text-magenta"
                          : "text-text-muted hover:bg-bg-elevated hover:text-text"
                      )}
                    >
                      {t("nav.services")}
                      <ChevronDown className={cn("transition-transform duration-200", servicesOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 grid w-[min(780px,calc(100vw-3rem))] grid-cols-[1fr_230px] gap-2 overflow-hidden rounded-3xl border border-bg-border bg-bg-elevated p-2 shadow-2xl shadow-black/20 dark:shadow-black/60"
                          role="menu"
                        >
                          <div className="grid grid-cols-2 gap-1 p-1">
                            {SERVICES.map((service) => {
                              const Icon = SERVICE_ICONS[service.slug];
                              return (
                                <Link
                                  key={service.slug}
                                  href={service.href}
                                  role="menuitem"
                                  onClick={() => setServicesOpen(false)}
                                  className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-bg-surface"
                                >
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-magenta/10 text-magenta transition-colors group-hover:bg-magenta group-hover:text-white">
                                    <Icon className="h-4 w-4" />
                                  </span>
                                  <span className="flex min-w-0 flex-col gap-0.5">
                                    <span className="text-[13px] font-semibold text-text">
                                      {t("nav.service." + service.slug)}
                                    </span>
                                    <span className="line-clamp-2 text-xs leading-snug text-text-muted">
                                      {t(SERVICE_OUTCOME_KEY[service.slug])}
                                    </span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Featured panel */}
                          <div
                            className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 text-white"
                            style={{ background: "var(--gradient)" }}
                          >
                            <div
                              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl"
                              aria-hidden="true"
                            />
                            <div className="relative">
                              <p className="font-display text-lg font-bold leading-tight">{t("cta.card.title")}</p>
                              <p className="mt-1 font-mono text-xs text-white/80">{t("cta.card.meta")}</p>
                            </div>
                            <div className="relative mt-8 flex flex-col gap-2">
                              <a
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                className="rounded-full bg-white px-4 py-2.5 text-center text-[13px] font-semibold text-black transition-transform hover:-translate-y-0.5"
                              >
                                {t("nav.quote")}
                              </a>
                              <Link
                                href="/services"
                                role="menuitem"
                                onClick={() => setServicesOpen(false)}
                                className="text-center text-[13px] font-semibold text-white/90 underline-offset-4 hover:underline"
                              >
                                {t("nav.services.viewall")}
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-magenta/10 text-magenta"
                        : "text-text-muted hover:bg-bg-elevated hover:text-text"
                    )}
                  >
                    {t("nav." + link.label.toLowerCase())}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA — right */}
          <div className="hidden lg:flex items-center shrink-0 gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-magenta/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-magenta/40"
              style={{ background: "var(--gradient)" }}
            >
              {t("nav.quote")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden text-text-muted hover:text-text transition-colors p-1"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-bg-base flex flex-col"
            style={{ paddingTop: "calc(var(--announcement-h, 37px) + 64px)" }}
          >
            <nav className="flex flex-col flex-1 px-6 py-8 overflow-y-auto">
              <ul className="flex flex-col" role="list">
                {NAV_LINKS.map((link, i) => {
                  if (link.label === "Services") {
                    return (
                      <li key="services-mobile">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.25 }}
                        >
                          <button
                            onClick={() => setServicesOpen((v) => !v)}
                            className="flex items-center justify-between w-full py-4 text-lg font-medium text-text-muted hover:text-text transition-colors border-b border-bg-border"
                          >
                            {t("nav.services")}
                            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
                          </button>
                          <AnimatePresence>
                            {servicesOpen && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                                className="overflow-hidden pl-4"
                              >
                                {SERVICES.map((service) => (
                                  <li key={service.slug}>
                                    <Link
                                      href={service.href}
                                      className="flex items-center py-3 text-base text-text-muted hover:text-magenta transition-colors"
                                    >
                                      {t("nav.service." + service.slug)}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </li>
                    );
                  }

                  return (
                    <li key={link.href}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.25 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "block py-4 text-lg font-medium border-b border-bg-border transition-colors",
                            isActive(link.href) ? "text-orange" : "text-text-muted hover:text-text"
                          )}
                        >
                          {t("nav." + link.label.toLowerCase())}
                        </Link>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                className="mt-10 flex flex-col items-center gap-4"
              >
                <div className="flex justify-center items-center gap-4 w-full mb-2">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 text-base font-bold tracking-wide text-white rounded hover:opacity-90 transition-all"
                  style={{ background: "var(--gradient)" }}
                >
                  {t("nav.quote")}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
