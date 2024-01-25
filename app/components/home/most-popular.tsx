import Link from "next/link";

const cities = [
  {
    name: "Barcelona",
    lat: 41.3828939,
    lon: 2.1774322,
  },
  {
    name: "California",
    lat: 38.628683,
    lon: -92.5659635,
  },
  {
    name: "Santa Marta",
    lat: 11.2320988,
    lon: -74.1950883,
  },
  {
    name: "London",
    lat: 51.5073219,
    lon: -0.1276474,
  },
  {
    name: "Berlin",
    lat: 52.5170365,
    lon: 13.3888599,
  },
  {
    name: "Paris",
    lat: 48.8588897,
    lon: 2.3200410217200766,
  },
  {
    name: "Cape Town",
    lat: -33.928992,
    lon: 18.417396,
  },
  {
    name: "Mexico City",
    lat: 19.4326296,
    lon: -99.1331785,
  },
];

export const MostPopular = () => {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-bold text-center text-2xl text-neutral-700 dark:text-neutral-300">
        Most popular locations
      </h3>
      <div className="text-neutral-700 dark:text-neutral-300 flex flex-wrap gap-4 justify-center mt-2">
        {cities.map((city) => (
          <div key={city.lat} className="overflow-hidden flex items-stretch">
            <Link
              href={`/search?q=${city.name}&lat=${city.lat}&lon=${city.lon}`}
              className="py-2 px-6 text-center line-clamp-1 rounded-full bg-neutral-400/20 relative before:absolute before:-z-10 before:inset-0 overflow-hidden before:bg-neutral-400/10 before:scale-0 before:transition-all before:duration-300 hover:before:scale-125 before:rounded-full"
            >
              {city.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
