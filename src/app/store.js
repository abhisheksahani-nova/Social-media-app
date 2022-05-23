import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice";
import userReducer from "../features/users/usersSlice";
import commentReducer from "../features/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    comments: commentReducer,
  },
});
