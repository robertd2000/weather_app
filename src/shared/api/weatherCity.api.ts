import { CityWeather } from "../types";
import base from "./base";

export const getCityWeather = async (city: string): Promise<CityWeather> => {
  const { data } = await base.get(`/weather`, {
    params: {
      q: city,
    },
  });

  return data;
};
