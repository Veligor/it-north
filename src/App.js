import "./App.css";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/usersContainer";
import News from "./components/News/News"
import Login from "./components/Login/Login";
import { useEffect } from "react";
import {initializeApp} from "./components/Redux/app-reducer"
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./components/hhh/Preloader";

function App(props) {

 let iditialiazed = useSelector((state) => state.app.iditialiazed)
 let dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeApp())
  }, [iditialiazed])
  
if(!iditialiazed) {
  return <Preloader />
}

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Routes>
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/profile/:profileId" element={<ProfileContainer />} />
        <Route path="/dialogs" element={<DialogsContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </div> 
  );
}

export default App;
