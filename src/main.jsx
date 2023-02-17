import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import App from "./App";
import { logger } from "./middlewares";

import dataReducer from "./slices/dataSlice";
import uiReducer from "./slices/uiSlice";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger));

//const store = createStore(rootReducer, composeEnhancers);

const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
