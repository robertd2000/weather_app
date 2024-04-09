import { CityForecast } from "../../../entities/cityForecast";
import { ClearList } from "../../../features/clearList";
import { CityWeather } from "../../../shared/types";
import { Loader } from "../../../shared/ui/loader";
import { useCityList } from "../lib/hooks/useCityList";
import style from "./cityList.module.scss";

export const CityList = () => {
  const { cities, loading } = useCityList();
  return (
    <div style={{}}>
      <div>
        <ClearList />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div>
          {cities?.length ? (
            cities?.map((city: CityWeather) => {
              return <CityForecast key={city.foreCastId} cityForecast={city} />;
            })
          ) : (
            <h2 className={style.noData}>Нет данных</h2>
          )}
        </div>
      )}
    </div>
  );
};
