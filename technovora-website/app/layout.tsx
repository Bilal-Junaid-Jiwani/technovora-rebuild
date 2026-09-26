import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono, Bebas_Neue } from "next/font/google";
import "@/styles/globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://technovora.com"),
  title: {
    default: "Technovora — AI Automation & Custom Software for SaaS Teams",
    template: "%s | Technovora",
  },
  description:
    "We build AI agents, custom software, and cloud infrastructure for SaaS startups. Based in Sheridan, WY and Hong Kong.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://technovora.com",
    siteName: "Technovora",
    title: "Technovora — AI Automation & Custom Software for SaaS Teams",
    description:
      "We build AI agents, custom software, and cloud infrastructure for SaaS startups.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Technovora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technovora — AI Automation & Custom Software for SaaS Teams",
    description:
      "We build AI agents, custom software, and cloud infrastructure for SaaS startups.",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { I18nProvider } from "@/lib/i18n";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")==="light"?"light":"dark";document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
        <I18nProvider>
          <ThemeProvider>
            <SmoothScrollProvider>
              <ScrollProgress />
              <AnnouncementBar />
              <Navbar />
              <main className="flex-1 pt-[101px]">
                <PageTransitionWrapper>
                  {children}
                </PageTransitionWrapper>
              </main>
              <Footer />
            </SmoothScrollProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
