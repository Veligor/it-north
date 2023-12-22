import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <div><NavLink to={path }className={`${s.dialog} ${s.active}`}>{props.name}</NavLink></div>
}

const Message = (props) => {
return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.human}>
        <DialogItem name="Vladimir" id="1" />
        <DialogItem name="Mariya" id="2" />
        <DialogItem name="Varvara" id="3" />
        <DialogItem name="Savva" id="4" />
        <DialogItem name="Nikolai" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi"/>
        <Message message="Hi are you"/>
        <Message message="Welcome"/>
        <Message message="Forever together"/>
        <Message message="leader"/>
      </div>
    </div>
  );
};
export default Dialogs;
