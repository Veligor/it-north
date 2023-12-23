import React from "react";
import s from "./../Dialog.module.css";

const Message = (props) => {
  return <div className={s.message}>{props.send}</div>;
};

export default Message;
