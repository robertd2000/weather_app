import { FC } from "react";
import style from "./weatherMetrics.module.scss";
import { WeatherMetricsProps } from "./weatherMetrics.interface";
import { WeatherCard } from "./weatherMetricsCard";

export const WeatherMetrics: FC<WeatherMetricsProps> = ({ metrics }) => {
  return (
    <div className={style.weatherMetrics}>
      <WeatherCard data={metrics.highestTemp + "°"} title={"Максимальная"} />
      <WeatherCard data={metrics.lowestTemp + "°"} title={"Минимальная"} />
      <WeatherCard data={metrics.wind + " миль/ч"} title={"Bетeр"} />
      <WeatherCard data={metrics.humidity + "%"} title={"Влажность"} />
      <WeatherCard data={metrics.sunrise} title={"Восход"} />
      <WeatherCard data={metrics.sunset} title={"Закат"} />
    </div>
  );
};
