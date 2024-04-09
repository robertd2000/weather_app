export interface WeatherMetricsProps {
  metrics: {
    highestTemp: number;
    lowestTemp: number;
    wind: number;
    sunrise: number;
    sunset: number;
    humidity: number;
  };
}
