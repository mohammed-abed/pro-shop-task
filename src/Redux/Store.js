import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./User/userReducer";
import thunk from "redux-thunk";
import { guestReducers } from "./Guest/guestReduser";

/*
const reducers = combineReducers({
  userDetails: userReducer,
});

const store = createStore(reducers);

export default store;
*/
const reducers = combineReducers({
  userDetails: userReducer,
  guestState: guestReducers,
});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  userDetails: {
    user: userFromLocalStorage,
  },
};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
