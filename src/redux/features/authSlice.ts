import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (token: string) => {
    localStorage.setItem("igospel-user-token", token);
    return token;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("igospel-user-token");
});

interface AuthType {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthType = {
  token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticate.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
    });

    builder.addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.isAuthenticated = false;
    })
  },
});

export default authSlice.reducer;