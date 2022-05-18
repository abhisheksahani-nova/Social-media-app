import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bookmarks: [],
};

export const bookmarkPost = createAsyncThunk(
  "bookmark/bookmarkPost",
  async (data) => {
    const { id, token } = data;

    try {
      const response = await axios.post(`/api/users/bookmark/${id}`, {} ,{
        headers: { authorization: token },
      });
      console.log(response)
      return response.data.bookmarks;
    } catch (err) {
      console.log(error);
      return err;
    }
  }
);

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(bookmarkPost.fulfilled, (state, action) => {
            state.bookmarks = action.payload
        });
  },
});

export default bookmarkSlice.reducer;
