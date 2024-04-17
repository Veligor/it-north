import { connect } from "react-redux";
import {updateNewMessageBodyCreator, sendMessageCreator} from "../Redux/dialog-reducer.js.js"
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "./../hoc/withAuthRedirect";
import { compose } from "redux";

let mapDispatchToProps = (dispatch) => {
  return {
    newMessageChange: (body) => {dispatch(updateNewMessageBodyCreator(body))},
    sendMessageClick: () => {dispatch(sendMessageCreator())}
}
}

//let AuthRedirectComponent = withAuthRedirect(Dialogs)


let mapStateToProps = (state) => {
return {
  dialogPage: state.dialogPage,
}
}

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
  ) (Dialogs );