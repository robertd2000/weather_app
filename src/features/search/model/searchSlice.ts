import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "./searchThunk";
import { initialState } from "./constants";

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.cities = [action.payload, ...state.cities];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? null;
      }),
});

export default searchSlice.reducer;
