import axios from "axios";
import { apiUrl } from "../../constants";
import * as ACTIONS from "../../constants/redux";

export const fetchAgricultural = (token, dispatch) => {
  axios
    .get(apiUrl + "/agricultural/all/read", {
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
      console.log(res.data.success);
      return res.data.success;
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
      dispatch(deleteAgricultural(id));
    });
};
export const deleteAgricultural = (id) => {
  return {
    type: ACTIONS.DELETE_AGRICULTURAL,
    payload: id,
  };
};
