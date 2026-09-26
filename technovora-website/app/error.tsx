"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="font-mono text-text-faint text-sm mb-4">500</p>
      <h1 className="font-display text-4xl font-bold text-text mb-3">
        Something went wrong
      </h1>
      <p className="text-text-muted text-base mb-8 max-w-sm">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="text-cta font-medium hover:underline underline-offset-4 transition-colors"
      >
        Try again
      </button>
    </main>
  );
}
