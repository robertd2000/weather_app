import { FC } from "react";
import { CityHeaderProps } from "./cityHeader.interface";
import style from "./cityHeader.module.scss";

export const CityHeader: FC<CityHeaderProps> = ({
  cityName,
  countryName,
  date,
}) => {
  return (
    <div className={style.cityInfo}>
      <h2>
        {cityName} {countryName}
      </h2>
      <h4>{date}</h4>
    </div>
  );
};
