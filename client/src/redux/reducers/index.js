import { combineReducers } from "redux";
import agricultural from "./agriculturalReducer";
import auth from "./authReducer";
import posts from "./postReducer";
import token from "./tokenReducer";
import users from "./usersReducer";

export default combineReducers({
  auth,
  token,
  users,
  agricultural,
  posts,
});
