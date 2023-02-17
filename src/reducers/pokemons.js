import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: true,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case SET_FAVORITE:
      let newPokemons = [...state.pokemons];

      const currPokemonIndex = newPokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );

      if (currPokemonIndex < 0) return state;

      newPokemons[currPokemonIndex].favorite =
        !newPokemons[currPokemonIndex].favorite;

      return {
        ...state,
        pokemons: newPokemons,
      };

    default:
      return state;
  }
};
