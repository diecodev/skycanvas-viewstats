"use server";

import {
  OPEN_WEATHER_KEY,
  OPEN_WEATHER_GEO_URL,
  OPEN_WEATHER_DATA_URL,
} from "@root/lib/consts";
import { TWeatherDataResponse } from "@root/lib/types";
import { redirect } from "next/navigation";

export const redirectToLocation = async (form: FormData) => {
  const input = form.get("userInput") as string;

  const city = (await getPossibleCities(input))[0];

  redirect(`/search?q=${city?.city}&lat=${city?.lat}&lon=${city?.lon}`);
};

interface TPredictionResponse {
  name: string;
  country: string;
  lat: number;
  lon: number;
}
export const getPossibleCities = async (city: string) => {
  const response = await fetch(
    `${OPEN_WEATHER_GEO_URL}/direct?q=${city}&limit=8&appid=${OPEN_WEATHER_KEY}`
  );
  const data = ((await response.json()) as TPredictionResponse[]) ?? [];

  const cities = data.map((obj) => ({
    city: obj.name,
    country: obj.country,
    lat: obj.lat ?? 0,
    lon: obj.lon ?? 0,
  }));

  return cities;
};

export const getWeatherData = async ({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) => {
  const response = await fetch(
    `${OPEN_WEATHER_DATA_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_KEY}`
  );
  const data = (await response.json()) as TWeatherDataResponse;
  return data;
};
