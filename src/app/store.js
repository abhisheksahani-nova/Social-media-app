import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
