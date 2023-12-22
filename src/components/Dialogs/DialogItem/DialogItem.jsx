import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialog.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <div><NavLink to={ path }className={`${s.dialog} ${s.active}`}>{props.name}</NavLink></div>
}


export default DialogItem;
