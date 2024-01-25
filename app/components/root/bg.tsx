"use client";

import { cn } from "@root/lib/utils";
import { useTheme } from "next-themes";

export const Background = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "absolute top-0 z-[-2] inset-0 dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
      )}
    ></div>
  );
};
