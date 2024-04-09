import { FC } from "react";
import { WeatherMetrics } from "../../../shared/ui/weatherMetrics";
import { CityWeather } from "../../../shared/ui/cityWeather";
import { CityHeader } from "../../../shared/ui/cityHeader";
import { CityForecastProps } from "../types/cityForecast.interface";
import style from "./cityForecast.module.scss";
import { DeleteFromList } from "../../../features/deleteFromList/ui/deleteFromList";
import { getCurrentDate } from "../../../shared/lib/date";
import { CityForecastList } from "../../../shared/ui/cityForecastList";

export const CityForecast: FC<CityForecastProps> = ({ cityForecast }) => {
  const iconUrl = `https://openweathermap.org/img/w/${cityForecast.weather?.[0]?.icon}.png`;

  const date = getCurrentDate();

  return (
    <div>
      <div className={style.cityForecast}>
        <CityHeader
          cityName={cityForecast.name}
          date={date}
          countryName={cityForecast.sys.country}
        />
        <CityWeather
          iconUrl={iconUrl}
          temperature={cityForecast.main.temp}
          description={cityForecast?.weather?.[0]?.description}
        />
        <WeatherMetrics
          metrics={{
            highestTemp: cityForecast.main.temp_max,
            lowestTemp: cityForecast.main.temp_min,
            wind: cityForecast.wind.speed,
            sunrise: cityForecast.sys.sunrise,
            sunset: cityForecast.sys.sunset,
            humidity: cityForecast.main.humidity,
          }}
        />
        <DeleteFromList id={cityForecast.foreCastId.toString()} />
      </div>
      <div>
        <CityForecastList forecast={cityForecast.forecast} />
      </div>
    </div>
  );
};
