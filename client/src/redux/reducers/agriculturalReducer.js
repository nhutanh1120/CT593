import * as Types from "./../../constants/redux";

const initialState = [];

const agriculturalReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_AGRICULTURAL: {
      return action.payload.data.agricultural;
    }
    case Types.CREATE_AGRICULTURAL: {
      const newAgricultural = [...state];
      newAgricultural.push(action.payload);
      console.log(action);
      return [...newAgricultural];
    }
    case Types.DELETE_AGRICULTURAL: {
      const newAgricultural = [...state];
      const index = newAgricultural.findIndex(
        (item) => item._id === action.payload
      );
      newAgricultural.splice(index, 1);
      return [...newAgricultural];
    }
    default:
      return state;
  }
};

export default agriculturalReducer;
