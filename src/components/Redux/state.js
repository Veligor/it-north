import { renderThree } from "../../render.js";

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
    ]
  }
};


export let express = () => {
  alert("Hey")
}
export default state;

export let addPost = (postMessage) => {
  let newPost = {
    id: 5, 
    message: postMessage,
    like: 18
  }
  state.profilePage.postData.push(newPost)
  renderThree(state);
}