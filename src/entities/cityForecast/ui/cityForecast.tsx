import { FC } from "react";
import { WeatherMetrics } from "../../../shared/ui/weatherMetrics";
import { CityWeather } from "../../../shared/ui/cityWeather";
import { CityHeader } from "../../../shared/ui/cityHeader";
import { CityForecastProps } from "../types/cityForecast.interface";
import style from "./cityForecast.module.scss";
import { DeleteFromList } from "../../../features/deleteFromList/ui/deleteFromList";

export const CityForecast: FC<CityForecastProps> = ({ cityForecast }) => {
  return (
    <div className={style.cityForecast}>
      <CityHeader
        cityName={cityForecast.name}
        date={"11111"}
        countryName={cityForecast.sys.country}
      />
      <CityWeather iconUrl={""} temperature={10} description={"Rain"} />
      <WeatherMetrics
        metrics={{
          highestTemp: 0,
          lowestTemp: 0,
          wind: 0,
          sunrise: "",
          sunset: "",
          humidity: 0,
        }}
      />
      <DeleteFromList id={cityForecast.id.toString()} />
    </div>
  );
};
