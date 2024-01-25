export default function Loading() {
  const mockWeek = Array.from({ length: 6 }, (_, i) => i);

  return (
    <main className="px-6 py-4 space-y-20 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        <div className="h-[calc(100vh_-_6rem)] animate-pulse w-full ring-1 rounded-tremor-default ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-tremor-brand dark:border-dark-tremor-brand bg-white" />
        <section className="md:col-span-2">
          <div className="flex flex-col gap-8 justify-between h-full">
            <div>
              <div className="h-8 w-44 animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-600" />
              <div className="mt-6 py-1 px-1 overflow-hidden">
                <div className="flex gap-3">
                  {mockWeek.map((i) => (
                    <div
                      key={i}
                      className="ring-1 rounded-tremor-default bg-tremor-background ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-tremor-brand dark:border-dark-tremor-brand flex-none w-36 h-[11.4375rem] aniamte-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="h-8 w-44 animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-600" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {mockWeek.map((i) => (
                  <div
                    key={i}
                    className="ring-1 rounded-tremor-default bg-tremor-background ring-tremor-ring shadow-tremor-card dark:bg-dark-tremor-background dark:ring-dark-tremor-ring dark:shadow-dark-tremor-card border-tremor-brand dark:border-dark-tremor-brand w-[15.625rem] h-[14.5rem] animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
