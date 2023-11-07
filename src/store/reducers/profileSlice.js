// import { createSlice } from "@reduxjs/toolkit";
// import {
//   fetchProfile,
//   updateProfile,
//   fetchStudentProfile,
// } from "@store/actions/profileAction";
// import { notify } from "@utils/functions";

// const initialState = {
//   profile: null,
//   profilePicture: null,
//   isLoading: false,
//   error: null,
// };

// export const profileSlice = createSlice({
//   name: "profile",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchProfile.pending.type]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchProfile.fulfilled.type]: (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.profile = action.payload;
//     },
//     [fetchProfile.rejected.type]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [updateProfile.pending.type]: (state) => {
//       state.isLoading = true;
//     },
//     [updateProfile.fulfilled.type]: (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.profile = { ...state.profile, ...action.payload };
//       notify("Profile updated successfully", "success");
//     },
//     [updateProfile.rejected.type]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [fetchStudentProfile.pending.type]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchStudentProfile.fulfilled.type]: (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.profile = {
//         ...action.payload.user,
//         profile_photo: action.payload.profile_pic,
//       };
//     },
//     [fetchStudentProfile.rejected.type]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export default profileSlice.reducer;
