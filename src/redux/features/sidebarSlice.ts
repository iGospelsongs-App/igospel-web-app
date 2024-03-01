import { createSlice } from "@reduxjs/toolkit";

interface SidebarType {
  isOpen: boolean;
  isScroll: boolean;
}

const isMobile = window.innerWidth <= 768;

const initialState: SidebarType = {
  isOpen: !isMobile,
  isScroll: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setNavbarScroll: (state, action) => {
      state.isScroll = action.payload;
    },
    switchSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setNavbarScroll, switchSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
