import React from "react";
import { render } from "react-dom";
import "normalize.css";
import { FirebaseContext } from "./context/context";
import App from "./app";
import { GlobalStyle } from './global-styles';
import {firebase} from './Lib/firebase.prod'


render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
