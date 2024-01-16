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
      return {
        ...state,
        newPostText: '',
        postData: [...state.postData, newPost ]
      }
      // let copyState = {...state}
      // copyState.postData.push(newPost);
      // copyState.newPostText = "";
   
    case VALPOST:
      return {
        ...state,
        newPostText: action.text
      }

      // let newState = {...state}
      // newState.newPostText = action.text;
     
    
    default:
      return state;
  }

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
