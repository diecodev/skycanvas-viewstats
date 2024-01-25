"use client";

import Link from "next/link";

export default function ErrorSearchPage() {
  return (
    <div className="text-neutral-700 dark:text-neutral-300 text-lg min-h-[calc(100vh-4rem)] flex items-center flex-col gap-y-4 justify-center">
      Looks like you searched for something that doesn&apos;t exist...
      <Link
        href="/"
        className="text-sky-500 hover:text-sky-600 transition-colors font-medium dark:text-indigo-500 dark:hover:text-indigo-600"
      >
        Return Home
      </Link>
    </div>
  );
}
