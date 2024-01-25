import { Daily } from "@root/lib/types";
import { Title } from "./title";
import { WeekCard } from "./week-card";

export const WeekData = ({ data }: { data: Daily[] }) => {
  return (
    <div>
      <Title value={"Week Forecast"} />
      <div className="overflow-x-auto mt-6 overflow-y-hidden py-1 px-1 no-scrollbar">
        <div className="flex gap-3">
          {data.slice(1).map((day) => {
            return <WeekCard day={day} key={day.dt} />;
          })}
        </div>
      </div>
    </div>
  );
};
