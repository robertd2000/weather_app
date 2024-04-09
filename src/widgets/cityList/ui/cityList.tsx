import { CityForecast } from "../../../entities/cityForecast";
import { CityWeather } from "../../../shared/types";
import { useCityList } from "../lib/hooks/useCityList";

export const CityList = () => {
  const { cities } = useCityList();
  return (
    <div>
      {cities?.map((city: CityWeather) => {
        return <CityForecast cityForecast={city} />;
      })}
    </div>
  );
};
