import ACTIONS from "./../../constants/redux";
import axios from "axios";
import { apiUrl } from "./../../constants";

export const fetchAllUsers = async (token) => {
  const res = await axios.get(apiUrl + "/profile/all/info", {
    headers: { Authorization: "Bearer " + token },
  });
  return res;
};

export const dispatchGetAllUsers = (res) => {
  return {
    type: ACTIONS.GET_ALL_USERS,
    payload: res.data.users,
  };
};
