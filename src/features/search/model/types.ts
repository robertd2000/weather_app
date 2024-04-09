import { CityWeather, RejectedDataType } from "../../../shared/types";

export interface SearchState {
  cities: CityWeather[];
  loading: boolean;
  error: RejectedDataType | null;
}

export interface SearchQuery {
  query: string;
}
