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
        <div>

        <div>{messagesElements}</div>
        <div className={s.blockTextArea}>
        <textarea value={props.dialogPage.newMessageText} onChange={onNewMessageChange} className={s.textArea}></textarea>
        <button  onClick={onSendMessageClick} className={s.btn}>addMessage</button>
        </div>

        </div>
       
        </div>
    </div>
  );
};
export default Dialogs;
