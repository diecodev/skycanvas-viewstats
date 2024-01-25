import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <div className="p-4 h-16 pb-0 sticky top-0">
      <header className="flex backdrop-blur-lg justify-between items-center p-1 max-w-screen-sm mx-auto bg-neutral-400/25 rounded-full">
        <Link
          href="/"
          className="font-black tracking-wide p-2 text-xl ml-2 leading-none"
        >
          <span className="dark:text-indigo-500 text-sky-500">Sky</span>Canvas
        </Link>
        <ThemeToggle />
      </header>
    </div>
  );
}
