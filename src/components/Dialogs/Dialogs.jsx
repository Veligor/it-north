import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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
