import "./PokemonList.css";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemons.name} name={pokemon.name} />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
