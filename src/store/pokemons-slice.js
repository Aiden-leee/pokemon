import { createSlice } from "@reduxjs/toolkit";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: { pokemons: [] },
  reducers: {
    //
    initPokemons(state, action) {
      state.pokemons = action.payload;
    },
  },
});

export default pokemonsSlice;
