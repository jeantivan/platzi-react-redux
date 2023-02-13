import "antd/dist/reset.css";
import "./App.css";

import { useEffect, useState } from "react";

import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

import pokedux from "./assets/pokedux.svg";
import { fetchPokemons } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const getPokemons = async () => {
      const results = await fetchPokemons();
      setPokemons(results);
    };

    getPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={pokedux} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
