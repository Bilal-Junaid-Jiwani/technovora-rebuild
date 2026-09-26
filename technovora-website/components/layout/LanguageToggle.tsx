"use client";

import { useI18n } from "./I18nProvider";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "zh-CN", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "de", name: "German" },
  { code: "nl", name: "Dutch" },
];

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="relative group">
      <select 
        className="bg-bg-elevated border border-bg-border text-text text-sm rounded-md px-2 py-1 outline-none focus:border-orange transition-colors cursor-pointer"
        value={locale}
        onChange={(e) => setLocale(e.target.value as any)}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
