import "antd/dist/reset.css";
import "./App.css";

import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Row, Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

import pokedux from "./assets/pokedux.svg";
import { getPokemonsWithDetails } from "./slices/dataSlice";
import Skeletons from "./components/Skeletons";

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(getPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Row justify="center" style={{ margin: "3rem" }}>
        <Col xs={24} md={12}>
          <img src={pokedux} alt="Pokedux" />
        </Col>
      </Row>

      <Row justify="center" style={{ margin: "3rem" }}>
        <Col flex="auto" md={12} lg={14}>
          <Searcher />
        </Col>
      </Row>

      {loading ? <Skeletons /> : <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default App;
