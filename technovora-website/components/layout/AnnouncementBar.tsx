"use client";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";
import { useI18n } from "@/components/layout/I18nProvider";

export function AnnouncementBar() {
  const { t } = useI18n();
  return (
    <div className="announcement-bar">
      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-live shrink-0" aria-hidden="true" />
      <span>{t("announcement.booking")}</span>
      <span className="text-white/40 hidden sm:inline" aria-hidden="true">—</span>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-0.5 font-semibold text-white transition-colors hover:bg-white/25"
      >
        {t("announcement.book_call")}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 5h6M5.5 2.5l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <Link
        href={CALENDLY_URL}
        className="absolute right-4 text-white/50 hover:text-white/80 transition-colors lg:block hidden"
        aria-hidden="true"
        tabIndex={-1}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
