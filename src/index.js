import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let dialogsData = [
  { name: "Vladimir", id: "1" },
  { name: "Mariya", id: "2" },
  { name: "Varvara", id: "3" },
  { name: "Savva", id: "4" },
  { name: "Nikolai", id: "5" },
];
let messagesData = [
  { send: "Hi", id: "1" },
  { send: "Hi are you", id: "2" },
  { send: "Welcome", id: "3" },
  { send: "SavForever together", id: "4" },
  { send: "leader", id: "5" },
];

let postData = [
  { id: 1, message: "Hi, how are you?", like: "1" },
  { id: 2, message: "Your clean car", like: "2" },
  { id: 3, message: "Welcome", like: "3" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        dialogsData={dialogsData}
        messagesData={messagesData}
        postData={postData}
      />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
