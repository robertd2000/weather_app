import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "../../features/search";
import { localStorageController } from "../../shared/lib/localStorage/localStorage.controller";
import { CityWeather } from "../../shared/types";
import { SearchState } from "../../features/search/model/types";

const cities = localStorageController.getItem<CityWeather[]>("cities") || [];

const store = configureStore({
  preloadedState: {
    search: {
      cities,
      error: null,
      loading: false,
    } as SearchState,
  },
  reducer: {
    search: searchReducer,
  },
});

store.subscribe(() => {
  localStorageController.setItem(
    "cities",
    JSON.stringify(store.getState().search.cities)
  );
});
export default store;
