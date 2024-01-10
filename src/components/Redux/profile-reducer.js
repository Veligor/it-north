const ADD_POST = "ADD-POST";
const VALPOST = "VALPOST";


let initialState = {
  newPostText: "sunny",
  postData: [
    { id: 1, message: "Hi, how are you?", like: "5" },
    { id: 2, message: "Your clean car", like: "12" },
    { id: 3, message: "Welcome", like: "6" },
  ]
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 18,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      break;
    //return state
    case VALPOST:
      state.newPostText = action.text;
      break;
    //return state
    default:
      return state;
  }

  return state;
};
export default profileReducer;

export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export let upDataNewPostTextActionCreator = (text) => {
  return {
    type: VALPOST,
    text,
  };
};
