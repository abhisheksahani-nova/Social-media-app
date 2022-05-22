import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  currentUser: {},
  bookmarks: [],
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    const response = await axios.get(`/api/users`);
    return response.data.users;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const bookmarkPost = createAsyncThunk(
  "users/bookmarkPost",
  async (data) => {
    const { _id, token } = data;

    try {
      const response = await axios.post(
        `/api/users/bookmark/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return response.data.bookmarks;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const removePostFromBookmark = createAsyncThunk(
  "users/removePostFromBookmark",
  async (data) => {
    const { _id, token } = data;

    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return response.data.bookmarks;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateBookmarks: (state, action) => {
      state.bookmarks = action.payload.updatedBookmarks;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookmarkPost.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })
      .addCase(removePostFromBookmark.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      });
  },
});

export const { updateBookmarks } = UsersSlice.actions;

export default UsersSlice.reducer;
