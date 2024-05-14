import { authApi, securityApi } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA_URL = "GET-CAPTCHA-URL"

let initialState = {
 id: null, 
 login: null,
 email: null,
 isAuth: false,
 captcha: null
}; 

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_USER_DATA: 
    case GET_CAPTCHA_URL:
     
    return {
      ...state, ...action.payload
    }


    // case GET_CAPTCHA_URL: return {
    //   ...state, captcha: action.captcha,
    // }
     
      

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
export let setCaptchaUrl = (captcha) => {

  return {
    type: GET_CAPTCHA_URL, payload: {captcha} 
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
export const login = (email, password, rememberMe, captcha ) => (dispatch) => {
  
  return  authApi.login(email, password, rememberMe, captcha).then((response) => { 
    if(response.data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator())
    } else if (response.data.resultCode === 10) {
      
      dispatch(getCaptchUrl())
    }
  });
}
export const getCaptchUrl = () => (dispatch) => {
  return  securityApi.getCaptchaUrl().then((response) => {   
      const captchaUrl = response.data.url
      dispatch(setCaptchaUrl(response.data.url))
  });
}
// export const getCaptchaUrl = () => async (dispatch) => {
//   let response = await securityApi.getCaptchaUrl();
//   const captchaUrl = response.data.url;
//   dispatch(setCaptchaUrl(captchaUrl));
// };
export const logout = () => (dispatch) => {
  return  authApi.logout()
  .then((response) => { 
    if(response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  });
}
 