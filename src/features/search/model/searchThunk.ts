import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchQuery } from "./types";
import {
  CityWeather,
  ErrorType,
  RejectedDataType,
} from "../../../shared/types";
import { getCityWeather } from "../../../shared/api/weatherCity.api";

export const fetchSearch = createAsyncThunk<
  CityWeather,
  SearchQuery,
  { readonly rejectValue: RejectedDataType }
>("cities/fetchSearch", ({ query }, thunkAPI) => {
  try {
    const response = getCityWeather(query);
    return response;
  } catch (err: unknown) {
    const knownError = err as ErrorType;

    return thunkAPI.rejectWithValue({
      message: knownError.message,
      cod: knownError.response?.status as string,
    });
  }
});
