import { Daily } from "@root/lib/types";
import { weekDays } from "@root/lib/utils";
import { Card, Flex, Text } from "@tremor/react";
import Image from "next/image";

export const WeekCard = ({ day }: { day: Daily }) => (
  <Card
    key={day.dt}
    className="flex flex-col gap-y-2 items-center flex-none w-36"
  >
    <Text className="font-bold text-neutral-700 dark:text-neutral-300">
      {weekDays({
        index: new Date(day.dt * 1000).getDay(),
      })}
    </Text>
    <Image
      src={`/${day.weather[0].icon}.png`}
      alt={"weather"}
      width={75}
      height={75}
    />
    <Flex className="gap-2 items-center justify-center">
      <p className="text-neutral-700 dark:text-neutral-300 font-semibold">
        {day.temp.max.toFixed(0)}°
      </p>
      <p className="text-neutral-500 dark:text-neutral-500 font-semibold">
        {day.temp.min.toFixed(0)}°
      </p>
    </Flex>
  </Card>
);
