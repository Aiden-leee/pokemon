import { configureStore } from "@reduxjs/toolkit";
import pocketSlice from "./pocket-slice";
import pokemonsSlice from "./pokemons-slice";

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
    myPocket: pocketSlice.reducer,
  },
});

export default store;
