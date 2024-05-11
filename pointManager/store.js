import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./redux/reducer/rootReducer";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
