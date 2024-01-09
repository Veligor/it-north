const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageText = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageText;
      state.messagesData.push({ send: body, id: 6 });
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export default dialogReducer;

export let sendMessageCreator = (text) => {
  return {
    type: SEND_MESSAGE,
  };
};
export let updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body,
  };
};
