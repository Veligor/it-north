import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar company={props.appState.navbarPage.company}/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile state={props.appState.profilePage} dispatch={props.dispatch}/>} />
          <Route path="/dialogs" element={<DialogsContainer state={props.appState.dialogPage} dispatch={props.dispatch}/>} />
        </Routes>
      </div>
    </div> 
  );
}

export default App;
