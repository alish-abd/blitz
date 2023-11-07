// import { createSlice } from "@reduxjs/toolkit";
// import {
//   fetchCities,
// } from "@store/actions/directoryAction";

// const initialState = {
//   cities: [],
//   isLoading: false,
//   error: null,
// };

// export const directorySlice = createSlice({
//   name: "directory",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchCities.pending.type]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchCities.fulfilled.type]: (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.cities = action.payload.results;
//     },
//     [fetchCities.rejected.type]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export default directorySlice.reducer;
