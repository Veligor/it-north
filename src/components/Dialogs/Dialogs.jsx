import React from "react";
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

  let dialogsElements = props.state.dialogsData.map((n) => (
    <DialogItem name={n.name} id={n.id} />
  ));
  let messagesElements = props.state.messagesData.map((m) => (
    <Message send={m.send} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.human}>{dialogsElements} 
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
        <textarea value={props.state.newMessageText} onChange={onNewMessageChange}></textarea>
        </div>
        <div><button onClick={onSendMessageClick}>addMessage</button></div>
        </div>
    </div>
  );
};
export default Dialogs;
