import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./components/Redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));
 function renderThree(state) {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App appState={store.getState()} dispatch={store.dispatch.bind(store)}  />
      </BrowserRouter>
    </React.StrictMode>
  );
}
renderThree(store._state);
store.subscribe(renderThree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
