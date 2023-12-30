let renderThree = () => {
  console.log("jfj");
};

let state = {
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
};
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 18,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  renderThree(state);
};
export const valPost = (newText) => {
  //alert("Hey")
  state.profilePage.newPostText = newText;
  renderThree(state);
};
export const subscribe = (observer) => {
  renderThree = observer;
};
export default state;
