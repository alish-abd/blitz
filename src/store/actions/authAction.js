import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@api/services";

const obtainToken = createAsyncThunk(
    "obtainToken",
    async (params, thunkAPI) => {
      try {
        const response = await AuthService.obtainToken(params);
        console.log(response);
        localStorage.setItem("access_token", response.access);
        return response;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export { obtainToken };
