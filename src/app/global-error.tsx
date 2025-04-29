'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>
          <p className="text-lg mb-8">
            An unexpected error has occurred. We apologize for the inconvenience.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800"
              onClick={() => reset()}
            >
              Try again
            </button>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              href="/"
            >
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
