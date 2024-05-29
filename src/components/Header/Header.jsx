import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"
import {logout} from "./../Redux/auth-reducer"
import { SlSocialFacebook } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";
import { connect, useSelector } from "react-redux";
import { CiLogout } from "react-icons/ci";

const Header = (props) => {

  const dispatch = useDispatch();
  //  const usePhoto = useSelector((state) =>  state.profilePage.profile.photos.large)
 
    return (
    <header className={s.header}>
 <div className={s.firstBlock}>

 <SlSocialFacebook className={s.img}/>
 <b className={s.title}>Way of the Samurai</b>

 </div>
    <div className={s.loginBlock}>
      { props.isAuth ? <div><span className={s.loginNeme}>{props.login}</span>    
      
      <button className={s.button} onClick={() => dispatch(logout())}> <IoIosLogOut /></button>
      </div>
      : <button className={s.button}><NavLink className={s.button} to={"/login"} ><CiLogout/></NavLink></button> }


     
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