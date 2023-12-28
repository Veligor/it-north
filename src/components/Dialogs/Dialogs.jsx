import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let messageElement = React.createRef();

  let addMessage = () => {
    let text = messageElement.current.value;
    alert(text)
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
      <textarea ref={messageElement}></textarea>
      <div><button onClick={addMessage}>addMessage</button></div>
      </div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
