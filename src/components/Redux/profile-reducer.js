const ADD_POST = "ADD-POST";
const VALPOST = "VALPOST";

const profileReducer = (state, action) => {
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
