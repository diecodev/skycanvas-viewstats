import { Current } from "@root/lib/types";
import { Title } from "./title";
import { HighlightCard } from "./highlight-card";
import { Flex, Metric } from "@tremor/react";
import { CircularChart } from "./Circlular-chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowUp,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";

export const Highlight = ({ current }: { current: Current }) => {
  return (
    <div>
      <Title value={"Today's Highlights"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <HighlightCard
          title="UV Index"
          footer={
            current.uvi < 3 ? "Low" : current.uvi < 6 ? "Moderate" : "High"
          }
        >
          <Metric className="text-center">{current.uvi}</Metric>
        </HighlightCard>
        <HighlightCard
          title="Wind Velocity"
          footer={`Direction: ${current.wind_deg}°`}
        >
          <Metric className="text-center">{current.wind_speed + " m/s"}</Metric>
        </HighlightCard>
        <HighlightCard
          title="Humidity"
          footer={current.humidity < 20 ? "Normal" : "Saturated"}
        >
          <CircularChart value={current.humidity} />
        </HighlightCard>
        <HighlightCard title="Pressure">
          <Metric className="text-center">{`${current.pressure} hPa`}</Metric>
        </HighlightCard>
        <HighlightCard title="Sunset & Sunrise">
          <SunriseSunset sunset={current.sunset} sunrise={current.sunrise} />
        </HighlightCard>
        <HighlightCard
          title="Clouds"
          footer={current.clouds < 20 ? "Sunny" : "Cloudy"}
        >
          <CircularChart value={current.clouds} />
        </HighlightCard>
      </div>
    </div>
  );
};

const SunriseSunset = ({
  sunset,
  sunrise,
}: {
  sunset: number;
  sunrise: number;
}) => (
  <div className="flex flex-col gap-4 justify-between items-start">
    <Flex className="gap-2">
      <FontAwesomeIcon
        icon={faCircleArrowUp}
        className="w-6 h-6 text-neutral-700 dark:text-neutral-300"
      />

      <p>{new Date(sunrise * 1000).toLocaleTimeString()}</p>
    </Flex>

    <Flex className="gap-2">
      <FontAwesomeIcon
        icon={faCircleArrowDown}
        className="w-6 h-6 text-neutral-700 dark:text-neutral-300"
      />
      <p>{new Date(sunset * 1000).toLocaleTimeString()}</p>
    </Flex>
  </div>
);
