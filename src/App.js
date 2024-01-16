import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Users from "./components/Users/Users";

function App(props) {
  
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div> 
  );
}

export default App;
