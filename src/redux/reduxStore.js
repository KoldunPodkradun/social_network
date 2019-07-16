import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./userReducer";

let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;