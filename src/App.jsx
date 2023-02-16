import "antd/dist/reset.css";
import "./App.css";

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

import pokedux from "./assets/pokedux.svg";
import { fetchPokemons } from "./api";
import { setPokemons as setPokemonsAction } from "./actions";

function App({ pokemons, setPokemons }) {
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

const mapStateToProps = (state) => ({ pokemons: state.pokemons });

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
