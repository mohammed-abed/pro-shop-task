import {
  GET_PROFILE_FAILED,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
} from "./userTypesConstants";
import axios from "axios";

/*
export const loginAction = (userData) => {
  return {
    payload: userData,
    type: USER_LOGIN_SUCCESS,
  };
};
*/
export const loginAction = (values, history) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });

    try {
      const response = await axios.post("/users/login", values);
      console.log(response);

      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_LOGIN_SUCCESS,
      });

      history.push("/");
    } catch (e) {
      console.log(e.response);
      dispatch({
        payload: e.response.data.message,
        type: USER_LOGIN_FAILED,
      });
    }
  };
};

export const registerAction = (values, history) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REGISTER_START,
    });

    try {
      const response = await axios.post("/users", values);

      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_REGISTER_SUCCESS,
      });

      history.push("/");
    } catch (e) {
      console.log(e.response);
      dispatch({
        payload: e.response.data.message,
        type: USER_REGISTER_FAILED,
      });
    }
  };
};

export const logoutAction = () => {
  return {
    payload: null,
    type: USER_LOGOUT_SUCCESS,
  };
};
export const getProfileAction = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_PROFILE_START,
    });
    try {
      const response = await axios.get("/users/login");
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e.response);
      dispatch({
        payload: e.response.data.message,
        type: GET_PROFILE_FAILED,
      });
    }
  };
};
