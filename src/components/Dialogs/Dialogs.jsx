import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((n) => (
    <DialogItem name={n.name} id={n.id} />
  ));
  let messagesElements = props.messagesData.map((m) => (
    <Message send={m.send} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.human}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
