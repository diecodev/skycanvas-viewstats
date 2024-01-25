"use client";

import { getPossibleCities } from "@root/app/_actions";
import { cn } from "@root/lib/utils";
import debounce from "just-debounce-it";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export const SearchInput = () => {
  const [cities, setCities] = useState<
    { city: string; country: string; lat: number; lon: number }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();

  return (
    <>
      <input
        className="border-2 outline-none px-4 py-2 bg-transparent text-lg flex-1 group-focus-within:border-sky-500 group-focus-within:dark:border-indigo-500 rounded-l-full border-r-0 dark:border-neutral-600"
        type="text"
        name="userInput"
        placeholder="Barcelona, Spain"
        required
        autoComplete="off"
        autoFocus
        defaultValue={params.get("q") || ""}
        spellCheck="false"
        autoCorrect="off"
        onChange={debounce(async (e: ChangeEvent<HTMLInputElement>) => {
          if (!e.target.value) {
            setCities([]);
            setLoading(false);
            return;
          }

          setLoading(true);
          const response = await getPossibleCities(e.target.value);
          setLoading((prev) => !prev);
          setCities(response);
        }, 500)}
      />
      <section
        className={cn(
          "absolute -bottom-4 p-4 left-0 right-0 z-10 transition-all duration-300 translate-y-full bg-neutral-100 dark:bg-neutral-800 rounded-lg",
          cities.length || loading ? "opacity-100" : "opacity-0"
        )}
      >
        <ul className="flex flex-col items-stretch text-neutral-700 dark:text-neutral-300">
          {loading && !cities.length && <li className="py-1">Loading...</li>}
          {cities.map((city) => (
            <Link
              key={`${city.lat}_${city.lon}`}
              className="py-1 dark:hover:text-white hover:text-black transition-all offset-1 hover:font-medium"
              href={`/search?q=${city?.city}&lat=${city.lat}&lon=${city.lon}`}
            >
              {city.city}, {city.country}
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
};
