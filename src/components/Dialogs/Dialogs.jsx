import React from "react";
import { Navigate } from "react-router-dom";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  
  
  let onNewMessageChange = (event) => {
    let body = event.target.value
    props.newMessageChange(body);
  }
  let onSendMessageClick = () => {
    props.sendMessageClick()
  }

  let dialogsElements = props.dialogPage.dialogsData.map((n) => (
    <DialogItem name={n.name} id={n.id} key={n.id}/>
  ));
  let messagesElements = props.dialogPage.messagesData.map((m) => (
    <Message send={m.send} key={m.id}/>
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.human}>{dialogsElements} 
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
        <textarea value={props.dialogPage.newMessageText} onChange={onNewMessageChange}></textarea>
        </div>
        <div><button onClick={onSendMessageClick}>addMessage</button></div>
        </div>
    </div>
  );
};
export default Dialogs;
