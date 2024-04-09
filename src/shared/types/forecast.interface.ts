export interface ForecastItemType {
  dt: number;
  main: {
    temp: number;
    pressure: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  dt_txt: string;
}

export interface Forecast {
  list: ForecastItemType[];
}
