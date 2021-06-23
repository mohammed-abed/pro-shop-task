import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "./ConstTypeAction";

export const userReducer = (
  initialState = {
    user: {
      _id: "",
      name: "",
      email: "",
      token: "",
    },
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        user: action.payload,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        user: initialState,
      };
    default:
      return initialState;
  }
};
