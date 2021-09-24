export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000/api"
    : "somedeloyurl";

export const apiClient = "http://localhost:3000";
export const LOCAL_STORAGE_TOKEN_NAME = "learnit-mern";

// export const POSTS_LOADED_SUCCESS = 'POSTS_LOADED_SUCCESS'
// export const POSTS_LOADED_FAIL = 'POSTS_LOADED_FAIL'
// export const ADD_POST = 'ADD_POST'
// export const DELETE_POST = 'DELETE_POST'
// export const UPDATE_POST = 'UPDATE_POST'
// export const FIND_POST = 'FIND_POST'
