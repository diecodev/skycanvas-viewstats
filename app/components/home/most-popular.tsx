import Link from "next/link";

export const MostPopular = () => {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-bold text-center text-2xl text-neutral-700 dark:text-neutral-300">
        Most popular locations
      </h3>
      <div className="text-neutral-700 dark:text-neutral-300 flex flex-wrap gap-4">
        <div className="overflow-hidden flex items-stretch">
          <Link
            href="/search?q=Barcelona"
            className="py-2 px-6 text-center line-clamp-1 rounded-full bg-neutral-400/20 relative before:absolute before:-z-10 before:inset-0 overflow-hidden before:bg-neutral-400/10 before:scale-0 before:transition-all before:duration-300 hover:before:scale-125 before:rounded-full"
          >
            Barcelona
          </Link>
        </div>
      </div>
    </section>
  );
};
