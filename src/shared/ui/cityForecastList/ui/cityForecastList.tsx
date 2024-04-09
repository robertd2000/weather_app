import { FC } from "react";
import style from "./cityForecastList.module.scss";
import { CityForecastProps } from "./cityForecastList.interface";
import { ForecastCard } from "./forecastCard/forecastCard";

export const CityForecastList: FC<CityForecastProps> = ({ forecast }) => {
  return (
    <div className={style.forecasts}>
      {forecast?.map((i) => (
        <ForecastCard key={i.dt} forecast={i} />
      ))}
    </div>
  );
};
