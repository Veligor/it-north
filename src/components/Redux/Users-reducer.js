const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      

    case SEND_MESSAGE:
     

    default:
      return state;
  }
};

export default usersReducer;

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
