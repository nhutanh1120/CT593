import axios from "axios";
import { apiUrl } from "../../constants";
import * as ACTIONS from "../../constants/redux";

export const getAllPost = async (dispatch) => {
  // console.log("abc");
  // await axios.get(apiUrl + "/post/all").then((res) => {
  //   dispatch({ type: ACTIONS.GET_AGRICULTURAL, payload: res });
  //   console.log("A");
  // });
  try {
    const res = await axios.get("http://localhost:4000/api/post/all");
    console.log(res);
  } catch (error) {}
};
