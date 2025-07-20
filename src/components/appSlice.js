import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    showdescription: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    toggledes: (state) => {
      state.showdescription = !state.showdescription;
    },
  },
});
export const { toggleMenu, closeMenu, toggledes } = appSlice.actions;
export default appSlice.reducer;
