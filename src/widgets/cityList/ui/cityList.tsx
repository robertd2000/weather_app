import { CityForecast } from "../../../entities/cityForecast";
import { ClearList } from "../../../features/clearList";
import { CityWeather } from "../../../shared/types";
import { useCityList } from "../lib/hooks/useCityList";

export const CityList = () => {
  const { cities } = useCityList();
  return (
    <div style={{}}>
      <div>
        <ClearList />
      </div>

      <div>
        {cities?.map((city: CityWeather) => {
          return <CityForecast cityForecast={city} />;
        })}
      </div>
    </div>
  );
};
