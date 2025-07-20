import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheresults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheresults } = searchSlice.actions;
export default searchSlice.reducer;
