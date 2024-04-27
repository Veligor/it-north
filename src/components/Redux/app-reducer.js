import { getAuthUserDataThunkCreator } from "./auth-reducer"

const SET_INITIALIZED = "SET_INITIALIZED";


let initialState = {
 iditialiazed: false,
 
}; 

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
       return {
      ...state, iditialiazed: true
    }
    
    default:
      return state;
  }
};

export default appReducer;

export let initializedSuccess = () => {
  return {
    type: SET_INITIALIZED
  };
};

export const initializeApp = () => (dispatch) => {
let promise = dispatch(getAuthUserDataThunkCreator())

Promise.all([promise])
.then(() => {
  dispatch(initializedSuccess())
})


}
