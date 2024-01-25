"use client";

import { Hourly } from "@root/lib/types";
import { AreaChart, Title } from "@tremor/react";

export const HoursChart = ({ hourly }: { hourly: Hourly[] }) => {
  const chartdata = hourly.map((data) => {
    const obj = {
      // the index should be the hour of the date
      date: new Date(data.dt * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
      }),
      Temperature: data.temp,
      "Feels Like": data.feels_like,
    };

    return obj;
  });

  const valueFormatter = function (deg: number) {
    return `${deg}°C`;
  };

  return (
    <div>
      <Title>Climate Clock</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        showYAxis={false}
        startEndOnly
        showAnimation
        showGridLines={false}
        categories={["Temperature", "Feels Like"]}
        colors={["rose", "indigo"]}
        valueFormatter={valueFormatter}
        curveType="natural"
      />
    </div>
  );
};
