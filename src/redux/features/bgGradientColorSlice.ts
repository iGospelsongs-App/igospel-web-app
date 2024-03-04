import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: 291317,
};

const bgGradientColorSlice = createSlice({
  name: "bgColor",
  initialState,
  reducers: {
    changeBgColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {changeBgColor} = bgGradientColorSlice.actions;
export default bgGradientColorSlice.reducer;