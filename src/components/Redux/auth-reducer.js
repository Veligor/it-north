import { authApi } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";


let initialState = {
 id: null,
 login: null,
 email: null,
 isAuth: false
}; 

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: return {
      ...state, ...action.box, isAuth: true
    }
     
      

    default:
      return state;
  }
};

export default authReducer;

export let setAuthUserData = (id,login, email) => {
  return {
    type: SET_USER_DATA, box: { id, login, email }
  };
};

export const getAuthUserDataThunkCreator = () => (dispatch) => {
  return  authApi.me().then((response) => { 
    if(response.data.resultCode === 0) {
     let {id, login, email} = response.data.data
    dispatch(setAuthUserData(id,login, email))
    }
  });
}
 