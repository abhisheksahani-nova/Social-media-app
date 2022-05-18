import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  currentUser: {},
  bookmarks: [],
};

export const bookmarkPost = createAsyncThunk(
  "users/bookmarkPost",
  async (data) => {
    const { id, token } = data;

    try {
      const response = await axios.post(
        `/api/users/bookmark/${id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      console.log(response);
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookmarkPost.fulfilled, (state, action) => {
      state.bookmarks = action.payload;
    });
  },
});

export default UsersSlice.reducer;
