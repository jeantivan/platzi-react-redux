import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemonDetails, fetchPokemons } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
};

export const getPokemonsWithDetails = createAsyncThunk(
  "data/getPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const results = await fetchPokemons();
    const pokemonsDetailed = await Promise.all(
      results.map((pokemon) => fetchPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons(state, action) {
      state.pokemons = action.payload;
    },
    setFavoritePokemon(state, action) {
      const currPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
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
