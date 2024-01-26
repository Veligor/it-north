import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer.js";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer,
   navbarPage: navbarReducer,
   usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store; 
