import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="font-mono text-text-faint text-sm mb-4">404</p>
      <h1 className="font-display text-4xl font-bold text-text mb-3">
        Page not found
      </h1>
      <p className="text-text-muted text-base mb-8 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-cta font-medium hover:underline underline-offset-4 transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
