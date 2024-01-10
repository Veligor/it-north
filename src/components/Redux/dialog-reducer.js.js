const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = { 
  dialogsData: [
    { name: "Vladimir", id: "1" },
    { name: "Mariya", id: "2" },
    { name: "Varvara", id: "3" },
    { name: "Savva", id: "4" },
    { name: "Nikolai", id: "5" },
  ],
  messagesData: [
    { send: "Hi", id: "1" },
    { send: "Hi are you", id: "2" },
    { send: "Welcome", id: "3" },
    { send: "SavForever together", id: "4" },
    { send: "leader", id: "5" },
  ],
  newMessageText: "hello"}

const dialogReducer = (state = initialState, action) => {
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
