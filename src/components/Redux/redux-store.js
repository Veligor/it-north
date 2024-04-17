import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer.js";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
//import thunkMiddleware from "redux-thunk";
import { thunk } from 'redux-thunk'

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer,
   navbarPage: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store; 
