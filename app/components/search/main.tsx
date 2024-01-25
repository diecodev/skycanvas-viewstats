import { Current, Hourly } from "@root/lib/types";
import { Card, Flex, Metric, Text, Divider, Badge } from "@tremor/react";
import { FeelsLike, Humidity } from "../icons";
import { HoursChart } from "./hours-chart";
import { weekDays } from "@root/lib/utils";
import Image from "next/image";
import { SearchForm } from "../home/search-form";
import { Suspense } from "react";

export const MainlyData = ({
  data,
}: {
  data: Current & { name: string; chart: Hourly[] };
}) => {
  return (
    <aside>
      <Card className="bg-white">
        <div className="mb-6">
          <Suspense>
            <SearchForm />
          </Suspense>
        </div>
        <div className="grid place-content-center">
          <Image
            src={`/${data.weather[0].icon}.png`}
            alt={"weather"}
            width={150}
            height={150}
          />
        </div>
        <Flex className="justify-between items-start mt-8">
          <div>
            <Metric className="text-6xl font-normal">
              {data.temp.toFixed(0)}°C
            </Metric>
            <Text className="my-4">
              {weekDays({
                index: new Date(data.dt * 1000).getDay(),
              })}
              ,{" "}
              {new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "numeric",
              }).format(new Date(data.dt * 1000))}
            </Text>
          </div>
          <Badge
            className="bg-sky-500 dark:bg-indigo-500 text-white dark:text-white"
            tooltip={data.weather[0].description}
          >
            {data.weather[0].main}
          </Badge>
        </Flex>
        <Divider />

        <Flex className="gap-2 items-center justify-start text-neutral-700 dark:text-neutral-300">
          <FeelsLike className="w-5 h-5 text-neutral-500" />
          <p>Feels like {data.feels_like.toFixed(0)}°C</p>
        </Flex>
        <Flex className="gap-2 items-center justify-start text-neutral-700 dark:text-neutral-300">
          <Humidity className="w-5 h-5 text-neutral-500" />
          <p>Humidity - {data.humidity}%</p>
        </Flex>
        <Divider />
        <HoursChart hourly={data.chart.slice(0, 12)} />
      </Card>
    </aside>
  );
};
