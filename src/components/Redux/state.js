import dialogReducer from "./dialog-reducer.js";
import profileReducer from "./profile-reducer.js";

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
      newMessageText: "hello",
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this.renderThree(this._state);
  },
};

export default store;
