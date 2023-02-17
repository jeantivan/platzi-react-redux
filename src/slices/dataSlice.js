import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons(state, action) {
      state.pokemons = action.payload;
    },
    setFavoritePokemon(state, action) {
      const currPokemonIndex = state.findIndex(
        (pokemon) => pokemon.get("id") === action.payload.pokemonId
      );

      if (currPokemonIndex >= 0) {
        state.pokemons[currPokemonIndex].favorite =
          !state.pokemons[currPokemonIndex].favorite;
      }
    },
  },
});

export const { setFavoritePokemon, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
