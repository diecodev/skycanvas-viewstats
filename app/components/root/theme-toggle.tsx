"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "../icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="flex gap-2 rounded-full overflow-hidden relative p-2 before:absolute before:-z-10 before:inset-0 before:bg-neutral-400/40 before:scale-0 before:transition-all before:duration-300 hover:before:scale-100 before:rounded-full text-neutral-800 dark:text-neutral-100"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
