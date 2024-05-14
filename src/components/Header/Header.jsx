import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"
import {logout} from "./../Redux/auth-reducer"

const Header = (props) => {

  const dispatch = useDispatch()

    return (
    <header className={s.header}>
    <img className={s.img} src="https://logos-marques.com/wp-content/uploads/2021/03/VK-Logo-2016.png"></img><b className={s.title}>ВКОНТАКТЕ</b>
    <div className={s.loginBlock}>
      { props.isAuth ? <div>{props.login} - <button className={s.button} onClick={() => dispatch(logout())}>Выйти</button></div>
      : <button className={s.button}><NavLink className={s.button} to={"/login"} >Войти</NavLink></button> }


     
      </div>
  </header>
  // <div className={s.header}>
  //   <div className={s.one}>1</div>
  //   <div className={s.two}>2</div>
  //   <div className={s.three}>3</div>
  // </div>
    )
}

export default Header;