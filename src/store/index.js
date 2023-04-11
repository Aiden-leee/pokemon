import { configureStore } from "@reduxjs/toolkit";
import pocketSlice from "./pocket-slice";
import uiSlice from "./ui-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    myPocket: pocketSlice.reducer,
    ui: uiSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
