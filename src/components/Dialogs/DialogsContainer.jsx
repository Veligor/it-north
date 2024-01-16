import React from "react";
import { connect } from "react-redux";
import {updateNewMessageBodyCreator, sendMessageCreator} from "../Redux/dialog-reducer.js.js"
import Dialogs from "./Dialogs";

let mapDispatchToProps = (dispatch) => {
  return {
    newMessageChange: (body) => {dispatch(updateNewMessageBodyCreator(body))},
    sendMessageClick: () => {dispatch(sendMessageCreator())}
}
}

let mapStateToProps = (state) => {
return {
  dialogPage: state.dialogPage
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;