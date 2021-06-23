import { createStore, combineReducers } from "redux";
import { userReducer } from "./User/UserReducer";

const reducer = combineReducers({
  userDetails: userReducer,
});
const store = createStore(reducer);

export default store;
