import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer.js";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogPage: dialogReducer,
   navbarPage: navbarReducer
});

let store = createStore(reducers);

window.store = store;

export default store; 
