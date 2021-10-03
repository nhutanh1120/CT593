import axios from "axios";
import { apiUrl } from "./../../constants";
import ACTIONS from "./../../constants/redux";

export const dispatchLogin = () => {
  return {
    type: ACTIONS.LOGIN,
  };
};

export const fetchUser = async (token) => {
  const res = await axios.get(apiUrl + "/profile/info", {
    headers: { Authorization: "Bearer " + token },
  });
  return res;
};

export const dispatchGetUser = (res) => {
  return {
    type: ACTIONS.GET_USER,
    payload: {
      user: res.data.user,
      isAdmin: res.data.user.role === 1 ? true : false,
    },
  };
};
