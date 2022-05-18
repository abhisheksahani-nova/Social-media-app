import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice";
import bookmarkReducer from "../features/bookmarks/bookmarksSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    bookmarks: bookmarkReducer,
  },
});
