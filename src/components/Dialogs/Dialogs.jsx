import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <div><NavLink to={ path }className={`${s.dialog} ${s.active}`}>{props.name}</NavLink></div>
}

const Message = (props) => {
return <div className={s.message}>{props.message}</div>
}
let dialogsData = [
  {name: "Vladimir", id: "1"},
  {name:"Mariya", id:"2"},
  {name:"Varvara", id:"3"},
  {name:"Savva", id:"4"},
  {name:"Nikolai", id:"5"}
]
let messagesData = [
  {message: "Hi", id: "1"},
  {message:"Hi are you", id:"2"},
  {message:"Welcome", id:"3"},
  {message:"SavForever together", id:"4"},
  {message:"leader", id:"5"}
]
let dialogsElements = dialogsData.map(n => <DialogItem name={n.name} id={n.id} />);
let messagesElements = messagesData.map(m => <Message message={m.message} />);

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.human}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};
export default Dialogs;
