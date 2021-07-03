import { PLACE_ORDER_START } from "./orderTypes";
import axios from "axios";

export const placeOrder = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLACE_ORDER_START,
    });

    const { data } = axios.post("");
  } catch (e) {}
};
