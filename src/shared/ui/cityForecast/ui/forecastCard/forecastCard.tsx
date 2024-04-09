import { FC } from "react";
import { ForecastCardProps } from "./forecastCard.interface";
import style from "./forecastCard.module.scss";

export const ForecastCard: FC<ForecastCardProps> = ({ forecast }) => {
  const temp = Math.floor(forecast.main.temp * 1) / 1,
    description = forecast.weather[0].description,
    icon = forecast.weather[0].icon,
    month = forecast.dt_txt.slice(5, 7),
    day = forecast.dt_txt.slice(8, 10),
    hour = forecast.dt_txt.slice(11, 13);

  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className={style.forecastWrapper}>
      <span>
        {day}.{month}
      </span>
      <span>{hour}.00</span>
      <img src={iconUrl} alt="icon" />
      <span>{description}</span>
      <h4>{temp}°</h4>
    </div>
  );
};
