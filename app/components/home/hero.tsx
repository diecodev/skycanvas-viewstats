export const Hero = () => {
  return (
    <div className="space-y-6 mt-20">
      <h1 className="text-3xl text-balance lg:text-6xl !leading-tight font-black tracking-wide text-center">
        <span className="px-1 dark:text-indigo-500 text-sky-400">
          Elevate your day
        </span>{" "}
        with precise, no-nonsense{" "}
        <span className="px-1 dark:text-indigo-500 text-sky-400">
          weather updates!
        </span>
      </h1>

      <p className="text-lg lg:text-2xl font-medium text-balance text-center dark:text-neutral-300 text-neutral-700">
        SkyCanvas is a weather app that provides accurate weather data for any
        location.
      </p>
    </div>
  );
};
