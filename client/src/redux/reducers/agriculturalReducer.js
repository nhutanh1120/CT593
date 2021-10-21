import * as Types from "./../../constants/redux";

const initialState = {
  list: [],
  success: null,
};

const agriculturalReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_AGRICULTURAL: {
      return {
        ...state,
        list: action.payload.data.agricultural,
      };
    }
    case Types.CREATE_AGRICULTURAL: {
      const newAgricultural = [...state.list];
      newAgricultural.push(action.payload.data.agricultural);
      return {
        ...state,
        success: action.payload.data.success ? Math.random() : false,
        list: newAgricultural,
      };
    }
    case Types.UPDATE_AGRICULTURAL: {
      const newAgricultural = [...state.list];
      const index = newAgricultural.findIndex(
        (item) => item._id === action.payload.data._id
      );
      console.log(action.payload);
      newAgricultural[index] = action.payload.data;
      return {
        ...state,
        success: action.payload.success ? Math.random() : false,
        list: newAgricultural,
      };
    }
    case Types.DELETE_AGRICULTURAL: {
      const newAgricultural = [...state.list];
      const index = newAgricultural.findIndex(
        (item) => item._id === action.payload.id
      );
      newAgricultural.splice(index, 1);
      return {
        ...state,
        success: action.payload.success ? Math.random() : false,
        list: newAgricultural,
      };
    }
    default:
      return state;
  }
};

export default agriculturalReducer;
