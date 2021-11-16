import axios from "axios";
import { apiUrl } from "../../constants";
import * as ACTIONS from "../../constants/redux";

export const fetchAllAgricultural = async () => {
  const res = await axios.get(apiUrl + "/agricultural/all/read", null);
  return res;
};

export const dispatchGetAllAgricultural = (res) => {
  return {
    type: ACTIONS.GET_ALL_AGRICULTURAL,
    payload: {
      agricultural: res.data.agricultural,
    },
  };
};
