import { userApi, profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const VALPOST = "VALPOST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  newPostText: "sunny",
  postData: [
    { id: 1, message: "Hi, how are you?", like: "5" },
    { id: 2, message: "Your clean car", like: "12" },
    { id: 3, message: "Welcome", like: "6" },
  ],
  profile: null,
  status: ""
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
    case VALPOST:
      return {
        ...state,
        newPostText: action.text
      }
      case SET_USER_PROFILE: return {
        ...state, profile: action.profile
      }
      case SET_STATUS: {
        return {...state, status: action.status}
      }
    
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
export let setStatus = (status) => {
  return {
    type: SET_STATUS, status
  };
};
export let upDataNewPostTextActionCreator = (text) => {
  return {
    type: VALPOST,
    text,
  };
};
export let setUserProfile = (profile) => {
return {type: SET_USER_PROFILE, profile}
}

export const getUserProfileCreator = (profileId) => (dispatch) => {
  
  return   userApi.getProfile(profileId)
  .then((response) => {
    dispatch(setUserProfile(response.data));
  })
}
export const getStatusCreator = (profileId) => (dispatch) => {
  
  return   profileApi.getStatus(profileId)
  .then((response) => {
    dispatch(setStatus(response.data));
  })
}
export const upDateStatusCreator = (status) => (dispatch) => {
  
  return   profileApi.updateStatus(status)
  .then((response) => {
    if(response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
    
  })
}