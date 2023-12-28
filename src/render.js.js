import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//import state from "./components/Redux/state";
import { addPost } from "./components/Redux/state";

//addPost("Hello")

export function renderThree(state)  {
  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App appState={state} addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>
);
}
