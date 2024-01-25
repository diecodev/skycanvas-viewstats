"use server";

import { OPEN_WEATHER_KEY, OPEN_WEATHER_URL } from "@root/lib/consts";
import { TPredictionResponse } from "@root/lib/types";
import { redirect } from "next/navigation";

export const redirectToLocation = async (form: FormData) => {
  const input = form.get("userInput") as string;

  const city = (await getPossibleCities(input))[0];

  redirect(`/search?lat=${city?.lat}&lon=${city?.lon}`);
};

export const getPossibleCities = async (city: string) => {
  const response = await fetch(
    `${OPEN_WEATHER_URL}/direct?q=${city}&limit=8&appid=${OPEN_WEATHER_KEY}`
  );
  const data = ((await response.json()) as TPredictionResponse[]) ?? [];
  console.log(
    data,
    `${OPEN_WEATHER_URL}/direct?q=${city}&limit=8&appid=${OPEN_WEATHER_KEY}`
  );

  const cities = data.map((obj) => ({
    city: obj.name,
    country: obj.country,
    lat: obj.lat ?? 0,
    lon: obj.lon ?? 0,
  }));

  return cities;
};
