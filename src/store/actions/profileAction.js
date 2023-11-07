// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ProfileService } from "@api/services";
// import { findError, notify } from "@utils/functions";

// const fetchProfile = createAsyncThunk("profile/fetch", async (id, thunkAPI) => {
//   try {
//     return await ProfileService.fetchProfile(id);
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// });

// const updateProfile = createAsyncThunk(
//   "profile/update",
//   async ({ id, data }, thunkAPI) => {
//     try {
//       return await ProfileService.updateProfile(id, data);
//     } catch (e) {
//       notify(findError(e.response.data), "error");
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// const fetchStudentProfile = createAsyncThunk(
//   "profile/fetchStudent",
//   async (id, thunkAPI) => {
//     try {
//       return await ProfileService.fetchStudentProfile(id);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export { fetchProfile, updateProfile, fetchStudentProfile };
