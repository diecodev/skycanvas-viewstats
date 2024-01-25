import { getWeatherData } from "../_actions";
import { Highlight } from "../components/search/highlight";
import { MainlyData } from "../components/search/main";
import { Metadata } from "../components/search/metadata";
import { WeekData } from "../components/search/week";

export default async function SearchPage({
  searchParams: params,
}: {
  searchParams: { lat: string; lon: string; q: string };
}) {
  const data = await getWeatherData({ lat: params.lat, lon: params.lon });

  return (
    <main className="px-6 py-4 space-y-20 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        <MainlyData
          data={{ ...data.current, name: params.q, chart: data.hourly }}
        />
        <Metadata>
          <div className="flex flex-col gap-8 justify-between h-full">
            <WeekData data={data.daily} />
            <Highlight current={data.current} />
          </div>
        </Metadata>
      </div>
    </main>
  );
}
