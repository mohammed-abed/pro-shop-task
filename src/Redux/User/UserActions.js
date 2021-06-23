import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "./ConstTypeAction";

export const loginAction = (userData) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: userData,
  };
};

export const logoutAction = (userData) => {
  return {
    type: USER_LOGOUT_SUCCESS,
    payload: userData,
  };
};
