import { FC } from "react";
import style from "./cityWeather.module.scss";
import { CityWeatherProps } from "./cityWeather.interface";

export const CityWeather: FC<CityWeatherProps> = ({
  description,
  iconUrl,
  temperature,
}) => {
  return (
    <div className={style.cityWeather}>
      <div className={style.cityIcon}>
        <img src={iconUrl} alt="img" />
      </div>
      <div className={style.temperature}>
        <h3>{temperature}°</h3>
        <h4>{description}</h4>
      </div>
    </div>
  );
};
