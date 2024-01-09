const ADD_POST = "ADD-POST";
const VALPOST = "VALPOST";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const  SEND_MESSAGE = "SEND-MESSAGE"

let store = {
  renderThree() {
    console.log("jfj");
  },

  _state: {
    dialogPage: {
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
      newMessageText: "hello"
    },
    profilePage: {
      newPostText: "sunny",
      postData: [
        { id: 1, message: "Hi, how are you?", like: "5" },
        { id: 2, message: "Your clean car", like: "12" },
        { id: 3, message: "Welcome", like: "6" },
      ],
    },
    navbarPage: {
      company: [
        { name: "Савва Горбачев", id: "1" },
        { name: "Машулька", id: "2" },
        { name: "Варенька Горбачева", id: "3" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.renderThree = observer;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      like: 18,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this.renderThree(this.state);
  },
  valPost(newText) {
    this._state.profilePage.newPostText = newText;
    this.renderThree(this._state);
  },
  
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 18,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this.renderThree(this.state);
    } else if (action.type === VALPOST) {
      this._state.profilePage.newPostText = action.text;
      this.renderThree(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogPage.newMessageText = action.body;
      this.renderThree(this._state);
    } else if(action.type === SEND_MESSAGE) {
      let body = this._state.dialogPage.newMessageText;
      this._state.dialogPage.messagesData.push({ send: body, id: 6 })
      this._state.dialogPage.newMessageText = "";
      this.renderThree(this._state)
    }
  },
};
export let addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export  let upDataNewPostTextActionCreator = (text) => {
  return {
    type: VALPOST, text
  }
}
export  let sendMessageCreator = (text) => {
  return {
    type: SEND_MESSAGE
  }
}
export  let updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY, body
  }
}
export default store;
