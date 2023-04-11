import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isMobile: false,
  },
  reducers: {
    checkMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
