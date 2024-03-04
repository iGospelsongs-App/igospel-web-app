import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sidebarReducer from "../redux/features/sidebarSlice";
import authReducer from "../redux/features/authSlice";
import bgGradientColorReducer from "./features/bgGradientColorSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    bgColor: bgGradientColorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
