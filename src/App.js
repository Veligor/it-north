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
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile postData={props.postData}/>} />
          <Route path="/dialogs" element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
