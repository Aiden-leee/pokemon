import { createSlice } from "@reduxjs/toolkit";

const pocketSlice = createSlice({
  name: "pocket",
  initialState: {
    myPokemons: [],
    totalPokemons: 0,
    changed: false,
  },
  reducers: {
    replaceState(state, action) {
      state.myPokemons = action.payload.myPokemons;
      state.totalPokemons = action.payload.totalPokemons;
    },
    catchPokemon(state, action) {
      const newPokemon = action.payload;
      const existPokemon = state.myPokemons.find(
        (target) => target.id === newPokemon.id
      );
      state.totalPokemons++;
      state.changed = true;
      if (!existPokemon) {
        state.myPokemons.push({
          id: newPokemon.id,
          name: newPokemon.name,
          quantity: 1,
          image: newPokemon.image,
          geners: newPokemon.geners,
          characters: newPokemon.characters,
          weight: newPokemon.weight,
          height: newPokemon.height,
          types: newPokemon.types,
        });
      } else {
        existPokemon.quantity++;
      }
      //
    },
    abandonPokemon(state, action) {
      //
    },
  },
});

export const pocketActions = pocketSlice.actions;

export default pocketSlice;
