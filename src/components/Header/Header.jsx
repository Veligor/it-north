import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"
import {logout} from "./../Redux/auth-reducer"

const Header = (props) => {

  const dispatch = useDispatch()

    return  <header className={s.header}>
    <img src="https://w7.pngwing.com/pngs/1021/140/png-transparent-the-neat-company-scanner-small-business-company-logo-angle-company-text.png"></img>
    <div className={s.loginBlock}>
      { props.isAuth ? <div>{props.login} - <button onClick={() => dispatch(logout())}>logout</button></div>
      : <NavLink  to={"/login"} >Login</NavLink> }


     {/* <div><button onClick={dispatch(logout())}>logout</button></div> */}
      </div>
  </header>
}

export default Header;