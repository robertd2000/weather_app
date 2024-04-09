export interface CityAutocomplite {
  id: string;
  type: string;
  code: string;
  name: string;
  country_code: string;
  country_name: string;
  state_code?: string;
  coordinates: Coordinates;
  index_strings: any[];
  weight: number;
  cases: Cases;
  country_cases: CountryCases;
  main_airport_name?: string;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Cases {
  vi: string;
  tv: string;
  su: string;
  ro: string;
  pr: string;
  da: string;
}

export interface CountryCases {
  vi: string;
  tv: string;
  su: string;
  ro: string;
  pr: string;
  da: string;
}
