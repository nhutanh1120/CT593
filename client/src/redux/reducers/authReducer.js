import ACTIONS from "./../../constants/redux";

const initialState = {
  user: [],
  isLogged: false,
  isUpdate: false,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case ACTIONS.GET_USER:
      return {
        ...state,
        user: action.payload.user,
        isUpdate: action.payload.isUpdate,
        isAdmin: action.payload.isAdmin,
      };
    case ACTIONS.PUSH_MESSAGE:
      const newUser = state.user;
      newUser.message = action.payload.message;
      return {
        ...state,
        user: newUser,
      };
    default:
      return state;
  }
};

export default authReducer;
