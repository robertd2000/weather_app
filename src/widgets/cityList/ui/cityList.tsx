import { CityForecast } from "../../../entities/cityForecast";
import { useCityList } from "../lib/hooks/useCityList";

export const CityList = () => {
  const { cities } = useCityList();
  return (
    <div>
      {cities.map((city) => {
        return <CityForecast cityForecast={city} />;
      })}
    </div>
  );
};