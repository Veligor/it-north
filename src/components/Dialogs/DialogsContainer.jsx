import React from "react";
import {updateNewMessageBodyCreator, sendMessageCreator} from "../Redux/dialog-reducer.js.js"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  
  
  let newMessageChange = (body) => {
    props.dispatch(updateNewMessageBodyCreator(body))
  }
  let sendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  }

 
  return (
    <Dialogs newMessageChange={newMessageChange} sendMessageClick={sendMessageClick} state={props.state}/>
  );
};
export default DialogsContainer;