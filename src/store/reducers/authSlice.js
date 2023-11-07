import { createSlice } from "@reduxjs/toolkit";

import { obtainToken } from "@store/actions/authAction";

const initialState = {
//   cities: [],
  isAuthCompleted: false,
  isAuthLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [obtainToken.pending.type]: (state) => {
      state.isAuthLoading = true;
    },
    [obtainToken.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.isAuthCompleted = true;
    //   state.cities = action.payload.results;
    },
    [obtainToken.rejected.type]: (state, action) => {
      state.isAuthLoading = false;
      state.error = action.payload;
      state.isAuthCompleted = false

    },
  },
});

export default authSlice.reducer;
