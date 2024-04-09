import { FC } from "react";
import { WeatherCardProps } from "./weatherCard.interface";
import style from "./weatherCard.module.scss";

export const WeatherCard: FC<WeatherCardProps> = ({ data, title }) => {
  return (
    <div className={style.weatherCard}>
      <h4>{data}</h4>
      <span>{title}</span>
    </div>
  );
};
