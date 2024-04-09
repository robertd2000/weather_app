import { CityWeatherResponse } from "../types";
import base from "./base";

export const getCityWeather = async (
  city: string
): Promise<CityWeatherResponse> => {
  const { data: weather } = await base.get(`/weather`, {
    params: {
      q: city,
    },
  });

  const { data: forecast } = await base.get(`/forecast`, {
    params: {
      q: city,
    },
  });

  return { weather, forecast };
};
