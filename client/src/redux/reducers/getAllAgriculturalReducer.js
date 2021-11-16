import * as ACTIONS from "./../../constants/redux";

const agriculturalAll = [];

const getAllAgriculturalReducer = (state = agriculturalAll, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_AGRICULTURAL:
      return action.payload.agricultural;
    default:
      return state;
  }
};

export default getAllAgriculturalReducer;
