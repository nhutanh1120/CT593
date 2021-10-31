import * as Types from "./../../constants/redux";

const initialState = [];
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL_POST:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
