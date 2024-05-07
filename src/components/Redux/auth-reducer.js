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
      ...state, ...action.payload
    }
     
      

    default:
      return state;
  }
};

export default authReducer;

export let setAuthUserData = (id,login, email, isAuth) => {
  return {
    type: SET_USER_DATA, payload: { id, login, email, isAuth }
  };
}; 

export const getAuthUserDataThunkCreator = () => (dispatch) => {
  
  return  authApi.me()
  .then((response) => { 
    if(response.data.resultCode === 0) {
     let {id, login, email} = response.data.data
    dispatch(setAuthUserData(id, login, email, true))
    }
  });
}
export const login = (email, password, rememberMe ) => (dispatch) => {
  
  return  authApi.login(email, password, rememberMe).then((response) => { 
    if(response.data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator())
    }
  });
}
export const logout = () => (dispatch) => {
  return  authApi.logout()
  .then((response) => { 
    if(response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  });
}
 