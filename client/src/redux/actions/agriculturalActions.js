import axios from "axios";
import { apiUrl } from "../../constants";
import * as ACTIONS from "../../constants/redux";

export const fetchAgricultural = (token, dispatch) => {
  axios
    .get(apiUrl + "/agricultural/user/read", {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      dispatch(getAgricultural(res));
    });
};
export const getAgricultural = (data) => {
  return { type: ACTIONS.GET_AGRICULTURAL, payload: data };
};

export const createAgriculturalRequest = (token, dispatch, producer, breed) => {
  axios
    .post(
      apiUrl + "/agricultural/create",
      {
        producer,
        breed,
      },
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((res) => {
      dispatch(createAgricultural(res));
    });
};

export const createAgricultural = (data) => {
  return {
    type: ACTIONS.CREATE_AGRICULTURAL,
    payload: data,
  };
};

export const deleteAgriculturalRequest = (token, dispatch, id) => {
  axios
    .delete(apiUrl + "/agricultural/delete/" + id, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      const data = {
        id,
        success: res.data.success,
      };
      dispatch(deleteAgricultural(data));
    });
};
export const deleteAgricultural = (data) => {
  return {
    type: ACTIONS.DELETE_AGRICULTURAL,
    payload: data,
  };
};
