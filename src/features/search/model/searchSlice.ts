import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "./searchThunk";
import { initialState } from "./constants";

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    deleteFromList(state, { payload }) {
      state.cities = state.cities.filter((city) => city.foreCastId != payload);
    },
    clearList(state) {
      state.cities = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        console.log("action", action.payload);

        const foreCastId = Math.floor(Math.random() * 10000);
        state.cities = [
          {
            ...action.payload.weather,
            forecast: action.payload.forecast.list,
            foreCastId,
          },
          ...state.cities,
        ];

        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        console.log("action", action.payload, action.error);

        state.loading = false;
        if (action?.error?.message?.includes("404")) {
          console.log("404");

          state.error = { message: "Город не найден", cod: "404" };
        } else {
          state.error = action.payload ?? null;
        }
      }),
});

export const { deleteFromList, clearList } = searchSlice.actions;
export default searchSlice.reducer;
