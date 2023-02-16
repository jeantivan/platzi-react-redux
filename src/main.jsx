import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import App from "./App";

import { pokemonsReducer } from "./reducers/pokemons";

const store = createStore(
  pokemonsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
