import { FC } from "react";
import style from "./weatherMetrics.module.scss";
import { WeatherMetricsProps } from "./weatherMetrics.interface";
import { WeatherCard } from "./weatherMetricsCard";
import { getTime } from "../../lib/date";

export const WeatherMetrics: FC<WeatherMetricsProps> = ({ metrics }) => {
  const sunrise = getTime(metrics.sunrise).toString();
  const sunset = getTime(metrics.sunset).toString();
  return (
    <div className={style.weatherMetrics}>
      <WeatherCard data={metrics.highestTemp + "°"} title={"Максимальная"} />
      <WeatherCard data={metrics.lowestTemp + "°"} title={"Минимальная"} />
      <WeatherCard data={metrics.wind + " миль/ч"} title={"Bетeр"} />
      <WeatherCard data={metrics.humidity + "%"} title={"Влажность"} />
      <WeatherCard data={sunrise} title={"Восход"} />
      <WeatherCard data={sunset} title={"Закат"} />
    </div>
  );
};
