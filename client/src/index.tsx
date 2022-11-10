import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";

import { store } from "./redux/store";
import { GlobalStyle } from "./styles/global.styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App />
  </Provider>
);
