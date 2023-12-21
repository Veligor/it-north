import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.human}>
        <div className={`${s.dialog} ${s.active}`}><NavLink to="/dialogs/1">Vladimir</NavLink></div>
        <div className={s.dialog}><NavLink to="/dialogs/2">Mariya</NavLink></div>
        <div className={s.dialog}><NavLink to="/dialogs/3">Savva</NavLink></div>
        <div className={s.dialog}><NavLink to="/dialogs/4">Varvara</NavLink></div>
        <div className={s.dialog}><NavLink to="/dialogs/5">Nikolai</NavLink></div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hi are you</div>
        <div className={s.message}>Welcome</div>
        <div className={s.message}>Forever together</div>
        <div className={s.message}>leader</div>
      </div>
    </div>
  );
};
export default Dialogs;
