import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLogined: false,
  },
  reducers: {
    isCurrentUser(state, action) {
      if (action.payload) {
        state.user = action.payload;
        state.isLogined = true;
      } else {
        state.user = null;
        state.isLogined = false;
      }
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
