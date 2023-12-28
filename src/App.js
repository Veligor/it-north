import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar company={props.appState.navbarPage.company}/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile state={props.appState.profilePage} addPost={props.addPost}/>} />
          <Route path="/dialogs" element={<Dialogs state={props.appState.dialogPage}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
