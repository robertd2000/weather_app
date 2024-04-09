import axios from "axios";
import { CityAutocomplite } from "../types";

export const getCities = async (query: string): Promise<CityAutocomplite[]> => {
  const { data } = await axios.get(
    `https://autocomplete.travelpayouts.com/places2`,
    {
      params: {
        term: query,
        types: "city",
        locale: "ru",
      },
    }
  );

  return data;
};
