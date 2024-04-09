export interface WeatherMetricsProps {
  metrics: {
    highestTemp: number;
    lowestTemp: number;
    wind: number;
    sunrise: string;
    sunset: string;
    humidity: number;
  };
}
